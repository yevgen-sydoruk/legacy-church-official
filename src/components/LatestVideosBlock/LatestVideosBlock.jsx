"use client";

import React from "react";
import { useAppContext } from "@/context"; // Use context to access videos

export default function LatestVideosBlock() {
  const { videos, loading } = useAppContext();

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
    <div className="mx-auto px-10 py-8 items-center text-center gap-5">
      {loading ? (
        <p>Loading Latest Sermon videos...</p>
      ) : videos.length > 0 ? (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
          {videos.slice(0, 4).map(video => (
            <div key={video.id} className="flex flex-col items-center">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                //title={video.title || "YouTube Video"}
                title={"YouTube Video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full aspect-video"
              ></iframe>

              <p className="mt-4 text-lg font-bold">
                {/* {video.title} - {formatDate(video.publishedAt)} */}
                {video.title}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No videos available at the moment.</p>
      )}
    </div>
  );
}
