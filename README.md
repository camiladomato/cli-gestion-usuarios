# CLI de Gestión de Usuarios con Node.js

## Requisitos
- Node.js
- MySQL (XAMPP)

## Instalación
1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Configurar la base de datos con el archivo `database.sql`.

## Comandos disponibles
- `node index.js get`: Listar todos los usuarios almacenados.
- `node index.js add <user> <email> <pass>`: Crear un nuevo usuario.
- `node index.js update <user> <email> <pass> <id>`: Actualizar un usuario existente por su ID.
- `node index.js delete <id>`: Eliminar un usuario definitivamente por su ID.