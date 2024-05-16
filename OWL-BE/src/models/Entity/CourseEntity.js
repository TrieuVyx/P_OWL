const url = require('../../url')
const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({
    CourseName:{
        type:String,
        default:"",
        unique:""

    },
    Description:{
        type:String,
        default:"",
        unique:""

    },
    Picture:{
        type:String,
        default:"",

    },
    Tittle:{
        type:String,
        default:"",
        unique:""

    },
    Content:{
        type:String,
        default:"",
        unique:""

    },
    Lectures:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"LectureEntity"
        }
    ]

})


const Course = mongoose.model("CourseEntity", CourseSchema )
module.exports = Course;