const express = require('express')
const mongoose = require('mongoose')
const blogs = require('../models/blogs')
const comments=require('../models/comments')
const flash = require('connect-flash')


const isloggedin = require('../middleware/isloggedin')
const isauthorised = require('../middleware/isauthorised')


const router = express.Router()
const methodOverride = require('method-override')
router.use(methodOverride("_method"))
router.use(flash())

const bodyparser =require('body-parser')


router.use(bodyparser.urlencoded({
    extended: true
  }));




router.post('/blogs/:id/comment/new',isloggedin,async (req,res)=>
{


    try{
       var blog = await blogs.findById(req.params.id)
       

       
    var comval = await comments.create(req.body.Comment)
     
    comval.author.id = req.user.id
    comval.author.username = req.user.username
     
    comval.save()
       

        blog.comments.push(comval)
    blog =  await blog.save()


     res.redirect('/blogs/'+req.params.id)
     
    }
    catch(error)
    {
        
        req.flash('error',error.message)
        res.redirect('/blogs/'+req.params.id)


    }


})


//Delete comment

router.delete('/blogs/:id/comment/:comment_id',isloggedin,isauthorised,async (req,res)=>
{
    try
    {
        await comments.findByIdAndRemove(req.params.comment_id)
        res.redirect('/blogs/'+req.params.id)
    }
    catch(error)
    {
        rereq.flash('error',error.message)
        res.redirect('/blogs/'+req.params.id)

    }
})



module.exports = router