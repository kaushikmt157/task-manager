Task Management Application

A simple full-stack web application to manage tasks.
Users can create tasks, view them, update their status, filter by status, and delete tasks.

This project was built as part of a technical assessment with a focus on clean architecture, RESTful APIs, and clarity over over-engineering.

Tech Stack
Frontend

HTML

CSS

JavaScript (Fetch API)

Backend

Node.js

Express.js

Data Storage

JSON file (tasks.json) for persistence

Features
Core Features

Add a task (title & description)

View all tasks

Toggle task status (Pending ↔ Completed)

Delete a task

Basic validation (task title required)

Bonus Features

Filter tasks by status (All / Pending / Completed)

Persistent storage using JSON file

Clean and minimal UI

API Endpoints
Method	Endpoint	Description
GET	/tasks	Fetch all tasks
POST	/tasks	Add a new task
PUT	/tasks/:id/toggle	Toggle task status
DELETE	/tasks/:id	Delete a task
Project Structure
task-manager/
├── backend/
│   ├── controllers/
│   │   └── tasksController.js
│   ├── routes/
│   │   └── tasks.js
│   ├── tasks.json
│   ├── app.js
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md

How to Run Locally
Backend
cd backend
npm install
node server.js


Server runs on:

http://localhost:5000

Frontend

Open the following file in browser:

frontend/index.html


Make sure the backend server is running.

Assumptions & Limitations

Single-user application

No authentication or authorization

JSON file used instead of a database for simplicity

Data is persisted locally but not suitable for concurrent users

Future Improvements

Replace JSON storage with a database (MongoDB / PostgreSQL)

Add user authentication

Pagination for large task lists

Deployment using Docker

Live Demo

Not deployed

Author
Built by Mohit Kaushik