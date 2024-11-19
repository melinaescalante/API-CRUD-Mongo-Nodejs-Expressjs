const jwt = require('jsonwebtoken')
require('dotenv').config();
const secretKey = process.env.SECRETKEY

//Validamos jwt
const validateToken = (req, res, next) => {
    const auth = req.headers.authorization
    if (!auth) {
        res.status(401).json({ msg: 'Falta el token' })
        return
    }
    token = auth.split(' ')[1]
    console.log(token )
    jwt.verify(token, secretKey, (error, decoded) => {
        if (error) {
            return res.status(403).json({ msg: 'Token inválido' })

        }
        // req.userId = decoded.userId
    })
    next();
}
module.exports = validateToken 