const express = require('express')
const router = express.Router()
const CommentControllers = require('../controllers/commentControllers')


router.post('/delete/:id', CommentControllers.DeleteComment)
router.post('/update/:id', CommentControllers.UpdateComment)
router.get('/get/:id', CommentControllers.GetComment)
router.post('/create', CommentControllers.CreateComment)

module.exports = router