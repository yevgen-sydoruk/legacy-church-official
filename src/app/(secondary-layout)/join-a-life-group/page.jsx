import Banner from "@/components/Banner/Banner";
import React from "react";
import bannerImage from "../../../../public/legacy_youth_banner.jpg";
import legacyYouthLogo from "../../../../public/legacy_youth_logo.png";
import { LifeGroupsSignUpForm } from "@/components/ContactForms/LifeGroupsSignUpForm";

export const metadata = {
  title: "Legacy Church - Join A Life Group",
  description:
    "Join a Life Group at Legacy Church to grow in faith and build community. Connect with others this fall semester!",
  keywords:
    "Life Groups, Legacy Church, community, faith, small groups, join a life group, fall semester, spiritual growth",
  author: "Legacy Church",
  og: {
    title: "Join A Life Group - Legacy Church",
    description:
      "Explore Life Groups at Legacy Church. Sign up to deepen your faith and connect with others in community this fall.",
    image: { bannerImage },
    url: "https://legacychurchofficial.com/join-a-life-group"
  }
};

export default function joinALifeGroup() {
  return (
    <section className="pt-[120px]">
      <Banner heading={"Life Groups"} text={"Fall Semester"} bannerImage={legacyYouthLogo} />
      <div className="mx-auto px-10 py-8 items-center text-center gap-5">
        <iframe
          src="https://www.youtube.com/embed/xTT_V7xFJVQ?si=-pSJpepgT7UflhUk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full aspect-video"
        ></iframe>
      </div>
      <LifeGroupsSignUpForm
        title={"Life Groups Sign-Up Form"}
        text={
          "Life groups help people grow in their faith and build community. We'd love to have you join us!"
        }
        sentFromPage={"Join A Life Group"}
      />
    </section>
  );
}
