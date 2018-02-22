var express = require('express')
var router =express.Router();
var tokenVerify = require('./tokenVerify')


var createTodo = require('./creatTodo')
router.post('/createTodo',tokenVerify.tokenVerify,createTodo.createTodo)

var registration = require('./registration')
router.post('/register', registration.registration)

var login = require('./login')
router.post('/login', login.login)


module.exports = router;