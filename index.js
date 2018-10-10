require('dotenv').config()

const BodyParser = require('body-parser')
const Express = require('express')
const routes = require('./routes')

const app = Express()
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))
app.use('/', routes)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(
    'Express is running on ' + process.env.HOST + ':' + process.env.PORT
  )
})
