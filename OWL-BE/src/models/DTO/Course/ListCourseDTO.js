
class ListCourseDTO {
    Id;
    CourseName;
    Description;
    Content;
    Tittle;
   Picture;
    constructor(Id, CourseName, Tittle, Description, Content,Picture) {
        this.Id = Id;
        this.CourseName = CourseName
        this.Tittle = Tittle
        this.Description = Description
        this.Content = Content
        this.Picture = Picture
    }
}


module.exports = ListCourseDTO