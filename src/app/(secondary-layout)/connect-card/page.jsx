import Banner from "@/components/Banner/Banner";
import React from "react";
import bannerImage from "../../../../public/legacy_youth_logo.png";
import { ConnectCardForm } from "@/components/ContactForms/ConnectCardForm";

export const metadata = {
  title: "Legacy Church - Connect Card",
  description:
    "Fill out our Connect Card to get involved with Legacy Church and stay updated on our activities.",
  keywords: "Legacy Church, connect card, community, get involved, church events",
  author: "Legacy Church",
  og: {
    title: "Connect with Us - Legacy Church",
    description:
      "Join our community at Legacy Church. Fill out the Connect Card to learn more about our activities.",
    image: { bannerImage },
    url: "https://legacychurchofficial.com/connect-card"
  }
};

export default function ConnectCard() {
  return (
    <section className="pt-[120px]">
      <Banner heading={"Connect Card"} text={""} bannerImage={bannerImage} />
      <div id="contactForm">
        <ConnectCardForm
          title={"Connect Card"}
          text={
            "Welcome to our church! We're glad you're here. Our team would love to serve you and help you get connected."
          }
          sentFromPage={"Connect Card"}
        />
      </div>
    </section>
  );
}
