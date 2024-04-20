class UserController {
    index(req,res){
        res.send('HOME')
    }
}
module.exports = new UserController()