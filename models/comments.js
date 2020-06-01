const mongoose = require('mongoose')
const Users = require('../models/user')
const commentShema = mongoose.Schema({
    text:String,
    author:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Users'
        },
        username:String,
       
    
    },
    CreatedAT:
    {
        type: Date,
        default: new Date()
    }
 
})


module.exports = mongoose.model('comment',commentShema)