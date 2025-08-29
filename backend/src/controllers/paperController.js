import Paper from "../models/Paper.js";

// @desc Submit a new research paper
// @route POST /api/papers/submit
// @access Private
export const submitPaper = async (req, res) => {
  try {
    const { title, abstract, content, category, authors, keywords } = req.body;

    // Check required fields
    if (!title || !abstract || !content) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save paper with user reference
    const paper = await Paper.create({
      title,
      abstract,
      content,
      category,
      authors: Array.isArray(authors) ? authors : [],
      keywords: Array.isArray(keywords) ? keywords : [],
      user: req.user.id, // comes from authMiddleware
    });

    res.status(201).json({
      message: "Paper submitted successfully",
      paper,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc Get all papers
// @route GET /api/papers
// @access Public
export const getPapers = async (req, res) => {
  try {
    const papers = await Paper.find().populate("user", "name email");
    res.json(papers);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc Get single paper by ID
// @route GET /api/papers/:id
// @access Public
export const getPaperById = async (req, res) => {
  try {
    const paper = await Paper.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    ).populate("user", "name email");

    if (!paper) {
      return res.status(404).json({ message: "Paper not found" });
    }

    res.json(paper);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
