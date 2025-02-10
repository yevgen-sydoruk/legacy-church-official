"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function LiveBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [loading, setLoading] = useState(true);
  const [streamTitle, setStreamTitle] = useState("");
  const [streamVideoId, setStreamVideoId] = useState(""); // State for the video ID

  useEffect(() => {
    const fetchStreamStatus = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/liveStreamStatus`);
        const liveStream = response.data;

        // Check if liveStream data exists and has the expected structure
        if (liveStream && liveStream.snippet && liveStream.id && liveStream.id.videoId) {
          setShowBanner(true);
          setStreamTitle(liveStream.snippet.title);
          setStreamVideoId(liveStream.id.videoId);
        } else {
          // If there's no live stream data, do not show the banner
          setShowBanner(false);
        }
      } catch (error) {
        console.error("Error fetching YouTube stream status:", error);
        // On error, we simply do not show the banner
        setShowBanner(false);
      } finally {
        setLoading(false);
      }
    };

    fetchStreamStatus();
  }, []);

  const closeBanner = () => {
    setShowBanner(false);
  };

  if (loading || !showBanner) return null; // Handle loading and no banner state

  return (
    <div className="fixed top-0 left-0 w-full bg-[#333] text-white p-4 z-50 flex items-center justify-between">
      <div className="container flex justify-between items-center gap-2 sm:gap-5 m-auto">
        <div className="flex justify-center items-center gap-1 sm:gap-5 flex-grow">
          <span className="sm:text-lg text-base font-bold">
            <span className="text-red-600">●</span> Sunday Service is live now!
          </span>
          <a
            href={`https://www.youtube.com/watch?v=${streamVideoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-center sm:text-lg text-base border border-red-800 hover:bg-red-700 active:bg-red-800 md:py-1 md:px-3 px-0.5 rounded-md transition-all"
          >
            Watch Now
          </a>
        </div>
        <button
          onClick={closeBanner}
          className="text-white sm:text-lg text-base leading-[1em] bg-red-800 hover:bg-red-700 active:bg-red-800 py-1 px-2 rounded-md transition-all"
        >
          &#x2715;
        </button>
      </div>
    </div>
  );
}
