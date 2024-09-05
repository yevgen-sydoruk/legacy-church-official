import Hero from "@/components/Hero/Hero";
import React from "react";

export const metadata = {
  title: "Legacy Church - MA - Home",
  description: "Page description"
};

export default function Home() {
  return (
    <div className="h-[1000px] pt-[97px]">
      <Hero />
    </div>
  );
}
