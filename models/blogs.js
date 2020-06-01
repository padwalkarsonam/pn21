const mongoose = require('mongoose')
const comments =require('../models/comments')


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
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'comment'
        }
    ]
})

blogsSchema.pre('remove', async function (next) {
    console.log('inside')
    const user = this;
    this.comments.forEach(async function(comment)
    {
        console.log(comment._id)
        await comments.findByIdAndDelete(comment._id)
    })
    
    next()
})

module.exports =mongoose.model('Blogs',blogsSchema)