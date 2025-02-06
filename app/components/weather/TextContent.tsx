import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { useLanguage } from "@/app/components/LangaugeContext";
import Image from "next/image";

const TextContent = () => {
  const isEnglish = useLanguage();
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start 0.25"],
  });
  const myWeatherModal = useRef<HTMLDialogElement>(null);
  return (
    <>
      <div className="w-[80%] mx-auto">
        <motion.p ref={element} style={{ opacity: scrollYProgress }}>
          {isEnglish
            ? "During 1st lockdown I realised I actually liked coding...so I "
            : "Au cours du premier confinement , j'ai réalisé que j'aimais bien coder... j'ai donc "}
          <span className="after:content-['\01F6AE'] text-3xl" />{" "}
          {isEnglish
            ? "8 years of my online marketing career and started as a junior dev. I am basically a "
            : "8 ans de carrière dans le marketing en ligne et j'ai commencé en tant que développeur junior. Je suis essentiellement un "}
          <button
            className="badge badge-primary"
            onClick={() => myWeatherModal.current?.showModal()}
          >
            Quereinsteiger.
          </button>
        </motion.p>
        <dialog ref={myWeatherModal} id="my_modal_1" className="modal">
          <div className="modal-box">
            <div className="flex justify-around">
              <Image src="/german.png" alt="german" height={30} width={30} />
              <Image
                src={isEnglish ? "/united-kingdom.png" : "/france.png"}
                alt="german"
                height={30}
                width={30}
              />
            </div>
            <div className="flex">
              <p className="py-4">Quereinsteiger</p>
              <p className="py-4 divider divider-horizontal"></p>
              <p className="py-4">
                {isEnglish
                  ? "Somebody entering a field of work different from their educational background"
                  : "Quelqu'un qui intègre un domaine de travail différent de sa formation."}
              </p>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">
                  {isEnglish ? "Close" : "Fermer"}
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      <div className="flex flex-col items-center gap-4 mt-10">
        <motion.p ref={element} style={{ opacity: scrollYProgress }}>
          {isEnglish
            ? "By the way, what is the weather where you are?"
            : "Au fait, quel est le temps qu'il fait là où vous êtes?"}
        </motion.p>
      </div>
    </>
  );
};

export default TextContent;
