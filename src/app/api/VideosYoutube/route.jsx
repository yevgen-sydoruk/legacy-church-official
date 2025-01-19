// src/app/api/videos/route.js
import axios from "axios";

let cachedVideos = null; // Cached video data
let cacheTimestamp = null; // Timestamp for the last cache update

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export async function GET() {
  // Serve from cache if valid
  if (cachedVideos && Date.now() - cacheTimestamp < CACHE_DURATION) {
    console.log("Serving videos from cache.");
    return new Response(JSON.stringify(cachedVideos), { status: 200 });
  }

  // Log to verify cache behavior
  console.log("Cached videos:", cachedVideos ? "Available" : "Unavailable");
  console.log("Cache age:", Date.now() - cacheTimestamp);

  if (cachedVideos && Date.now() - cacheTimestamp < CACHE_DURATION) {
    console.log("Serving from cache.");
    return new Response(JSON.stringify(cachedVideos), { status: 200 });
  }

  // If cache is stale or unavailable, fetch new data
  console.log("Fetching new data from YouTube API.");

  try {
    console.log("Fetching new data from YouTube API...");
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

    cachedVideos = response.data.items; // Only cache the `items` array
    cacheTimestamp = Date.now(); // Update the cache timestamp

    console.log("New data cached successfully.");
    return new Response(JSON.stringify(cachedVideos), { status: 200 });
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch videos." }), { status: 500 });
  }
}
