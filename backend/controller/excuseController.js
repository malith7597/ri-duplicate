const e = require('express')
let Excuse = require('../model/excuse.model')
const generateToken = require('../utils/generateToken')

// get all excuses

exports.get = (req,res) => {
    Excuse.find()
        .then(excuse => res.json(excuse))
        .catch(err => res.status(400).json('Error:'+err))
}

// get excuse by ID

exports.getById = (req,res) => {
    Excuse.findById(req.params.id)
        .then(excuse => res.json(excuse))
        .catch(err => res.status(400).json('Error:'+err))
}

// make an excuse

exports.makeExcuse = (req,res) => {
    const RACUOK_ID = req.body.RACUOK_ID;
    const memberName = req.body.memberName;
    const reason = req.body.reason;

    const newExcuse = new Excuse({
        RACUOK_ID,
        memberName,
        reason,
       
    })

    newExcuse.save()
        .then(() => res.json('Excuse made!'))
        .catch(err => res.status(400).json('Error:'+err))

}

// edit an excuse

exports.ediExcuse = (req,res) => {
    Excuse.findById(req.params.id)
        .then(excuse => {
            excuse.RACUOK_ID = req.body.RACUOK_ID;
            excuse.memberName = req.body.memberName;
            excuse.reason = req.body.reason;

            excuse.save()
                .then(() => res.json('Excuse updated!'))
                .catch(err => res.status(400).json('Error:'+err))
        })

}


// delete an excuse

exports.delete = (req,res) => {
    Excuse.findByIdAndDelete(req.params.id)
        .then(() => res.json('Excuse deleted!'))
        .catch(err => res.status(400).json('Error:'+err))
}
