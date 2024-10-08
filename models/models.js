const mongoose = require('mongoose')
const urlschema = new mongoose.Schema({
    shortID:{
        type:String,
        require:true,
        unique:true
    },
    redirecturl:{
        type:String,
        require:true,
    },
    visithistory:[{timestamp:{type:Number}}],

},{timestamps:true});


const URL= mongoose.model('url',urlschema)
module.exports=URL;