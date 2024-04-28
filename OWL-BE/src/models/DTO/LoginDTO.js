class LoginDTO{
    AccessToken;
    FreshToken;
    constructor(Token, FreshToken){
        this.AccessToken = Token
        this.FreshToken = FreshToken
    }
}

module.exports = LoginDTO