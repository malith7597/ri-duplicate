const Project = require('../model/project.model')
const asyncHandler = require('express-async-handler')


// get all projects

const getProjects = asyncHandler(async (req,res) => {
    const projects = await Project.find({ member: req.member._id})
    res.send(projects)
})

// create projects

const createProject = asyncHandler(async (req, res) => {
    const { avenueName, projectName, description, startDate, duration, task, projectStatus, projectMilestones} = req.body
    
    if(!avenueName || !projectName || !startDate) {
        res.status(400)
        throw new Error("Please fill all the fields")
    } else{
        const project = new Project({
            member: req.member._id , 
            avenueName, 
            projectName, 
            description, 
            startDate, 
            duration, 
            task, 
            projectStatus, 
            projectMilestones,
        })

        const createdProject = await project.save()
        res.status(201).json(createdProject)

    }
})

// get project by Id

const getProjectById = asyncHandler(async (req,res) => {
    const project = await Project.findById(req.params.id) 
    
    if(project) {
        res.json(project)
    } else{
        res.status(404).json({message: "Project not found"})
    }
})

// update project

const updateProject = asyncHandler(async (req,res) => {

    const { avenueName, projectName, description, startDate, duration, task, projectStatus, projectMilestones} = req.body

    const project = await Project.findById(req.params.id)

    if(project.member.toString() !== req.member._id.toString()) {
        throw new Error("You cannot perform this action")
    }

    if(project) {
        project.avenueName = avenueName
        project.projectName = projectName
        project.description = description
        project.startDate = startDate
        project.duration = duration
        project.task = task
        project.projectStatus = projectStatus
        project.projectMilestones = projectMilestones

        const updatedProject = await project.save()
        res.json(updatedProject)
    } else{
        res.status(404)
        throw new Error("Project Not found")
    }
})

// delete a project

const deleteProject = asyncHandler(async (req,res) => {
    const project = await Project.findById(req.params.id)

    if(project.member.toString() !== req.member._id.toString()) {
        res.status(401)
        throw new Error("You cannot perform this action")
    }

    if(project) {
        await project.remove()
        res.json({message: "Project removed"})
    } else{
        res.status(404)
        throw new Error("Project not found")
    }
})

module.exports = {getProjects, createProject, getProjectById, updateProject, deleteProject}