import Banner from "@/components/Banner/Banner";
import { ContactForm } from "@/components/ContactForms/ContactForm";
import React from "react";
import bannerImage from "../../../../public/mission_and_vision_banner.jpg";

export const metadata = {
  title: "Legacy Church - MA - Mission And Vision",
  description:
    "Discover the mission and vision of Legacy Church: reaching out locally and influencing globally to empower believers in their spiritual journey.",
  keywords:
    "Legacy Church, mission, vision, discipleship, community, faith, gospel, church in Massachusetts",
  og: {
    title: "Legacy Church - Mission & Vision",
    description:
      "Join us as we strive to make disciples and transform our community through the gospel.",
    image: { bannerImage },
    url: "https://legacychurchofficial.com/mission-and-vision"
  }
};

export default function MissionAndVision() {
  return (
    <section className="pt-[120px]">
      <Banner
        heading={"Mission & Vision"}
        text={"Go therefore and make disciples..."}
        bannerImage={bannerImage}
      />
      <div className="container mx-auto p-16 flex flex-col sm:flex-row items-center sm:items-stretch justify-evenly text-center gap-10">
        <div className="flex flex-col gap-8">
          <h2 className="lg:text-6xl text-4xl font-light">The Mission</h2>

          <hr />
          <p className="max-w-md leading-8">
            The purpose of Legacy Church is to reach out locally, influence globally, and empower
            each believer to make a Godly impact in every sphere of their life. As our motto goes,
            "Change your world!"
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="lg:text-6xl text-4xl font-light">The Vision</h2>
          <hr />
          <p className="max-w-md leading-8">
            The vision of Legacy Church is to disciple a community of authentic believers, and to
            witness a city become transformed by the life changing reality of the gospel.{" "}
          </p>
        </div>
      </div>
      <ContactForm
        title={"Connect with us."}
        text={"We'd love to hear from you! Fill out the form below to get started."}
        sentFromPage={"Mission & Vision"}
      />
    </section>
  );
}
