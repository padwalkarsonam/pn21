const express = require('express')
const mongoose = require('mongoose')
const blogs = require('../models/blogs')
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


   
  
    try{
        await blog.save()

    }
    catch(error)
    {
            req.flash('error',error.message)
           
    }
    res.redirect('/blogs')
   
})


router.get('/blogs/:id',async (req,res)=>
{
    try{

        const id =req.params.id
        const blog= await blogs.findById(id).populate('comments').exec()
        category=blog.category

        const recent_blog = await blogs.find({}).limit(3).sort({'CreatedAT':-1})
   
        const related_blog =await blogs.find({category}).limit(2).sort({'CreatedAT':-1})
        res.render('blogs/show_blog',{blog,recent_blog,related_blog})
        
  
    }
    catch(error)
    {
        req.flash('error',error.message)
        res.redirect('/blogs')

    }
})

router.get('/blogs/:id/edit',isloggedin,isauthorised,async (req,res)=>
{
    const id =req.params.id
    try{
        const blog= await blogs.findById(id)
        res.render('blogs/blog_edit',{blog})
    }
    catch(error)
    {
        req.flash('error',error.message)
        res.redirect('/blogs')
    }

})

router.put('/blogs/:id',isloggedin,isauthorised,async (req,res)=>
{
    const id =req.params.id
    
   try{
        await blogs.findByIdAndUpdate(id,req.body.data)
        res.redirect('/blogs')
   }
   catch(error)
   {
    req.flash('error',error.message)
        res.redirect('/blogs')
   }
})

router.delete('/blogs/:id',isloggedin,isauthorised,async (req,res)=>
{

    const id =req.params.id
   try{
        const blog = await blogs.findById(id)
        await blog.remove()
        res.redirect('/blogs')
   }
   catch(error)
   {
    req.flash('error',error.message)
        res.redirect('/blogs')
   }
})


module.exports = router