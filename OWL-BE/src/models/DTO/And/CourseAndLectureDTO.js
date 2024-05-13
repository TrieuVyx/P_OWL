class CourseAndLetureDTO {
    CourseName;
    constructor(Course) {
        this.CourseName = Course.CourseName
        this.Course = Course.Lectures;
    }
}
module.exports = CourseAndLetureDTO