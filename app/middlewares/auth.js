const jwt = require('jsonwebtoken');

module.exports = {
  auth: (req, res, next)=> {
    try {
      const decoded = jwt.verify(req.headers.token, 'secret');
      req.user = decoded.user; //token user login
      next();
    } catch (err) {
      res.status(401).json({messaage: 'Invalid token'});
    }
  }
}