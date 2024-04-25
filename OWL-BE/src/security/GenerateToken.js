const jwt = require('jsonwebtoken')
const GenerationToken = async (payload) => {
    const expiresIn = '1h'
    const token =  await jwt.sign(payload, process.env.SECRECKEY, { expiresIn })
    return token
}


module.exports = {
    GenerationToken
}