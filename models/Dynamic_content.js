const mongoose = require('mongoose')


const Dynamic_content = mongoose.Schema({
    category:
    {
        type:String,
    },
    title:
    {
        type:String,
    
        trim:true
    },
    link:
    {
        type:String,
        
    },
    description:
    {
        type:String,
     
    },
})

module.exports = mongoose.model('dynamiccontent',Dynamic_content)