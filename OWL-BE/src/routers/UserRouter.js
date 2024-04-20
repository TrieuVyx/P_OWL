const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userControllers')
router.use('/', UserController.index)
module.exports = router