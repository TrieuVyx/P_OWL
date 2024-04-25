const bcrypt = require("bcrypt")
const UserCreateDTO = require("../models/DTO/UserCreateDTO")
const UserEntity = require("../models/Entity/UserEntity")
const message = require("../constants/constansHttpStatus");
const { GenerationToken } = require('../security/GenerateToken');
const LoginDTO = require("../models/DTO/LoginDTO");

class LoginController {
    async AuthorLogin(req, res) {
        try {
            const data = req.body;
            if (
                data.UserName != null || data.UserName != undefined &&
                data.Email != null || data.Email != undefined &&
                data.PassWord != null || data.PassWord != undefined
            ) {
                const payload = await UserEntity.findOne({ Email: data.Email })

                if (!payload) {
                    return res.status(message.NOT_FOUND.CODE).json({ message: "EMAIL NOT FOUND" })
                }
                const validationPass = await bcrypt.compare(
                    data.PassWord,
                    payload.PassWord
                )
                if (!validationPass) {
                    return res.status(message.NOT_FOUND.CODE).json({ message: "PASSWORD INCORRECT" })
                }
                if (payload && validationPass) {
                    let userInfor = {
                        UserName: payload.UserName,
                        Email: payload.Email,
                        PassWord: payload.PassWord,
                        Hierachy: payload.Hierachy
                    }
                    const Token = await GenerationToken(userInfor);

                    const result = new LoginDTO(Token);
                    return res.status(message.OK.CODE).json(result);
                }
                return res.status(message.BAD_REQUEST.CODE).json(message.BAD_REQUEST.MESSAGE)
            }
            return res.status(message.NOT_FOUND.CODE).json(message.NOT_FOUND.MESSAGE)
        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: err.message });
        }
    }
    async AuthorRegister(req, res) {
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
                    PassWord: hashPass
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
}
module.exports = new LoginController()