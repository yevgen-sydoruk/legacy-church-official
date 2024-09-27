import Banner from "@/components/Banner/Banner";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import React from "react";
import bannerImage from "../../../../public/volunteer_banner.jpg";
import volunteerImage1 from "../../../../public/volunteer_images/volunteer_image1.jpg";
import volunteerImage2 from "../../../../public/volunteer_images/volunteer_image2.jpg";
import { accordionData } from "./accordionData";
import Link from "next/link";
import Accordion from "../../../components/Accordion/Accordion";

export const metadata = {
  title: "Legacy Church - MA - Mission And Vision",
  description: "Page description"
};

export default function Volunteer() {
  return (
    <section className="pt-[120px]">
      <Banner heading={"Volunteer"} text={""} bannerImage={bannerImage} />
      <div className="container mx-auto p-16 flex flex-col sm:flex-row items-center sm:items-stretch justify-evenly text-center gap-10">
        <a href="https://www.bible.com/bible/114/MRK.10.45.NKJV" target="_blank">
          <h2 className="mb-5 lg:text-6xl text-4xl font-light">
            "For even the Son of Man came not to be served, but to serve..."
          </h2>
          <h3 className="text-[#e67e22] text-xl font-bold">Mark 10:45</h3>
        </a>
      </div>
      <div className="flex lg:flex-row flex-col w-full px-10 py-16 gap-8">
        <div
          className={`relative lg:w-1/2 h-[500px] bg-cover bg-center bg-no-repeat`}
          style={{ backgroundImage: `url(${volunteerImage1.src})` }}
        ></div>
        <div
          className={`relative lg:w-1/2 h-[500px] bg-cover bg-top bg-no-repeat`}
          style={{ backgroundImage: `url(${volunteerImage2.src})` }}
        ></div>
      </div>
      <div className="container mx-auto flex flex-col text-center items-center px-10 py-16 gap-10">
        <h2 className="sm:text-6xl text-4xl font-light">Serve In Our Church</h2>
        <h3 className="text-xl font-bold mb-3">Use your unique gifts to fulfill your purpose.</h3>
        <p className="max-w-md font-light leading-8">
          At Legacy Church, we believe that through the life, sacrifice, and resurrection of Jesus
          Christ, we now live in a new covenant. We are empowered by the Holy Spirit, to walk in
          full confidence of salvation, and can boldly come into the presence of God. We can do so
          not by good works, but by the grace which is a gift to all through Jesus Christ. All of
          our teaching and ministry is rooted in and flows out of these biblical doctrines.
        </p>
        <Link
          href="#contactForm"
          className="rounded-md border bg-[#3498db] py-2 px-4 text-center text-xl transition-all shadow-lg hover:shadow-xl text-white hover:text-white hover:bg-[#10364f] hover:border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] uppercase"
        >
          Sign up to serve
        </Link>
      </div>
      <div className="mx-auto flex flex-col px-10 py-16 gap-10 bg-[#ecf0f1]">
        <h2 className="sm:text-6xl text-4xl font-light text-center">
          Check out all the opportunities.
        </h2>
        <p className="max-w-xl mx-auto font-light leading-8  text-center">
          Have a gift or talent not included here? We want to know about it! We believe in God-given
          gifts and want to help you steward yours for His glory!
        </p>
        <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 auto-cols-auto gap-10 justify-items-center">
          <div className="w-[400px] flex">
            <div className="p-3 mr-8 border-2 border-[#3498db] rounded-full self-start text-center">
              <i className="pe-7s-users pe-3x pe-va text-[#3498db] w-[48px]"></i>
            </div>
            <div className="">
              <h3 className="text-xl font-bold mb-3">If you love people</h3>
              <ol className="flex flex-col list-disc gap-1">
                <li className="">
                  <p className="">Greeters</p>
                </li>
                <li className="">
                  <p className="">Prayer Team</p>
                </li>
                <li className="">
                  <p className="">MC</p>
                </li>
                <li className="">
                  <p className="">Lil Legacy Instructor</p>
                </li>
                <li className="">
                  <p className="">Youth Teams</p>
                </li>
              </ol>
            </div>
          </div>
          <div className="w-[400px] flex">
            <div className="p-3 mr-8 border-2 border-[#3498db] rounded-full self-start text-center">
              <i className="pe-7s-headphones pe-3x pe-va text-[#3498db] w-[48px]"></i>
            </div>
            <div className="">
              <h3 className="text-xl font-bold mb-3">If you love production</h3>
              <ol className="flex flex-col list-disc gap-1">
                <li className="">
                  <p className="">Lyrics/ Projector coordinator</p>
                </li>
                <li className="">
                  <p className="">Audio Tech</p>
                </li>
                <li className="">
                  <p className="">Light Specialist</p>
                </li>
              </ol>
            </div>
          </div>
          <div className="w-[400px] flex">
            <div className="p-3 mr-8 border-2 border-[#3498db] rounded-full self-start text-center">
              <i className="pe-7s-camera pe-3x pe-va text-[#3498db] w-[48px]"></i>
            </div>
            <div className="">
              <h3 className="text-xl font-bold mb-3">If you love to create</h3>
              <ol className="flex flex-col list-disc gap-1">
                <li className="">
                  <p className="">Photographer</p>
                </li>
                <li className="">
                  <p className="">Web Designer</p>
                </li>
                <li className="">
                  <p className="">Livestream Director</p>
                </li>
                <li className="">
                  <p className="">Merch Designer</p>
                </li>
              </ol>
            </div>
          </div>
          <div className="w-[400px] flex">
            <div className="p-3 mr-8 border-2 border-[#3498db] rounded-full self-start text-center">
              <i className="pe-7s-music pe-3x pe-va text-[#3498db] w-[48px]"></i>
            </div>
            <div className="">
              <h3 className="text-xl font-bold mb-3">If you love worship</h3>
              <ol className="flex flex-col list-disc gap-1">
                <li className="">
                  <p className="">Musician</p>
                </li>
                <li className="">
                  <p className="">Vocalist</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#3498db] text-white px-10 py-16">
        <h2 className="mb-5 sm:text-6xl text-4xl font-light text-center">Volunteer FAQ</h2>
        <Accordion accordionData={accordionData} />
      </div>
      <div id="contactForm">
        <ContactForm
          title={"Ready for volunteering?"}
          text={
            "Or have any questions? We'd love to clarify any volunteering questions! Please use the form below."
          }
          sentFromPage={"Volunteer"}
        />
      </div>
    </section>
  );
}
