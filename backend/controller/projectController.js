let Project = require('../model/project.model')
const router = require('../routes/project')

// get all projects

exports.get = (req,res) => {
    Project.find()
        .then(project => res.json(project))
        .catch(err => res.status(400).json('Error')+err)
}

// get projects by id

exports.getbyID = (req,res) => {
    Project.findById(req.params.id)
        .then(project => res.json(project))
}

// create a project

exports.create = (req,res) => {
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

}

// update a project

exports.updateProject = (req,res) => {
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
}

// delete a project
exports.delete = (req,res) => {
    Project.findByIdAndDelete(req.params.id)
        .then(() => res.json('Project deleted!'))
        .catch(err => res.status(400).json('Error'+err))
}