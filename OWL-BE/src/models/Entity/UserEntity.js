const mongoose = require("mongoose")
const permission = require('../../permission')

const UserSchema = new mongoose.Schema({
    UserName:{
        type:String,
        default:"",
        unique:""

    },
    FullName:{
        type:String,
        default:"",
        unique:""

    },
    PassWord:{
        type:String,
        default:"",
        unique:""

    },
    Email:{
        type:String,
        default:"",
        unique:""

    },
    Phone:{
        type:String,
        default:"",
        unique:""

    },
    Address:{
        type:String,
        default:"",
        unique:""

    },
    Hierachy:{
        type:String,
        default:permission.STUDENT,
        unique:""

    },
    Image:{
        type:String,
        default:"",
        unique:""

    },
    Tracks:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"TrackEntity"
        }
    ],
    Course:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CourseEntity"
        }
    ]

})


const User = mongoose.model("UserEntity", UserSchema )
module.exports = User;