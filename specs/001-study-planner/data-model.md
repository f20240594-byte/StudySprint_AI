# Data Model

## Subject

name: string

exam_date: date

priority:

* High
* Medium
* Low

preparation:

* Poor
* Average
* Good

## StudyRequest

exam: string

hours_per_day: float

subjects: Subject[]

## ScheduleDay

date: string

tasks: string[]
