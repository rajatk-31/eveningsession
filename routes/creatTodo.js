var dbTask = require('../models/todo')


exports.createTodo = (req,res)=>{
    if(!req.body.name){
        res.json({
            success: false,
            msg: "Please provide all details"
        })
    }else{
        var newTask = new dbTask({
            email: req.decoded.email,
            name: req.body.name
        })
        newTask.save((err, data)=>{
            if(err){
                res.json({
                    success: false,
                    msg: "Error in database"
                })
            }else{
                res.json({
                    success: true,
                    msg: "Task created"
                })
            }
        })
    }
}