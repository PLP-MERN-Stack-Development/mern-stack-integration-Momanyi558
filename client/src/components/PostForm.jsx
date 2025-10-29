// client/src/components/PostForm.jsx
import React, { useState } from "react";
import axios from "axios";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/posts", { title, body, category });
      setMessage("Post created successfully!");
      setTitle("");
      setBody("");
      setCategory("");
    } catch (err) {
      setMessage("Error creating post!");
    }
  };

  return (
    <div>
      <h1>Create Post</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Category ID"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
