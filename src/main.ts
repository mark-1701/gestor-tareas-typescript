import { Tarea } from './task.js';

const tareaForm: HTMLFormElement = document.getElementById(
  'task-form'
) as HTMLFormElement;
const tareaInput: HTMLInputElement = document.getElementById(
  'task-input'
) as HTMLInputElement;
const tareaList: HTMLUListElement = document.getElementById(
  'task-list'
) as HTMLUListElement;

let tareas: Tarea[] = [];
function addTask(descripcion: string): void {
  const nuevaTarea: Tarea = new Tarea(descripcion);

  tareas.push(nuevaTarea);

  renderTareas();
}

function renderTareas(): void {
  tareaList.innerHTML = '';
  tareas.forEach(tarea => {
    const li = document.createElement('li');
    li.textContent = tarea.descripcion;

    const eliminarBtn: HTMLButtonElement = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.classList.add('eliminar-btn');
    eliminarBtn.addEventListener('click', () => {
      eliminarTarea(tarea);
    });

    if (tarea.completado) {
      li.classList.add('completada');
    }
    li.addEventListener('click', () => {
      tarea.tareaCompletada();
      renderTareas();
    });

    li.appendChild(eliminarBtn);
    tareaList.appendChild(li);
  });
}

function eliminarTarea(tareaEliminar: Tarea) {
  tareas = tareas.filter(tarea => tarea !== tareaEliminar);
  renderTareas();
}

tareaForm.addEventListener('submit', event => {
  event.preventDefault();
  const descripcion: string = tareaInput.value.trim();
  if (descripcion !== '') {
    addTask(descripcion);
    tareaInput.value = '';
  }
});

renderTareas();
