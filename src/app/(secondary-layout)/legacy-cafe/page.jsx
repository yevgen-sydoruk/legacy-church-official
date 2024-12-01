import Banner from "@/components/Banner/Banner";
import React from "react";
import bannerImage from "../../../../public/legacy-cafe.jpg";
import cafeMenu from "../../../../public/legacy-cafe-menu.jpg";
import cafe_1 from "../../../../public/cafe-Gallery/cafe_1.jpg";
import cafe_2 from "../../../../public/cafe-Gallery/cafe_2.jpg";
import cafe_3 from "../../../../public/cafe-Gallery/cafe_3.jpg";
import Link from "next/link";
import InstagramIcon from "../../../../assets/icons/InstagramIcon";
import ServiceTimes from "@/components/ServiceTimes/ServiceTimes";

export const metadata = {
  title: "Legacy Church - Legacy Cafe",
  description:
    "Join us at Legacy Cafe for specialty coffee, fellowship, and a welcoming community. Enjoy free drinks for first-time visitors!",
  keywords:
    "Legacy Cafe, coffee shop, specialty coffee, fellowship, Legacy Church, community, mobile ordering",
  author: "Legacy Church",
  og: {
    title: "Welcome to Legacy Cafe",
    description:
      "Discover specialty coffee and community at Legacy Cafe. Join us for fellowship and enjoy a free drink if you're visiting for the first time!",
    image: { bannerImage },
    url: "https://legacychurchofficial.com/legacy-cafe"
  }
};

export default function LegacyCafe() {
  return (
    <section className="pt-[120px]">
      <Banner heading={"Legacy Cafe"} text={``} bannerImage={bannerImage} />
      <div className="mx-auto max-w-6xl px-10 py-16 flex flex-col items-center text-center gap-5">
        <a href="https://www.bible.com/bible/114/1JN.1.3" target="_blank">
          <h2 className="mb-5 text-4xl font-light">
            "That which we have seen and heard we proclaim also to you, so that you too may have
            fellowship with us; and indeed our fellowship is with the Father and with his Son Jesus
            Christ."
          </h2>
          <h3 className="text-[#e67e22] text-xl font-bold">1 John 1:3</h3>
        </a>
        <p className="max-w-2xl font-light leading-8">
          Our fellowship doesn't end at service, we invite you to join us at Legacy Cafe!! We would
          love to meet you and fellowship with YOU. We proudly serve specialty coffee with a full
          espresso bar featuring Share Coffee and a variety of tea beverages. Our Legacy Merch and
          other goods are also available for purchase at the register! Our Cafe Team works hard with
          a quality focused mindset from the coffee to the environment, to be a place of connection
          for our community.
        </p>
        <p className="max-w-2xl font-light leading-8">
          Changing your world one cup of coffee at a time.
        </p>
        <p className="max-w-2xl font-light leading-8">
          First time at Legacy Church? Enjoy a free drink on us!
        </p>
        <strong className="text-xl font-bold">MOBILE ORDER AVAILABLE</strong>
        <p className="max-w-lg">
          Download the
          <br></br>
          <Link
            href="https://apps.apple.com/us/app/legacy-church-official/id1622867116"
            passHref={true}
            legacyBehavior={true}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3498db] link-decoration-underline"
            >
              Legacy Church Official App for Apple{" "}
            </a>
          </Link>
          <br></br>
          or
          <br></br>
          <Link
            href="https://play.google.com/store/apps/details?id=com.subsplashconsulting.s_X2WRGF&hl=en_US"
            passHref={true}
            legacyBehavior={true}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3498db] link-decoration-underline"
            >
              Legacy Church Official App for Android{" "}
            </a>
          </Link>
        </p>
      </div>
      <div
        className="relative w-full mx-auto max-w-6xl h-full px-10 py-16 flex flex-col gap-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cafeMenu.src})` }} // Ensure .src is used for Next.js Image
      >
        <h3 className="text-4xl font-light uppercase text-center font-serif underline decoration-1 decoration-white underline-offset-8">
          Legacy cafe menu
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <h4 className="text-xl font-bold">Cold Drinks</h4>
          <p className="font-bold text-right sm:text-left">Price</p>
          <hr className="col-span-2 border-white/80" />
          <p>Iced Latte</p>
          <p className="text-right sm:text-left">$4.00</p>
          <hr className="col-span-2 border-white/80" />
          <p>Iced Cappuchino</p>
          <p className="text-right sm:text-left">$3.50</p>
          <hr className="col-span-2 border-white/80" />
          <p>Iced Tea</p>
          <p className="text-right sm:text-left">$3.00</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <h4 className="text-xl font-bold">Hot Drinks</h4>
          <p className="font-bold text-right sm:text-left">Price</p>
          <hr className="col-span-2 border-white/80" />
          <p>Espresso</p>
          <p className="text-right sm:text-left">$2.00</p>
          <hr className="col-span-2 border-white/80" />
          <p>Americano</p>
          <p className="text-right sm:text-left">$3.00</p>
          <hr className="col-span-2 border-white/80" />
          <p>Cortado</p>
          <p className="text-right sm:text-left">$3.50</p>
          <hr className="col-span-2 border-white/80" />
          <p>Cappuccino</p>
          <p className="text-right sm:text-left">$3.50</p>
          <hr className="col-span-2 border-white/80" />
          <p>Latte</p>
          <p className="text-right sm:text-left">$4.00</p>
          <hr className="col-span-2 border-white/80" />
          <p>Chai Tea Latte</p>
          <p className="text-right sm:text-left">$4.00</p>
          <hr className="col-span-2 border-white/80" />
          <p>London Fog Latte</p>
          <p className="text-right sm:text-left">$3.00</p>
          <hr className="col-span-2 border-white/80" />
          <p>Matcha Latte</p>
          <p className="text-right sm:text-left">$3.50</p>
          <hr className="col-span-2 border-white/80" />
          <p>Hot Chocolate</p>
          <p className="text-right sm:text-left">$2.00</p>
          <hr className="col-span-2 border-white/80" />
          <p>Tea</p>
          <p className="text-right sm:text-left">$3.00</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <h4 className="text-xl font-bold">Flavors</h4>
          <p className="font-bold text-right sm:text-left">+$0.5</p>
          <hr className="col-span-2 border-white/80" />
          <p>Caramel</p>
          <p className="text-right sm:text-left">Cinnamon</p>
          <p>Vanilla</p>
          <p className="text-right sm:text-left">Lavander</p>
          <p>Hazelnut</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto px-10 py-16 justify-items-center">
        <div
          className="relative w-full h-[300px] overflow-hidden bg-cover bg-center transition-transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${cafe_1.src})` }}
        ></div>
        <div
          className="relative w-full h-[300px] overflow-hidden bg-cover bg-center transition-transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${cafe_2.src})` }}
        ></div>
        <div
          className="relative w-full h-[300px] overflow-hidden bg-cover bg-center transition-transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${cafe_3.src})` }}
        ></div>
      </div>
      <div className="flex justify-center py-8 text-3xl font-bold">
        <Link href="https://www.instagram.com/legacy.church.cafe/" passHref legacyBehavior>
          <a
            target="_blank"
            className="flex flex-col text-center gap-4 items-center text-[#3498db] hover:text-cyan-700"
          >
            Follow LEGACY Cafe on Instagram
            <InstagramIcon styles="fill-[#3498db] hover:fill-cyan-700" />
          </a>
        </Link>
      </div>
      <ServiceTimes />
    </section>
  );
}
