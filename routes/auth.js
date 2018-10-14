


const router = require('koa-router')()
const auth = require('../controller/user.js')
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






router.get('/user/:id', auth.getUserInfo)
router.post('/login', auth.postUser)
router.post('/register', auth.register)
router.post('/autoLogin', auth.autoLogin)
router.post('/updata', auth.updata)
router.post('/headImg', upload.single('headImg') , auth.upHeadImg)



module.exports = router













