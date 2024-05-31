const express = require('express')
const router = express.Router()
const TrackControllers = require('../controllers/trackControllers')


router.post('/checkprocessing/:id', TrackControllers.checkProcessing)
router.post('/checkCourse', TrackControllers.checkStatus)
router.post('/registerCourse', TrackControllers.RegisterCourse)
router.post('/delete/:id', TrackControllers.DeleteTrack)
router.post('/update/:id', TrackControllers.UpdateTrack)
router.get('/get/:id', TrackControllers.GetTrack)
router.post('/create', TrackControllers.CreateTrack)

module.exports = router