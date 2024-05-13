class CourseAndUserDTO {
    UserName;
    Course;
    constructor(user) {
        this.UserName = user.UserName
        this.Course = user.Course
        
    }
}

module.exports = CourseAndUserDTO