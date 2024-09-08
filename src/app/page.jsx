import CafeBlock from "@/components/CafeBlock/CafeBlock";
import Hero from "@/components/Hero/Hero";
import ServiceTimes from "@/components/ServiceTimes/ServiceTimes";
import Footer from "@/components/Footer/Footer";
import Welcome from "@/components/Welcome/Welcome";
import React from "react";

export const metadata = {
  title: "Legacy Church - MA - Home",
  description: "Page description"
};

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Welcome />
      <ServiceTimes />
      <CafeBlock />
      <Footer />
    </div>
  );
}
