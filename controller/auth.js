const user = require('../lib/mysql')
const jwt = require('jsonwebtoken')
const moment = require('moment')
const qn = require('./qn')


const secret = "tan"    //秘钥




//注册

const register = async ctx => {
    const data = ctx.request.body
    console.log('注册的数据')
    console.log(data)
    const userName = await user.findUser(data.user)
    console.log( userName )
    if(userName.length === 0){
        var date = moment().format('YYYY-MM-DD HH:mm:ss')
        var headImg = "https://user-gold-cdn.xitu.io/2018/10/30/166c4098ac89c64a?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
        var res = await user.insertUser([data.user, data.psw, headImg, date])
        console.log(res)
        if(res){
            ctx.status = 200
            ctx.body = {
                success : true,
                info : "创建成功"
            }
        }else{
            ctx.body = {
                success : false,
                info : "创建失败"
            }
        }
    }else{
        console.log("已有此用户")
        ctx.body = {
            success : false,
            info: "已有此用户"
        }
    }
}

//登录
const postUser = async ctx => {
    const data = ctx.request.body
    var userInfo = await user.findUser(data.user)
    console.log('------------------登录用户信息-------------------')
    console.log( userInfo )
    console.log( userInfo.length )
    if(userInfo.length !== 0){
        // if(await bcrypt.compare(data.psd, userInfo.psw)){
        if(  userInfo[0].psw === data.psw  ){
            ctx.status = 200
            const userToken = {
                name : userInfo[0].user_name,
                id : userInfo[0].id
            }
            const token = jwt.sign({
                data: userToken,
                exp: Math.floor(Date.now() / 1000) + (60*60*24)
            }, secret)
            var likeList = await user.getAllLike( data.user )
            var likeArray = new Set()
            for( let i = 0; i < likeList.length; i++ ){
                likeArray.add( likeList[i].essay_id )
            }
            ctx.body = {
                success: true,
                token: token,
                user_name : userInfo[0].user_name,
                admin: userInfo[0].admin,
                sign: userInfo[0].signature,
                msg: userInfo[0].msg,
                headImg: userInfo[0].headimg,
                introduce: userInfo[0].introduce,
                work: userInfo[0].work,
                likeList : [...likeArray],
                bgImg : userInfo[0].bg
            }
        }else{
            ctx.body = {
                success : false,
                info: '密码错误！！请重试'
            }
        }
    }else{
        ctx.body = {
            success : false,
            info: '用户不存在！！'
        }
    }
}

