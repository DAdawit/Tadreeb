"use client";
import ContactUsForm from "@/components/ContactUs/ContactUsForm";
import Hero from "@/components/ContactUs/Hero";
import WhoWeAre from "@/components/ContactUs/WhoWeAre";
// import ContactUsMap from "@/components/ContactUsMap";
import dynamic from "next/dynamic";

import React from "react";
const ContactUsMap = dynamic(() => import("@/components/ContactUsMap"), {
  ssr: false,
});
const page = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section className="py-16 px-5">
        <div className="border-2 border-gray-400 max-w-2xl mx-auto py-24">
          <h1 className="capitalize text-2xl font-bold text-center text-gray-500 underline underline-offset-2">
            contact us
          </h1>
          <div className="px-5">
            <ContactUsForm buttonLabel="submit" />
          </div>
        </div>
      </section>
      <div className="bg-gray-50 ">
        <ContactUsMap />
      </div>

      {/* <section>
        <Testimonials />
      </section>
      <MoveToTop /> */}
    </div>
  );
};

export default page;
