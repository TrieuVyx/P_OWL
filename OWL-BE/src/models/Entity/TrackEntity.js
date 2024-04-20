const url = require('../../url')
const mongoose = url.mongoose;

const TrackSchema = new mongoose.Schema({
    User: { type: mongoose.Schema.Types.ObjectId, ref: 'UserEntity' }

})


const Track = mongoose.model("TrackEntity", TrackSchema )
module.exports = Track;