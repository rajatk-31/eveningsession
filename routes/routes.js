var express = require('express')
var router =express.Router();

var createTodo = require('./creatTodo')
router.post('/createTodo',createTodo.createTodo)



module.exports = router;