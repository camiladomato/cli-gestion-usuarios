# CLI de Gestión de Usuarios con Node.js

## Requisitos
- Node.js
- MySQL (XAMPP)

## Instalación
1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Configurar la base de datos con el archivo `database.sql`.

## Comandos disponibles
- `node index.js get`: Listar usuarios[cite: 1].
- `node index.js add <user> <email> <pass>`: Crear usuario[cite: 1].
- `node index.js update <user> <email> <pass> <id>`: Actualizar usuario[cite: 1].
- `node index.js delete <id>`: Eliminar usuario[cite: 1].