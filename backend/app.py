from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime

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

    total_weight = 0

    # Calculate weight for every subject
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

        total_weight += weight

        subject_weights.append({
    "name": subject.name,
    "weight": weight,
    "days_left": days_left,
    "priority": subject.priority,
    "preparation": subject.preparation
})

    plan = []

    # Allocate hours based on weight
    for item in subject_weights:

        allocated_hours = round(
            data.hours_per_day *
            (item["weight"] / total_weight),
            1
        )

        plan.append(
            f"{item['name']} → {allocated_hours} hrs/day"
        )

    return {
        "exam": data.exam,
        "study_plan": plan
    }
