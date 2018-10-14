


const article = require('../models/article.js')


const upImage = async ctx => {
    console.log(ctx)
}
const uparticle = async ctx => {
    const data = ctx.request.body
    await article.createArticle(data)
    ctx.body = {
        success : true,
        info : '文章发表成功....'
    }
}

const updateArticle = async ctx => {
    const data = ctx.request.body
    await article.updateArticle( data )
    ctx.body = {
        success : true,
        info : '文章发表成功....'
    }
}


const getArticle = async ctx => {
    const user = ctx.params.user
    var page = ctx.params.page
    var caogao = ctx.params.caogao
    console.log(ctx.params)
    const result = await article.getArticleByUser( user, page, caogao )
    ctx.body = {
        success : true,
        result : result
    }
}

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
    console.log('此处是请求列表的数据')
    console.log(ctx.params)
    var page = ctx.params.page
    var result = await article.getArticleByLabel( label, page )
    // console.log(result)
    ctx.body = {
        success : true,
        result : result,
    }
}


const getArticleById = async ctx => {
    var id = ctx.params.id
    var clickNum = await article.getClickNum( id )
    clickNum.click_num ++
    var addClick = await article.addClickNum( id, clickNum.click_num )
    var result = await article.getArticleById( id )
    ctx.body = {
        success : true,
        result : result
    }
}


const deleteArt = async ctx => {
    var id = ctx.params.id
    var res = await article.deleteArt( id )
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


module.exports = {
    upImage,
    uparticle,
    getArticle,
    getLabelList,
    getArticleById,
    deleteArt,
    updateArticle
}



