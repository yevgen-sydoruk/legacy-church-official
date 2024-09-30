import Banner from "@/components/Banner/Banner";
import { ContactForm } from "@/components/ContactForms/ContactForm";
import React from "react";
import bannerImage from "../../../../public/what_we_believe_banner.jpg";

export const metadata = {
  title: "Legacy Church - MA - Mission And Vision",
  description: "Page description"
};

export default function Give() {
  return (
    <section className="pt-[120px]">
      <Banner
        heading={"Giving"}
        text={`"For where your treasure is, there your heart will be also." - Matthew 6:21`}
        bannerImage={bannerImage}
      />
      <div className="container mx-auto px-10 py-16 flex justify-around text-center gap-10">
        <div className="flex flex-col gap-8">
          <h2 className="sm:text-6xl text-4xl font-light">Why we give.</h2>

          <hr />
          <p className="max-w-md font-light leading-8">
            God is generous and so He calls us to be as well. What we do with what God has given us
            shows the world where our hearts are at and helps proclaim the gospel. We want to
            glorify God with every area of our lives, and that includes what we do with our
            finances.
          </p>
        </div>
      </div>
      <div className="bg-[#3498db] lg:flex justify-center text-white">
        <div className="lg:w-1/2 text-center lg:text-left w-full flex flex-col gap-5 p-10">
          <h2 className="sm:text-6xl text-4xl text-center">Ways To Give</h2>
          <hr />
          <div className="">
            <h3 className="text-xl font-bold">Our Website/ App</h3>
            <p className="text-lg">
              Set up your account to give right here through our website or mobile app! Choose the
              amount and frequency to your convenience and never miss the opportunity to give.{" "}
            </p>
          </div>
          <div className="">
            <h3 className="text-xl font-bold">Text to Give</h3>
            <p className="text-lg">
              We make giving as easy as sending a text! Text "give" to 413-650-6050 to give right
              from your phone!
            </p>
          </div>
          <div className="">
            <h3 className="text-xl font-bold">Give in Person</h3>
            <p className="text-lg">
              Drop off any donations or entries in the wooden drop box located in the lobby. Please
              make any checks payable to "Legacy Church."
            </p>
          </div>
          <div className="">
            <h3 className="text-xl font-bold">Mail It</h3>
            <p className="text-lg">Send gift to 780 Chicopee St, Chicopee, MA 01013.</p>
          </div>

          <h3 className="text-xl font-bold">Thank you for sowing into Legacy Church!</h3>
        </div>
        <div className="lg:w-1/2 w-full">giving form placeholder</div>
        {/* <iframe
          className="lg:w-1/2 w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2956.235618614395!2d-72.60928698784954!3d42.18802937108935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6dc31e60da41d%3A0x1b7357ac2f801fac!2sLegacy%20Church!5e0!3m2!1sen!2sus!4v1725772455119!5m2!1sen!2sus"
          width="800"
          height="600"
          // style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>
      <ContactForm
        title={"Have questions or need help?"}
        text={"We'd love to hear from you! Fill out the form below to get started."}
        sentFromPage={"Giving"}
      />
    </section>
  );
}