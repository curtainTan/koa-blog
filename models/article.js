

const db = require('../config/db.js')
const todoListDb = db.todoList
const article = todoListDb.import('../schema/list.js')
const moment = require('moment')


const createArticle = async ( data ) => {
    await article.create({
        title: data.title,
        user_name: data.user,
        caogao: data.caogao,
        content: data.content,
        label: data.label,
        time: moment().format('YYYY-MM-DD HH-mm-ss'),
        click_num: 0,
        like_num: 0,
        comment : 0
    })
    return true
}

const updateArticle = async ( data ) => {
    await article.update(
        {
            title: data.title,
            caogao: data.caogao,
            content: data.content,
            label: data.label,
        },
        {
            where : {
                id : data.id
            },
        }
    )
}


const getArticleByUser = async (user, page, caogao) => {
    const articleByUser = await article.findAndCountAll({
        where: {
            user_name : user,
            caogao : caogao
        },
        order: [
            [ 'time' , 'DESC' ]
        ],
        attributes : [ 'id', 'title', 'user_name', 'label', 'comment', 'time', 'click_num', 'like_num' ],
        limit : 5,
        offset : 5*(page-1),
    })
    return articleByUser
}


//分页
const getArticleByLabel = async ( label, page ) => {
    var articleList = await article.findAndCountAll({
        where : {
            label : label,
            caogao : 0,
        },
        order: [
            [ 'time' , 'DESC' ]
        ],
        limit : 5,
        offset : 5*(page-1),
        attributes : [ 'id', 'title', 'user_name', 'label', 'comment', 'time', 'click_num', 'like_num' ]
    })
    console.log(articleList)
    return articleList
}
//获取一片文章的所有信息
const getArticleById = async id => {
    var result = await article.findOne({
        where : {
            id : id
        }
    })
    return result
}

//获取浏览量
const getClickNum = async id => {
    var res = await article.findOne({
        where : {
            id : id
        },
        attributes : [ 'click_num' ]
    })
    return res
}

//增加文章的浏览量
const addClickNum = async (id, num) => {
    var ss = await article.update(
        {
            click_num : num,
        },
        {
            where : {
                id : id
            }
        }
        )

    return ss
}
const deleteArt = async ( id ) => {
    var ss = await article.destroy({
        where : {
            id : id
        }
    })
    return ss === 1
}


module.exports = {
    getArticleById,
    createArticle,
    getArticleByUser,
    getArticleByLabel,
    getClickNum,
    addClickNum,
    deleteArt,
    updateArticle
}
