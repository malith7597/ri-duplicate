const router = require('express').Router()
const {createProject} = require('../controller/projectController')
const {protect} = require('../middleware/authMiddleware')
const {grantAccess} = require('../permission/permission')

router.route('/create').post(protect, createProject)

module.exports = router