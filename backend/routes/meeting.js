const router = require('express').Router()

const meetingController = require('../controller/meetingController')

// get all meeting
router.get('/', meetingController.get)

// get a meeting by id
router.get('/:id', meetingController.getById)

// create a meeting
router.post('/add', meetingController.create)

// update a meeting
router.post('/update/:id', meetingController.update)

// delete a meeting
router.delete('/:id', meetingController.delete)

module.exports = router