const qiniu = require('qiniu')

qiniu.conf.ACCESS_KEY = "tGXajI5JmN_znlB3zhh1b3RQQZk0NMUcmX7KRqMa"
qiniu.conf.SECRET_KEY = "uzbZ0ocu3cFnHAcNCOK0hCI1McwE0Hj3ik1_qemR"
var mac = new qiniu.auth.digest.Mac( "tGXajI5JmN_znlB3zhh1b3RQQZk0NMUcmX7KRqMa", "uzbZ0ocu3cFnHAcNCOK0hCI1McwE0Hj3ik1_qemR" )

var bucket = 'curtain'

function uptokend ( bucket, key ) {
    var putP = new qiniu.rs.PutPolicy({ scope : bucket, saveKey : key , returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}' })
    return putP.uploadToken( mac )
}
function gettokend ( key ){
    var token = uptokend( bucket, key )
    return token
}

//获取token
var QuToken = async key => {
    var aaa = await gettokend( key )
    return aaa
}

module.exports = QuToken










//另一种方式
// const qn = require('qn')
// const fs = require('fs')

// var client = qn.create({
//     accessKey: 'tGXajI5JmN_znlB3zhh1b3RQQZk0NMUcmX7KRqMa',
//     secretKey: 'uzbZ0ocu3cFnHAcNCOK0hCI1McwE0Hj3ik1_qemR',
//     bucket: 'curtain',
//     origin: "http://curtaintan.club"
// })


// //另一个
// const qiniuyun =  async ctx => {
//     console.log( ctx.request.body )
//     var imgData = ctx.request.body.dat
//     var fileName = Date.now() + '.jpg'
//     var filePath = './image/' + fileName
//     var dataBuffer = new Buffer( imgData, 'base64' )
//     try {
//         fs.writeFile(filePath, dataBuffer, function (err) {
//             if (err) {
//                 console.log( '上传出错' )
//                 console.log( err )
//             } else {
//                 client.uploadFile(filePath, {key: `/avatar/${fileName}`}, function (err1, result) {

//                     console.log('---------------上传后-------------------')
//                     console.log( result )
                    
//                     // 上传之后删除本地文件
//                     fs.unlinkSync(filePath);
//                 });
//             }
//         })
//     } catch (err) {
//         console.log('-----------上传出错---------------')
//         console.log( err )
//     }
// }