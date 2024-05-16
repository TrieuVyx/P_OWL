
class CourseDTO {
    CourseName;
    Description;
    Content;
    Tittle;
    Picture
    constructor(course) {
        this.CourseName = course.CourseName
        this.Tittle = course.Tittle
        this.Description = course.Description
        this.Content = course.Content
        this.Picture = course.Picture
    }
}


module.exports = CourseDTO