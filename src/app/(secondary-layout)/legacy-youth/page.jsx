import Banner from "@/components/Banner/Banner";
import React from "react";
import bannerImage from "../../../../public/legacy_youth_banner.jpg";
import legacyYouthLogo from "../../../../public/legacy_youth_logo.png";
import Image from "next/image";
import ServiceTimes from "@/components/ServiceTimes/ServiceTimes";
import { ContactForm } from "@/components/ContactForms/ContactForm";

export const metadata = {
  title: "Legacy Church - MA - Mission And Vision",
  description: "Page description"
};

export default function LegacyYouth() {
  return (
    <section className="pt-[120px]">
      <Banner heading={"LEGACY YOUTH"} text={""} bannerImage={bannerImage} />
      <div className="mx-auto max-w-6xl px-10 py-16 flex flex-col items-center text-center gap-5">
        <a href="https://www.bible.com/bible/114/LUK.4.18-19" target="_blank">
          <h2 className="mb-5 lg:text-6xl text-4xl font-light">
            "The Spirit of Lord is on me, because He has anointed me..."
          </h2>
          <h3 className="text-[#e67e22] text-xl font-bold">Luke 4:18-19</h3>
        </a>
        <p className="max-w-xl font-light leading-8">
          Here at Legacy Youth, our mission is to see young people encounter the presence of God, to
          fall in love with Him, and forever be changed by Him. We want the youth to discover who
          they are within their identity in Christ. Legacy Youth empowers them to activate the gifts
          that God placed in them and live out their God given potential! We are determined to bring
          this truth to today's generation!
        </p>
        <a href="https://www.bible.com/bible/114/LUK.4.18-19" target="_blank" className="max-w-xl">
          <i className="font-light leading-8 italic ">
            "The Spirit of the Lord is on me, because he has anointed me to proclaim the good news
            to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight
            to the blind, to set the oppressed free, to proclaim the year of the Lord's favor." -
            Luke 4:18-19
          </i>
        </a>
        <p className="max-w-xl font-light leading-8">Join our Legacy Youth community!</p>
        <Image src={legacyYouthLogo} width={200} height="auto" alt="Legacy Youth Logo" />
      </div>
      <div className="mx-auto px-10 py-8 items-center text-center gap-5">
        <iframe
          src="https://www.youtube.com/embed/SNOwnrGfbEI?si=Y68QSU0udPrsMl6J"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full aspect-video"
        ></iframe>
      </div>
      <div className="mx-auto px-10 py-16 bg-[#ecf0f1]">
        <h2 className="mb-5 lg:text-6xl text-4xl font-light text-center">
          Stay Tuned for Legacy Youth Camp 2024!
        </h2>
        <div className="grid grid-flow-row grid-cols-2 lg:grid-rows-3 lg:grid-cols-4 md:grid-rows-4 md:grid-cols-3 gap-4 justify-items-center">
          <Image src={legacyYouthLogo} width={200} height="auto" alt="Legacy Youth Logo" />
          <Image src={legacyYouthLogo} width={200} height="auto" alt="Legacy Youth Logo" />
          <Image src={legacyYouthLogo} width={200} height="auto" alt="Legacy Youth Logo" />
          <Image src={legacyYouthLogo} width={200} height="auto" alt="Legacy Youth Logo" />
          <Image src={legacyYouthLogo} width={200} height="auto" alt="Legacy Youth Logo" />
          <Image src={legacyYouthLogo} width={200} height="auto" alt="Legacy Youth Logo" />
          <Image src={legacyYouthLogo} width={200} height="auto" alt="Legacy Youth Logo" />
          <Image src={legacyYouthLogo} width={200} height="auto" alt="Legacy Youth Logo" />
          <Image src={legacyYouthLogo} width={200} height="auto" alt="Legacy Youth Logo" />
          <Image src={legacyYouthLogo} width={200} height="auto" alt="Legacy Youth Logo" />
          <Image src={legacyYouthLogo} width={200} height="auto" alt="Legacy Youth Logo" />
          <Image src={legacyYouthLogo} width={200} height="auto" alt="Legacy Youth Logo" />
        </div>
      </div>
      <ServiceTimes />
      <ContactForm
        title={"Contact Us"}
        text={"We'd love to hear from you! Fill out the form below to get started."}
        sentFromPage={"Legacy Youth"}
      />
    </section>
  );
}
