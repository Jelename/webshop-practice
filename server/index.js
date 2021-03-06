

const productsRouter = require('./products/router')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

// var Sequelize = require('sequelize')
// var sequelize = new Sequelize('postgres://postgres:secret@localhost:5431/postgres')

app.listen(4001, () => console.log('Express API listening on port 4001'))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})

app.use(productsRouter)

app.use(usersRouter)




