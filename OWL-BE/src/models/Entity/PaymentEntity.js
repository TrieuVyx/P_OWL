const url = require('../../url')
const mongoose = require("mongoose")

const PaymentSchema = new mongoose.Schema({
    User: { type: mongoose.Schema.Types.ObjectId, ref: 'UserEntity' }
  

})


const Payment = mongoose.model("PaymentEntity", PaymentSchema )
module.exports = Payment;