const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const article = require('./routes/article')
const auth = require('./routes/auth')

const cors = require('koa2-cors')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  formLimit: '3mb',
  textLimit: '3mb',
  jsonLimit: '3mb',
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

app.use(cors())

// 打印日志
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 路由
app.use(index.routes(), index.allowedMethods())
app.use(article.routes(), article.allowedMethods())
app.use(auth.routes(), auth.allowedMethods())


// 错误处理
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

// module.exports = app


app.listen( 3000, ()=> {
    console.log('你正在监听3000端口')
})
