
class ListLectureDTO {
    Id;
    LectureName;
    Description;
    Tittle;
    Industry;
    Content;
    Ex;
    Picture;
    Video;
    constructor(Id, LectureName, Tittle, Description, Content,Ex,Industry,Picture,Video) {
        this.Id = Id;
        this.LectureName = LectureName;
        this.Description = Description;
        this.Tittle = Tittle;
        this.Content = Content;
        this.Picture = Picture;
        this.Ex = Ex;
        this.Industry = Industry;
        this.Video = Video
    }
}


module.exports = ListLectureDTO