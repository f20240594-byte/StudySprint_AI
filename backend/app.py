from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime, timedelta
from backend.adk_agent import study_agent
from typing import Any
from time import sleep

try:
    from ollama import chat
except ImportError:
    chat = None  # type: ignore
import os
import google.generativeai as genai

app = FastAPI()

api_key = os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY")

print("API KEY FOUND:", bool(api_key))
print("API KEY PREFIX:", api_key[:6] if api_key else "NONE")

genai.configure(api_key=api_key)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -----------------------------
# Models
# -----------------------------


class Subject(BaseModel):
    name: str
    exam_date: str
    priority: str
    preparation: str


class StudyRequest(BaseModel):
    exam: str
    subjects: list[Subject]
    hours_per_day: float
    language: str = "en"
    provider: str = "ollama"


# -----------------------------
# Home Route
# -----------------------------


@app.get("/")
def home():
    return {"message": "StudySprint AI Running"}


@app.get("/agent")
def agent_demo():
    return {
        "agent_name": study_agent.name,
        "status": "Google ADK Integrated Successfully",
    }


@app.get("/debug")
def debug():
    key = os.getenv("GOOGLE_API_KEY")

    return {
        "found": bool(key),
        "prefix": key[:10] if key else None,
    }


# -----------------------------
# Generate Plan
# -----------------------------

language_names = {
    "en": "English",
    "hi": "Hindi",
    "te": "Telugu",
    "od": "Odia",
    "bn": "Bengali",
    "mr": "Marathi",
    "gu": "Gujarati",
    "pa": "Punjabi",
}


@app.post("/generate-plan")
def generate_plan(data: StudyRequest):
    # Spinner demo delay
    sleep(3)

    priority_map = {"High": 3, "Medium": 2, "Low": 1}

    preparation_map = {"Poor": 3, "Average": 2, "Good": 1}

    today = datetime.today()

    subject_weights: list[dict[str, Any]] = []

    # -----------------------------
    # Calculate subject weights
    # -----------------------------
    for subject in data.subjects:
        exam_date = datetime.strptime(subject.exam_date, "%Y-%m-%d")

        days_left = max((exam_date - today).days, 1)

        priority_score = priority_map.get(subject.priority, 1)

        preparation_score = preparation_map.get(subject.preparation, 1)

        weight: float = priority_score + preparation_score + (10 / days_left)

        subject_weights.append(
            {
                "name": subject.name,
                "weight": weight,
                "exam_date": subject.exam_date,
                "priority": subject.priority,
                "preparation": subject.preparation,
            }
        )

    # -----------------------------
    # Find last exam date
    # -----------------------------
    all_exam_dates = []

    for subject in data.subjects:
        exam_date = datetime.strptime(subject.exam_date, "%Y-%m-%d")

        all_exam_dates.append(exam_date)

    last_exam_date = max(all_exam_dates)

    # -----------------------------
    # Generate Day-wise Schedule
    # -----------------------------
    daily_schedule = []

    current_day = today

    while current_day <= last_exam_date:
        active_subjects = []
        active_total_weight = 0.0

        # Keep only subjects whose exams
        # have not yet happened
        for item in subject_weights:
            subject_exam_date = datetime.strptime(
                str(item["exam_date"]),
                "%Y-%m-%d",
            )

            if current_day <= subject_exam_date:
                active_subjects.append(item)
                weight = float(item["weight"])
                active_total_weight += weight

        if active_total_weight == 0.0:
            break

        day_plan = []

        for item in active_subjects:
            weight = float(item["weight"])

            allocated_hours = round(
                data.hours_per_day * (weight / active_total_weight),
                1,
            )

            day_plan.append(f"{item['name']} - {allocated_hours} hrs")

        daily_schedule.append(
            {"date": current_day.strftime("%d-%m-%Y"), "tasks": day_plan}
        )

        current_day += timedelta(days=1)
    # -----------------------------
    # Generate AI Tips
    # -----------------------------

    subject_names = ", ".join([s.name for s in data.subjects])

    prompt = f"""
    You are an expert study coach.

    IMPORTANT:
    Write the ENTIRE response in
    {language_names.get(data.language, "English")}.

    Do NOT use English unless English is selected.

    Exam:
    {data.exam}

    Subjects:
    {subject_names}

    Study Hours Per Day:
    {data.hours_per_day}

    Generate:

    1. Weakness analysis
    2. Daily study strategy
    3. Revision strategy
    4. Memory techniques
    5. Exam day advice

    Keep it practical and personalized.
    """
    try:
        if data.provider == "ollama":
            if chat is None:
                ai_tips = "Ollama is unavailable on deployment."
            else:
                ollama_response = chat(
                    model="mistral",
                    messages=[
                        {
                            "role": "user",
                            "content": prompt,
                        }
                    ],
                )
                ai_tips = ollama_response["message"]["content"]

        elif data.provider == "gemini":
            model = genai.GenerativeModel("gemini-2.5-flash")
            gemini_response = model.generate_content(prompt)
            ai_tips = gemini_response.text

        else:
            ai_tips = "Invalid AI provider selected."

    except Exception as e:
        print("AI ERROR:", e)
        ai_tips = f"AI Error: {str(e)}"

    return {
        "exam": data.exam,
        "study_plan": daily_schedule,
        "ai_tips": ai_tips,
    }
