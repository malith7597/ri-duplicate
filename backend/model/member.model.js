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
        required:true
    },
    password:{
        type:String, 
        required:true
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
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    },
    pic: {
        type: String,
        required: true,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },
      userRole:{
          type:String,
          default:'basic',
          enum:['basic','admin','saa','president','director']
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
