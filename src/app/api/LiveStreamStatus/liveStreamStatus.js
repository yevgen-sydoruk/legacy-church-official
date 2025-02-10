// api/liveStreamStatus.js
import axios from "axios";

let cachedLiveStatus = null;
let lastFetched = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export default async function handler(req, res) {
  const now = Date.now();

  if (cachedLiveStatus && now - lastFetched < CACHE_DURATION) {
    return res.status(200).json(cachedLiveStatus);
  }

  try {
    const today = new Date();
    const isSunday = today.getDay() === 0;
    if (isSunday) {
      const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          channelId: process.env.NEXT_PUBLIC_CHANNEL_ID,
          eventType: "live",
          type: "video",
          key: process.env.NEXT_PUBLIC_YOUTUBE_KEY
        }
        // validateStatus: () => true
      });

      // if (
      //   response.status === 403 ||
      //   response.status === 404 ||
      //   response.status === 500 ||
      //   response.status < 200 ||
      //   response.status >= 300
      // ) {
      //   console.warn(`YouTube API returned status ${response.status}. Falling back to null.`);
      //   cachedLiveStatus = null;
      //   lastFetched = now;
      //   return res.status(200).json(null);
      // }

      const liveStream = response.data.items[0] || null;
      cachedLiveStatus = liveStream;
      lastFetched = now;
      return res.status(200).json(liveStream);
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching live stream:", error);
    return res.status(500).json({ error: "Failed to fetch live stream." });
  }
}
