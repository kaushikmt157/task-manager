const API_URL = "http://localhost:5000/tasks";

async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    li.className = task.status === "Completed" ? "completed" : "";

    li.innerHTML = `
      <strong>${task.title}</strong><br/>
      ${task.description}<br/>
      Status: ${task.status}<br/>
      <button onclick="completeTask(${task.id})">Complete</button>
      <button onclick="deleteTask(${task.id})">Delete</button>
    `;

    list.appendChild(li);
  });
}

async function addTask() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  if (!title.trim()) {
    alert("Title is required");
    return;
  }

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description })
  });

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";

  fetchTasks();
}

async function completeTask(id) {
  await fetch(`${API_URL}/${id}`, { method: "PUT" });
  fetchTasks();
}

async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchTasks();
}

fetchTasks();
