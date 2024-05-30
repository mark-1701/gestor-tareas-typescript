import { Tarea } from './task.js';
var tareaForm = document.getElementById('task-form');
var tareaInput = document.getElementById('task-input');
var tareaList = document.getElementById('task-list');
var tareas = [];
function addTask(descripcion) {
  var nuevaTarea = new Tarea(descripcion);
  tareas.push(nuevaTarea);
  renderTareas();
}
function renderTareas() {
  tareaList.innerHTML = '';
  tareas.forEach(function (tarea) {
    var li = document.createElement('li');
    li.textContent = tarea.descripcion;
    var eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.classList.add('eliminar-btn');
    eliminarBtn.addEventListener('click', function () {
      eliminarTarea(tarea);
    });
    if (tarea.completado) {
      li.classList.add('completada');
    }
    li.addEventListener('click', function () {
      tarea.tareaCompletada();
      renderTareas();
    });
    li.appendChild(eliminarBtn);
    tareaList.appendChild(li);
  });
}
function eliminarTarea(tareaEliminar) {
  tareas = tareas.filter(function (tarea) {
    return tarea !== tareaEliminar;
  });
  renderTareas();
}
tareaForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var descripcion = tareaInput.value.trim();
  if (descripcion !== '') {
    addTask(descripcion);
    tareaInput.value = '';
  }
});
renderTareas();
