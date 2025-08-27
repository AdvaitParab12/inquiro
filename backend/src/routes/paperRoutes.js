import express from "express";
const router = express.Router();

// Example route
router.get("/", (req, res) => {
  res.send("All papers route working ✅");
});

// ✅ Export default
export default router;
