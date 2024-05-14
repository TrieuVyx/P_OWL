const express = require('express')
const router = express.Router()
const LectureController = require('../controllers/lectureControllers')

router.get('/getListLecture', LectureController.GetListLecture)
router.post('/deleteLecture/:id', LectureController.DeleteLecture)
router.post('/updateLecture/:id', LectureController.UpdateLecture)
router.get('/getDetailLecture/:id', LectureController.GetLecture)
router.post('/createLecture', LectureController.CreateLecture)

module.exports = router