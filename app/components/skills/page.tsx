import React from "react";
import Technos from "./technos";
import TechnosNew from "./technosNew";
import { useLanguage } from "@/app/components/LangaugeContext";

const Skills = () => {
  const isEnglish = useLanguage();

  return (
    <div className="flex flex-col bg-[#ece3ca] min-h-[80vh] h-auto py-10 justify-center gap-5">
      <div className="w-[80%] mx-auto">
        <p>
          {isEnglish
            ? "It would be dishonest to say I master all these technologies but I am comfortable using them and very eager to get better."
            : "Il serait malhonnête de dire que je maîtrise parfaitement toutes les technologies ci-dessous, mais je suis à l'aise avec elles et très motivé à l'idée de m'améliorer."}
        </p>
      </div>
      <Technos />
      <div className="w-[80%] mx-auto">
        <p>
          {isEnglish
            ? "There are lots of technologies out there that I haven't been exposed to. However, nothing is impossible to learn, expect Astro-Physics, Higher-Maths and Women's Psyche"
            : "De plus, rien n'est vraiment impossible à apprendre, à l'exception de l'astro-physique, des mathématiques supérieures et la psychologie féminine."}
        </p>
      </div>
      <TechnosNew />
    </div>
  );
};

export default Skills;
