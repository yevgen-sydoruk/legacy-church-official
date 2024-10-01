import Banner from "@/components/Banner/Banner";
import { ContactForm } from "@/components/ContactForms/ContactForm";
import React from "react";
import bannerImage from "../../../../public/what_we_believe_banner-min.jpg";

export const metadata = {
  title: "Legacy Church - MA - Mission And Vision",
  description: "Page description"
};

export default function WhatWeBelieve() {
  return (
    <section className="pt-[120px]">
      <Banner
        heading={"What We Believe"}
        text={`"What comes into our minds when we think about God is the most important thing about us." - A.W. Tozer`}
        bannerImage={bannerImage}
      />
      <div className="container mx-auto px-10 py-16 flex justify-around text-center gap-10">
        <div className="flex flex-col gap-8">
          <h2 className="sm:text-6xl text-4xl font-light">Core Beliefs</h2>

          <hr />
          <p className="max-w-md font-light leading-8">
            At Legacy Church, we believe that through the life, sacrifice, and resurrection of Jesus
            Christ, we now live in a new covenant. We are empowered by the Holy Spirit, to walk in
            full confidence of salvation, and can boldly come into the presence of God. We can do so
            not by good works, but by the grace which is a gift to all through Jesus Christ. All of
            our teaching and ministry is rooted in and flows out of these biblical doctrines.
          </p>
          <h3 className="font-bold">God</h3>
          <p className="max-w-md font-light leading-8">
            There is one eternally existing God who has three distinct persons: God the Father, God
            the Son, and God the Holy Spirit. He is the creator of all that exists, both visible and
            invisible, and is therefore worthy of all glory and praise. God is perfect in love,
            power, holiness, goodness, knowledge, wisdom, justice, and mercy. He is unchangeable and
            therefore is the same yesterday, today, and tomorrow.
          </p>
          <h3 className="font-bold">Revelation</h3>
          <p className="max-w-md font-light leading-8">
            God has revealed himself to us through his son, Jesus Christ, who is the visible image
            of the invisible God, the holy scriptures, and through all of creation itself.
          </p>
          <h3 className="font-bold">Mankind</h3>
          <p className="max-w-md font-light leading-8">
            Humans, both male and female, were created in God's image for His glory. The first
            humans, Adam and Eve, were created without sin and appointed as caretakers of the rest
            of God's creation.
          </p>
          <h3 className="font-bold">The Fall</h3>
          <p className="max-w-md font-light leading-8">
            When Adam and Eve chose not to obey God, they ceased to be what they were made to be and
            became distorted images of God. This caused them to fall out of fellowship with God, and
            fractured all of creation ever since that time.
          </p>
          <h3 className="font-bold">Salvation</h3>
          <p className="max-w-md font-light leading-8">
            Jesus Christ came to reconcile us with God. He lived a life without sin and willingly
            died on the cross to pay the penalty for our transgressions. God raised him from the
            dead and now, by grace, offers as a free gift eternal life to all who follow Christ, by
            faith, as their Lord and Savior. That is why salvation can be found in Christ alone.
          </p>
          <h3 className="font-bold">The Church</h3>
          <p className="max-w-md font-light leading-8">
            The Church is meant to be the visible body of Christ, sent into the world to glorify God
            and proclaim the gospel of Jesus Christ.
          </p>
          <h3 className="font-bold">Ressurection</h3>
          <p className="max-w-md font-light leading-8">
            Jesus Christ is returning one day to judge both the living and the dead, and to usher in
            the fullness of God's kingdom on earth.
          </p>
        </div>
      </div>
      <ContactForm
        title={"Want to learn more?"}
        text={"We'd love to hear from you! Fill out the form below to get started."}
        sentFromPage={"What We Believe"}
      />
    </section>
  );
}
