"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

// Create Context
const AppContext = createContext();

// Provider component
export function AppWrapper({ children }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      if (videos.length > 0) return;
      try {
        const response = await fetch("/api/VideosYoutube");
        const data = await response.json();
        setVideos(data); // Store all 4 videos in state
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [videos]);

  return <AppContext.Provider value={{ videos, loading }}>{children}</AppContext.Provider>;
}

// Custom hook to use the Videos context
export function useAppContext() {
  return useContext(AppContext);
}
