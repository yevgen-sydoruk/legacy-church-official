import React from "react";
import CafeBlock from "@/components/CafeBlock/CafeBlock";
import Hero from "@/components/Hero/Hero";
import ServiceTimes from "@/components/ServiceTimes/ServiceTimes";
import Welcome from "@/components/Welcome/Welcome";
import MiraclesChallenge from "@/components/MiraclesChallenge/MiraclesChallenge";
import UkraineRelief from "@/components/UkraineRelief/UkraineRelief";
import WatchService from "@/components/WatchService/WatchService";
import { ContactForm } from "@/components/ContactForms/ContactForm";
import VolunteerBlock from "@/components/VolunteerBlock/VolunteerBlock";

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
      <VolunteerBlock />
      <ServiceTimes />
      <WatchService />
      <UkraineRelief />
      <CafeBlock />
      <ContactForm
        title={"Get In Touch"}
        text={"We'd love to hear from you! Fill out the form below to get started."}
        sentFromPage={"Main Page"}
      />
    </main>
  );
}
