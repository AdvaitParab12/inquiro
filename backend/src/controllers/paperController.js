import Paper from "../models/Paper.js";

export const submitPaper = async (req, res) => {
  try {
    const { title, abstract, content, category, authors, keywords } = req.body;

 
    if (!title || !abstract || !content) {
      return res.status(400).json({ message: "All fields are required" });
    }

  
    const paper = await Paper.create({
      title,
      abstract,
      content,
      category,
      authors: Array.isArray(authors) ? authors : [],
      keywords: Array.isArray(keywords) ? keywords : [],
      user: req.user.id, 
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

export const getPapers = async (req, res) => {
  try {
    const papers = await Paper.find().populate("user", "name email");
    res.json(papers);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


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
