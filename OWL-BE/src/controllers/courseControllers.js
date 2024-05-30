const message = require("../constants/constansHttpStatus");
const CourseAndLetureDTO = require("../models/DTO/And/CourseAndLectureDTO");
const CourseDTO = require("../models/DTO/Course/CourseDTO");
const ListCourseDTO = require("../models/DTO/Course/ListCourseDTO");
const CourseEntity = require("../models/Entity/CourseEntity")
const LectureEntity = require("../models/Entity/LectureEntity")
const ListLectureInCourseDTO = require("../models/DTO/Course/ListLectureInCourse");
const LectureInCourseDTO = require("../models/DTO/Course/LectureInCourseDTO")
const UserEntity = require("../models/Entity/UserEntity")
const UserCourseEntity = require("../models/contactEntity/UserCourseRegisterEntity")
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
                    Picture: data.Picture
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
    //# THÊM MỚI BÀI GIẢNG VÀO KHÓA HỌC NÊU TỒN TẠI RỒI THÌ KHÔNG CHO ADD
    async AddLectureToCourse(req,res){
        try {
            const IDCourse = req.body.IDCourse;
            const IDLecture = req.body.IDLecture;
          
            // Kiểm tra nếu IDCourse hoặc IDLecture không hợp lệ
            if (IDCourse == null || IDCourse == "" || IDLecture == null || IDLecture == "") {
              return res.status(message.NOT_FOUND.CODE).json({ message: "ID Not Exists!" });
            }
          
            // Tìm course tương ứng
            const Course = await CourseEntity.findById(IDCourse);
          
            // Kiểm tra nếu không tìm thấy course
            if (!Course) {
              return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });
            }
          
            // Kiểm tra nếu lecture đã có trong course
            if (Course.Lectures.includes(IDLecture)) {
              return res.status(message.BAD_REQUEST.CODE).json({ message: "Lecture already exists in other course." });
            }
          
            // Thêm lecture vào course
            Course.Lectures.push(IDLecture);
            await Course.save();
          
            const result = new CourseAndLetureDTO(Course);
            return res.status(message.OK.CODE).json(result);
          } catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE });
          }
    }

    //#region XÓA  BÀI HỌC RA KHỎI KHOÁ HỌC

    async RemoveLectureFromCourse(req, res) {
        try {
            const { IDCourse, IDLecture } = req.query;

            if (!IDCourse || !IDLecture) {
                return res
                    .status(message.NOT_FOUND.CODE)
                    .json({ message: "IDCourse and IDLecture are required" });
            }

            const course = await CourseEntity.findById(IDCourse);
            if (!course) {
                return res
                    .status(message.NOT_FOUND.CODE)
                    .json({ message: "Course not found" });
            }

            course.Lectures = course.Lectures.filter((lectureId) => lectureId !== IDLecture);
            course.Lectures.pull(IDLecture);
            await course.save();

            const result = new CourseAndLetureDTO(course);
            return res.status(message.OK.CODE).json(result);
        } catch (err) {
            return res
                .status(message.INTERNAL_SERVER_ERROR.CODE)
                .json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE });
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
    //#region LẤY DANH SÁCH BÀI HỌC NẰM TRONG KHOÁ HỌC CÓ PAGINATION

    async GenerateList(req, res) {
        try {
            // const CourseID = req.body.CourseID;
            const { id } = req.params;
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
                            return new LectureInCourseDTO(lecture.id, lecture.LectureName, lecture.Tittle)
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
    //#region LẤY DANH SÁCH BÀI HỌC NẰM TRONG KHOÁ HỌC KO CÓ PAGINATION
    async GetLectureInCourse(req, res) {
        try {
            const { id } = req.params;
            if (id != null && id !== "") {
                try {
                    const Course = await CourseEntity.findById(id);
                    const ListCourse = new ListLectureInCourseDTO(Course);
                    const lectureIDs = ListCourse.Lectures;
                    const lectures = await LectureEntity.find({ _id: { $in: lectureIDs } });
                    const ListLectureInCourse = lectures.map((lecture) => {
                        return new LectureInCourseDTO(lecture.id, lecture.LectureName, lecture.Tittle);
                    });
                    return res.status(message.OK.CODE).json(ListLectureInCourse);
                } catch (err) {
                    return res.status(message.BAD_REQUEST.CODE).json({ message: message.BAD_REQUEST.MESSAGE });
                }
            }
            return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });
        } catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE });
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
                    return new ListCourseDTO(each.id, each.CourseName, each.Tittle, each.Description, each.Content, each.Picture);
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
    //#region TÌM KIẾM KHÓA HỌC

    async SearchCourses(req, res) {
        try {
            const { CourseName, Description, TypeCourse } = req.body; // Get search parameters

            let query = {};
            if (CourseName) {
                query.CourseName = { $regex: CourseName, $options: 'i' };
            }
            if (Description) {
                query.Description = { $regex: Description, $options: 'i' };
            }
            if (TypeCourse) {
                query.TypeCourse = TypeCourse;
            }

            const courses = await CourseEntity.find(query);
            if (courses.length > 0) {
                const results = courses.map(each => new ListCourseDTO(each.id, each.CourseName, each.Tittle, each.Description, each.Content, each.Picture));
                return res.status(message.OK.CODE).json(results);
            } else {
                return res.status(message.NOT_FOUND.CODE).json(message.NOT_FOUND.MESSAGE);
            }
        } catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE });
        }
    }
    //#region ĐĂNG KÝ KHÓA HỌC
    async RegisterCourse(req, res) {
        try {
          const { IDUser, IDCourse } = req.body;
      
          const existingEnrollment = await UserCourseEntity.findOne({
            User: IDUser,
            Course: IDCourse
          });
      
          if (existingEnrollment) {
            return res
              .status(message.BAD_REQUEST.CODE)
              .json({ message: 'User is already enrolled in the course.' });
          }
      
          const user = await UserEntity.findById(IDUser);
          if (user) {
            user.Course.push(IDCourse);
            await user.save();
          } else {
            return res
              .status(message.NOT_FOUND.CODE)
              .json({ message: 'User not found.' });
          }
      
          const newEnrollment = new UserCourseEntity({
            User: IDUser,
            Course: IDCourse,
            status: 'IsStuding'
          });
      
          await newEnrollment.save();
      
          return res
            .status(message.OK.CODE)
            .json({ message: 'Course registration successful.' });
        } catch (error) {
          console.error(error);
          return res
            .status(message.INTERNAL_SERVER_ERROR.CODE)
            .json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE });
        }
      }
}

module.exports = new CourseController()