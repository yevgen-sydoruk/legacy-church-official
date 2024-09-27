import Banner from "@/components/Banner/Banner";
import { ContactForm } from "@/components/ContactForms/ContactForm";
import React from "react";
import bannerImage from "../../../../public/legacy_youth_logo.png";
import Link from "next/link";
import { BaptismSignUpForm } from "@/components/ContactForms/BaptismSignUpForm";

export const metadata = {
  title: "Legacy Church - MA - Mission And Vision",
  description: "Page description"
};

export default function Volunteer() {
  return (
    <section className="pt-[120px]">
      <Banner heading={"Baptism Sign-Up Form"} text={""} bannerImage={bannerImage} />
      <div className="mx-auto max-w-6xl px-10 py-16 flex flex-col items-center text-center gap-5">
        <a href="https://www.bible.com/bible/97/MAT.28.18" target="_blank">
          <h2 className="mb-5 lg:text-6xl text-4xl font-light">
            "The Bible says that all professing Christians should be baptized"
          </h2>
          <h3 className="text-[#e67e22] text-xl font-bold">Matthew 28:18-20</h3>
        </a>
        <p className="max-w-xl font-light leading-8">
          Whether you've been following Jesus for a long time and never got baptized or are a new
          Christian, we would be honored to baptize you!
        </p>
      </div>
      <div id="contactForm">
        <BaptismSignUpForm
          title={"Baptism Sign-Up Form"}
          text={""}
          sentFromPage={"Baptism Sign-Up"}
        />
      </div>
    </section>
  );
}
