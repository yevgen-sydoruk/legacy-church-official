import { get } from "@vercel/edge-config";
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
    // Use validateStatus to prevent axios from throwing on 403/500
    const response = await axios.get(YOUTUBE_API_URL, {
      params: {
        part: "snippet",
        channelId: process.env.NEXT_PUBLIC_CHANNEL_ID,
        eventType: "completed",
        type: "video",
        maxResults: 4,
        order: "date",
        key: process.env.NEXT_PUBLIC_YOUTUBE_KEY
      },
      validateStatus: () => true // Always resolve, even for error status codes
    });

    // If the response status is 403 or 500 (or not in the 2xx range), return the fallback video.
    if (
      response.status === 403 ||
      response.status === 500 ||
      response.status < 200 ||
      response.status >= 300
    ) {
      const fallbackVideo = {
        id: "Nms6aR6nWao",
        title: "Sunday Service",
        publishedAt: new Date().toISOString(),
        thumbnail: "https://img.youtube.com/vi/Nms6aR6nWao/mqdefault.jpg"
      };
      return new Response(JSON.stringify([fallbackVideo]), { status: 200 });
    }

    // Transform data to store only necessary fields
    const videos = response.data.items.map(video => ({
      id: video.id.videoId,
      title: video.snippet.title,
      publishedAt: video.snippet.publishedAt
      //thumbnail: video.snippet.thumbnails.medium.url
    }));

    // Store new videos in Edge Config
    //await set("youtube_videos", videos);
    try {
      const updateEdgeConfig = await fetch(
        `https://api.vercel.com/v1/edge-config/${process.env.EDGE_CONFIG_ID}/items`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${process.env.VERCEL_API_TOKEN}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            items: [
              {
                operation: "update",
                key: "youtube_videos",
                value: videos
              }
            ]
          })
        }
      );
      const result = await updateEdgeConfig.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }

    return new Response(JSON.stringify(videos), { status: 200 });
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    // In case something unexpected happens, return the fallback video.
    const fallbackVideo = {
      id: { videoId: "Nms6aR6nWao" },
      snippet: { title: "Fallback Video" },
      publishedAt: new Date().toISOString(),
      thumbnail: "https://img.youtube.com/vi/Nms6aR6nWao/mqdefault.jpg"
    };
    return new Response(JSON.stringify([fallbackVideo]), { status: 200 });
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
