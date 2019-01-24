const router = require('koa-router')()
const admin = require('../controller/admin')
router.prefix('/admin')



//管理员登录
router.post('/login', admin.login)




//获取列表
router.get( '/pageList/:label/:page', admin.getLabelList)
//获取用户列表
router.get( '/userList/:page', admin.getUserList)
//删除评论
router.post( '/deleteDis', admin.deleteDiscuss )
//删除文章
router.post( '/deleteArt', admin.deleteArti )
// //修改文章
// router.post('/updateArt', admin.updateArticle)




module.exports = router