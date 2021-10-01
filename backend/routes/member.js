const router = require('express').Router();
let Member = require('../model/member.model');

//get member from db
router.route('/').get((req,res) => {
    Member.find()
        .then(member => res.json(member))
        .catch(err => res.status(400).json('Error'+err));
})

//add member to db
router.route('/add').post((req,res) => {
    const memberName = req.body.memberName;
    const email = req.body.email;
    const password =  req.body.password;
    const RACUOK_ID = req.body.RACUOK_ID;
    const nic = req.body.nic;
    const birthDate = req.body.birthDate;
    const city = req.body.city;
    const avenue = req.body.avenue;
    const acedemicYear = req.body.acedemicYear;
    const userType = req.body.userType;
    const skills = req.body.skills;

    const newMember = new Member({
        memberName,
        email,
        password,
        RACUOK_ID,
        nic,
        birthDate,
        city,
        avenue,
        acedemicYear,
        userType,
        skills,
    });

    newMember.save()
        .then(() => res.json('Member added!'))
        .catch(err => res.status(400).json('Error:'+err))
})

//find member by id
router.route('/:id').get((req,res) => {
    Member.findById(req.params.id)
        .then(member => res.json(member))
        .catch(err => res.status(400).json('Error:')+err)
})

//delete a member by id
router.route('/:id').delete((req,res) => {
    Member.findByIdAndDelete(req.params.id)
        .then(() => res.json('Member deleted!'))
})

module.exports = router;