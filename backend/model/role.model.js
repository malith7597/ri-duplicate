const mongoose = require('mongoose')

const roleSchema = mongoose.Schema({
    ADMIN: 'admin',
    SAA: 'serjeant-at-arms',
    PRESIDENT:'president',
    DIRECTOR:'director',
    BASIC:'basic',
})

const ROLE = mongoose.model("ROLE", roleSchema)

module.exports = ROLE