const UserCreateDTO = require("../models/DTO/UserCreateDTO")
const bcrypt = require("bcrypt")
const UserEntity = require("../models/Entity/UserEntity")
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
                data?.PassWord != null || data.PassWord != undefined
            ) {
                const Users = new UserEntity({
                    UserName: data.UserName,
                    Email: data.Email,
                    PassWord: hashPass
                });
                const result = new UserCreateDTO(Users);
                res.status(200).json(result);

            }
            res.status(404).json("Not Found")
        }
        catch (err) {
            res.status(500).json({ message: err.message })

        }

        {

        }

    }
}
module.exports = new LoginController()