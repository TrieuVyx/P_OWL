const message = require("../constants/constansHttpStatus");
const UserEntity = require("../models/Entity/UserEntity")
const ListUserDTO = require("../models/DTO/ListUserDTO");
const DetailUserDTO = require("../models/DTO/DetailUserDTO");
const bcrypt = require("bcrypt")
const UserCreateDTO = require("../models/DTO/UserCreateDTO");
const CourseAndUserDTO = require("../models/DTO/CourseAndUserDTO");
class UserController {
    index(req, res) {
        res.send('THIS IS PAGE USER')
    }
    async GetListUser(req, res) {
        try {
            const page = parseInt(req.query.page);
            const size = parseInt(req.query.size);
            if (!isNaN(page) && !isNaN(size)) {
                const ListUser = await UserEntity.find().skip(page * size).limit(size);
                const userListDTO = ListUser.map((user) => {
                    return new ListUserDTO(user.id, user.UserName, user.FullName, user.Email, user.Phone, user.Address, user.Hierachy, user.Image);
                });
                return res.status(message.OK.CODE).json(userListDTO);
            } else {
                return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });
            }
        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
    async CreateUser(req, res) {
        try {
            const data = req.body;
            const salt = await bcrypt.genSalt(10);
            const hashPass = await bcrypt.hash(data.PassWord, salt);
            if (
                data.UserName != null || data.UserName != undefined &&
                data.Email != null || data.Email != undefined &&
                data.PassWord != null || data.PassWord != undefined
            ) {
                const users = await UserEntity.create({
                    UserName: data.UserName,
                    Email: data.Email,
                    PassWord: hashPass,
                    Hierachy: data.Hierachy
                });
                const result = new UserCreateDTO(users);
                return res.status(message.OK.CODE).json(result);
            }
            return res.status(message.NOT_FOUND.CODE).json(message.NOT_FOUND.MESSAGE)
        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: err.message })
        }
    }
    async GetUserDetail(req, res) {
        try {
            const { id } = req.params
            if (id != null || id != "") {
                const user = await UserEntity.findById(id);
                return res.status(message.OK.CODE).json(new DetailUserDTO(user.UserName, user.FullName, user.Email, user.Phone, user.Address, user.Hierachy, user.Image));
            }
            return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });
        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
    async DeleteUser(req, res) {
        try {
            const { id } = req.params;
            if (id != null || id != "") {
                await UserEntity.findOneAndDelete(id);
                return res.status(message.OK.CODE).json({ message: message.OK.MESSAGE });
            }
            return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });

        } catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }

    async UpdateUser(req, res) {
        try {
            const { id } = req.params;
            if (id != null || id != "") {
                const user = await UserEntity.findByIdAndUpdate(id, req.body)
                return res.status(message.OK.CODE).json(new DetailUserDTO(user.UserName, user.FullName, user.Email, user.Phone, user.Address, user.Hierachy, user.Image));
            }
            return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });
        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }

    async RegisterCoureUser(req, res) {
        try {
            const { id } = req.params;
            //tìm user -> user thêm mới id khóa học 
            // lưu lại id khóa học
            // kiểm tra id tồn tại thì học tiếp
            if (id != null || id != "") {
                const IDCourse  = req.body.IDCourse;
                if (IDCourse == null || IDCourse == "") {
                    return res.status(message.NOT_FOUND.CODE).json({ message: "ID Not Exists!"});
                }
                const user = await UserEntity.findByIdAndUpdate(id, req.body);
                if (user) {
                    let CourseList = user.Course
                    CourseList.push(IDCourse);
                    await user.save();
                    const result = new CourseAndUserDTO(user);
                    return res.status(message.OK.CODE).json(result);
                }
                return res.status(message.NOT_FOUND.CODE).json({ message: message.NOT_FOUND.MESSAGE });
            }
            return res.status(message.BAD_REQUEST.CODE).json({ message: message.BAD_REQUEST.MESSAGE });
        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
        }
    }
}
module.exports = new UserController()