# AGENTS.md

# StudySprint AI - Agent Architecture

## Overview

StudySprint AI is an intelligent study planning system that generates personalized study schedules based on exam dates, subject priorities, and preparation levels.

The application consists of several logical agents that work together to deliver the user experience.

---

# 1. Input Agent

## Responsibility

Collects and validates user input from the frontend.

## Inputs

* Exam Name
* Hours Available Per Day
* Subject Name(s)
* Exam Date(s)
* Priority Level(s)
* Preparation Level(s)

## Validation

* Required fields must not be empty
* At least one subject must be provided
* Hours per day must be greater than zero
* Valid exam dates must be selected

---

# 2. Planning Agent

## Responsibility

Generates a personalized study plan.

## Inputs

* Subject priorities
* Preparation levels
* Exam deadlines
* Daily study hours

## Tasks

* Calculate subject weights
* Allocate study hours proportionally
* Prioritize urgent subjects
* Generate day-wise schedules

## Output

Daily study plan containing:

* Date
* Subject
* Allocated study hours

---

# 3. Progress Tracking Agent

## Responsibility

Tracks user completion status.

## Features

* Task completion tracking
* Progress percentage calculation
* Progress bar updates
* Local storage persistence

## Storage

Browser Local Storage

---

# 4. Workspace Agent

## Responsibility

Manages subject-specific workspaces.

## Features

* Notes management
* YouTube resource links
* PDF resource links
* Book references
* Auto-save functionality

## Storage

Local Storage

---

# 5. Theme Management Agent

## Responsibility

Controls UI themes.

## Features

* Dark Mode
* Light Mode
* Theme persistence
* Automatic preference loading

---

# 6. API Agent

## Responsibility

Handles communication between frontend and backend.

## Endpoint

POST /generate-plan

## Request

{
"exam": "Semester Exams",
"subjects": [],
"hours_per_day": 5
}

## Response

{
"exam": "Semester Exams",
"study_plan": []
}

---

# 7. Backend Agent

## Technology

FastAPI

## Responsibilities

* Request processing
* Study plan generation
* Weight calculation
* Schedule generation
* JSON response handling

---

# 8. Deployment Agent

## Platform

Vercel

## Responsibilities

* Static frontend hosting
* FastAPI backend deployment
* Route management
* Production builds

---

# Technology Stack

Frontend

* HTML5
* CSS3
* JavaScript

Backend

* FastAPI
* Python

Deployment

* Vercel

Storage

* Browser Local Storage

Version Control

* Git
* GitHub

---

# Future Agents

Potential future enhancements:

* AI Recommendation Agent
* Pomodoro Agent
* Calendar Integration Agent
* Analytics Agent
* Notification Agent
* Authentication Agent

---

# Project Maintainer

Rohit Fogla

StudySprint AI v1.0
