import Banner from "@/components/Banner/Banner";
import React from "react";
import bannerImage from "../../../../public/legacy_youth_banner.jpg";
import legacyYouthLogo from "../../../../public/legacy_youth_logo.png";
import Image from "next/image";
import ServiceTimes from "@/components/ServiceTimes/ServiceTimes";
import { ContactForm } from "@/components/ContactForms/ContactForm";
import { LifeGroupsSignUpForm } from "@/components/ContactForms/LifeGroupsSignUpForm";

export const metadata = {
  title: "Legacy Church - MA - Join A Life Group",
  description: "Page description"
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
      <div className="mx-auto px-10 py-16">
        <h2 className="mb-5 lg:text-6xl text-4xl font-[300] text-center lato">
          Meet the Life Group leaders.
        </h2>
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