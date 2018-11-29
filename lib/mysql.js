var mysql = require('mysql');

// var pool  = mysql.createPool({
//     host     : 'localhost',
//     user     : 'root',
//     password : '123456',
//     database : 'todolist',
//     port     : '3306'
//   });




var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'tan194875047',
    database : 'todolist',
    port     : '3306'
  });




const query = ( sql, values ) => {

    return new Promise( ( resolve, reject ) => {
        pool.getConnection( ( err, connect ) => {
            if( err ){
                reject( err )
            }else{
                connect.query( sql, values, ( err, data ) => {
                    if( err ){
                        reject( err )
                    }else{
                        resolve( data )
                    }
                    connect.release()
                } )
            }
        } )
    } )
}
//注册
exports.insertUser = ( value ) => {
    let sql = "insert into user set user_name=?,psw=?,headimg=?,date=?;"
    return query( sql, value )
}
//查找用户
exports.findUser = ( name ) => {
    let sql = `select * from user where user_name="${name}";`
    return query( sql )
}
// 删除用户
exports.deleteUse = ( name ) => {
    let sql = `delete from user where user_name="${name}";`
    return query( sql )
}
//修改个人信息
exports.updateUse = ( value ) => {
    let sql = "update user set work=?,introduce=? where user_name=?;"
    return query( sql, value )
}
//修改头像
exports.headImg = ( value ) => {
    let sql = "update user set headimg=? where user_name=?;"
    return query( sql, value )
}
//修改背景图片
exports.setBg = ( user, bg ) => {
    let sql = `update user set bg="${bg}" where user_name="${user}"`
    return query( sql )
}

/*
------------------------------------文章有关--------------------------------------
*/

//通过label获取文章列表并分页
exports.getArticleByLabel = ( label, page ) => {
    let sql = `select id,title,user_name,label,time,click_num,like_num 
    from list where label="${label}" and caogao=0 order by time desc limit ${(page-1)*5},5;`
    return query( sql )
}
//通过label获取总数
exports.getCountByLabel = ( value ) => {
    let sql = `select count(*) count from list where label="${value}"`
    return query( sql )
}
//获取一个人的所有文章
// exports.getArticleByUser = ( name, page, caogao ) => {
//     let sql = `select list.id,title,user_name,label,time,click_num,like_num 
//     from list where user_name="${name}" and caogao=${caogao} 
//     order by time desc limit ${(page-1)*5},5;`
//     return query( sql )
// }

exports.getArticleByUser = ( name, page, caogao ) =>{
    let sql = `select list.id, list.title,label,time,click_num, count( discuss.essay_id ) disNum, COUNT(likedb.essay_id) likenum
    from list left outer join discuss on list.id =  discuss.essay_id
    LEFT OUTER JOIN likedb on list.id = likedb.essay_id
    where user_name="${name}" and caogao=${caogao}
    group by list.id
    order by list.time desc
    limit ${(page-1)*5},5;`
    return query( sql )
}


//获取个人文章总数
exports.getCountByUser = ( name, caogao ) => {
    let sql = `select count(*) count from list where user_name="${name}" and caogao=${caogao}`
    return query( sql )
}


//增加文章的喜欢数


//减少文章的喜欢数




//-----------------------------个人中心相关-----------------------------------
//获取个人的所有回答
exports.getAllDiscussByUser = ( user, page ) => {
    let sql = `select content, p_time, title 
    from list, discuss
    where discuss.essay_id=list.id and username="${user}"
    order by p_time desc
    limit ${(page-1)*10},10`
    return query( sql )
}




//获取一片文章的所有信息
exports.getArticleById = ( id ) => {
    let sql = `select * from list where id=${id}`
    return query( sql )
}
//上传一篇文章
exports.createArticle = ( value ) => {
    let sql = "insert into list set title=?,user_name=?,caogao=?,content=?,label=?,time=?,click_num=0,like_num=0,comment='00'"
    return query( sql, value )
}
//修改文章
exports.updateArticle = ( value ) => {
    let sql = "update list set title=?,caogao=?,content=?,label=? where id=?"
    return query( sql, value )
}
//删除一篇文章
exports.deleteArt = ( id ) => {
    let sql = `delete from list where id=${id}`
    return query( sql )
}
//增加一片文章的浏览量
exports.addClickNum = ( id ) => {
    let sql = `update list set click_num=click_num+1 where id=${id}`
    return query( sql )
}


//------------------------------评论相关-----------------------
//发表评论
exports.insertDiscuss = ( value ) => {
    let sql = "insert into discuss set essay_id=?,username=?,content=?,p_time=?"
    return query( sql, value )
}
//获取评论并分页
exports.getDiscuss = ( id, page ) => {
    let sql = `select essay_id,headimg,content,p_time,username 
    from discuss,user 
    where essay_id=${id} and discuss.username = user.user_name order by p_time desc limit ${(page-1)*10},10`
    return query( sql )
}
//获取评论总数
exports.getCountDis = ( id ) => {
    let sql = `select count(*) count from discuss where essay_id=${id}`
    return query( sql )
}
//获取个人评论
exports.getDisByUser = ( id, page ) => {

}





//----------------------------喜欢--------------------------------
//添加喜欢
exports.insertLike = ( user, id, date ) => {
    let sql = `insert into likedb set user="${user}",essay_id=${id},addtime="${ date }"`
    return query( sql )
}
//取消喜欢
exports.deleteLike = ( user, id ) => {
    console.log( '删除喜欢' )
    let sql = `delete from likedb where user="${user}" and essay_id=${id}`
    return query( sql )
}
//获取用户所有的喜欢
exports.getAllLike = ( user ) => {
    let sql = `select essay_id from likedb where user="${user}"`
    return query( sql )
}
//返回一片文章喜欢的总数
exports.getAllLikeArt = ( id ) => {
    let sql = `select count(*) count from likedb where essay_id=${id}`
    return query( sql )
}
//查询是否已经喜欢
exports.getLikeExc = ( user, id) => {
    let sql = `select * from likedb where essay_id=${id} and user="${user}"`
    return query( sql )
}
//查询一个用户所有喜欢的文章
exports.selectLikeByUser = ( user, page ) => {
    let sql = `select list.id, title, user_name, label, click_num, like_num, addtime 
        from likedb, list 
        where likedb.user="${user}" and likedb.essay_id=list.id 
        order by likedb.addtime desc limit ${(page-1)*5},5`
    return query( sql )
}








