const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema;

const memberSchema = new Schema({
    memberName:{
        type:String,  
        required:true
    },
    email:{
        type:String, 
        required:true,
        unique:true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
          ],
    },
    password:{
        type:String, 
        required:true,
        minlength:6,
    },
    RACUOK_ID:{
        type:String,
         required:true
    },
    birthDate:{
        type:Date, 
        required:true
    },
    city:{
        type:String,
         required:true
    },
    avenue:{
        type:String,
        required:true
    },
    academicYear:{
        type:String,
        required:true
    },
    pic: {
        type: String,
        required: true,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },
      userRole:{
          type:String,
          enum:['basic', 'director', 'saa'],
          default:'basic'

      }

},{
    timestamps:true
});

// encrypt member password

memberSchema.pre("save", async function (next) {
    if(!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

// dcrypt password

memberSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const Member = mongoose.model('Member',memberSchema);

module.exports = Member;
