"use client";

import React, { useEffect, useState } from "react";

export default function LatestVideosBlock() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/VideosYoutube/videos"); // Fetch from backend API
        const data = await response.json();
        setVideos(data.items); // Extract video data
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // Function to format the date
  const formatDate = dateString => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    }).format(date);
  };

  return (
    <div>
      {/* Display YouTube Videos */}
      <div className="mx-auto px-10 py-8 items-center text-center gap-5">
        {loading ? (
          <p>Loading Latest Sermon videos...</p>
        ) : videos.length > 0 ? (
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
            {videos.map(video => (
              <div key={video.id.videoId} className="flex flex-col items-center">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={video.snippet.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full aspect-video"
                ></iframe>

                <p className="mt-4 text-lg font-bold">
                  {video.snippet.title} - {formatDate(video.snippet.publishedAt)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No videos available at the moment.</p>
        )}
      </div>
    </div>
  );
}
