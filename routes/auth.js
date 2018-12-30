const router = require('koa-router')()
const auth = require('../controller/auth')
const multer = require('koa-multer')
router.prefix('/auth')


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/headImg') 
    },
    filename: (req, file , cb) => {
        var fileForm = (file.originalname).split('.')
        headImgUrl = Date.now()
        cb(null, headImgUrl + '.' + fileForm[fileForm.length - 1 ])
    }
})
var upload = multer({ storage: storage })




router.post('/login', auth.postUser)
router.post('/register', auth.register)
router.post('/autoLogin', auth.autoLogin)
router.post('/updata', auth.updata)
router.post('/headImg', upload.single('headImg') , auth.upHeadImg)
router.post('/setBg', upload.single('bg') , auth.setBg)
router.post('/getAllLike', auth.getAllLike)
router.post('/setDefBg', auth.setDefaultBg)
router.post('/getOne', auth.getOne)
//获取七牛
router.get('/QnSetBg', auth.QnSetBg)
router.get('/QnHeadImg', auth.QnHeadImg)
//设置七牛图片
router.post('/QnAfSetBg', auth.AfsetBg)
router.post('/QnAfHeadImg', auth.setHeadImg)

module.exports = router
