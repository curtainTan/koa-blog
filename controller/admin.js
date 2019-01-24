const db = require('../lib/mysql')



const getLabelList = async ctx => {
    if(ctx.params.label === 'discuss'){
        var label = '讨论区'
    }
    if( ctx.params.label === 'news' ){
        var label = '新闻'
    }
    if( ctx.params.label === 'js' ){
        var label = 'js'
    }
    if( ctx.params.label === 'css' ){
        var label = 'css小点'
    }
    var page = ctx.params.page
    var result = await db.getArticleByLabeltoAdmin( label, page )
    var count = await db.getCountByLabel( label )
    ctx.body = {
        success : true,
        result : result,
        count : count[0].count,
    }
}
//登录
const login = async ctx => {
    var data = ctx.request.data
    console.log("登录的数据")
    console.log( data )
}


//获取用户列表
const getUserList = async ctx => {
    var page = ctx.params.page
    var list = await bd.getUserList( page )
    var count = await db.getCountUser()
    ctx.body = {
        success : true,
        list : list,
        count : count[0].count
    }
}
//删除评论
const deleteDiscuss = async ctx => {
    var id = ctx.request.id
    var success = await db.deleteDiscuss( id )
    ctx.body = {
        success,
    }
}
//删除一篇文章
const deleteArti = async ctx => {
    var id = ctx.request.id
    var res = await db.deleteArt( id )
    ctx.body = {
        success : res
    }
}





module.exports = {
    getLabelList,
    login,
    getUserList,
    deleteDiscuss,
    deleteArti
}