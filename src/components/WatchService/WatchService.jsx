"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function WatchService() {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch("/api/VideosYoutube/videos");
        const data = await response.json();
        setVideo(data.items?.[0]); // Get the latest video
      } catch (error) {
        console.error("Error fetching video:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, []);

  const formatDate = dateString => {
    if (!dateString) return "Unknown Date";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    }).format(date);
  };

  return (
    <section className="py-20 px-10 inset-0 bg-black/20" id="watchService">
      <div className="container mx-auto flex flex-col justify-center items-center gap-10 text-center">
        <h2 className="sm:text-6xl text-4xl">Watch Sunday Service Live</h2>
      </div>

      <div className="mx-auto px-10 py-8 items-center text-center gap-5">
        {loading ? (
          <p>Loading video...</p>
        ) : video ? (
          <div className="flex flex-col items-center">
            <iframe
              src={`https://www.youtube.com/embed/${video.id?.videoId}`}
              title={video.snippet?.title || "YouTube Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full aspect-video"
            ></iframe>
            <p className="mt-4 text-lg font-bold">{video.snippet?.title || "Untitled Video"}</p>
            <p className="mt-2 text-sm text-gray-500">{formatDate(video.snippet?.publishedAt)}</p>
          </div>
        ) : (
          <p>No video available.</p>
        )}
      </div>

      <div className="flex flex-col justify-center items-center gap-5 py-8 text-xl font-bold">
        <p className="max-w-3xl text-center">Can't make our service? Want to watch from home?</p>
        <p className="max-w-3xl text-center">Catch our latest live streams here!</p>
        <Link
          className="rounded-md border text-[#3498db] bg-white hover:border-white py-2 px-4 text-center text-2xl transition-all shadow-lg hover:shadow-xl hover:text-white hover:bg-[#3498db] border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none uppercase"
          href="watch"
        >
          Browse Sermons
        </Link>
      </div>
    </section>
  );
}
