const message = require("../constants/constansHttpStatus");

class PaymentControllers {
    async CreatePayment(req, res) {
        try {

        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })


        }
    }
    async GetPayment(req, res) {
        try {

        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })


        }
    }
    async UpdatePayment(req, res) {
        try {

        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })


        }
    }
    async DeletePayment(req, res) {
        try {

        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })


        }
    }
}

module.exports = new PaymentControllers()