// api/liveStreamStatus.js
import axios from "axios";

let cachedLiveStatus = null;
let lastFetched = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function GET(request) {
  const now = Date.now();

  if (cachedLiveStatus && now - lastFetched < CACHE_DURATION) {
    console.log("Log: Captured in LiveStreamStatus when cache is on");
    return new Response(JSON.stringify(cachedLiveStatus), { status: 200 });
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
      console.log("response.data.items[0]: ", response.data.items[0]);
      const liveStream = response.data.items[0] || null;
      cachedLiveStatus = liveStream;
      lastFetched = now;
      return new Response(JSON.stringify(liveStream), { status: 200 });
    } else {
      return new Response(null, { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching live stream:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch live stream." }), { status: 500 });
  }
}
