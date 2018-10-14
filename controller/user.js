
const user = require('../models/auth.js')
const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')        //密码加密功能保留

const secret = "tan"    //秘钥



function setToken( userInfo ){
    const userToken = {
        name : userInfo.user_name,
        id : userInfo.id
    }
    const token = jwt.sign({
        data: userToken,
        exp: Math.floor(Date.now() / 1000) + (1)
    }, secret)
}

//测试
const getUserInfo = async ctx => {
    let id = ctx.params.id
    const result = await user.getUserById(id)
    ctx.body = result
}


//注册

const register = async ctx => {
    const data = ctx.request.body
    console.log('注册的数据')
    console.log(data)
    const userName = await user.getUserByName(data.user)
    if(userName === null){
        var res = await user.insertUser(data.user, data.psw)
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
    console.log('登录的数据')
    console.log(data)
    const userInfo = await user.getUserByName(data.user)
    console.log(userInfo)
    if(userInfo !== null){
        // if(await bcrypt.compare(data.psd, userInfo.psw)){
        if(  userInfo.psw === data.psw  ){
            ctx.status = 200
            const userToken = {
                name : userInfo.user_name,
                id : userInfo.id
            }
            const token = jwt.sign({
                data: userToken,
                exp: Math.floor(Date.now() / 1000) + (60*60)
            }, secret)
            ctx.body = {
                success: true,
                token: token,
                user_name : userInfo.user_name,
                admin: userInfo.admin,
                sign: userInfo.signature,
                msg: userInfo.msg,
                headImg: userInfo.headimg,
                introduce: userInfo.introduce,
                work: userInfo.work,
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
    const token = ctx.request.header.authorization.match(/Bearer (\S*)/)[1]
    await jwt.verify(token, secret, async (err, decoded)=>{
        if(err){
            console.log(err)
            ctx.status = 403
        }else{
            var data = decoded.data
            const userInfo = await user.getUserByName(data.name)
            if(userInfo !== null){
                const userToken = {
                    name : userInfo.user_name,
                    id : userInfo.id
                }
                const token = jwt.sign({
                    data: userToken,
                    exp: Math.floor(Date.now() / 1000) + (60*60)
                }, secret)
                ctx.body = {
                    success: true,
                    token: token,
                    user_name : userInfo.user_name,
                    admin: userInfo.admin,
                    sign: userInfo.signature,
                    msg: userInfo.msg,
                    headImg: userInfo.headimg,
                    introduce: userInfo.introduce,
                    work: userInfo.work,
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
    const success = await user.updata(data)
    ctx.body = {
        success
    }
}

//更换头像

const upHeadImg = async ctx => {
    // var headImg = "http://localhost:3000/headImg/" + ctx.req.file.filename
    var headImg = "http://www.curtaintan.club/headImg/" + ctx.req.file.filename
    var name = ctx.req.body.user
    console.log(name)
    const success = await user.upHeadImg( headImg, name )
    console.log(success)
    ctx.body = {
        success : success,
        headImg : headImg
    }
}







module.exports = {
    getUserInfo,
    register,
    postUser,
    autoLogin,
    updata,
    upHeadImg
}








