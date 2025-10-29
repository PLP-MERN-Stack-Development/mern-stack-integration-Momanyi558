// client/src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import PostList from "./components/PostList.jsx";
import SinglePost from "./components/SinglePost.jsx";
import PostForm from "./components/PostForm.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/create" element={<PostForm />} />
      </Routes>
    </BrowserRouter>
  );
}

