const User = require("../models/user");
function getSignInPage(req, res) {
  return res.render("signin");
}
function getSignUpPage(req, res) {
  return res.render("signup");
}

async function signIn(req, res) {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordandGenerateToken(email, password);
    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render("signin", {
      error: "Incorrect email or password",
    });
  }
}

async function signUp(req, res) {
  const { fullName, email, password } = req.body;

  await User.create({
    fullName,
    email,
    password,
  });
  return res.redirect("/");
}

function logOut(req, res) {
  res.clearCookie("token").redirect("/");
}

module.exports = { getSignInPage, getSignUpPage, signIn, signUp, logOut };
