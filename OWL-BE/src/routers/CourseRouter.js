const express = require('express')
const router = express.Router()
const CourseController = require('../controllers/courseControllers')

router.post('/searchcourse', CourseController.SearchCourses)
router.post('/UpdateCourseImage', CourseController.UpdateCourseImage)
router.get('/getListCourse', CourseController.GetListCourse)
router.get('/GetListLectureInCourse/:id', CourseController.GenerateList)
router.post('/addLecture', CourseController.GenerateLecture)
router.post('/nonLecture', CourseController.GenerateNonLecture)
router.post('/deleteCourse/:id', CourseController.DeleteCourse)
router.post('/updateCourse/:id', CourseController.UpdateCourse)
router.get('/getDetailCourse/:id', CourseController.GetCourse)
router.post('/createCourse', CourseController.CreateCourse)

module.exports = router