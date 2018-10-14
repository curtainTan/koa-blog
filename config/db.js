


const Sequelize = require('sequelize')
const Op = Sequelize.Op





//链接数据库
const todoList = new Sequelize('mysql://root:123456@localhost/todolist',{
    define: {
        timestamps: false
    },
    operatorsAliases: Op,
    operatorsAliases: false
})


// const todoList = new Sequelize('mysql://root:tan194875047@localhost/todolist',{
//     define: {
//         timestamps: false
//     }
// })

// //服务器上
// const todoList = new Sequelize(
//     'todolist',
//     'root',
//     'tan194875047',
//     {
//         'dialect': 'mysql',
//         'host' : 'localhost',
//         'define' : {
//             timestamps: false
//         },
//         operatorsAliases: Op,
//         // operatorsAliases: false
//     }
// )




module.exports = {
    todoList
}