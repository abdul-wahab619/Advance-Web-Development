import express from "express";
import { logOut, signIn, signUp } from "../controllers/userController.js";
const router = express.Router();

// Signin route
router.post("/signin", signIn);
// Signup route
router.post("/signup", signUp);
// Logout route
router.post("/logout", logOut);

export default router;
