const url = require('../../url')
const mongoose = url.mongoose;

const UserCourseDTO= new mongoose.Schema({
    User: { type: mongoose.Schema.Types.ObjectId, ref: 'UserEntity' },
    Course: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseEntity' }
})


const Comment = mongoose.model("CommentEntity", UserCourseDTO )
module.exports = Comment;