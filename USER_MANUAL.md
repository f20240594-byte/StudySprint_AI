# StudySprint AI - User Manual

## 1. Introduction

StudySprint AI is an AI-powered personalized study planner designed to help students organize their preparation efficiently. The application generates a customized day-wise study schedule based on exam details, subject priorities, preparation levels, and available study hours.

The platform also provides dedicated subject workspaces where users can store notes, learning resources, PDF references, YouTube links, and book recommendations.

---

## 2. Features

### Personalized Study Plan

* Generates a customized study schedule.
* Distributes study hours intelligently.
* Considers:

  * Exam dates
  * Subject priorities
  * Current preparation level
  * Available study hours per day

### Progress Tracking

* Mark completed study tasks.
* View overall completion percentage.
* Progress updates dynamically.

### Subject Workspace

Each subject receives its own workspace where users can:

* Save personal notes
* Store YouTube learning links
* Save PDF references
* Maintain book recommendations

### Auto Save

Workspace data is automatically saved in the browser.

### Responsive Design

Works on:

* Desktop
* Laptop
* Tablet
* Mobile devices

---

## 3. System Requirements

### Browser Support

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

### Internet Requirement

Required for:

* AI study plan generation
* Backend API communication

---

## 4. Getting Started

### Step 1: Open StudySprint AI

Launch the application using:

* Local development server
  or
* Deployed Vercel URL

---

### Step 2: Enter Exam Information

Fill in:

#### Exam Name

Example:

```
Semester Exams
```

#### Study Hours Per Day

Example:

```
6
```

---

### Step 3: Enter Subject Details

For each subject provide:

#### Subject Name

Example:

```
DSA
```

#### Exam Date

Select the examination date.

#### Priority

Options:

* High
* Medium
* Low

#### Preparation Level

Options:

* Poor
* Average
* Good

---

### Step 4: Generate Study Plan

Click:

```
Generate Study Plan
```

The system will:

1. Send data to the AI backend.
2. Analyze priorities and deadlines.
3. Generate a personalized schedule.
4. Display a day-wise study plan.

---

## 5. Understanding the Study Plan

Each day contains:

* Date
* Assigned subject
* Recommended study duration

Example:

```
12-06-2026
DSA - 2.0 hrs
OOPS - 1.5 hrs
DBMS - 1.0 hrs
```

---

## 6. Tracking Progress

### Marking Tasks Complete

Click the checkbox beside a study task.

The application will:

* Mark task as completed
* Update progress percentage
* Save progress automatically

Example:

```
Progress: 65% Completed
```

---

## 7. Using Subject Workspaces

Click:

```
DSA Workspace
```

or

```
DBMS Workspace
```

to open a dedicated subject workspace.

### Workspace Components

#### Notes

Store:

* Important concepts
* Revision points
* Personal summaries

#### YouTube Link

Save useful learning videos.

Example:

```
https://youtube.com/...
```

#### PDF Link

Store PDF references.

Example:

```
https://drive.google.com/...
```

#### Book Name

Save textbook references.

Example:

```
Introduction to Algorithms
```

---

## 8. Saving Workspace Data

Click:

```
Save Workspace
```

The data is stored locally in the browser and can be reopened later.

---

## 9. Clearing Workspace Data

Click:

```
Clear Workspace
```

to remove all saved information for that subject.

Warning:
This action cannot be undone.

---

## 10. Troubleshooting

### Study Plan Not Generating

Check:

* Internet connection
* Backend API status
* Correct Vercel deployment

---

### 404 Error

Possible causes:

* Backend route not deployed
* Incorrect Vercel configuration
* API endpoint mismatch

---

### Progress Not Updating

Refresh the page and ensure JavaScript is enabled.

---

## 11. Best Practices

* Set realistic daily study hours.
* Update progress regularly.
* Use workspaces to store revision materials.
* Review the generated plan daily.
* Prioritize subjects with upcoming exams.

---

## 12. Future Enhancements

Planned improvements:

* AI-powered study recommendations
* PDF upload and analysis
* Smart revision reminders
* Calendar integration
* Study streak tracking
* Performance analytics dashboard
* Cloud synchronization
* Multi-user support

---

## 13. Conclusion

StudySprint AI helps students prepare efficiently through personalized planning, progress tracking, and organized study resources. By combining AI-generated schedules with dedicated subject workspaces, students can improve consistency, productivity, and exam readiness.
