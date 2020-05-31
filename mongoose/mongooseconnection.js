const express = require('express')
const mongoose = require('mongoose')

mongoose.connect(('mongodb://127.0.0.1:27017/PNSV_company'),{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify: false
})