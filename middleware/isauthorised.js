const express = require('express')
const blogs = require('../models/blogs')
const flash = require('connect-flash')
const isAuthorised =async (req,res,next)=>
{
   
    try{
    
        const blog = await blogs.findById(req.params.id)
    //   console.log(campground)
        if(blog.author.id.equals(req.user._id)||req.user._id.equals(process.env.AdminUser))
        {
            
          return  next()
        }
        else{
            req.flash('error','Your are not authorised')
            
        res.redirect('back')
        }
    }
    catch(error)
    {
        req.flash('error',error.message)
        res.redirect('back')
    }

}

module.exports =isAuthorised