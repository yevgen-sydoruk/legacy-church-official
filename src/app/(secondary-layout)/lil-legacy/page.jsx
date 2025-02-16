import Banner from "@/components/Banner/Banner";
import { ContactForm } from "@/components/ContactForms/ContactForm";
import React from "react";
import bannerImage from "../../../../public/lil_legacy_banner.jpg";
import lilLegacy1 from "../../../../public/lil_Legacy_Gallery/lil_legacy_1.jpg";
import lilLegacy2 from "../../../../public/lil_Legacy_Gallery/lil_legacy_2.jpg";
import lilLegacy3 from "../../../../public/lil_Legacy_Gallery/lil_legacy_3.jpg";

export const metadata = {
  title: "Legacy Church - Lil' Legacy",
  description:
    "Lil' Legacy at Legacy Church teaches and equips children in their faith journey. Join us as we support families in their spiritual growth!",
  keywords:
    "Lil' Legacy, children's ministry, Legacy Tots, nursery, spiritual growth, Legacy Church, kids church, Matthew 19:14",
  author: "Legacy Church",
  og: {
    title: "Lil' Legacy - Legacy Church",
    description:
      "Discover the mission of Lil' Legacy, dedicated to teaching children about Jesus and supporting families in their spiritual journeys.",
    image: { bannerImage },
    url: "https://legacychurchofficial.com/lil-legacy"
  }
};

export default function LilLegacy() {
  return (
    <section className="pt-[120px]">
      <Banner heading={"Lil' Legacy"} text={``} bannerImage={bannerImage} />
      <div className="mx-auto max-w-6xl px-10 py-16 flex flex-col items-center text-center gap-5">
        <a href="https://www.bible.com/bible/114/MAT.19.14" target="_blank">
          <h2 className="mb-5 lg:text-6xl text-4xl font-light">
            Jesus said, "Let the little children come to me..."
          </h2>
          <h3 className="text-[#e67e22] text-xl font-bold">Matthew 19:14</h3>
        </a>
        <p className="max-w-2xl font-light leading-8">
          The mission of Lil’ Legacy is to teach, encourage, and equip children to walk in the ways
          of Jesus Christ. Our aim is to assist children as they learn about God, to support parents
          with their children’s spiritual growth, and to keep kids excited about coming to church!
        </p>
        <h3 className="text-xl font-bold">Lil’ Legacy</h3>
        <p className="max-w-2xl font-light leading-8">
          The mission of Lil’ Legacy is to teach, encourage, and equip children to walk in the ways
          of Jesus Christ. Our aim is to assist children as they learn about God, to support parents
          with their children’s spiritual growth, and to keep kids excited about coming to church!
        </p>
        <h3 className="text-xl font-bold">Legacy Tots</h3>
        <p className="max-w-2xl font-light leading-8">
          Legacy Tots is our toddler room for walkers through age 4, and is an interactive
          environment where children can crawl, walk, and play. Supervision is provided and open at
          beginning of service during worship.
        </p>
        <h3 className="text-xl font-bold">Nursery</h3>
        <p className="max-w-2xl font-light leading-8">
          The nursery is a quiet and comfortable room for nursing moms with young ones. We provide
          everything you need to take care of your little one while still enjoying the service.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto px-10 py-16 justify-items-center">
        <div
          className="relative w-full h-[300px] overflow-hidden bg-cover bg-center transition-transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${lilLegacy1.src})` }}
        ></div>
        <div
          className="relative w-full h-[300px] overflow-hidden bg-cover bg-center transition-transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${lilLegacy2.src})` }}
        ></div>
        <div
          className="relative w-full h-[300px] overflow-hidden bg-cover bg-center transition-transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${lilLegacy3.src})` }}
        ></div>
      </div>

      <ContactForm
        title={"Want to learn more?"}
        text={"We'd love to hear from you! Fill out the form below to get started."}
        sentFromPage={"What We Believe"}
      />
    </section>
  );
}
