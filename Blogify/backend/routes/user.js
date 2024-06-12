const { Router } = require("express");
const router = Router();
const {
  getSignInPage,
  getSignUpPage,
  signIn,
  signUp,
  logOut,
} = require("../controllers/userController");

router.get("/signin", getSignInPage);

router.get("/signup", getSignUpPage);

router.post("/signin", signIn);

router.get("/logout", logOut);

router.post("/signup", signUp);

module.exports = router;
