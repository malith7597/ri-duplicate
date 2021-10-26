const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    role:[String],
    RACUOK_ID:[String],
   
})

const projectSchema = new Schema({
    avenueName:{
        type:String,
        required:true
    },
    projectName:{
        type:String,
        required:true
    },
    startDate:{
        type:Date, 
        required:true
    },
    duration:{
        type:String,
         required:true
    },
    task:{
        type:taskSchema,
        required:true
    },
    projectStatus:{
        type:Boolean,
         required:true,
         default:false
    },
    projectMilestones:[String],
},{
    timestamps:true
});

const Project = mongoose.model('Project',projectSchema);

module.exports = Project;