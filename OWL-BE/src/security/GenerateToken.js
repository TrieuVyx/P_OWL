const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRECKEY
const expiresIn = '5m'
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

module.exports = {
    GenerationToken,
    GetRefeshToken
}