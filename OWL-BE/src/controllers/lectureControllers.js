const message = require("../constants/constansHttpStatus");

class LectureControllers {
    async CreateLecture(req, res) {
        try {


        }

        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
    async GetLecture(req, res) {
        try {


        }

        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }

    async UpdateLecture(req, res) {
        try {


        }

        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }

    async DeleteLecture(req, res) {
        try {


        }

        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }

}
module.exports = new LectureControllers();