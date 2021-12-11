const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const excuseSchema = new Schema({
    RACUOK_ID:{
        type:String,
         required:true
    },
    memberName:{
        type:String,  
        required:true
    },
    reason:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const Excuse = mongoose.model('Excuse',excuseSchema)

module.exports = Excuse;