// var data1 = jwt.decode(token)
// console.log(data1)                     两种token验证
//自动登录
const autoLogin = async ctx => {
    console.log('--------------------自动登录---------------------')
    const token = ctx.request.header.authorization.match(/Bearer (\S*)/)[1]
    await jwt.verify(token, secret, async (err, decoded)=>{
        if(err){
            console.log(err)
            ctx.status = 403
        }else{
            var data = decoded.data
            const userInfo = await user.findUser(data.name)
            console.log( userInfo )
            if(userInfo.length !== 0){
                const userToken = {
                    name : userInfo[0].user_name,
                    id : userInfo[0].id
                }
                const token = jwt.sign({
                    data: userToken,
                    exp: Math.floor(Date.now() / 1000) + (60*60*24)
                }, secret)
                var likeList = await user.getAllLike( data.name )
                var likeArray = new Set()
                for( let i = 0; i < likeList.length; i++ ){
                    likeArray.add( likeList[i].essay_id )
                }
                ctx.body = {
                    success: true,
                    token: token,
                    user_name : userInfo[0].user_name,
                    admin: userInfo[0].admin,
                    sign: userInfo[0].signature,
                    msg: userInfo[0].msg,
                    headImg: userInfo[0].headimg,
                    introduce: userInfo[0].introduce,
                    work: userInfo[0].work,
                    likeList : [...likeArray],
                    bgImg : userInfo[0].bg
                }
            }else{
                ctx.body = {
                    success : false,
                    info: '用户不存在！！'
                }
            }
        }
    })
}
//修改信息
const updata = async ctx => {
    const data = ctx.request.body
    const success = await user.updateUse( [data.introduce, data.work, data.name] )
    ctx.body = {
        success
    }
}
//更换头像
const upHeadImg = async ctx => {
    // var headImg = "http://localhost:3000/headImg/" + ctx.req.file.filename
    var headImg = "http://www.curtaintan.club/headImg/" + ctx.req.file.filename
    var name = ctx.req.body.user
    const success = await user.headImg( [headImg, name] )
    console.log(success)
    ctx.body = {
        success : success,
        headImg : headImg
    }
}
//获取token
const QnHeadImg = async ctx => {
    let key = 'headImg/' + Date.now() + '.jpg'
    var token = await qn( key )
    ctx.body = {
        token : token
    }
}
//设置头像
const setHeadImg = async ctx =>{
    console.log( ctx.request.body )
    var name = ctx.request.body.user
    var headImg = ctx.request.body.headImg
    const success = await user.headImg( [headImg, name] )
    console.log(success)
    ctx.body = {
        success : success,
        headImg : headImg
    }
}
//设置背景图片
const setBg = async ctx => {
    // var bgimg = "http://localhost:3000/headImg/" + ctx.req.file.filename
    let bgimg = "http://www.curtaintan.club/headImg/" + ctx.req.file.filename
    var username = ctx.request.body.user
    let success = await user.setBg( username, bgimg )
    ctx.body = {
        success : success,
        bgImg : bgimg
    }
}
const QnSetBg = async ctx => {
    let key = Date.now() + '.jpg'
    var token = await qn( key )
    ctx.body = {
        token : token
    }
}
const AfsetBg = async ctx => {
    var username = ctx.request.body.user
    var bgimg = ctx.request.body.bgimg
    let success = await user.setBg( username, bgimg )
    ctx.body = {
        success : success,
        bgImg : bgimg
    }
}

//设置默认背景图片
const setDefaultBg = async ctx => {
    const data = ctx.request.body
    if( data.num === 1 ){
        var bgimg = "http://curtaintan.club/bg/1546081994339.jpg"
        let success = await user.setBg( data.user, bgimg )
        ctx.body = {
            success : success,
            bgImg : bgimg
        }
    }else{
        if( data.num === 2 ){
            var bgimg = "http://curtaintan.club/4.jpg"
            let success = await user.setBg( data.user, bgimg )
            ctx.body = {
                success : success,
                bgImg : bgimg
            }
        }else{
            ctx.body = {
                msg : "错误..........."
            }
        }
    }
}

//获取所有的喜欢
const getAllLike = async ctx => {
    let data = ctx.request.body
    console.log('-----------------------获取所有的喜欢的信息----------------------------')
    console.log( data )
    let result = await user.selectLikeByUser( data.user, data.page )
    let likeCount = await user.getAllLike( data.user )
    var likeArray = new Set()
    for( let i = 0; i < likeCount.length; i++ ){
        likeArray.add( likeCount[i].essay_id )
    }
    ctx.body = {
        success : true,
        result : result,
        likeCount : [...likeArray]
    }
}
//获取普通用户的基本信息
const getOne = async ctx => {
    let data = ctx.request.body
    const userInfo = await user.findUser(data.user)
    if(userInfo[0] !== null){
        ctx.body = {
            success: true,
            user_name : userInfo[0].user_name,
            sign: userInfo[0].signature,
            headImg: userInfo[0].headimg,
            introduce: userInfo[0].introduce
        }
    }else{
        ctx.body = {
            msg : "错误..........."
        }
    }
}






module.exports = {
    register,
    postUser,
    autoLogin,
    updata,
    upHeadImg,
    setBg,
    getAllLike,
    setDefaultBg,
    getOne,
    QnSetBg,
    setHeadImg,
    QnHeadImg,
    AfsetBg
}




















