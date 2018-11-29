const article = require('../lib/mysql')
const moment = require('moment')



function getDate(){
    return moment().format('YYYY-MM-DD HH:mm:ss')
}


//按类别获取文章列表并分页
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
    var result = await article.getArticleByLabel( label, page )
    var count = await article.getCountByLabel( label )
    console.log('--------------------分页查询结果是-------------------')
    console.log(result)
    ctx.body = {
        success : true,
        result : result,
        count : count[0].count
    }
}
//上传文章
const uparticle = async ctx => {
    const data = ctx.request.body
    console.log('-----------------------上传一篇文章------------')
    console.log( data )
    var date = getDate()
    await article.createArticle([ data.title, data.user, data.caogao, data.content, data.label, date ])
    ctx.body = {
        success : true,
        info : '文章发表成功....'
    }
}
//修改文章
const updateArticle = async ctx => {
    const data = ctx.request.body
    console.log('-----------------------上传一篇文章------------')
    console.log( data )
    await article.updateArticle( [data.title, data.caogao, data.content, data.label,data.id] )
    ctx.body = {
        success : true,
        info : '文章发表成功....'
    }
}
//获取自己的文章
const getArticle = async ctx => {
    const user = ctx.params.user
    var page = ctx.params.page
    console.log(ctx.params)
    console.log('-------------获取个人文章----------------')
    const result = await article.getArticleByUser( user, page, ctx.params.caogao )
    console.log( result )
    var count = await article.getCountByUser( user, ctx.params.caogao )
    ctx.body = {
        success : true,
        result : result,
        count : count[0].count
    }
}
//通过id获取一片文章
const getArticleById = async ctx => {
    var id = ctx.params.id
    var result = await article.getArticleById( id )
    var ss = await article.addClickNum( id )
    //获取一片文章的评论
    let page = 1 
    var discuss = await article.getDiscuss( id, page )
    //获取评论总数
    var count = await article.getCountDis( id )
    //获取文章喜欢的总数
    var like = await article.getAllLikeArt( id )
    ctx.body = {
        success : true,
        result : result[0],
        discuss : discuss,
        count : count[0].count,
        like :like[0].count
    }
}
//通过id删除一片文章
const deleteArt = async ctx => {
    var id = ctx.params.id
    var res = await article.deleteArt( id )
    console.log('---------------------删除文章-------------')
    console.log( res )
    if( res ){
        ctx.body = {
            success : true,
            result : '删除成功.....'
        }
    }else{
        ctx.body = {
            success : false,
            result : '删除失败.....'
        }
    }
}
//发表评论
const insertDis = async ctx => {
    var data = ctx.request.body
    var date = getDate()
    var res = await article.insertDiscuss([ data.id, data.user, data.content, date ])
    
    //获取一片文章的评论
    let page = 1 
    var discuss = await article.getDiscuss( data.id, page )
    //获取评论总数
    var count = await article.getCountDis( data.id )
    if( res ){
        ctx.body = {
            success : true,
            result : discuss,
            count : count[0].count
        }
    }else{
        ctx.body = {
            success : false,
            result : '发表评论失败'
        }
    }
}
//评论分页
const disPage = async ctx => {
    var data = ctx.params
    console.log('-----------------pinglun fenye ----------------------')
    console.log( data )
    var discuss = await article.getDiscuss( data.id, data.page )
    //获取评论总数
    var count = await article.getCountDis( data.id )
    ctx.body = {
        success : true,
        result : discuss,
        count : count[0].count
    }
}
//喜欢
const like = async ctx => {
    var data = ctx.request.body
    //查询是否存在
    var exist = await article.getLikeExc( data.user, data.id )
    var res 
    if( exist.length <= 0 ){
        var date = getDate()
        res = await article.insertLike( data.user, data.id, date )
    }else{
        res = await article.deleteLike( data.user, data.id )
    }
    console.log('---------------结果数据-----res=>obj----------------' )
    console.log( res )
    let likeList = await article.getAllLike( data.user )
    var likeArray = new Set()
    for( let i = 0; i < likeList.length; i++ ){
        likeArray.add( likeList[i].essay_id )
    }
    //获取文章喜欢的总数
    var like = await article.getAllLikeArt( data.id )
    ctx.body = {
        success : true,
        result : [...likeArray],
        like :like[0].count
    }
}




module.exports = {
    uparticle,
    getArticle,
    getLabelList,
    getArticleById,
    deleteArt,
    updateArticle,
    insertDis,
    disPage,
    like
}




