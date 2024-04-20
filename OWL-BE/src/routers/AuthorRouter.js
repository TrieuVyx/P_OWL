const express = require('express')
const router = express.Router()
const AuthorController = require('../controllers/authorControllers')


router.use('/login', AuthorController.AuthorLogin)
router.post('/register', AuthorController.AuthorRegister)

module.exports = router