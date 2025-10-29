import express from "express";
import { body, validationResult } from "express-validator";
import Category from "../models/Category.js";  // ✅ must match the filename exactly

const router = express.Router();

// Get all categories
router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.json(categories);
  } catch (err) {
    next(err);
  }
});

// Create a new category
router.post(
  "/",
  body("name").isLength({ min: 2 }).withMessage("Name is required"),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

      const category = new Category(req.body);
      await category.save();
      res.status(201).json(category);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
