import axios from "axios";

// Cache the videos data in memory (you can use other caching strategies if needed)
let cachedVideos = null;

export async function GET() {
  if (cachedVideos) {
    return new Response(JSON.stringify(cachedVideos), { status: 200 });
  }

  try {
    const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        channelId: process.env.NEXT_PUBLIC_CHANNEL_ID,
        eventType: "completed",
        type: "video",
        maxResults: 4, // Get the latest 4 videos
        order: "date",
        key: process.env.NEXT_PUBLIC_YOUTUBE_KEY
      }
    });

    // Save videos to the cache for subsequent requests
    cachedVideos = response.data;

    return new Response(JSON.stringify(cachedVideos), { status: 200 });
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch videos." }), { status: 500 });
  }
}

// Enable ISR on the route (this will regenerate the page once every week)
export const revalidate = 60 * 60 * 24 * 7; // 7 days
