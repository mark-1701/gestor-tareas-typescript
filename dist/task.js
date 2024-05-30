var Tarea = /** @class */ (function () {
  function Tarea(descripcion) {
    this.descripcion = descripcion;
    this.completado = false;
  }
  Tarea.prototype.tareaCompletada = function () {
    this.completado = !this.completado;
  };
  return Tarea;
})();
export { Tarea };
