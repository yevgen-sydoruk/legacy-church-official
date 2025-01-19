import React from "react";
import CafeBlock from "@/components/CafeBlock/CafeBlock";
import Hero from "@/components/Hero/Hero";
import ServiceTimes from "@/components/ServiceTimes/ServiceTimes";
import Welcome from "@/components/Welcome/Welcome";
import MiraclesChallengeBlock from "@/components/MiraclesChallengeBlock/MiraclesChallengeBlock";
import UkraineRelief from "@/components/UkraineRelief/UkraineRelief";
import WatchService from "@/components/WatchService/WatchService";
import { ContactForm } from "@/components/ContactForms/ContactForm";
import VolunteerBlock from "@/components/VolunteerBlock/VolunteerBlock";

import LiveBanner from "@/components/LiveBanner/LiveBanner";

export const metadata = {
  title: "Legacy Church - Home",
  description:
    "Welcome to Legacy Church! Join us for worship, community events, and spiritual growth.",
  keywords: "Legacy Church, worship, community, volunteer, miracles, service times, baptism",
  author: "Legacy Church",
  og: {
    title: "Welcome to Legacy Church",
    description: "Experience community, worship, and service at Legacy Church.",
    // image: { bannerImage },
    url: "https://legacychurchofficial.com"
  },
  canonical: "https://legacychurchofficial.com"
};

async function fetchVideos() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&eventType=completed&type=video&maxResults=4&order=date&key=${process.env.NEXT_PUBLIC_YOUTUBE_KEY}`,
      { next: { revalidate: 86400 } } // Revalidate every 24 hours
    );
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Failed to fetch YouTube videos:", error);
    return [];
  }
}

export default async function Home() {
  const videos = await fetchVideos();

  return (
    <main>
      <LiveBanner />
      <Hero />
      <Welcome />
      <MiraclesChallengeBlock />
      <VolunteerBlock />
      <ServiceTimes />
      <WatchService videos={videos} />
      <UkraineRelief />
      <CafeBlock />
      <ContactForm
        title={"Get In Touch"}
        text={"We'd love to hear from you! Fill out the form below to get started."}
        sentFromPage={"Main Page"}
      />
    </main>
  );
}
