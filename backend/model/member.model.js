const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memberSchema = new Schema({
    memberName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    RACUOK_ID:{type:String, required:true},
    nic:{type:String, required:true},
    birthDate:{type:Date, required:true},
    city:{type:String, required:true},
    avenue:{type:String,required:true},
    acedemicYear:{type:String,required:true},
    userType:{type:String, required:true},
    skills:{type:String,required:true},

},{
    timestamps:true
});

const Member = mongoose.model('Member',memberSchema);

module.exports = Member;
