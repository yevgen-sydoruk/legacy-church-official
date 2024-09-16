import React from "react";
import CafeBlock from "@/components/CafeBlock/CafeBlock";
import Hero from "@/components/Hero/Hero";
import ServiceTimes from "@/components/ServiceTimes/ServiceTimes";
import Welcome from "@/components/Welcome/Welcome";
import MiraclesChallenge from "@/components/MiraclesChallenge/MiraclesChallenge";
import UkraineRelief from "@/components/UkraineRelief/UkraineRelief";
import WatchService from "@/components/WatchService/WatchService";

export const metadata = {
  title: "Legacy Church - MA - Home",
  description: "Page description"
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Welcome />
      <MiraclesChallenge />
      <ServiceTimes />
      <WatchService />
      <UkraineRelief />
      <CafeBlock />
    </main>
  );
}
