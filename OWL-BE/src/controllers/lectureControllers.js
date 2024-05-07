const message = require("../constants/constansHttpStatus");
const LectureDTO = require("../models/DTO/LectureDTO")
const LectureEntity = require("../models/Entity/LectureEntity")
class LectureControllers {
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

    async DeleteLecture(req, res) {
        try {
            const { id } = req.params;
            if (id != null || id != "") {
                await LectureEntity.findByIdAndDelete(id)
                return res.status(message.OK.CODE).json({message:message.OK.MESSAGE});
            }
            return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });

        }

        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }

}
module.exports = new LectureControllers();