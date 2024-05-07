const url = require('../../url')
const mongoose = require("mongoose")

const LectureSchema = new mongoose.Schema({
    LectureName:{
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
    Industry:{
        type:String,
        default:"",
    },
    Video:{
        type:String,
        default:"",
    },
    Ex:{
        type:String,
        default:"",
    },
    Course: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseEntity' },

})


const Lecture = mongoose.model("LectureEntity", LectureSchema )
module.exports = Lecture;