class CourseDTO {
    CourseName;
    Description;
    Content;
    Tittle;
    constructor(course) {
        this.Tittle = course.Tittle
        this.CourseName = course.CourseName
        this.Description = course.Description
        this.Content = course.Content
    }
}

module.exports = CourseDTO