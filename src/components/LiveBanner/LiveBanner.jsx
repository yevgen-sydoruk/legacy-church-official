"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function LiveBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [loading, setLoading] = useState(true);
  const [streamTitle, setStreamTitle] = useState("");

  useEffect(() => {
    const fetchStreamStatus = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
          params: {
            part: "snippet",
            channelId: `${process.env.NEXT_PUBLIC_CHANNEL_ID}`,
            eventType: "live",
            type: "video",
            key: `${process.env.NEXT_PUBLIC_YOUTUBE_KEY}`
          }
        });

        const liveStream = response.data.items[0]; // Assuming there's a live stream
        if (liveStream) {
          setShowBanner(true);
          setStreamTitle(liveStream.snippet.title);
        } else {
          setShowBanner(false);
        }
      } catch (error) {
        console.error("Error fetching YouTube stream status:", error);
        setShowBanner(false); // Hide the banner if there's an error
      } finally {
        setLoading(false);
      }
    };

    fetchStreamStatus();
  }, []);

  const closeBanner = () => {
    setShowBanner(false);
  };

  if (loading) return null;

  if (!showBanner) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-red-600 text-white p-4 z-50 flex items-center justify-between">
      <span className="text-lg font-bold">🔥 {streamTitle} is live now!</span>
      <a
        href={`https://www.youtube.com/watch?v=${streamTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-red-800 hover:bg-red-700 py-1 px-3 rounded-md transition-all"
      >
        Watch Now
      </a>
      <button
        onClick={closeBanner}
        className="text-white bg-red-800 hover:bg-red-700 py-1 px-3 rounded-md transition-all"
      >
        Close
      </button>
    </div>
  );
}
