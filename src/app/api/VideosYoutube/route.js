import { get, set } from "@vercel/edge-config";
import axios from "axios";

const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search";

export async function GET() {
  try {
    const storedVideos = await get("youtube_videos");

    // Check if data exists and is not older than 7 days
    if (storedVideos && storedVideos.length > 0) {
      const latestVideoDate = new Date(storedVideos[0].publishedAt);
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      if (latestVideoDate > sevenDaysAgo) {
        return new Response(JSON.stringify(storedVideos), { status: 200 });
      }
    }

    // Fetch new videos from YouTube API
    const response = await axios.get(YOUTUBE_API_URL, {
      params: {
        part: "snippet",
        channelId: process.env.NEXT_PUBLIC_CHANNEL_ID,
        eventType: "completed",
        type: "video",
        maxResults: 4,
        order: "date",
        key: process.env.NEXT_PUBLIC_YOUTUBE_KEY
      }
    });

    // Transform data to store only necessary fields
    const videos = response.data.items.map(video => ({
      id: video.id.videoId,
      title: video.snippet.title,
      publishedAt: video.snippet.publishedAt,
      thumbnail: video.snippet.thumbnails.medium.url
    }));

    // Store new videos in Edge Config
    await set("youtube_videos", videos);

    return new Response(JSON.stringify(videos), { status: 200 });
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch videos." }), { status: 500 });
  }
}

// Cache the videos data in memory (you can use other caching strategies if needed)
// let cachedVideos = null;

// export async function GET() {
//   if (cachedVideos) {
//     return new Response(JSON.stringify(cachedVideos), { status: 200 });
//   }

//   try {
//     const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
//       params: {
//         part: "snippet",
//         channelId: process.env.NEXT_PUBLIC_CHANNEL_ID,
//         eventType: "completed",
//         type: "video",
//         maxResults: 4, // Get the latest 4 videos
//         order: "date",
//         key: process.env.NEXT_PUBLIC_YOUTUBE_KEY
//       }
//     });

//     // Save videos to the cache for subsequent requests
//     cachedVideos = response.data;

//     return new Response(JSON.stringify(cachedVideos), { status: 200 });
//   } catch (error) {
//     console.error("Error fetching YouTube videos:", error);
//     return new Response(JSON.stringify({ error: "Failed to fetch videos." }), { status: 500 });
//   }
// }

// // Enable ISR on the route (this will regenerate the page once every week)
// export const revalidate = 60 * 60 * 24 * 7; // 7 days
