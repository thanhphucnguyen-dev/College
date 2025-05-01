let todos = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const taskName = input.value.trim();
  if(taskName === "") return;

  todos.push({name: taskName, done: false});
  input.value = "";
  renderTasks();  // cập nhật lại giao diện danh sách làm việc
}

// Chuyển đổi trạng thái công việc 
function toggleTask(index) {
  todos[index].done = !todos[index].done;
  renderTasks();
}

// Xóa công việc khỏi danh sách
function deleteTask(index) {
  todos.splice(index, 1); // xóa 1 phần tử bắt đầu từ vị trí index
  renderTasks();
}

// Hiển thị danh sách làm việc
function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  todos.forEach((task, index) => {
    const li = document.createElement("li");
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.style.marginRight = "10px";
    checkbox.onchange = () => toggleTask(index);
    
    const span = document.createElement("span");
    span.textContent = task.name + (task.done ? " ✅" : "");
    if(task.done) li.classList.add("done");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = (e) => {
      e.stopPropagation(); // không gọi tonggle khi bấm xóa
      deleteTask(index);
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    // console.log(todos);
    
  });
}

// Thêm task khi nhấn enter
document.getElementById("taskInput").addEventListener("keypress", (e) => {
  if(e.key === "Enter") addTask();
});
