import React from "react";

export default function ServiceTimes() {
  return (
    <section className="bg-[#3498db] lg:flex justify-center text-white">
      <div className="lg:w-1/2 text-center lg:text-left w-full flex flex-col gap-5 p-10">
        <h2 className="sm:text-6xl text-4xl text-center">Service Times</h2>
        <div className="">
          <h3 className="text-xl font-bold">Sunday Service</h3>
          <p className="text-lg">Service 9 AM</p>
          <p className="text-lg">Cafe 10:30 AM</p>
        </div>
        <div className="">
          <h3 className="text-xl font-bold">Wednesday Youth Service</h3>
          <p className="text-lg">Service 7:30 PM</p>
          <p className="text-lg">Cafe 7 PM</p>
        </div>
        <div className="">
          <h3 className="text-xl font-bold">Outpour Nights</h3>
          <p className="text-lg">Every First Wednesday of the Month 7 PM</p>
        </div>

        <p className="text-lg">
          <span className="font-bold">Address:</span> 780 Chicopee St, Chicopee, MA 01013
        </p>
      </div>
      <iframe
        className="lg:w-1/2 w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2956.235618614395!2d-72.60928698784954!3d42.18802937108935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6dc31e60da41d%3A0x1b7357ac2f801fac!2sLegacy%20Church!5e0!3m2!1sen!2sus!4v1725772455119!5m2!1sen!2sus"
        width="800"
        height="600"
        // style="border:0;"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
