const url = require('../../url')
const mongoose = require("mongoose")

const TrackSchema = new mongoose.Schema({
    Status:{
        type:String,
        default:"Not Yet"
    },
    User: { type: mongoose.Schema.Types.ObjectId, ref: 'UserEntity' },
    Lecture: { type: mongoose.Schema.Types.ObjectId, ref: 'LectureEntity' }

})


const Track = mongoose.model("TrackEntity", TrackSchema )
module.exports = Track;