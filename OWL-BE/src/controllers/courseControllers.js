const message = require("../constants/constansHttpStatus");

class CourseController {
    async CreateCourse(req, res) {
        try {
            
        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
    async GetCourse(req, res) {
        try {

        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
    async UpdateCourse(req, res) {
        try {

        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
    async DeleteCourse(req, res) {
        try {

        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
}

module.exports = new CourseController()