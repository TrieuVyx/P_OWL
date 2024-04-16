class DashController {
    index(req,res){
        res.render('dashboard')
    }
}
module.exports = new DashController()