const express = require('express')
const mongoose = require('mongoose')
const blogs = require('../models/blogs')
const flash = require('connect-flash')
const isloggedin = require('../middleware/isloggedin')

const router = express.Router()


router.use(flash())


router.get('/blogs',async (req,res)=>
{
    var page=0
    var blog_all
    if(req.query.page)
    {
         page=(parseInt(req.query.page)-1)*5
    }
    if(req.query.category)
    {
        category=req.query.category
        blog_all = await blogs.find({category}).limit(5).sort({'CreatedAT':-1}).skip(page)
   
    }
    else{
         blog_all = await blogs.find().limit(5).sort({'CreatedAT':-1}).skip(page)
    }
    const count =await blogs.countDocuments()
    
    
    res.render('blogs/blogs-index',{blog_all:blog_all,count})
})

router.get('/blogs/new',isloggedin,(req,res)=>
{
    res.render('blogs/blog_new')
})

router.post('/blogs',async (req,res)=>
{
    
    
    var author  = {
        id:req.user._id,
        username:req.user.username,
     
    }
    var title= req.body.data['title']
    var img= req.body.data['image']
    var description= req.body.data['description']
   var category= req.body.data['category']
    const value={
        title,
        image:img,
        description,
        category,
        author
    }
    const blog = new blogs(value)


    console.log(value)
  
    try{
        await blog.save()

    }
    catch(error)
    {
            req.flash('error',error.message)
           console.log('error',error)
    }
    res.redirect('/blogs')
   
})


router.get('/blogs/:id',async (req,res)=>
{
    try{
        const id =req.params.id
        const blog= await blogs.findById(id)
        res.render('blogs/show_blog',{blog})
    }
    catch(error)
    {
        req.flash('error',error.message)
        res.redirect('/blogs')

    }
})

module.exports = router