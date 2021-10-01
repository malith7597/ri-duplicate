const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    avenueName:{type:String,required:true},
    projectId:{type:String,required:true},
    projectName:{type:String,required:true},
    startDate:{type:Date, required:true},
    duration:{type:String, required:true},
    projectStatus:{type:Boolean, required:true},
    task:{
        role:{type:String,required:true},
        RACUOK_ID:{type:String, required:true},
        points:{type:Number, required:true}
    }
},{
    timestamps:true
});

const Project = mongoose.model('Project',projectSchema);

module.exports = Project;