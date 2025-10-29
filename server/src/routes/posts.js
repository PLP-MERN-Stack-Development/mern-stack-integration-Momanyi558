// server/src/routes/posts.js
import express from "express";
import Post from "../models/Post.js";  // <-- must include .js if using ES modules

const router = express.Router();

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();  // <-- this works only if Post is a proper Mongoose model
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
