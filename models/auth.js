const db = require('../config/db.js')
const moment = require('moment')



const todoListDb = db.todoList
const User = todoListDb.import('../schema/user.js')



const getUserById = async function (id) { 
  const userInfo = await User.findOne({ 
    where: {
      id: id
    }
  })

  return userInfo // 返回数据
}

const getUserByName = async function (name) {
  const userInfo = await User.findOne({
    where: {
      user_name: name
    }
  })

  return userInfo
}

const insertUser = async ( name , psw ) => {
  var date = moment().format('YYYY-MM-DD')
  var aa = await User.create({
    user_name : name,
    psw : psw,
    date: date,
    msg: 0,
    admin: 0,
    headimg: 'http://i1.hdslb.com/bfs/face/ea61f3ace77785b5820a50522d54a257a54e498b.jpg'
  })
  return aa
}

const updata = async data => {
  var name = data.name
  var result = await User.update(
    {
      signature : data.signature,
      work : data.work,
      introduce : data.introduce
    },
    {
      where: {
        user_name : name
      }
    }
  )
  return result[0] === 1
}

const upHeadImg = async (imgUrl , name ) => {
  var result = await User.update(
    {
      headimg : imgUrl
    },
    {
      where: {
        user_name : name
      }
    }
  )
  console.log(result)
  return result[0] === 1
}







module.exports = {
  getUserById, 
  getUserByName,
  insertUser,
  updata,
  upHeadImg
}
