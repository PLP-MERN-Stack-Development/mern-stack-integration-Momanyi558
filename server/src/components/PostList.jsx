import React from 'react';
import { usePosts } from '../contexts/PostsContext';

export default function PostList() {
  const { posts } = usePosts();
  return (
    <div>
      {posts.map(p => (
        <div key={p._id} style={{ marginBottom: 15, borderBottom: '1px solid #ddd' }}>
          <h3>{p.title}</h3>
          <p>{p.body.slice(0, 150)}...</p>
          <small>{p.category?.name}</small>
        </div>
      ))}
    </div>
  );
}
