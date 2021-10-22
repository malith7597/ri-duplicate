const mongoose = require('mongoose')
// const Task = require('./task.model')

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    role:[String],
    RACUOK_ID:[Number],
    points:Number
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
    projectStatus:{
        type:Boolean,
         required:true,
         default:false
    },
    task:taskSchema,
    projectMilestones:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

const Project = mongoose.model('Project',projectSchema);

module.exports = Project;