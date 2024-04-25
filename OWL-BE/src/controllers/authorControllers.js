const bcrypt = require("bcrypt")
const UserCreateDTO = require("../models/DTO/UserCreateDTO")
const UserEntity = require("../models/Entity/UserEntity")
const message = require("../constants/constansHttpStatus");


class LoginController {
    AuthorLogin(req, res) {
        res.send('home');
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
                return res.status(message.OK).json(result);
            }
            return res.status(404).json(message.NOT_FOUND)
        }
        catch (err) {
            return res.status(500).json({ message: err.message })
        }
    }
}
module.exports = new LoginController()