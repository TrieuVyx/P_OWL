class CourseAndLetureDTO {
    CourseName;
    constructor(Course) {
        this.CourseName = Course.CourseName
        this.Lectures = Course.Lectures;
    }
}
module.exports = CourseAndLetureDTO