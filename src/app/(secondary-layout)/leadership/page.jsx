import Banner from "@/components/Banner/Banner";
import React from "react";
import bannerImage from "../../../../public/leadership_banner.jpg";
import leader_1 from "../../../../public/leadership_Vasily_Tokarev.png";
import leader_2 from "../../../../public/leadership_Aleksandr_Tokarev.jpg";
import leader_3 from "../../../../public/leadership_David_Matsuk.jpg";
import leader_4 from "../../../../public/leadership_Daniel_Orlik.jpg";
import leader_5 from "../../../../public/leadership_Oksana_Arbuzov.jpg";
import Image from "next/image";

export const metadata = {
  title: "Legacy Church - Leadership",
  description:
    "Meet the dedicated leadership team of Legacy Church, including our pastors and staff who are committed to serving the community and fostering spiritual growth.",
  keywords:
    "Legacy Church, leadership, pastors, church staff, community, faith, spiritual growth, church leaders",
  author: "Legacy Church",
  og: {
    title: "Legacy Church - Meet Our Leadership Team",
    description:
      "Discover the passionate leaders at Legacy Church who are committed to guiding and nurturing our community.",
    image: { bannerImage },
    url: "https://legacychurchofficial.com/leadership"
  }
};

export default function Leadership() {
  return (
    <section className="pt-[120px]">
      <Banner heading={"meet our team"} text={"Pastors & Staff"} bannerImage={bannerImage} />
      <div className="mx-auto w-full flex flex-col md:flex-row p-16 gap-6">
        <div className="flex w-full md:w-[37%] justify-center items-center">
          <div className="relative w-[300px] h-[300px] overflow-hidden text-center">
            <Image
              src={leader_1}
              width={300}
              height="auto"
              alt="Vasily Tokarev photo"
              className=""
            />
          </div>
        </div>

        <div className="w-full md:w-[63%] text-center md:text-left max-w-2xl">
          <h2 className="mb-5 lg:text-6xl text-4xl font-light">Vasily Tokarev</h2>
          <h3 className="mb-10 lg:text-2xl text-lg font-bold">Founding Pastor</h3>
          <p className="mb-10 font-light leading-8">
            Vasily founded the Church of the New Covenant in 1997 because he desired to create a
            space where people can encounter the presence of God and the active work of the Holy
            Spirit. He remains involved at Legacy Church as a pastor and mentor.
          </p>
          <button className="rounded-md border bg-[#3498db] py-2 px-4 text-center text-xl transition-all shadow-lg hover:shadow-xl text-white hover:text-white hover:bg-[#10364f] hover:border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] uppercase">
            Contact
          </button>
        </div>
      </div>
      <hr />
      <div className="mx-auto w-full flex flex-col md:flex-row p-16 gap-6">
        <div className="flex w-full md:w-[37%] justify-center items-center">
          <div className="relative w-[300px] h-[300px] overflow-hidden text-center">
            <Image
              src={leader_2}
              width={300}
              height="auto"
              alt="Aleksandr Tokarev photo"
              className=""
            />
          </div>
        </div>

        <div className="w-full md:w-[63%] text-center md:text-left max-w-2xl">
          <h2 className="mb-5 lg:text-6xl text-4xl font-light">Aleksandr Tokarev</h2>
          <h3 className="mb-10 lg:text-2xl text-lg font-bold">Lead Pastor</h3>
          <p className="mb-10 font-light leading-8">
            Aleks served in almost every behind-the-scenes ministry at Legacy Church for over 15
            years until he could no longer ignore God's call to pastoral ministry. He has been
            serving Legacy Church as lead pastor since 2017.
          </p>
          <button className="rounded-md border bg-[#3498db] py-2 px-4 text-center text-xl transition-all shadow-lg hover:shadow-xl text-white hover:text-white hover:bg-[#10364f] hover:border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] uppercase">
            Contact
          </button>
        </div>
      </div>
      <hr />
      <div className="mx-auto w-full flex flex-col md:flex-row p-16 gap-6">
        <div className="flex w-full md:w-[37%] justify-center items-center">
          <div className="relative w-[300px] h-[300px] overflow-hidden text-center">
            <Image src={leader_3} width={300} height="auto" alt="David Matsuk photo" className="" />
          </div>
        </div>

        <div className="w-full md:w-[63%] text-center md:text-left max-w-2xl">
          <h2 className="mb-5 lg:text-6xl text-4xl font-light">David Matsuk</h2>
          <h3 className="mb-10 lg:text-2xl text-lg font-bold">Youth Pastor</h3>
          <p className="mb-10 font-light leading-8">
            Dave started off as a missionary and was always passionate about seeing young people
            come to know Jesus. He became an ordained Youth Pastor in 2020 and serves the Legacy
            Youth with his wife, Loredana.
          </p>
          <button className="rounded-md border bg-[#3498db] py-2 px-4 text-center text-xl transition-all shadow-lg hover:shadow-xl text-white hover:text-white hover:bg-[#10364f] hover:border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] uppercase">
            Contact
          </button>
        </div>
      </div>
      <hr />
      <div className="mx-auto w-full flex flex-col md:flex-row p-16 gap-6">
        <div className="flex w-full md:w-[37%] justify-center items-center">
          <div className="relative w-[300px] h-[300px] overflow-hidden text-center">
            <Image
              src={leader_4}
              width={300}
              height="auto"
              alt="Daniel Orlik Jr. photo"
              className=""
            />
          </div>
        </div>

        <div className="w-full md:w-[63%] text-center md:text-left max-w-2xl">
          <h2 className="mb-5 lg:text-6xl text-4xl font-light">Daniel Orlik Jr.</h2>
          <h3 className="mb-10 lg:text-2xl text-lg font-bold">Worship Pastor</h3>
          <p className="mb-10 font-light leading-8">
            Dan had been serving at Legacy Church's worship team as a pianist and worship leader. He
            became an ordained Worship Pastor in 2020, and serves alongside his wife, Alvina, and
            Legacy's faithful worship community.
          </p>
          <button className="rounded-md border bg-[#3498db] py-2 px-4 text-center text-xl transition-all shadow-lg hover:shadow-xl text-white hover:text-white hover:bg-[#10364f] hover:border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] uppercase">
            Contact
          </button>
        </div>
      </div>
      <hr />
      <div className="mx-auto w-full flex flex-col md:flex-row p-16 gap-6">
        <div className="flex w-full md:w-[37%] justify-center items-center">
          <div className="relative w-[300px] h-[300px] overflow-hidden text-center">
            <Image
              src={leader_5}
              width={300}
              height="auto"
              alt="Oksana Arbuzov"
              className="absolute -top-20"
            />
          </div>
        </div>

        <div className="w-full md:w-[63%] text-center md:text-left max-w-2xl">
          <h2 className="mb-5 lg:text-6xl text-4xl font-light">Oksana Arbuzov</h2>
          <h3 className="mb-10 lg:text-2xl text-lg font-bold">Staff Administrator</h3>
          <p className="mb-10 font-light leading-8">
            Oksana's passion for people and our teams has been a catalyst for her administrative
            skills. If you are looking to get plugged in, she's the ones you'll want to see!
          </p>
          <button className="rounded-md border bg-[#3498db] py-2 px-4 text-center text-xl transition-all shadow-lg hover:shadow-xl text-white hover:text-white hover:bg-[#10364f] hover:border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] uppercase">
            Contact
          </button>
          {/* oksana.a1017@gmail.com <oksana.a1017@gmail.com>; */}
        </div>
      </div>
    </section>
  );
}
