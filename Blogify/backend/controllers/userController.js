import User from "../models/user.js";

export async function signIn(req, res) {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordandGenerateToken(email, password);
    return res.cookie("token", token, { httpOnly: true }).json({
      user: { email },
    });
  } catch (error) {
    return res.status(401).json({
      message: "Incorrect email or password",
    });
  }
}

export async function signUp(req, res) {
  const { fullName, email, password } = req.body;
  console.log("data:", fullName);
  try {
    const user = await User.create({
      fullName,
      email,
      password,
    });
    return res.json({
      user: { email, fullName },
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

export function logOut(req, res) {
  res.clearCookie("token").json({ message: "Logged out successfully" });
}
