from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "StudySprint AI Running"
    }
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class StudyRequest(BaseModel):
    exam: str
    subjects: list[str]
    hours_per_day: int

@app.get("/")
def home():
    return {
        "message": "StudySprint AI Running"
    }

@app.post("/generate-plan")
def generate_plan(data: StudyRequest):

    subject_count = len(data.subjects)

    hours_each = round(
        data.hours_per_day / subject_count,
        1
    )

    plan = []

    for subject in data.subjects:
        plan.append(
            f"{subject} - {hours_each} hrs"
        )

    return {
        "exam": data.exam,
        "study_plan": plan
    }
@app.post("/generate-plan")
def generate_plan(data: StudyRequest):

    plan = []

    total_hours = data.hours_per_day

    weight = total_hours

    for index, subject in enumerate(data.subjects):

        allocated_hours = round(
            weight / (index + 2),
            1
        )

        if allocated_hours < 0.5:
            allocated_hours = 0.5

        plan.append(
            f"{subject.strip()} → {allocated_hours} hrs"
        )

    return {
        "exam": data.exam,
        "study_plan": plan
    }
