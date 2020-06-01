const express = require('express')
const email = require('../Email/nodemail')
const router = express.Router()



//Forms routes start
router.get('',(req,res)=>
{
    res.render('index')
})

//Stock Advisory

router.get('/info/stockadvisory',(req,res)=>
{
    res.render('Forms/stock_advisory')
})
router.post('/info/stockadvisory',(req,res)=>
{
   
    
  
    email(req.body.data['Email'],'Stock Advisory Details','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'Stock Advisory Details new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:-\n'+req.body.data['subject'])
     res.redirect('/info/stockadvisory')
})

//Loans

router.get('/info/loans',(req,res)=>
{
    res.render('Forms/loans_form')
})

router.post('/info/loans',(req,res)=>
{
   
    
    
    email(req.body.data['Email'],'Loans Details','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'Loans Details new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:'+req.body.data['subject'])
   res.redirect('/info/loans')
})


//Bussiness Planning

router.get('/info/BussinessPlanning',(req,res)=>
{
    res.render('Forms/Bussinessplanning_form')
})

router.post('/info/BussinessPlanning',(req,res)=>
{
   
    
    
    email(req.body.data['Email'],'Bussiness Planning Details','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'Bussiness Planning new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:'+req.body.data['subject'])
   res.redirect('/info/BussinessPlanning')
})
//Digital Marketing


router.get('/info/Digitalmarketing',(req,res)=>
{
    res.render('Forms/Digitalmarketing_form')
})

router.post('/info/Digitalmarketing',(req,res)=>
{
   
    email(req.body.data['Email'],'Digital Marketing','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'Digital Marketing new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:'+req.body.data['subject'])
   res.redirect('/info/Digitalmarketing')
})

//Insurance
router.get('/info/Insurance',(req,res)=>
{
    res.render('Forms/insurance_form')
})

router.post('/info/Insurance',(req,res)=>
{
   
    email(req.body.data['Email'],'Insurance Details','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'Insurance Details new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:'+req.body.data['subject'])
   res.redirect('/info/Insurance')
})

//Forms Routes Ends


module.exports = router