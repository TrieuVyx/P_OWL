const message = require("../constants/constansHttpStatus");
const LectureDTO = require("../models/DTO/Lecture/LectureDTO")
const LectureEntity = require("../models/Entity/LectureEntity")
const ListLectureDTO = require("../models/DTO/Lecture/ListLectureDTO")
class LectureControllers {
    // #region TẠO MỚI BÀI HỌC
    async CreateLecture(req, res) {
        try {
            const data = req.body;
            if (
                data.LectureName != null || data.LectureName != undefined &&
                data.Description != null || data.Description != undefined &&
                data.Tittle != null || data.Tittle != undefined &&
                data.Content != null || data.Content != undefined &&
                data.Ex != null || data.Ex != undefined
            ) {
                const lecture = await LectureEntity.create({
                    LectureName: data.LectureName,
                    Description: data.Description,
                    Tittle: data.Tittle,
                    Content: data.Content,
                    Ex: data.Ex,
                    Picture: data.Picture,
                    Video:data.Video
                });
                const result = new LectureDTO(lecture);
                return res.status(message.OK.CODE).json(result);
            }
            return res.status(message.NOT_FOUND.CODE).json(message.NOT_FOUND.MESSAGE)

        }

        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
    // #region CHI TIẾT BÀI HỌC

    async GetLecture(req, res) {
        try {
            const { id } = req.params
            if (id != null || id != "") {
                const lecture = await LectureEntity.findById(id);
                const result = new LectureDTO(lecture);
                return res.status(message.OK.CODE).json(result);
            }

            return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });

        }

        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
    // #region CẬP NHẬT BÀI HỌC
//
    async UpdateLecture(req, res) {
        try {
            const { id } = req.params;
            if (id != null || id != "") {
                const course = await LectureEntity.findByIdAndUpdate(id, req.body)
                const result = new LectureDTO(course);
                return res.status(message.OK.CODE).json(result);
            }
            return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });
        }

        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
    // #region XOÁ BÀI HỌC

    async DeleteLecture(req, res) {
        try {
            const { id } = req.params;
            if (id != null || id != "") {
                await LectureEntity.findByIdAndDelete(id)
                return res.status(message.OK.CODE).json({ message: message.OK.MESSAGE });
            }
            return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });

        }

        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
       // #region LẤY DANH SAHCS BÀI HỌC

    async GetListLecture(req, res) {
        try {
            const page = parseInt(req.query.page);
            const size = parseInt(req.query.size);
            if (!isNaN(page) && !isNaN(size)) {
                const ListLecture = await LectureEntity.find().skip(page * size).limit(size);
                const lectureListDTO = ListLecture.map((each) => {
                    return new ListLectureDTO(each.id, each.LectureName, each.Tittle, each.Description, each.Content,each.Ex,each.Industry,each.Picture);
                });
                return res.status(message.OK.CODE).json(lectureListDTO);
            } else {
                return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });
            }
        }

        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }


}
module.exports = new LectureControllers();