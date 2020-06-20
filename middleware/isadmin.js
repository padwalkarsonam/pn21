const express = require('express')
const blogs = require('../models/blogs')
const flash = require('connect-flash')
const isadmin =async (req,res,next)=>
{
   
    try{
    
        const blog = await blogs.findById(req.params.id)
    //   console.log(campground)
        if(req.user._id.equals(process.env.AdminUser))
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

module.exports =isadmin