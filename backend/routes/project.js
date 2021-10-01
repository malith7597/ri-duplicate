const router = require('express').Router();
let Project = require('../model/project.model');

router.route('/').get((req,res) => {
    Project.find()
        .then(project => res.json(project))
        .catch(err => res.status(400).json('Error'+err));
})

//create new project

router.route('/add').post((req,res) => {
    const avenueName = req.body.avenueName;
    const projectId = req.body.projectId;
    const startDate = req.body.startDate;
    const duration = req.body.duration;
    const projectStatus = req.body.projectStatus;
    const task = req.body.task;

    const newProject = new Project({
        avenueName,
        projectId,
        startDate,
        duration,
        projectStatus,
        task,
    })

    newProject.save()
        .then(() => res.send("Project created"))
        .catch(err => res.status(400).json('Error:'+err));



})

module.exports = Project;