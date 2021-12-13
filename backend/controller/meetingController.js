const asyncHandler = require('express-async-handler')
const Meeting = require('../model/meeting.model')

// get meetings

const getMeetings = asyncHandler(async (req,res) => {
    const meetings = await Meeting.find()
    res.json(meetings)
})

// create meetings

const createMeeting = asyncHandler(async (req,res) => {
    
})