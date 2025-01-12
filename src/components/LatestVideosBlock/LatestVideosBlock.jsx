"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
// import legacyYouthLogo from "../../../../public/legacy_youth_logo.png";
// import Link from "next/link";
// import YoutubeIcon from "../../../../assets/icons/YoutubeIcon";

export default function WatchService() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLiveVideos = async () => {
      try {
        const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            part: "snippet",
            channelId: process.env.NEXT_PUBLIC_CHANNEL_ID, // Channel ID
            eventType: "completed", // Completed live events
            type: "video", // Only video results
            maxResults: 4, // Get last 4 live videos
            order: "date",
            key: process.env.NEXT_PUBLIC_YOUTUBE_KEY // YouTube Data API key
          }
        });
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching live videos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLiveVideos();
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
      {/* Display YouTube Video */}
      <div className="mx-auto px-10 py-8 items-center text-center gap-5">
        {loading ? (
          <p>Loading Latest Sermon videos...</p>
        ) : (
          <div className="grid  sm:grid-cols-1 lg:grid-cols-2 gap-10">
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
        )}
      </div>
    </div>
  );
}
