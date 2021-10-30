const router = require('express').Router();
let Project = require('../model/project.model');
// let Task = require('../model/task.model')

// get projects
router.route('/').get((req,res) => {
    Project.find()
        .then(project => res.json(project))
        .catch(err => res.status(400).json('Error'+err));
})

// get specific project
router.route('/:id').get((req,res) => {
    Project.findById(req.params.id)
        .then(project => res.json(project))
        .catch(err => res.status(400).json('Error')+err);
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

// update a project

router.route('/update/:id').post((req,res) => {
    Project.findById(req.params.id)
        .then(project => {
            project.avenueName = req.body.avenueName;
            project.projectName = req.body.projectName;
            project.startDate = Date.parse(req.body.startDate);
            project.duration = req.body.duration;
            project.task = req.body.task;
            project.projectStatus = req.body.projectStatus;
            project.projectMilestones = req.body.projectMilestones;

            project.save()
            .then(() => res.json('Project Updated!'))
            .catch(err => res.status(400).json('Error'+err))


        })

})

// delete project

router.route('/:id').delete((req,res) => {
    Project.findByIdAndDelete(req.params.id)
        .then(project => res.json('Project Deleted!'))
        .catch(err => res.status(400).json('Error'+err))
})

module.exports = router;