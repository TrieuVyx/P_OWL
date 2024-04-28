const jwt = require('jsonwebtoken')
const message = require('../constants/constansHttpStatus')
async function Authenticate(req, res, next) {
    try {
        const secretKey = process.env.SECRECKEY
        if (req.path === '/api/author/login' || req.path === '/api/author/register') {
            return next();
        }
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(message.UNAUTHORIZED).json({ message: message.UNAUTHORIZED });
        }
        const token = authHeader.split(' ')[1];
        const decoded = await jwt.verify(token, secretKey);
        req.user = decoded.user;
        next();
    } catch (error) {
        return res.status(message.UNAUTHORIZED).json({ message: message.UNAUTHORIZED });
    }
}
module.exports = Authenticate