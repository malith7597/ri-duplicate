const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const skillSchema = new Schema({
    skill:[String]
},
{
    timestamps:true
})

const Skill = mongoose.model('Skill', skillSchema)

module.exports = Skill;

