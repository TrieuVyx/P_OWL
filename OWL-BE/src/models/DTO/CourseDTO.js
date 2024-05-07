class CourseDTO {
    CourseName;
    Description;
    Content;
    Tittle;
    constructor(CourseName,Tittle,Description,Content) {
        this.CourseName =CourseName
        this.Tittle =Tittle
        this.Description =Description
        this.Content =Content
    }
}

module.exports = CourseDTO