"use client";
import React from "react";

import Link from "next/link";
import { useLanguage } from "@/app/components/LangaugeContext";
import Navigation from "./navigation";

const Hero = () => {
  const isEnglish = useLanguage();

  return (
    <div className="flex flex-col bg-[#ece3ca] min-h-screen h-auto z-0 ">
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen gap-10">
        {isEnglish ? (
          <h1 className="leading-[1.5]">
            I am delighted to have you here.
            <br /> Let&rsquo;s discover who I am <br />
            and what I have to offer.
          </h1>
        ) : (
          <h1 className="leading-[1.5]">
            Je suis heureux de vous accueillir ici.<br /> Découvrons qui je suis et ce
            que j&rsquo;ai à offrir.
          </h1>
        )}
        <button className="btn btn-secondary">
          <Link href="#scotland">
            {isEnglish ? "Let's Start" : "Commençons"}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
