class LectureDTO{
    LectureName;
    Description;
    Tittle;
    Industry;
    Content;
    Ex;
    Picture;
    Video;
    constructor(lecture){
        this.LectureName = lecture.LectureName;
        this.Description = lecture.Description;
        this.Tittle = lecture.Tittle;
        this.Content = lecture.Content;
        this.Ex = lecture.Ex;
        this.Industry = lecture.Industry;
        this.Picture = lecture.Picture;
        this.Video = lecture.Video;
    }
}

module.exports =  LectureDTO;