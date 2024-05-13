const express = require('express')
const router = express.Router()
const CourseController = require('../controllers/courseControllers')


router.post('/', CourseController.Index)

module.exports = router