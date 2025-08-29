import express from "express";
import {
  submitPaper,
  getPapers,
  getPaperById,
} from "../controllers/paperController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/submit", authMiddleware, submitPaper); 
router.get("/", getPapers);
router.get("/:id", getPaperById);

export default router;
