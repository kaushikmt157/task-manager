let currentFilter = "All";
const API_URL = "http://localhost:5000/tasks";

async function fetchTasks() {
  const res = await fetch(API_URL);
  let tasks = await res.json();

  if (currentFilter !== "All") {
    tasks = tasks.filter(task => task.status === currentFilter);
  }

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    li.className = task.status === "Completed" ? "completed" : "";

    li.innerHTML = `
  <strong>${task.title}</strong><br/>
  <small>${task.description}</small><br/>

  <span class="status ${task.status === "Completed" ? "completed" : "pending"}">
    ${task.status}
  </span>

  <div class="task-actions">
    <button class="toggle-btn" onclick="toggleTask(${task.id})">
      Toggle
    </button>
    <button class="delete-btn" onclick="deleteTask(${task.id})">
      Delete
    </button>
  </div>
`;


    list.appendChild(li);
  });
}


async function addTask() {
  const titleInput = document.getElementById("title");
  const descInput = document.getElementById("description");

  const title = titleInput.value.trim();
  const description = descInput.value.trim();

  if (!title) {
    alert("Title is required");
    return;
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description })
    });

    if (!res.ok) {
      const err = await res.json();
      alert(err.message || "Failed to add task");
      return;
    }

    titleInput.value = "";
    descInput.value = "";
    fetchTasks();

  } catch (error) {
    alert("Server not reachable");
  }
}

function setFilter(filter) {
  currentFilter = filter;
  fetchTasks();
}



async function toggleTask(id) {
  await fetch(`${API_URL}/${id}/toggle`, {
    method: "PUT"
  });
  fetchTasks();
}


async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchTasks();
}

fetchTasks();
