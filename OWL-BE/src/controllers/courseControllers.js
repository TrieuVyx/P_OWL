class CourseController {

    Index(req,res){
        res.send('course')
    }
}
module.exports = new CourseController()