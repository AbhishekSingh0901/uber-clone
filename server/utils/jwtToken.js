module.exports.sendToken = async (user, statuscode, res, message) => {
  //getnerating the jwt token

  const token = await user.getJWTToken();

  const cookieOptions = {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    secure: false, // Set true only in production
    sameSite: "lax",
  };

  res
    .status(statuscode)
    .cookie("token", token, cookieOptions)
    .json({ message, success: true, user });
};
