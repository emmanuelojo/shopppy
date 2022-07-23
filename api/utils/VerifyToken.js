import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT, (err, user) => {
      if (err)
        res.status(403).json({
          status: 403,
          error: "Token not valid",
          message: "failed",
        });

      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({
      status: 401,
      error: "User not authenticated",
      message: "failed",
    });
  }
};

export const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json({
        status: 403,
        error: "User not authorized",
        message: "failed",
      });
    }
  });
};

export const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json({
        status: 403,
        error: "User not authorized",
        message: "failed",
      });
    }
  });
};
