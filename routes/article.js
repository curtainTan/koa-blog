const router = require('koa-router')()
const article = require('../controller/article.js')
const multer = require('koa-multer')
router.prefix('/article')




var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/test') 
    },
    filename: (req, file , cb) => {
        var fileForm = (file.originalname).split('.')
        cb(null, Date.now() + '.' + fileForm[fileForm.length - 1 ])
    }
})
var upload = multer({ storage: storage })




//上传图片
router.post('/upImage',  upload.any() , ctx => {
    console.log('有文件上传')
    ctx.body = {
        success : true,
        // imgUrl : "http://localhost:3000/test/" + ctx.req.files[0].filename
        imgUrl : "http://www.curtaintan.club/test/" + ctx.req.files[0].filename
    }
} )
//不同类型文章的分页
router.get( '/pageList/:label/:page', article.getLabelList)

//保存文章
router.post('/upArticle', article.uparticle)
//修改文章
router.post('/updateArt', article.updateArticle)
//获取所有自己的文章
router.get('/getArticleByUser/:user/:page/:caogao', article.getArticle)


//不同类型文章的分页
router.get( '/pageList/:label/:page', article.getLabelList)
//获取文章信息
router.get( '/article/:id', article.getArticleById)
//删除文章
router.get( '/deleteArt/:id', article.deleteArt)
//发表评论
router.post( '/postDis', article.insertDis )
//评论分页
router.get( '/discuss/:id/:page', article.disPage )
//喜欢
router.post( '/like', article.like )







module.exports = router
