const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userControllers')


router.post('/add/:id', UserController.RegisterCoureUser)


router.post('/createUser', UserController.CreateUser)
router.post('/updateUser/:id', UserController.UpdateUser)
router.post('/deleteUser/:id', UserController.DeleteUser)
router.get('/getDetailUser/:id', UserController.GetUserDetail)
router.get('/getListUser', UserController.GetListUser)
router.get('/getUser/:UserName', UserController.GetUserByUserName)
router.use('/', UserController.index)
module.exports = router

