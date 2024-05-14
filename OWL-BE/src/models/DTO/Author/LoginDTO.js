class LoginDTO {
    AccessToken;
    FreshToken;
    Hierachy;
    UserName;
    constructor(Token, FreshToken, Hierachy, UserName) {
        this.AccessToken = Token
        this.FreshToken = FreshToken
        this.Hierachy = Hierachy
        this.UserName = UserName
    }
}

module.exports = LoginDTO