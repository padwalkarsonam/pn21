const express =require('express')
const path = require('path')
const ejs =require('ejs')
const app =express()
const email = require('../Email/nodemail')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')


//===================================
//CONNECT MONGOOSE
require('../mongoose/mongooseconnection')



//============================================
//
const session = require('express-session')
const localStratergy = require('passport-local')
const passport = require('passport')
const flash = require('connect-flash')
const methodOverride = require('method-override')

//============================================


PORT = 3000||process.env.PORT;

const directorypath = path.join(__dirname,'../public')
console.log(directorypath)


app.set('view engine','ejs')
app.set('views', path.join(__dirname, '../public/views'));



//==============================================
//ALL APP.USE
app.use(express.static(directorypath))

app.use(bodyparser.urlencoded({extended:true}))

app.use(flash())

app.use(session(
    {
        secret:process.env.SESSION_SECRET,
        resave:false,
        saveUninitialized:false
    }
))
app.use(passport.initialize())
app.use(passport.session())


app.use(methodOverride("_method"))

//==============================================

//======================================>
//GET MODELS
const Users = require('../models/user')
//======================================>


//==============================================
//PASSPORT.....
passport.use(new localStratergy(Users.authenticate()))
passport.serializeUser(Users.serializeUser())
passport.deserializeUser(Users.deserializeUser())


//==============================================>


//==============================================>
//Keeping data thorughtout application

app.use(function(req,res,next)
{
    res.locals.currentuser  = req.user
    res.locals.error = req.flash('error')
    res.locals.success = req.flash('success')
    next()
})


//============================================|

//============================================>
//Aquiring of Routes
const loginRoutes=require('../routes/login')

//============================================|

//=============================================>
//Setting up of Routes
app.use(loginRoutes)
//=============================================|


//Forms routes start
app.get('',(req,res)=>
{
    res.render('index')
})

//Stock Advisory

app.get('/info/stockadvisory',(req,res)=>
{
    res.render('Forms/stock_advisory')
})
app.post('/info/stockadvisory',(req,res)=>
{
   
    
  
    email(req.body.data['Email'],'Stock Advisory Details','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'Stock Advisory Details new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:-\n'+req.body.data['subject'])
     res.redirect('/info/stockadvisory')
})

//Loans

app.get('/info/loans',(req,res)=>
{
    res.render('Forms/loans_form')
})

app.post('/info/loans',(req,res)=>
{
   
    
    console.log(req.body.data)
    email(req.body.data['Email'],'Loans Details','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'Loans Details new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:'+req.body.data['subject'])
   res.redirect('/info/loans')
})


//Bussiness Planning

app.get('/info/BussinessPlanning',(req,res)=>
{
    res.render('Forms/Bussinessplanning_form')
})

app.post('/info/BussinessPlanning',(req,res)=>
{
    console.log('Gmail:'+process.env.email)
    
    console.log(req.body.data)
    email(req.body.data['Email'],'Bussiness Planning Details','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'Bussiness Planning new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:'+req.body.data['subject'])
   res.redirect('/info/BussinessPlanning')
})
//Digital Marketing


app.get('/info/Digitalmarketing',(req,res)=>
{
    res.render('Forms/Digitalmarketing_form')
})

app.post('/info/Digitalmarketing',(req,res)=>
{
    console.log('Gmail:'+process.env.email)
    
    console.log(req.body.data)
    email(req.body.data['Email'],'Digital Marketing','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'Digital Marketing new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:'+req.body.data['subject'])
   res.redirect('/info/Digitalmarketing')
})

//Insurance
app.get('/info/Insurance',(req,res)=>
{
    res.render('Forms/insurance_form')
})

app.post('/info/Insurance',(req,res)=>
{
    console.log('Gmail:'+process.env.email)
    
    console.log('env:'+process.env.Gmail)
    email(req.body.data['Email'],'Insurance Details','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'Insurance Details new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:'+req.body.data['subject'])
   res.redirect('/info/Insurance')
})

//Forms Routes Ends


app.listen(PORT,()=>
{
    console.log('server started')
})