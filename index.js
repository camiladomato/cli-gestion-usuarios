
const controllers = require('./controllers');

const [, , action, ...args] = process.argv;

async function main() {
    try {
        switch (action) {
            case 'get':
                const users = await controllers.getUsers();
                console.table(users); 
                break;

            case 'add':
                const [username, email, password] = args;
                const newUser = await controllers.addUser(username, email, password);
                console.log('✅ Usuario creado:', newUser);
                break;

            case 'delete':
                const [id] = args;
                await controllers.deleteUser(id);
                console.log(`🗑️ Usuario con ID ${id} eliminado.`);
                break;
            case 'update': 
                const [userUpd, emailUpd, passUpd, idUpd] = args;
                const updated = await controllers.updateUser(userUpd, emailUpd, passUpd, idUpd);
                console.log('🔄 Usuario actualizado:', updated);
                break;

            default:
                console.log('Comando no reconocido. Usa: get, add, update o delete.');
        }
    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        process.exit(); 
    }
}

main();