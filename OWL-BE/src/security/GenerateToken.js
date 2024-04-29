const jwt = require('jsonwebtoken')
const {jwtDecode} = require('jwt-decode')
const secretKey = process.env.SECRECKEY
const expiresIn = '1h'
const refreshExpired = '5m';

const GenerationToken = async (payload) => {
    const token = await jwt.sign(payload, secretKey, {expiresIn: expiresIn })
    return token
}
const GetRefeshToken = async (Token) => {
    const freshPayload = {
        Token
    }
    const freshToken = await jwt.sign(freshPayload, secretKey, { expiresIn: refreshExpired })
    return freshToken;
}
const VerifyTokenPermision = async (Token) =>{
    const decoded  = await jwtDecode(Token)
    return decoded.Hierachy
}
module.exports = {
    GenerationToken,
    GetRefeshToken,
    VerifyTokenPermision
}