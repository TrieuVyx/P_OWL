
class ListLectureDTO {
    Id;
    LectureName;
    Description;
    Tittle;
    Industry;
    Content;
    Ex;
   
    constructor(Id, LectureName, Tittle, Description, Content,Ex,Industry) {
        this.Id = Id;
        this.LectureName = LectureName;
        this.Description = Description;
        this.Tittle = Tittle;
        this.Content = Content;
        this.Ex = Ex;
        this.Industry = Industry;
    }
}


module.exports = ListLectureDTO