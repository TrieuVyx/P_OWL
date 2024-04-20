const url = require('../../url')
const mongoose = url.mongoose;

const CommentSchema = new mongoose.Schema({
    UserName:{
        type:String,
        default:"",
        unique:""

    }
    

})


const Comment = mongoose.model("CommentEntity", CommentSchema )
module.exports = Comment;