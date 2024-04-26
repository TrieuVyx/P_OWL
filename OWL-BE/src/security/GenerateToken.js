const jwt = require('jsonwebtoken')
const GenerationToken = async (payload) => {
    const expiresIn = '1h'
    const secretKey = process.env.SECRECKEY
    const token =  await jwt.sign(payload, secretKey, { expiresIn })
    return token
}


module.exports = {
    GenerationToken
}