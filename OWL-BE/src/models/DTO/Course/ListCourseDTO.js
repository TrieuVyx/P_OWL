
class ListCourseDTO {
    Id;
    CourseName;
    Description;
    Content;
    Tittle;
   
    constructor(Id, CourseName, Tittle, Description, Content) {
        this.Id = Id;
        this.CourseName = CourseName
        this.Tittle = Tittle
        this.Description = Description
        this.Content = Content
    }
}


module.exports = ListCourseDTO