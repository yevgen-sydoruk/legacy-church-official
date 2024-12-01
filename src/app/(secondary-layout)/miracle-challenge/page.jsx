import React from "react";
import FormsToggle from "./formsToggle";
import bannerImage from "../../../../public/legacy_youth_banner.jpg";

export const metadata = {
  title: "Legacy Church - MA - Prayer Requests and Praise Reports",
  description:
    "Submit your prayer requests or share your praise reports with Legacy Church. Join us in our 100 Miracle Challenge!",
  keywords:
    "prayer requests, praise reports, Legacy Church, 100 Miracle Challenge, faith, community support, testimonies",
  author: "Legacy Church",
  og: {
    title: "Prayer Requests and Praise Reports",
    description:
      "Share your prayer needs or praise reports with Legacy Church. We believe in the power of prayer and would love to support you.",
    image: { bannerImage },
    url: "https://legacychurchofficial.com/miracle-challenge" // Update with your page URL
  }
};

export default function PrayerRequest() {
  return <FormsToggle />;
}
