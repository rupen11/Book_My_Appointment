const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
    try {
        const token = req.header("token");
        if (!token) return res.status(400).json("Please authenticate with valid user");

        const data = jwt.verify(token, process.env.SECRET_KEY);
        req.id = data._id;
        req.number = data.number;
        next();
    }

    catch (error) {
        console.log(error);
    }
}

module.exports = authentication;