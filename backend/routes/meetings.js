const router = require('express').Router()
const {createMeetings, getMeetings, updateMeeting, deleteMeeting, getMeetingById} = require('../controller/meetingController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getMeetings)
router.route('/create').post(protect, createMeetings)
router.route('/:id').get(getMeetingById).put(protect, updateMeeting).delete(protect, deleteMeeting)

module.exports = router