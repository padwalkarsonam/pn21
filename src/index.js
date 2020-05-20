const express =require('express')
const path = require('path')
const ejs =require('ejs')
const app =express()


PORT = 3000||process.env.PORT

const directorypath = path.join(__dirname,'../public')
console.log(directorypath)
app.use(express.static(directorypath))
const partialpath = path.join(__dirname,'../public/views/partials')
app.set('view engine','ejs')
app.set('views', path.join(__dirname, '../public/views'));

app.get('',(req,res)=>
{
    res.render('index')
})

app.listen(PORT,()=>
{
    console.log('server started')
})