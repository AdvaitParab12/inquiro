import express from "express";
import {
  submitPaper,
  getPapers,
  getPaperById,
} from "../controllers/paperController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/submit", authMiddleware, submitPaper); // protected
router.get("/", getPapers); // public
router.get("/:id", getPaperById); // public

export default router;
