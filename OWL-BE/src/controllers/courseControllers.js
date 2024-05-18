const message = require("../constants/constansHttpStatus");
const CourseAndLetureDTO = require("../models/DTO/And/CourseAndLectureDTO");
const CourseDTO = require("../models/DTO/Course/CourseDTO");
const ListCourseDTO = require("../models/DTO/Course/ListCourseDTO");
const CourseEntity = require("../models/Entity/CourseEntity")
const LectureEntity = require("../models/Entity/LectureEntity")
const ListLectureInCourseDTO = require("../models/DTO/Course/ListLectureInCourse");
const LectureInCourseDTO = require("../models/DTO/Course/LectureInCourseDTO")

class CourseController {
    //#region TẠO KHOÁ HỌC
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
                    Picture:data.Picture
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
    //#region CHI TIÊT KHOÁ HỌC

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
    //#region CẬP NHẬT KHOÁ HỌC

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
    //#region XOÁ KHOÁ HỌC

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
    //#region THÊM MỚI BÀI HỌC VÀO KHOÁ HỌC

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
                const result = new CourseAndLetureDTO(Course)
                return res.status(message.OK.CODE).json(result)
            }
            return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });
        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
    // #region TẠO KHOÁ HỌC KHI CHƯA CÓ BÀI HỌC
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
    //#region LẤY DANH SÁCH BÀI HỌC NẰM TRONG KHOÁ HỌC

    async GenerateList(req, res) {
        try {
            // const CourseID = req.body.CourseID;
            const {id} = req.params;
            if (id != null || id != "") {
                try {
                    const page = parseInt(req.query.page);
                    const size = parseInt(req.query.size);
                    if (!isNaN(page) && !isNaN(size)) {
                        const Course = await CourseEntity.findById(id);
                        const ListCourse = new ListLectureInCourseDTO(Course);
                        const lectureIDs = ListCourse.Lectures;
                        const lectures = await LectureEntity.find({ _id: { $in: lectureIDs } }).skip(page * size).limit(size);
                        const ListLectureInCourse = lectures.map(lecture => {
                            return new LectureInCourseDTO(lecture.id,lecture.LectureName,lecture.Tittle)
                        });
                        return res.status(message.OK.CODE).json(ListLectureInCourse);
                    }
                    return res.status(message.FORBIDDEN.CODE).json({ message: message.FORBIDDEN.MESSAGE });
                } catch (err) {
                    return res.status(message.BAD_REQUEST.CODE).json({ message: message.BAD_REQUEST.MESSAGE });
                }
            }
            return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });
        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
    //#region LẤY DANH SÁCH KHOÁ HỌC

    async GetListCourse(req, res) {
        try {
            const page = parseInt(req.query.page);
            const size = parseInt(req.query.size);
            if (!isNaN(page) && !isNaN(size)) {
                const ListCourse = await CourseEntity.find().skip(page * size).limit(size);
                const courseListDTO = ListCourse.map((each) => {
                    return new ListCourseDTO(each.id, each.CourseName, each.Tittle, each.Description, each.Content,each.Picture);
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
    //#region CẬP NHẬT HÌNH ẢNH KHOÁ HỌC
    async UpdateCourseImage(req, res) {
        try {
            const courseID = req.body.CourseID;
            if (!courseID) {
                return res.status(400).json({ message: 'ID khóa học không hợp lệ.' });
            }
            const picture = req.body.Picture;
            if (!picture) {
                return res.status(400).json({ message: 'Hình ảnh không hợp lệ.' });
            }

            const updatedCourse = await CourseEntity.findByIdAndUpdate(
                courseID,
                { Picture: picture },
                { new: true }
            );
            const result = new CourseDTO(updatedCourse)
            if (!result) {
                return res.status(404).json({ message: 'Không tìm thấy khóa học.' });
            }

            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json({ message: 'Lỗi máy chủ.' });
        }
    }

   

}

module.exports = new CourseController()