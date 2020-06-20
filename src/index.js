const express =require('express')
const path = require('path')
const ejs =require('ejs')
const app =express()
const email = require('../Email/nodemail')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const compression = require('compression');



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


PORT = process.env.PORT;

const directorypath = path.join(__dirname,'../public')



app.set('view engine','ejs')
app.set('views', path.join(__dirname, '../public/views'));



//==============================================
//ALL APP.USE
app.use(express.static(directorypath))

app.use(bodyparser.urlencoded({
    extended: true
  }));

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

app.use(compression());

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
    res.locals.AdminUser = process.env.AdminUser
    res.locals.page_num =   parseInt(process.env.page_num)
    next()
})


//============================================|

//============================================>
//Aquiring of Routes
const loginRoutes=require('../routes/login')
const formRoutes = require('../routes/forms')
const blogsRoutes = require('../routes/blogs')
const commentsRoutes = require('../routes/commets')
const fieldsRoutes = require('../routes/fields')
const dynamicRoutes = require('../routes/dynamic_content')
//============================================|

//=============================================>
//Setting up of Routes
app.use(commentsRoutes)
app.use(loginRoutes)
app.use(formRoutes)
app.use(blogsRoutes)
app.use(fieldsRoutes)
app.use(dynamicRoutes)
//=============================================|


//Forms routes start
app.get('',(req,res)=>
{
    res.render('index')
})

//Stock Advisory


app.listen(PORT,()=>
{
    console.log('server started')
})