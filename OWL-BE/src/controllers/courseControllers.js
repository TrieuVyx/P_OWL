const message = require("../constants/constansHttpStatus");
const CourseAndLetureDTO = require("../models/DTO/And/CourseAndLectureDTO");
const CourseDTO = require("../models/DTO/Course/CourseDTO");
const ListCourseDTO = require("../models/DTO/Course/ListCourseDTO");
const CourseEntity = require("../models/Entity/CourseEntity")
const LectureEntity = require("../models/Entity/LectureEntity")
class CourseController {
    async CreateCourse(req, res) {
        try {
            const data = req.body;
            if (
                data.CourseName != null || data.CourseName != undefined &&
                data.Tittle != null || data.Tittle != undefined &&
                data.Description != null || data.Description != undefined &&
                data.Content != null || data.Content != undefined
            ) {
                const course = await CourseEntity.create({
                    CourseName: data.CourseName,
                    Tittle: data.Tittle,
                    Content: data.Content,
                    Description: data.Description,
                });
                const result = new CourseDTO(course);
                return res.status(message.OK.CODE).json(result);
            }
            return res.status(message.NOT_FOUND.CODE).json(message.NOT_FOUND.MESSAGE)
        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
    async GetCourse(req, res) {
        try {
            const { id } = req.params
            if (id != null || id != "") {
                const course = await CourseEntity.findById(id);
                const result = new CourseDTO(course);
                return res.status(message.OK.CODE).json(result);
            }

            return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });
        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
    async UpdateCourse(req, res) {
        try {
            const { id } = req.params;
            if (id != null || id != "") {
                const course = await CourseEntity.findByIdAndUpdate(id, req.body)
                const result = new CourseDTO(course);
                return res.status(message.OK.CODE).json(result);
            }
            return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });
        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
    async DeleteCourse(req, res) {
        try {
            const { id } = req.params;
            if (id != null || id != "") {
                await CourseEntity.findByIdAndDelete(id)
                return res.status(message.OK.CODE).json({ message: message.OK.MESSAGE });
            }
            return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });
        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
    // tạo khóa học khi có bài học
    async GenerateLecture(req, res) {
        try {
            const IDCourse = req.body.IDCourse;
            const IDLecture = req.body.IDLecture;
            // const data = req.body;
            if (IDCourse == null || IDCourse == "" && IDLecture == null || IDLecture == "") {
                return res.status(message.NOT_FOUND.CODE).json({ message: "ID Not Exists!" });
            }
            const Course = await CourseEntity.findByIdAndUpdate(IDCourse)
            if (Course) {
                let LectureList = Course.Lectures

                LectureList.push(IDLecture);
                await Course.save();
                const result = new CourseAndLecureDTO(Course)
                return res.status(message.OK.CODE).json(result)
            }
            return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });
        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
    // tạo khóa học chưa có bài học 
    async GenerateNonLecture(req, res) {
        try {
            const IDCourse = req.body.IDCourse;
            const data = req.body;
            if (IDCourse == null || IDCourse == "") {
                return res.status(message.NOT_FOUND.CODE).json({ message: "ID Not Exists!" });
            }

            if (
                data.LectureName != null || data.LectureName != undefined &&
                data.Industry != null || data.Industry != undefined &&
                data.Description != null || data.Description != undefined &&
                data.Content != null || data.Content != undefined &&
                data.Ex != null || data.Ex != undefined &&
                data.Tittle != null || data.Tittle != undefined
            ) {
                const Course = await CourseEntity.findByIdAndUpdate(IDCourse)
                if (Course) {
                    let LectureList = Course.Lectures
                    const lecture = await LectureEntity.create({
                        LectureName: data.LectureName,
                        Industry: data.Industry,
                        Description: data.Description,
                        Tittle: data.Tittle,
                        Content: data.Content,
                        Ex: data.Ex
                    });
                    let IDLecture = lecture.id
                    LectureList.push(IDLecture);
                    await Course.save();
                    const result = new CourseAndLetureDTO(Course)
                    return res.status(message.OK.CODE).json(result)
                }

                return res.status(message.BAD_REQUEST.CODE).json({ message: message.BAD_REQUEST.MESSAGE });
            }
            return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });
        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
    async GenerateList(req, res) {
        try {
            const course = await CourseEntity.find();
            if (course) {
                // const result = new CourseDTO(course.CourseName, course.Tittle, course.Description, course.Content);
                const result = course.map((each) => {
                    return new ListCourseDTO(each.CourseName, each.Tittle, each.Description, each.Content);
                })
                return res.status(message.OK.CODE).json(result);
            }
            return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });
        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
    async GetListCourse(req, res) {
        try {
            const page = parseInt(req.query.page);
            const size = parseInt(req.query.size);
            if (!isNaN(page) && !isNaN(size)) {
                const ListCourse = await CourseEntity.find().skip(page * size).limit(size);
                const courseListDTO = ListCourse.map((each) => {
                    return new ListCourseDTO(each.id,each.CourseName, each.Tittle, each.Description, each.Content);
                });
                return res.status(message.OK.CODE).json(courseListDTO);
            } else {
                return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });
            }
        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
}

module.exports = new CourseController()