const message = require("../constants/constansHttpStatus");


class CommentControllers {
    async CreateComment(req, res) {
        try {

        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })

        }
    }
    async GetComment(req, res) {
        try {

        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })

        }
    }
    async UpdateComment(req, res) {
        try {

        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })

        }
    }
    async DeleteComment(req, res) {
        try {

        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })

        }
    }
}
module.exports = new CommentControllers();