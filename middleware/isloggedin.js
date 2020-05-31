const express = require('express')

isloggedin = (req,res,next)=>
{
    if(req.user)
    {
        return next()
    }
    res.redirect('/login')
}

module.exports  =isloggedin