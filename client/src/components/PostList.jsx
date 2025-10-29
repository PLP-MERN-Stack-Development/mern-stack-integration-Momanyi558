// client/src/components/PostList.jsx
import React from "react";
import { Link } from "react-router-dom";
import useApi from "../hooks/useApi.js";

export default function PostList() {
  const { data: posts, loading, error } = useApi("/api/posts");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts!</div>;

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <Link to={`/post/${post._id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

