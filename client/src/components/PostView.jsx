import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi.js";

const PostView = () => {
  const { id } = useParams();
  const { data: post, loading, error } = useApi(`/api/posts/${id}`);

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>Error loading post!</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>Category: {post.category?.name}</p>
    </div>
  );
};

export default PostView;
