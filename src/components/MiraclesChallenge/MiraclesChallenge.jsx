"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function MiraclesChallenge() {
  return (
    <section className="py-20">
      {/* <div className="flex flex-col justify-center items-center gap-10"> */}
      <div className="flex flex-col items-center gap-10">
        <div className="container md:max-w-4xl max-w-3xl px-10 flex flex-col justify-center items-center gap-5 text-center">
          <h2 className="sm:text-6xl text-4xl">100 MIRACLES CHALLENGE</h2>
          <p>
            We strongly believe that there is power in prayer - even Jesus prayed! We would be
            honored to pray for you or someone you know. Our team prays for all the prayer requests
            we receive on a regular basis.
          </p>
          <p>
            If you've sent in a prayer request and God has answered your prayer, share your
            testimony! We'd love to hear from you and give God the glory for our 100 Miracle
            Challenge! Fill out the form using the link below to get started.
          </p>
          <div className="flex md:flex-row flex-col gap-4 text-white">
            <Link
              href="#"
              className="rounded-md border bg-[#3498db] py-2 px-4 text-center text-xl transition-all shadow-lg hover:shadow-xl text-white hover:text-white hover:bg-[#10364f] hover:border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] uppercase"
            >
              Send prayer request
            </Link>
            <Link
              href="#"
              className="rounded-md border bg-[#3498db] py-2 px-4 text-center text-xl transition-all shadow-lg hover:shadow-xl text-white hover:text-white hover:bg-[#10364f] hover:border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] uppercase"
            >
              Send praise report
            </Link>
          </div>
        </div>
        <div className="w-full ">
          <Swiper
            spaceBetween={30}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff"
            }}
            autoHeight={true}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true
            }}
            pagination={{
              clickable: true
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="bg-[#3498db] text-center text-white items-center justify-center"
          >
            <SwiperSlide className="p-20">
              <h3 className="sm:text-xl text-lg pb-5">Praise Report #30</h3>
              <p className="lg:text-5xl text-3xl font-extralight">
                My daughter hasn't spoken to me in 4 years. She called me on the phone last week and
                we had a nice conversation. Praise God!
              </p>
            </SwiperSlide>
            <SwiperSlide className="p-20">
              <h3 className="sm:text-xl text-lg pb-5">Praise Report #29</h3>
              <p className="lg:text-5xl text-3xl font-extralight">
                After Outpour Prayer Night, the Lord blessed and touched my heart. I felt called to
                start serving at church.
              </p>
            </SwiperSlide>
            <SwiperSlide className="p-20">
              <h3 className="sm:text-xl text-lg pb-5">Praise Report #28</h3>
              <p className="lg:text-5xl text-3xl font-extralight">
                I've always been ashamed of my identity which makes me struggle with self esteem. At
                outpour prayer night, I felt the Lord take it away. I started freely introducing
                myself to people because I felt no shame anymore.
              </p>
            </SwiperSlide>
            <SwiperSlide className="p-20">
              <h3 className="sm:text-xl text-lg pb-5">Praise Report #27</h3>
              <p className="lg:text-5xl text-3xl font-extralight">
                God showed up for my family and granted us victory in a judicial fight.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
