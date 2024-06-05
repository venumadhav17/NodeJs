const PASSWORD = process.env.ROUTE_PASSWORD;
// The next callback is from the previous middleware
console.log(PASSWORD);
const verifyAuth = (req, res, next) => {
  // we overide next in alok name
  //console.log('Password:', PASSWORD);
  console.log('TEST');
  const { authorization } = req.headers;

  if (!authorization) {
    // return false;
    return res.status(403).json({ message: 'Unauthorized Request' });
  }
  if (authorization !== PASSWORD) {
    // return false;
    return res
      .status(403)
      .json({ message: `Password didn't match. Please Try again!` });
  }
  //return true;
  next();
};

module.exports = { verifyAuth };
