const express = require('express')
const router = express.Router()
const LectureController = require('../controllers/lectureControllers')


router.post('/delete/:id', LectureController.DeleteLecture)
router.post('/update/:id', LectureController.UpdateLecture)
router.get('/get/:id', LectureController.GetLecture)
router.post('/create', LectureController.CreateLecture)

module.exports = router