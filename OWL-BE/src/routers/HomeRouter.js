const expess = require('express')
const router = expess.Router()
const HomeControllers = require('../controllers/homeControllers')

router.use('/', HomeControllers.index)

module.exports = router