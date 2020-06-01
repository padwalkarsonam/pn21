const express = require('express')
const comments = require('../models/comments')
const flash = require('connect-flash')
const isAuthorised =async (req,res,next)=>
{
   
    try{
        const comment = await comments.findById(req.params.comment_id)
    //   console.log(campground)
        if(comment.author.id.equals(req.user._id))
        {
            
            next()
        }
        else{
            req.flash('Error','Your are not authorised')
        res.redirect('back')
        }
    }
    catch(error)
    {
        res.redirect('back')
    }

}

module.exports =isAuthorised