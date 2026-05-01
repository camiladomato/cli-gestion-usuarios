// controllers.js
const pool = require('./config');
const { v4: uuidv4 } = require('uuid'); // Opcional: npm install uuid para ids únicos

const controllers = {
    // 1. Obtener usuarios
    async getUsers() {
        try {
            const [rows] = await pool.query('SELECT * FROM users');
            return rows;
        } catch (error) {
            throw new Error('Error al obtener usuarios: ' + error.message);
        }
    },

    // 2. Crear usuario
    async addUser(username, email, password) {
        // Validaciones obligatorias
        if (!username || !email || !password) throw new Error('Todos los campos son requeridos');
        if (!email.endsWith('@gmail.com')) throw new Error('El email debe ser @gmail.com');

        const id = Date.now().toString(); 
        
        try {
            await pool.query(
                'INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)',
                [id, username, email, password]
            );
            return { id, username, email };
        } catch (error) {
            throw error;
        }
    },

    // 3. Eliminar usuario
    async deleteUser(id) {
        try {
            const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
            if (result.affectedRows === 0) throw new Error('Usuario no encontrado');
            return true;
        } catch (error) {
            throw error;
        }
    }
    // 4. 'update' 
};

module.exports = controllers;