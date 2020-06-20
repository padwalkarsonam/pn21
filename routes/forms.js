const express = require('express')
const email = require('../Email/nodemail')
const router = express.Router()



//Forms routes start
router.get('',(req,res)=>
{
    res.render('index')
})

//Stock Advisory
//classes
router.get('/info/stockadvisory/forms/classes',(req,res)=>
{
    res.render('Forms/stock/stock_advisory_classes')
})
router.post('/info/stockadvisory/forms/classes',(req,res)=>
{
   
    
  
    email(req.body.data['Email'],'Stock Advisory class Details','Respected '+req.body.data['firstname']+'\nwe have noted your request over details with respect to stock classes our team will contact you soon \nPNSV')
    email(process.env.Gmail,'Stock Advisory Classes new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number'])
     res.redirect('/info/stockadvisory')
})
//references
//Stock Advisory

router.get('/info/stockadvisory/forms/references',(req,res)=>
{
    res.render('Forms/stock/stock_advisory_references')
})
router.post('/info/stockadvisory/forms/references',(req,res)=>
{
   
    
  
    email(req.body.data['Email'],'Stock Advisory Details','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'Stock Advisory Reference new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\Reference name:-'+req.body.data['reference'])
     res.redirect('/info/stockadvisory')
})


//Loans
//Home
router.get('/info/loans/forms/home',(req,res)=>
{
    res.render('Forms/loans/Loans_forms_home')
})

router.post('/info/loans/forms/home',(req,res)=>
{
   
    
    
    email(req.body.data['Email'],'Loans Details','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'Home Loans Details new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:'+req.body.data['subject'])
   res.redirect('/info/loans')
})


//Personal
router.get('/info/loans/forms/personal',(req,res)=>
{
    res.render('Forms/loans/Loans_forms_personal')
})

router.post('/info/loans/forms/personal',(req,res)=>
{
   
    
    
    email(req.body.data['Email'],'Loans Details','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'Personal Loans Details new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:'+req.body.data['subject'])
   res.redirect('/info/loans')
})

//Bussiness
router.get('/info/loans/forms/bussiness',(req,res)=>
{
    res.render('Forms/loans/Loans_forms_bussiness')
})

router.post('/info/loans/forms/bussiness',(req,res)=>
{
   
    
    
    email(req.body.data['Email'],'Loans Details','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'Bussiness Loans Details new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:'+req.body.data['subject'])
   res.redirect('/info/loans')
})

//LAP
router.get('/info/loans/forms/LAP',(req,res)=>
{
    res.render('Forms/loans/Loans_forms_LAP')
})

router.post('/info/loans/forms/LAP',(req,res)=>
{
   
    
    
    email(req.body.data['Email'],'Loans Details','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'LAP Loans Details new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:'+req.body.data['subject'])
   res.redirect('/info/loans')
})


//Car Loans
router.get('/info/loans/forms/car',(req,res)=>
{
    res.render('Forms/loans/Loans_forms_car')
})

router.post('/info/loans/forms/car',(req,res)=>
{
   
    
    console.log('here')
    email(req.body.data['Email'],'Loans Details','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'car Loans Details new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:'+req.body.data['subject'])
   res.redirect('/info/loans')
})


//Loans reference
router.get('/info/loans/forms/reference',(req,res)=>
{
    res.render('Forms/loans/Loans_forms_reference')
})

router.post('/info/loans/forms/reference',(req,res)=>
{
   
    
    
    email(req.body.data['Email'],'Loans Details','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,' Loans reference Details new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:'+req.body.data['subject'])
   res.redirect('/info/loans')
})

//Bussiness Planning

router.get('/info/BussinessPlanning/forms',(req,res)=>
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


router.get('/info/Digitalmarketing/forms',(req,res)=>
{
    res.render('Forms/Digitalmarketing_form')
})

router.post('/info/Digitalmarketing/forms',(req,res)=>
{
   
    email(req.body.data['Email'],'Digital Marketing','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'Digital Marketing new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:'+req.body.data['subject'])
   res.redirect('/info/Digitalmarketing')
})

//Insurance
//life
router.get('/info/Insurance/forms/lifeinsurance',(req,res)=>
{
    res.render('Forms/insurance/insurance_form_life')
})

router.post('/info/Insurance/forms/lifeinsurance',(req,res)=>
{
   
    email(req.body.data['Email'],'lifeinsurance Insurance Details','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'lifeinsurance Insurance Details new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:'+req.body.data['subject'])
   res.redirect('/info/Insurance')
})

//general

router.get('/info/Insurance/forms/general',(req,res)=>
{
    res.render('Forms/insurance/insurance_form_general')
})

router.post('/info/Insurance/forms/general',(req,res)=>
{
   
    email(req.body.data['Email'],'general Details','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'general Insurance Details new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:'+req.body.data['subject'])
   res.redirect('/info/Insurance')
})
//medical
router.get('/info/Insurance/forms/medical',(req,res)=>
{
    res.render('Forms/insurance/insurance_form_medical')
})

router.post('/info/Insurance/forms/medical',(req,res)=>
{
   
    email(req.body.data['Email'],'medical Details','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'medical Insurance Details new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:'+req.body.data['subject'])
   res.redirect('/info/Insurance')
})

//reference
router.get('/info/Insurance/forms/reference',(req,res)=>
{
    res.render('Forms/insurance/insurance_form_reference')
})

router.post('/info/Insurance/forms/reference',(req,res)=>
{
   
    email(req.body.data['Email'],'medical Details','Respected '+req.body.data['firstname']+'\nwe have noted your queery,Our team will ensure your querries are solved \nPNSV')
    email(process.env.Gmail,'Insurance reference new Querry','Firstname:'+req.body.data['firstname']+'\nEmail:'+req.body.data['Email']+'\nNumber:'+req.body.data['number']+'\nSubject:'+req.body.data['subject'])
   res.redirect('/info/Insurance')
})
//Forms Routes Ends


module.exports = router