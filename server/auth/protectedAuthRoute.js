
const SECRET_KEY = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
    const token = req.cookies.authToken;

    if (!token) {
        res.status(403).json({ message: 'Access Denied'});
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message:'Invalid token' })
        }
        req.user = decoded;
        next();
    })

}

export default verifyToken;