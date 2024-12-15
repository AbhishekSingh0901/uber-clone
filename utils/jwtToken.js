module.exports.sendToken = async (user, statuscode, res, message) => {
  //getnerating the jwt token

  const token = await user.getJWTToken();

  const cookieOptions = {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    httpsOnly: true,
    sameSite: "strict",
  };

  res
    .status(statuscode)
    .cookie("token", token, cookieOptions)
    .json({ message, success: true, user });
};
