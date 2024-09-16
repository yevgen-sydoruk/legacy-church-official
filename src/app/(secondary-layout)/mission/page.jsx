import Banner from "@/components/Banner/Banner";
import React from "react";

export const metadata = {
  title: "Legacy Church - MA - Mission And Vision",
  description: "Page description"
};

export default function Mission() {
  return (
    <section className="h-[2000px] pt-[120px]">
      <Banner heading={"Mission & Vision"} text={"Go therefore and make disciples..."} />
    </section>
  );
}
