const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const meetingSchema = new Schema({
    meetingLink:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isFinished:{
        type:Boolean,
        required:true,
        default:false,
    },
    avenueName:{
        type:String,
    },
    virtualBg:{
        type:String,
        
    }
},{
    timestamps:true
})

const Meeting = mongoose.model('Meeting', meetingSchema)

module.exports = Meeting