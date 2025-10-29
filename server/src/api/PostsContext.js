import { createContext, useContext, useState } from 'react';
import useApi from '../hooks/useApi';

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const { data: posts, loading, error } = useApi('/posts');
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <PostsContext.Provider value={{ posts, loading, error, selectedPost, setSelectedPost }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
