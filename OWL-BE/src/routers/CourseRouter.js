const express = require('express')
const router = express.Router()
const CourseController = require('../controllers/courseControllers')

router.post('/delete/:id', CourseController.DeleteCourse)
router.post('/update/:id', CourseController.UpdateCourse)
router.get('/get/:id', CourseController.GetCourse)
router.post('/create', CourseController.CreateCourse)

module.exports = router