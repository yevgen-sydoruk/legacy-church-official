import React, { createContext, useState, useContext, useEffect } from "react";

// Create Context
const VideosContext = createContext();

// Provider component
export const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/VideosYoutube");
        const data = await response.json();
        setVideos(data.items); // Store all 4 videos in state
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return <VideosContext.Provider value={{ videos, loading }}>{children}</VideosContext.Provider>;
};

// Custom hook to use the Videos context
export const useVideos = () => {
  return useContext(VideosContext);
};
