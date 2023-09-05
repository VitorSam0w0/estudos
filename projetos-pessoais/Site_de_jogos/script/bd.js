const Sequelize = require('sequelize')
const sequelize = new Sequelize('meubd' , 'root' , '' , {
    host: "localhost" ,
    dialect: 'mysql'
})

sequelize.authenticate().then(function() {
    console.log("Conectado!")
}).catch(function(erro){
    console.log("Falha ao se conectar! " + erro)
})