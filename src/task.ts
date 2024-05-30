export class Tarea {
  descripcion: string;
  completado: boolean;

  constructor(descripcion: string) {
    this.descripcion = descripcion;
    this.completado = false;
  }

  tareaCompletada() {
    this.completado = !this.completado;
  }
}
