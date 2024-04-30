const message = require("../constants/constansHttpStatus");
const UserEntity = require("../models/Entity/UserEntity")
const ListUserDTO = require("../models/DTO/ListUserDTO")
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
                    return new ListUserDTO(user.UserName, user.FullName, user.Email, user.Phone, user.Address, user.Hierachy, user.Image, );
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
    async GetUserDetail (req,res){
        try{
            
        }
        catch(err){

        }
    }

}
module.exports = new UserController()