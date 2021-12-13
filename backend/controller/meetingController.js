const asyncHandler = require('express-async-handler')
const Meeting = require('../model/meeting.model')

// get meetings

const getMeetings = asyncHandler(async (req,res) => {
    const meetings = await Meeting.find({  member: req.member._id})
    res.json(meetings)
})

// create meetings

const createMeetings = asyncHandler(async (req,res) => {
    const { meetingLink, time, date, title, description, isFinished, avenueName, virtualBg,} = req.body

    if(!meetingLink || !time || !date ) {
        res.status(400)
        throw new error("Please fill  fields")
    } else {
        const meeting = new Meeting({
            member: req.member._id, 
            meetingLink,
            time, 
            date, 
            title,
            description, 
            isFinished, 
            avenueName, 
            virtualBg,})

            const createdMeeting = await meeting.save()
            res.status(201).json(createdMeeting)
    }
})

// get meeting by Id

const getMeetingById = asyncHandler(async (req,res) => {
    const meeting = await Meeting.findById(req.params.id)

    if(meeting){
        res.json(meeting)
    } else{
        res.status(404).json({message:"Meeting not found"})
    }
})

// update meeting

const updateMeeting = asyncHandler(async (req,res) => {
    const { meetingLink, time, date,title, description, isFinished, avenueName, virtualBg,} = req.body

    const meeting = await Meeting.findById(req.params.id)

    // chech whether a meeting actually belongs to the user

    if(meeting.member.toString() !== req.member._id.toString()) {
        throw new Error("You cannot perform this action")
    }

    if(meeting) {
        meeting.meetingLink = meetingLink
        meeting.time = time
        meeting.date = date
        meeting.title = title
        meeting.description = description
        meeting.isFinished = isFinished
        meeting.avenueName = avenueName
        meeting.virtualBg = virtualBg

        const updatedMeeting = await meeting.save()
        res.json(updatedMeeting)
    } else{
        res.status(404)
        throw new Error("Meeting not found")
    }

})

// delete meeting

const deleteMeeting = asyncHandler(async (req,res) => {
    const meeting = await Meeting.findById(req.params.id)

    if(meeting.member.toString() !== req.member._id.toString()) {
        throw new Error("You cannot perform this action")
    }

    if(meeting) {
        await meeting.remove()
        res.json({message: "Meeting deleted"})
    } else {
        res.status(404)
        throw new Error("Meeting not found")
    }
})

module.exports = {getMeetings, createMeetings, getMeetingById, updateMeeting, deleteMeeting}