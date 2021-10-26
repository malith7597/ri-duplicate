const asyncHandler = require('express-async-handler')
const Member = require('../model/member.model')
const generateToken = require('../utils/generateToken')

// register user

const registerMember = asyncHandler(async (req, res) => {
    const {memberName, email, password, RACUOK_ID, birthDate, city, avenue, academicYear, isAdmin, pic} = req.body

    const memberExists = await Member.findOne({email})

    if(memberExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // create new Member
    const member = await Member.create({
        memberName, email, password, RACUOK_ID, birthDate, city, avenue, academicYear, isAdmin, pic
    });

    if (member) {
        res.status(201).json({
            _id:member._id,
            memberName:member.memberName,
            email:member.email,
            RACUOK_ID:member.RACUOK_ID,
            token:generateToken(member._id)
        })
        console.log("Member added!");
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
            _id:member._id,
            name:member.memberName,
            email:member.email,
            token:generateToken(member._id),

        })
        console.log("Successfully logged in!");
    } else {
        res.status(400)
        throw new Error("Invalid Email or password!");
    }

   
});

module.exports = {registerMember, authMember}