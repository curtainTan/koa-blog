const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const jwt = require('koa-jwt')
const index = require('./routes/index')
const auth = require('./routes/auth')
const article = require('./routes/article')
const convert = require('koa-convert')



const cors = require('koa2-cors')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

app.use(cors())


// const secret = "tan"


// app.use( jwt({
//   secret,
// }).unless({
//   path: [/\/login/,/\/register/]
// }) )

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use( convert(require('koa-static')(__dirname + '/public')))

// routes
app.use(index.routes(), index.allowedMethods())
app.use(auth.routes(), auth.allowedMethods())
app.use(article.routes(), article.allowedMethods())



app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});



// module.exports = app

app.listen(3000,()=>{
  console.log('你正在监听3000接口')
})


