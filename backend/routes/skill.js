const router = require('express').Router();
let Skill = require('../model/skills.model')

// get skills
router.route('/').get((req,res) => {
    Skill.find()
    .then(skill => res.json(skill))
    .catch(err => res.status(400).json('Error'+err));
})

// get skill by id
router.route('/:id').get((req,res) => {
    Skill.findById(req.params.id)
    .then(skill => res.json(skill))
    .catch(err => res.status(400).json('Error'+err));
})

// add new skill
router.route('/add-skill').post((req,res) => {
    const skill = req.body.skill;

    const newSkill = new Skill({
        skill
    })

    newSkill.save()
    .then(() => res.json("Skill added"))
    .catch(err => res.status(400).json('Error:'+err))
})

// update skill
router.route('/update/:id').post((req,res) => {
   Skill.findById(req.params.id)
        .then(skill => {
            skill.skill = req.body.skill

            skill.save()
                .then(() => res.status(200).json('Skill Updated!'))
                .catch(err => res.status(400).json('Error'+err))
        })
})



module.exports = router;