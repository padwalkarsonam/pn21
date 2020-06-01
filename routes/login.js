const express = require('express')
const Users = require('../models/user')
const flash = require('connect-flash')
const passport = require('passport')
const router  = express.Router()
const bodyparser =require('body-parser')


router.use(bodyparser.urlencoded({
    extended: true
  }));


//===========================>
//Flash setup
router.use(flash())
//==========================|

//=============================================================>
//SIGN UP
router.get('/register',(req,res)=>
{
  
    res.render('signup/register')
})


router.post('/register',async (req,res)=>
{
    console.log('Heroku_my_logs:inside register post')
    if(req.body.password!=req.body.RePassword)
    {
        req.flash('error','Password dont match')
       return res.redirect('/register')
    }
   try{
    console.log('Heroku_my_logs:before user.register')
       const user = new Users({username:req.body.username,email:req.body.email})
      await Users.register(user,req.body.password)
      passport.authenticate('local')(req,res,function()
      {
        req.flash('success','User registered successfully')
          res.redirect('/')
      })
      console.log('Heroku_my_logs:afetr passport')


   }
   catch(error)
   {
        req.flash('error',error.message)
        res.redirect('/register')
   }
   
    

})
//LOGIN USER

//Login
router.get('/login',(req,res)=>
{
    res.render('signup/login')
})

router.post('/login' ,passport.authenticate('local', 
{
    failureFlash: true,
     successRedirect: '/',
failureRedirect: '/login' ,


})
,(req,res)=>
{
    
})
//=============================================================>

//LOGOUT
router.get('/logout',(req,res)=>
{
    req.flash('success','User successfully logged out')
    req.logOut()
    res.redirect('/')

})

//==============================================================>


module.exports = router