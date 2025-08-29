import express from "express";
import { signup } from "../controllers/authController.js";
import { loginUser } from "../controllers/authController.js";
import { submitPaper } from "../controllers/paperController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import User from "../models/User.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", loginUser);
router.post("/submit", authMiddleware, submitPaper);

// get current user
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
