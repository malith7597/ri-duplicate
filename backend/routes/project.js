const router = require('express').Router();

var projectController = require('../controller/projectController')

// get projects
router.get('/',projectController.get)

// get specific project
router.get('/:id',projectController.getbyID)

//create new project
router.post('/add',projectController.create)

// update a project
router.post('/update/:id',projectController.updateProject)

// delete project
router.delete('/:id',projectController.delete)

module.exports = router;