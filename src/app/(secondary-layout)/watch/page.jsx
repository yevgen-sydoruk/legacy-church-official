import Banner from "@/components/Banner/Banner";
import React from "react";
// import bannerImage from "../../../../public/legacy_youth_banner.jpg";
import legacyYouthLogo from "../../../../public/legacy_youth_logo.png";
import Link from "next/link";

import YoutubeIcon from "../../../../assets/icons/YoutubeIcon";

export const metadata = {
  title: "Legacy Church - MA - Watch",
  description:
    "Watch our latest sermons and connect with Legacy Church online. Join us for worship and teachings that inspire!",
  keywords: "Legacy Church, online sermons, watch sermons, YouTube, church services, worship",
  author: "Legacy Church",
  og: {
    title: "Watch Us Online - Legacy Church",
    description:
      "Join us for our latest sermons online. Subscribe to our YouTube channel for more content!",
    image: { legacyYouthLogo },
    url: "https://legacychurchofficial.com/watch"
  }
};

export default function Watch() {
  return (
    <section className="pt-[120px]">
      <Banner heading={"Watch Us Online"} text={""} bannerImage={legacyYouthLogo} />
      <div className="mx-auto px-10 py-16">
        <h2 className="lg:text-6xl text-4xl font-[300] text-center lato">
          Watch Our Latest Sermon
        </h2>
      </div>
      <div className="mx-auto px-10 py-8 items-center text-center gap-5">
        <iframe
          src="https://www.youtube.com/embed/gD2EhIoHbyk?si=7VGk_i22Lt-u0l40"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full aspect-video"
        ></iframe>
      </div>
      <div className="flex justify-center py-8 text-3xl font-bold">
        <Link
          href="https://www.youtube.com/channel/UC93pSS2r4KNRLDelYoXbtbA"
          passHref
          legacyBehavior
        >
          <a target="_blank" className="flex gap-4 items-center text-[#3498db] hover:text-cyan-700">
            Watch us online on YouTube
            <YoutubeIcon styles="fill-[#3498db] hover:fill-cyan-700" />
          </a>
        </Link>
      </div>
    </section>
  );
}
