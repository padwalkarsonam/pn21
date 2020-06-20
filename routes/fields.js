const express = require('express')
const mongoose = require('mongoose')
const blogs = require('../models/blogs')
const flash = require('connect-flash')
const dynamic = require('../models/Dynamic_content')

const isloggedin = require('../middleware/isloggedin')
const isauthorised = require('../middleware/isauthorised')


const router = express.Router()
const methodOverride = require('method-override')
router.use(methodOverride("_method"))
router.use(flash())

const bodyparser =require('body-parser')
const { findById } = require('../models/blogs')


router.use(bodyparser.urlencoded({
    extended: true
  }));



  router.get('/info/stockadvisory',async (req,res)=>
  {
    
    const Anitfy =await dynamic.findOne({'category':'About Nifty'})
   
    const AgI = await dynamic.findOne({'category':'About Global Indices'})
    const TrialTips = await dynamic.findOne({'category':'Trial Tips'})
    const Advertisement = await dynamic.findOne({'category':'Stock Advertisement'})
      res.render('fields/stockmarket_info',{Anitfy,AgI,TrialTips,Advertisement})
  })

  router.get('/info/loans',async (req,res)=>
  {
      const header = await dynamic.findOne({'category':'Home Loans Header'})
      const Advertisement = await dynamic.findOne({'category':'Home Loans Advertisement'})
      res.render('fields/loans_info',{header,Advertisement})
  })

  router.get('/info/insurance',async (req,res)=>
  {
    const header = await dynamic.findOne({'category':'Insurance Header'})
    const Advertisement = await dynamic.findOne({'category':'Insurance Advertisement'})
    res.render('fields/insurance_info',{header,Advertisement})
  })
  router.get('/info/BusinessPlanning',(req,res)=>
  {
    res.render('fields/BussinessPlanning')
  })
  router.get('/info/digitalmarketing',async (req,res)=>
  {
    const header = await dynamic.findOne({'category':'Digital Marketing Header'})
    res.render('fields/digitalmarketing')
  })

  module.exports =router