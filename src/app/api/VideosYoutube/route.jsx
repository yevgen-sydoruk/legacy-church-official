// src/app/api/videos/route.js
import axios from "axios";

let cachedVideos = null;
let cacheTimestamp = null;

export async function GET() {
  const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

  if (cachedVideos && Date.now() - cacheTimestamp < CACHE_DURATION) {
    return new Response(JSON.stringify(cachedVideos), { status: 200 });
  }

  try {
    const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        channelId: process.env.NEXT_PUBLIC_CHANNEL_ID,
        eventType: "completed",
        type: "video",
        maxResults: 4, // Adjust as needed
        order: "date",
        key: process.env.NEXT_PUBLIC_YOUTUBE_KEY
      }
    });

    cachedVideos = response.data;
    cacheTimestamp = Date.now();

    return new Response(JSON.stringify(cachedVideos), { status: 200 });
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch videos." }), { status: 500 });
  }
}
