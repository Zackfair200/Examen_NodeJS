module.exports = {
    database_desa:{
        host:"localhost",
        user:"root",
        password:"admin",
        database:"forocoches"
    },
    database_prod:{
        host:process.env.hostbase,
        user:process.env.usuario,
        password:process.env.contrasenya,
        database:process.env.nombre,
    }
}