const mongoose = require("mongoose")

const UserCourseSchema = new mongoose.Schema({

    User: { type: mongoose.Schema.Types.ObjectId, ref: 'UserEntity' },
    Course: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseEntity' },
    enrolledAt: { type: Date, default: Date.now },
    progress: { type: Number, min: 0, max: 100, default: 0 },
    status:{
        type:String,
        default:"Register"//  IsStuding, Success, Cancel
    }
})

const Course = mongoose.model("CourseUserEntity", UserCourseSchema )
module.exports = Course;