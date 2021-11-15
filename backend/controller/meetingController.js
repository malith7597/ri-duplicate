let Meeting = require('../model/meeting.model')

// get all meetings

exports.get = (req,res) => {
    Meeting.find()
        .then(meeting => res.json(meeting))
        .catch(err => res.status(400).json('Error:'+err))
}

// get a meeting by ID

exports.getById = (req,res) => {
    Meeting.findById(req.params.id)
        .then(excuse => res.json(excuse))
        .catch(err => res.status(400).json('Error:'+err))
}

// create a meeting

exports.create = (req,res) => {
    const meetingLink = req.body.meetingLink;
    const time = req.body.time;
    const date = req.body.date;
    const description = req.body.description;
    const isFinished = req.body.isFinished;
    const avenueName = req.body.avenueName;
    const virtualBg = req.body.virtualBg;

    const newMeeting = new Meeting({
        meetingLink,
        time,
        date,
        description,
        isFinished,
        avenueName,
        virtualBg,
    })

    newMeeting.save()
        .then(() => res.json('Meeting Created!'))
        .catch(err => err.status(400).json('Error:'+err))
}

// update a meeting

exports.update = (req,res) => {
    Meeting.findById(req.params.id)
        .then(meeting => {
            meeting.meetingLink = req.body.meetingLink;
            meeting.time = req.body.time;
            meeting.date = req.body.date;
            meeting.description = req.body.description;
            meeting.isFinished = req.body.isFinished;
            meeting.avenueName = req.body.avenueName;
            meeting.virtualBg = req.body.virtualBg

            meeting.save()
                .then(() => res.json('Meeting Updated!'))
                .catch(err => res.status(400).json('Error:'+err))
        })
}

// delete a meeting

exports.delete = (req,res) => {
    Meeting.findByIdAndDelete(req.params.id)
        .then(() => res.json('Meeting deleted!'))
        .catch(err => res.status(400).json('Error:'+err))
}

