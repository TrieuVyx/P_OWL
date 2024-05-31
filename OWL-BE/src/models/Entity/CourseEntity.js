const url = require('../../url')
const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({
    CourseName:{
        type:String,
        default:"",

    },
    Description:{
        type:String,
        default:"",

    },
    Picture:{
        type:String,
        default:"",

    },
    Tittle:{
        type:String,
        default:"",

    },
    Content:{
        type:String,
        default:"",
    },
    DateCreate:{
        type:Date,
    },
    Pee:{
        type:Number,
    },
    TypeCourse:{
        type:String
    },
    EndDate:{
        type:Date
    },
    Lectures:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"LectureEntity"
        }
    ],
    Comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CommentEntity"
        }
    ]
    
})


const Course = mongoose.model("CourseEntity", CourseSchema )
module.exports = Course;