class UserCreateDTO{
    UserName;
    Email;
    constructor(users){
        this.UserName = users.UserName,
        this.Email = users.Email
    }
}

module.exports = UserCreateDTO