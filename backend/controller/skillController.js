let Skill = require('../model/skills.model')

// display all skills

exports.get = (req,res) => {
    Skill.find()
        .then(skill => res.json(skill))
        .catch(err => res.status(400).json('Error')+err)
}

// get skill by id

exports.getById = (req,res) => {
    Skill.findById(req.params.id)
        .then(skill => res.json(skill))
        .catch(err => res.status(400).json('Error'))
}

// add new skill

exports.addSkill = (req,res) => {
    const skill = req.body.skill;

    const newSkill = new Skill({
        skill
    })

    newSkill.save()
    .then(() => res.json("Skill added"))
    .catch(err => res.status(400).json('Error:'+err))
}

// update skill

exports.update = (req,res) => {
    Skill.findById(req.params.id)
    .then(skill => {
        skill.skill = req.body.skill

        skill.save()
            .then(() => res.status(200).json('Skill Updated!'))
            .catch(err => res.status(400).json('Error'+err))
    })
}

// delete skill

exports.delete = (req,res) => {
    Skill.findByIdAndDelete(req.params.id)
        .then(skill => res.json('Skill deleted!'))
        .catch(err => res.status(400).json('Error'+err))
}


