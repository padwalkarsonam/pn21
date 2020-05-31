const express = require('express')

isloggedin = (req,res,next)=>
{
    if(req.user)
    {
        return next()
    }
    req.flash('error','Your need to login')
    res.redirect('/login')
}

module.exports  =isloggedin