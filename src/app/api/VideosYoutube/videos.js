// pages/api/videos.js
import axios from "axios";

let cachedVideos = null;
let cacheTimestamp = null;

export default async function handler(req, res) {
  const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

  if (cachedVideos && Date.now() - cacheTimestamp < CACHE_DURATION) {
    return res.status(200).json(cachedVideos);
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

    res.status(200).json(cachedVideos);
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    res.status(500).json({ error: "Failed to fetch videos." });
  }
}
