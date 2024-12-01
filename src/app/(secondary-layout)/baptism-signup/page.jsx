import Banner from "@/components/Banner/Banner";
import React from "react";
import bannerImage from "../../../../public/legacy_youth_logo.png";
import { BaptismSignUpForm } from "@/components/ContactForms/BaptismSignUpForm";

export const metadata = {
  title: "Legacy Church - Baptism Sign-Up",
  description:
    "Sign up for baptism at Legacy Church. Join us in following Jesus' command to be baptized.",
  keywords: "baptism, Legacy Church, sign-up, Christian, faith",
  author: "Legacy Church",
  og: {
    title: "Baptism Sign-Up - Legacy Church",
    description:
      "Ready to take the next step in your faith journey? Sign up for baptism at Legacy Church.",
    image: { bannerImage },
    url: "https://legacychurchofficial.com/baptism-signup"
  }
};

export default function BaptismSignup() {
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
