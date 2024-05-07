const url = require('../../url')
const mongoose = require("mongoose")

const LectureSchema = new mongoose.Schema({
    LectureName:{
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
        unique:""

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
    Video:{
        type:String,
        default:"",
        unique:""
    },
    Ex:{
        type:String,
        default:"",
        unique:""
    },
    Course: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseEntity' },

})


const Lecture = mongoose.model("LectureEntity", LectureSchema )
module.exports = Lecture;