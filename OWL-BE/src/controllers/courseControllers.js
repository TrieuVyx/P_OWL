const message = require("../constants/constansHttpStatus");
const CourseDTO  = require("../models/DTO/CourseDTO")
const CourseEntity = require("../models/Entity/CourseEntity")
class CourseController {
    async CreateCourse(req, res) {
        try {
            const data = req.body;
            if (
                data.CourseName != null ||  data.CourseName != undefined &&
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
            // return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: err.message })
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
                return res.status(message.OK.CODE).json({message:message.OK.MESSAGE});
            }
            return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });
        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
}

module.exports = new CourseController()