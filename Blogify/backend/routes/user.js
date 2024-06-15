import express from "express";
import User from "../models/user.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

// Signin route
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordandGenerateToken(email, password);
    return res.cookie("token", token, { httpOnly: true }).json({
      user: { email }, // Adjust as necessary to return user details
    });
  } catch (error) {
    return res.status(401).json({
      message: "Incorrect email or password",
    });
  }
});

// Signup route
router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;
  console.log("data:", fullName);
  try {
    const user = await User.create({
      fullName,
      email,
      password,
    });
    return res.json({
      user: { email, fullName }, // Adjust as necessary to return user details
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});
// Get current user route
router.get('/me', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json({ user: { email: user.email, fullName: user.fullName } });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
// Logout route
router.post("/logout", (req, res) => {
  res.clearCookie("token").json({ message: "Logged out successfully" });
});

export default router;
