
class CourseDTO {
    Id;
    CourseName;
    Description;
    Content;
    Tittle;
    Picture;
    constructor(course) {
        this.Id = course.Id
        this.CourseName = course.CourseName
        this.Tittle = course.Tittle
        this.Description = course.Description
        this.Content = course.Content
        this.Picture = course.Picture
    }
}


module.exports = CourseDTO