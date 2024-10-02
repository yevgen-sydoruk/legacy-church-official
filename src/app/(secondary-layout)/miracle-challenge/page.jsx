"use client";

import Banner from "@/components/Banner/Banner";
import React, { useState } from "react";
import bannerImage from "../../../../public/legacy_youth_banner.jpg";
import legacyYouthLogo from "../../../../public/legacy_youth_logo.png";
import { PrayerRequestsForm } from "@/components/ContactForms/PrayerRequestsForm";
import { PraiseReportsForm } from "@/components/ContactForms/PraiseReportsForm";

// export const metadata = {
//   title: "Legacy Church - MA - Prayer Requests and Praise Reports",
//   description:
//     "Submit your prayer requests or share your praise reports with Legacy Church. Join us in our 100 Miracle Challenge!",
//   keywords:
//     "prayer requests, praise reports, Legacy Church, 100 Miracle Challenge, faith, community support, testimonies",
//   author: "Legacy Church",
//   og: {
//     title: "Prayer Requests and Praise Reports",
//     description:
//       "Share your prayer needs or praise reports with Legacy Church. We believe in the power of prayer and would love to support you.",
//     image: "/path/to/legacy_youth_banner.jpg", // Update with the correct path to the banner image
//     url: "https://yourwebsite.com/prayer-request" // Update with your page URL
//   }
// };

export default function PrayerRequest() {
  const [form, setForm] = useState(true);

  return (
    <section className="pt-[120px]">
      <Banner heading={"100 Miracle Challenge!"} text={""} bannerImage={legacyYouthLogo} />
      <div className="container mx-auto flex flex-col text-center items-center px-10 py-16 gap-10">
        <h2 className="sm:text-6xl text-4xl font-light">Prayer Requests and Praise Reports</h2>
        <p className="max-w-md leading-8">
          At Legacy Church, we believe in the power of prayer and the impact of sharing testimonies.
          Whether you're submitting a prayer request or sharing how God has answered your prayers,
          we are here to support you through this journey. Use the button below to switch between
          our Prayer Request Form, where you can submit requests for prayer, and our Praise Report
          Form, where you can share how God has answered your prayers. Simply click the button to
          toggle between the two forms and submit your message.
        </p>
        <button
          onClick={() => setForm(!form)}
          className="rounded-md border bg-[#3498db] py-2 px-4 text-center text-xl transition-all shadow-lg hover:shadow-xl text-white hover:text-white hover:bg-[#10364f] hover:border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] uppercase"
        >
          {form ? "Switch to Praise Report Form" : "Switch to Prayer Request Form"}
        </button>
      </div>
      {form ? (
        <PrayerRequestsForm
          title={"Prayer Request Form"}
          text={
            "We  strongly believe that there is power in prayer - even Jesus prayed! We would be honored to pray for you or someone you know. Our team prays for all the prayer requests we receive on a regular basis."
          }
          sentFromPage={"Prayer Request"}
        />
      ) : (
        <PraiseReportsForm
          title={"Praise Report Form"}
          text={
            "If you've sent in a prayer request and God has answered your prayer, share your testimony!! We'd love to hear from you and give God the glory for our 100 Miracle Challenge!  Fill out the form below to get started."
          }
          sentFromPage={"Prayer Request"}
        />
      )}
    </section>
  );
}
