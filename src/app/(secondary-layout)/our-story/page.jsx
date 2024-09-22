import Banner from "@/components/Banner/Banner";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import React from "react";
import bannerImage from "../../../../public/our_story_banner.jpg";
import ourStoryPhoto1 from "../../../../public/our_story_photo1.png";
import ourStoryPhoto2 from "../../../../public/our_story_photo2.jpg";
import ourStoryPhoto3 from "../../../../public/our_story_photo3.jpg";
import Image from "next/image";
import ServiceTimes from "@/components/ServiceTimes/ServiceTimes";

export const metadata = {
  title: "Legacy Church - MA - Mission And Vision",
  description: "Page description"
};

export default function OurStory() {
  return (
    <section className="pt-[120px]">
      <Banner heading={"Our Story"} text={""} bannerImage={bannerImage} />
      <div className="mx-auto w-full flex flex-col md:flex-row gap-8 p-16">
        <div className="w-full md:w-1/2">
          <h2 className=" mb-10 lg:text-6xl text-4xl font-light">How it all started...</h2>
          <p className="font-light leading-8">
            Legacy Church originated as the Church of the New Covenant on July 20, 1997, made up of
            less than 20 people, meeting in a rented church in Agawam, MA. Over the years, the
            church grew to a few hundred members and eventually purchased a church building in
            Chicopee to adjust to the church's growth.
          </p>
        </div>
        <Image
          src={ourStoryPhoto1}
          width={400}
          height={400}
          alt="Picture of the author"
          className="w-full md:w-1/2"
        />
      </div>
      <div className="mx-auto w-full flex flex-col md:flex-row gap-8 p-16 bg-[#ecf0f1]">
        <Image
          src={ourStoryPhoto2}
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-full md:w-1/2 order-2 md:order-1"
        />
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <h2 className="mb-10 lg:text-6xl text-4xl font-light">Expanding the vision...</h2>
          <p className="font-light leading-8">
            Throughout that time, the church became more and more effective at reaching and serving
            the slavic community, however recognizing that we have been planted in Chicopee, MA for
            "a time such as this," we opened an English-speaking service to reach the community
            outside of our church walls. We renamed our church as "Legacy Church" to re-establish
            our purpose as those who are called to reach the world for Christ.
          </p>
        </div>
      </div>
      <div className="mx-auto w-full flex flex-col md:flex-row gap-8 p-16">
        <div className="w-full md:w-1/2">
          <h2 className=" mb-10 lg:text-6xl text-4xl font-light">Where we are headed...</h2>
          <p className="font-light leading-8">
            Today, we are steadily growing in fellowship, ministry, discipleship, evangelism, and
            worship, and continue to pursue living out our motto, "Change Your World!"
          </p>
        </div>
        <Image
          src={ourStoryPhoto3}
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-full md:w-1/2"
        />
      </div>
      <ServiceTimes />
    </section>
  );
}
