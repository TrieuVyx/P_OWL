const url = require('../../url')
const mongoose = url.mongoose;

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

    }
    

})


const Course = mongoose.model("CourseEntity", CourseSchema )
module.exports = Course;