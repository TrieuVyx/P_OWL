const url = require('../../url')
const mongoose = url.mongoose;

const PaymentSchema = new mongoose.Schema({
    UserName:{
        type:String,
        default:"",
        unique:""

    }
    

})


const Payment = mongoose.model("PaymentEntity", PaymentSchema )
module.exports = Payment;