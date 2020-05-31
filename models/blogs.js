const mongoose = require('mongoose')



const blogsSchema = mongoose.Schema({

    author:
    {
        id:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Users'
        },
        username:String
        
    },
    title:
    {
        type:String,
        required:true,
        trim:true
    },
    image:
    {
        type:String,
        required:true,
        trim:true
    },
    description:
    {
        type:String,
        required:true
    },
    category:
    {
        type:String,
        required:true,
        trim:true
    },
    CreatedAT:
    {
        type: Date,
        default: new Date()
    }
})

module.exports =mongoose.model('Blogs',blogsSchema)