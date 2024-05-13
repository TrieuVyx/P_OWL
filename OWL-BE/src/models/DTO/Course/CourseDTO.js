
class CourseDTO {
    CourseName;
    Description;
    Content;
    Tittle;
   
    constructor(course) {
        this.CourseName = course.CourseName
        this.Tittle = course.Tittle
        this.Description = course.Description
        this.Content = course.Content
    }
}


module.exports = CourseDTO