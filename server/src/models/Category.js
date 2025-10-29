// server/models/Category.js
// server/src/models/Category.js
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
}, { timestamps: true });

const Category = mongoose.model("Category", categorySchema);
export default Category;
