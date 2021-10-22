const asyncHandler = require('express-async-handler')
const Member = require('../model/member.model')
const generateToken = require('../utils/generateToken')

// register user

const registerMember = asyncHandler(async (req, res) => {
    const {memberName, email, password, RACUOK_ID, birthDate, avenue, isAdmin, pic} = req.body

    const memberExists = await Member.findOne({email})

    if(memberExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // create new Member
    const member = await Member.create({
        memberName, email, password, RACUOK_ID, birthDate,city, avenue, acedemicYear,isAdmin, pic
    });

    if (member) {
        res.status(201).json({
            _id:member._id,
            memberName:member.memberName,
            email:member.email,
            isAdmin:member.isAdmin,
            birthDate:member.birthDate,
            city:member.city,
            avenue:member.acedemicYear,
            pic:user.pic,
            token:generateToken(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error("Error Occured")
    }

})

// login user
const authMember = asyncHandler(async (req,res) => {
    const {email, password} = req.body;

    const member = await Member.findOne({email});

    if(member && (await member.matchPassword(password))) {
        res.json({
            _id:user._id,
            name:member.memberName,
            email:member.email,
            isAdmin:member.isAdmin,
            birthDate:member.birthDate,
            city:member.city,
            pic:user.pic,
            token:generateToken(user._id),

        })
    } else {
        res.status(400)
        throw new Error("Invalid Email or password!");
    }

   
});

module.exports = {registerMember, authMember}