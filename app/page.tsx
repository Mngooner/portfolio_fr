"use client";

import React from "react";
import Hero from "./components/hero";
import Weather from "./components/weather/page";
import Skills from "./components/skills/page";
import SpeedTyping from "./components/speedTyping/page";
import Contact from "./components/contact/page";
import { LanguageProvider } from "@/app/components/LangaugeContext"

const Homepage = () => {
  return (
    <LanguageProvider>
      <Hero />
      <Weather /> 
      <Skills />
      <SpeedTyping />
      <Contact />
    </LanguageProvider>
  );
};

export default Homepage;
