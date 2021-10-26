const router = require('express').Router();
let Project = require('../model/project.model');
// let Task = require('../model/task.model')


router.route('/').get((req,res) => {
    Project.find()
        .then(project => res.json(project))
        .catch(err => res.status(400).json('Error'+err));
})

//create new project

router.route('/add').post((req,res) => {
    const avenueName = req.body.avenueName;
    const projectName = req.body.projectName;
    const startDate = req.body.startDate;
    const duration = req.body.duration;
    const task = req.body.task;
    const projectStatus = req.body.projectStatus;
    const projectMilestones = req.body.projectMilestones;

    const newProject = new Project({
        avenueName,
        projectName,
        startDate,
        duration,
        task,
        projectStatus,
        projectMilestones,
    })

    newProject.save()
        .then(() => res.send("Project created"))
        .catch(err => res.status(400).json('Error:'+err));



})

module.exports = router;