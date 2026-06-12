from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime, timedelta
from time import sleep
from ollama import chat

app = FastAPI()

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

# -----------------------------
# Home Route
# -----------------------------

@app.get("/")
def home():
    return {
        "message": "StudySprint AI Running"
    }


# -----------------------------
# Generate Plan
# -----------------------------

@app.post("/generate-plan")
def generate_plan(data: StudyRequest):

    # Spinner demo delay
    sleep(3)

    priority_map = {
        "High": 3,
        "Medium": 2,
        "Low": 1
    }

    preparation_map = {
        "Poor": 3,
        "Average": 2,
        "Good": 1
    }

    today = datetime.today()

    subject_weights = []

    # -----------------------------
    # Calculate subject weights
    # -----------------------------
    for subject in data.subjects:

        exam_date = datetime.strptime(
            subject.exam_date,
            "%Y-%m-%d"
        )

        days_left = max(
            (exam_date - today).days,
            1
        )

        priority_score = priority_map.get(
            subject.priority,
            1
        )

        preparation_score = preparation_map.get(
            subject.preparation,
            1
        )

        weight = (
            priority_score +
            preparation_score +
            (10 / days_left)
        )

        subject_weights.append({
            "name": subject.name,
            "weight": weight,
            "exam_date": subject.exam_date,
            "priority": subject.priority,
            "preparation": subject.preparation
        })

    # -----------------------------
    # Find last exam date
    # -----------------------------
    all_exam_dates = []

    for subject in data.subjects:

        exam_date = datetime.strptime(
            subject.exam_date,
            "%Y-%m-%d"
        )

        all_exam_dates.append(exam_date)

    last_exam_date = max(all_exam_dates)

    # -----------------------------
    # Generate Day-wise Schedule
    # -----------------------------
    daily_schedule = []

    current_day = today

    while current_day <= last_exam_date:

        active_subjects = []
        active_total_weight = 0

        # Keep only subjects whose exams
        # have not yet happened
        for item in subject_weights:

            subject_exam_date = datetime.strptime(
                item["exam_date"],
                "%Y-%m-%d"
            )

            if current_day <= subject_exam_date:

                active_subjects.append(item)

                active_total_weight += item["weight"]

        if active_total_weight == 0:
            break

        day_plan = []

        for item in active_subjects:

            allocated_hours = round(
                data.hours_per_day *
                (item["weight"] / active_total_weight),
                1
            )

            day_plan.append(
                f"{item['name']} - {allocated_hours} hrs"
            )

        daily_schedule.append({
            "date": current_day.strftime("%d-%m-%Y"),
            "tasks": day_plan
        })

        current_day += timedelta(days=1)

   # -----------------------------
    # Generate AI Tips using Ollama
    # -----------------------------

    subject_names = ", ".join(
        [s.name for s in data.subjects]
    )

    prompt = f"""
Generate 5 personalized study tips.

Exam:
{data.exam}

Subjects:
{subject_names}

Study hours per day:
{data.hours_per_day}

Keep each tip short.
"""

    print("Reached AI section")

    try:

        print("Calling Ollama...")

        response = chat(
            model="mistral",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        print("Ollama returned")

        ai_tips = response["message"]["content"]

    except Exception as e:

        print("ERROR:", e)

        ai_tips = "AI tips unavailable."

    # -----------------------------
    # Return Response
    # -----------------------------

    return {
        "exam": data.exam,
        "study_plan": daily_schedule,
        "ai_tips": ai_tips
    }