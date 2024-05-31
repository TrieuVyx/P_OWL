const url = require('../../url')
const mongoose = require("mongoose")
const CommentSchema = new mongoose.Schema({
    User: { type: mongoose.Schema.Types.ObjectId, ref: 'UserEntity' },
    Course: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseEntity' },
    Lecture: { type: mongoose.Schema.Types.ObjectId, ref: 'LectureEntity' },
    CommentAt: { type: Date, default: Date.now },
    Content:{
        type:String
    }
})


const Comment = mongoose.model("CommentEntity", CommentSchema )
module.exports = Comment;