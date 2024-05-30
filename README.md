# Gestor de Tareas
Este proyecto es un simple gestor de tareas desarrollado en JavaScript, diseñado para permitir a los usuarios, completar y eliminar tareas.
## Estructura del proyecto
El proyecto esta organizado de la siguiente manera:

- `index.html`: Contiene la estructura basica de la pagina web con el formulario para agregar tareas y la lista de tareas.
- `Style.css`: Archivo de estilos para dar formato a la pagina.
- `src/`
   - `task.js`: Codigo JavaScript que maneja la logica de la aplicacion.
   - ` main.js`: Clase JavaScript para representar una tarea.

## Uso
una vez que el proyecto este funcionando en el navegador, el usuario puede:
- Agregar nuevas tareas utilizando el formulario proporcionado.
- Marcar las tareas como completadas haciendo click sobre la tarea correspondiente.
- Eliminar tareas haciendo clic con el boton de eliminar junto a cada tarea.

# Configuracion de TypeScript
El archivo `tsconfig.js` es utilizado para configurar el compilador de Typescript. Aqui estan las principales opciones de configuración.

- `"target": "ES5"`: Indica que el codigo Typescript se compilara a Javascript compatible con ES5 Asegura una mayor compatibilidad con navegadores y entorno antiguos.
- `"module": "ES6"`: Indica que se utilizaran modulos de ES6 en el codigo TypeScript. Esto permite utilizar las caracteristicas de importacion/exportacion de ES6 en tu código.
- `""outDir": "./dist"`: Especificar el directorio de salida para los archivos compilados
- `"strict": "true"`: Habilitar todas las opciones estrictas del compilador de TypeScript para mejorar la seguridad y la calidad del codigo.
- "include": ["src/**/*.ts"] Especifica que archivos TypeScript deben ser incluidos en la compilacion.