const jwt = require("jsonwebtoken")

verifyToken = (req, res, next) => {

  if(!req.session || !req.session.token) {
    return res.status(403).send({
        message: "No token provided!",
      });
  }  
  let token = req.session.token;

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token,
             process.env.TOKEN_SECRET,
             (err, decoded) => {
              if (err) {
                return res.status(401).send({
                  message: "Unauthorized!",
                });
              }
              req.email = decoded.email;
              next();
             });
};


const authJwt = {
  verifyToken
}

module.exports = authJwt;
