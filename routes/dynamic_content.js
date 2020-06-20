const express = require('express')
const mongoose = require('mongoose')
const dynamic = require('../models/Dynamic_content')
const flash = require('connect-flash')


const isloggedin = require('../middleware/isloggedin')
const isadmin = require('../middleware/isadmin')


const router = express.Router()
const methodOverride = require('method-override')
router.use(methodOverride("_method"))
router.use(flash())

const bodyparser =require('body-parser')


router.use(bodyparser.urlencoded({
    extended: true
  }));

  router.get('/dynamic/content',isloggedin,isadmin,(req,res)=>
  {
    res.render('dynamic_content/dynamic_content_edit.ejs')
  })
  router.post('/dynamic/content',isloggedin,isadmin,async (req,res)=>
  {
    options = { upsert: true, new: true, setDefaultsOnInsert: true };
    

    
 var title= req.body.data['title']
    var link= req.body.data['image']
    var description= req.body.data['description']
   var category= req.body.data['category']
    const value={
        title,
     
        description,
        category,
        link
       
    }
    const dynamicval = new dynamic(value)

   try{
    await dynamic.findOneAndUpdate({'category':category},value,options)
     
        res.redirect('/')
   }
   catch(error)
   {
    req.flash('error',error.message)
        res.redirect('/')
   }

  })

  module.exports = router