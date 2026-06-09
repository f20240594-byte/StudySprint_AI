# AGENTS.md

## Project Name
StudySprint AI

## Purpose
StudySprint AI helps students create personalized study plans based on:

- Exam name
- Daily study hours
- Subject-wise exam dates
- Subject priority
- Current preparation level

The system analyzes the urgency and importance of each subject and allocates study hours accordingly.

---

## Frontend Agent

### Responsibilities
- Collect user inputs
- Validate form fields
- Send requests to backend API
- Display generated study plan
- Track progress using checkboxes

### Files
- frontend/index.html
- frontend/style.css
- frontend/script.js

---

## Backend Agent

### Responsibilities
- Receive study planning requests
- Calculate subject weights
- Analyze:
  - Exam dates
  - Priority levels
  - Preparation levels
- Generate optimized study hour allocation

### Files
- backend/app.py

---

## API Endpoint

### Generate Study Plan

POST

/generate-plan

Request:

{
  "exam": "End Semester",
  "hours_per_day": 5,
  "subjects": [
    {
      "name": "DSA",
      "exam_date": "2026-06-24",
      "priority": "High",
      "preparation": "Average"
    }
  ]
}

Response:

{
  "study_plan": [
    "DSA → 2.1 hrs/day"
  ]
}

---

## Future Enhancements

- Dynamic subject creation
- Day-wise study schedule
- Progress persistence
- AI-powered schedule generation
- Analytics dashboard
- Calendar integration