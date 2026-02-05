# Simple Task Management Application

## Overview

This is a basic full-stack task management application that allows users to create, view, update, and delete tasks.
The project is intentionally kept minimal to demonstrate core full-stack concepts such as REST APIs, frontend–backend communication, and basic validation.

---

## Tech Stack

* **Frontend:** HTML, CSS, Vanilla JavaScript
* **Backend:** Node.js, Express
* **Database:** In-memory JavaScript array (no persistent database)

---

## Features

* Add a task with title and description
* View all tasks
* Mark a task as completed
* Delete a task
* Basic input validation (task title required)

---

## How to Run Locally

### Backend

```bash
cd backend
npm install
npm start
```

Server will run on:

```
http://localhost:5000
```

### Frontend

Open the following file directly in the browser:

```
frontend/index.html
```

Make sure the backend server is running before using the frontend.

---

## API Endpoints

* `GET /tasks` – Fetch all tasks
* `POST /tasks` – Add a new task
* `PUT /tasks/:id` – Mark a task as completed
* `DELETE /tasks/:id` – Delete a task

---

## Assumptions & Limitations

* Tasks are stored in memory and will reset when the server restarts
* No authentication or user management
* Designed for single-user usage
* Minimal UI by design

---

## Bonus Features

* Task deletion support

---

## Notes

This project focuses on clarity, simplicity, and demonstrating fundamental full-stack development flow rather than advanced UI or production-level features.


