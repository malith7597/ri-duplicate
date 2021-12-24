const router = require('express').Router()
const { registerMember, authMember, getAllMembers, getMemberById } = require('../controller/memberController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getAllMembers)
router.route('/').post(registerMember)
router.route('/login').post(authMember)
router.route('/:id').get(getMemberById)

module.exports = router