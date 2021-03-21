const jwt = require('jsonwebtoken');

// ! Check user authentication through jwt token
module.exports.isAuth = (req, res, next) => {
    // Extract authorization header
    // const authHeader = req.get('Authorization');
    const authHeader = req.headers.authorization;
    // If not set Authorization header, throw error
    if (!authHeader) {
        const error = new Error('Not authenticated!');
        error.statusCode = 401;
        throw error;
    }

    // Decode the token
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, process.env.SECRET_APP_KEY);
    } catch (error) {
        error.statusCode = 500;
        throw error;
    }
    // If the token is not verified, then throw error
    if (!decodedToken) {
        const error = new Error('Not authenticated!');
        error.statusCode = 401;
        throw error;
    }

    // Fetch info from the token pass to next middleware
    req.userId = decodedToken.userId;
    req.userEmail = decodedToken.email;

    next();
};
