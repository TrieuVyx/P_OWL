class LoginDTO {
    AccessToken;
    FreshToken;
    Hierachy;
    UserName;
    Id;
    constructor(Token, FreshToken, Hierachy, UserName,IDUser) {
        this.AccessToken = Token
        this.FreshToken = FreshToken
        this.Hierachy = Hierachy
        this.UserName = UserName
        this.Id = IDUser
    }
}

module.exports = LoginDTO