// Elementos del DOM
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Array para almacenar las tareas
let tasks = [];

// Cargar tareas del localStorage al iniciar
loadTasks();

// Event listeners
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Función para agregar tarea
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Por favor, escribe una tarea');
        return;
    }
    
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };
    
    tasks.push(task);
    saveTasks();
    renderTasks();
    taskInput.value = '';
}

// Función para eliminar tarea
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

// Función para marcar como completada
function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
    }
}

// Función para renderizar tareas
function renderTasks() {
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
            <span class="task-text">${task.text}</span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Eliminar</button>
        `;
        
        taskList.appendChild(li);
    });
}

// Guardar en localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Cargar desde localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        renderTasks();
    }
}
