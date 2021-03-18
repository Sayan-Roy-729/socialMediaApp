module.exports.authValidation = (req, res, next) => {
  const {email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(401).json({message: 'email, password and name is empty'});
  }

  next();
}