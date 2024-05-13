class LoginDTO {
    AccessToken;
    FreshToken;
    Hierachy;
    constructor(Token, FreshToken, Hierachy) {
        this.AccessToken = Token
        this.FreshToken = FreshToken
        this.Hierachy = Hierachy
    }
}

module.exports = LoginDTO