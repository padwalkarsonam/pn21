const express = require('express')
const blogs = require('../models/blogs')
const flash = require('connect-flash')
const isAuthorised =async (req,res,next)=>
{
   
    try{
        const blog = await blogs.findById(req.params.id)
    //   console.log(campground)
        if(blog.author.id.equals(req.user._id))
        {
            console.log('before next')
            next()
        }
        else{
            req.flash('error','Your are not authorised')
        res.redirect('back')
        }
    }
    catch(error)
    {
        res.redirect('back')
    }

}

module.exports =isAuthorised