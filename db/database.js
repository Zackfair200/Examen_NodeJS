const mysql = require("mysql")
const {database_desa,database_prod} = require("../keys")
const {promisify} = require("util");

let database;

if(process.env.NODE_ENV === "prod"){
    database=database_prod
}else{
    database=database_desa
}

const pool = mysql.createPool(database)

pool.getConnection((err,connection)=>{
    if(err){
        console.log("Error de conexión a la bbdd: ",err)
    }
    if(connection){
        console.log("Conectado con éxito!!")
    }
    return
})
pool.query = promisify(pool.query)
module.exports = pool