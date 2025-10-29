// client/src/components/SinglePost.jsx
import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi.js";

export default function SinglePost() {
  const { id } = useParams();
  const { data: post, loading, error } = useApi(`/api/posts/${id}`);

  if (loading) return <div>Loading post...</div>;
  if (error) return <div>Error loading post!</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <small>Category: {post.category?.name}</small>
    </div>
  );
}
