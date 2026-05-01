const pool = require('./config');

const controllers = {
    // Función interna para validar 
    validateUser(username, email, password) {
        if (!username || !email || !password) throw new Error('Todos los campos son requeridos');
        
        // Validación de email 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) || !email.endsWith('@gmail.com')) {
            throw new Error('Formato de email inválido (debe ser @gmail.com)');
        }

        // Validación de longitud de password
        if (password.length < 6) {
            throw new Error('La contraseña debe tener al menos 6 caracteres');
        }
    },

    async getUsers() {
        try {
            const [rows] = await pool.query('SELECT * FROM users');
            return rows;
        } catch (error) {
            throw new Error('Error en la base de datos: ' + error.message);
        }
    },

    async addUser(username, email, password) {
        this.validateUser(username, email, password); 
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

    // Actualizar usuario
    async updateUser(username, email, password, id) {
        if (!id) throw new Error('Se requiere el ID para actualizar');
        this.validateUser(username, email, password);

        try {
            const [result] = await pool.query(
                'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?',
                [username, email, password, id]
            );
            
            // Informar claramente si el usuario no existe
            if (result.affectedRows === 0) {
                throw new Error('No se encontró un usuario con el ID proporcionado');
            }
            return { id, username, email };
        } catch (error) {
            throw error;
        }
    },

    async deleteUser(id) {
        if (!id) throw new Error('Se requiere el ID para eliminar');
        try {
            const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
            if (result.affectedRows === 0) throw new Error('Usuario no encontrado');
            return true;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = controllers;