const jwt = require('jsonwebtoken');

const verify = (req, res, next) =>{
    const token = req.header('auth-token')
    if(!token)
        return res.status(401).send("Accès refusé")
    try {
        const verified = jwt.verify(token, process.env.TOKEN)
        req.user = verified
        next()
    } catch (error) {
        res.status(400).send("Token invalid")
    }
}

module.exports = verify