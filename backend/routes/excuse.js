const router = require('express').Router()

const excuseController = require('../controller/excuseController')

// get all excuses

router.get('/', excuseController.get)

// get excuse by id

router.get('/:id', excuseController.getById)

// create new excuse

router.post('/add', excuseController.makeExcuse)

module.exports = router

// edit excuse

router.post('/update/:id', excuseController.ediExcuse)

// delete excuse

router.delete('/:id',excuseController.delete)
