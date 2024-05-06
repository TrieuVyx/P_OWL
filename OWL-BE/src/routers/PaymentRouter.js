const express = require('express')
const router = express.Router()
const PaymentController = require('../controllers/paymentControllers')


router.post('/delete/:id', PaymentController.DeletePayment)
router.post('/update/:id', PaymentController.UpdatePayment)
router.get('/get/:id', PaymentController.GetPayment)
router.post('/create', PaymentController.CreatePayment)

module.exports = router