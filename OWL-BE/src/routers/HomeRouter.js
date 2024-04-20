const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/homeControllers')
router.use('/', HomeController.index)
module.exports = router
