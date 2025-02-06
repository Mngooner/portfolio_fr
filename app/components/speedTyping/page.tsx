'use client'
import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/app/components/LangaugeContext";

const SpeedTyping = () => {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(20);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isEnglish = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setText(value);
  };

  const calcWordCount = (text: string) => {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  };

  const startClock = () => {
    setIsTimeRunning(true);
    setTimeRemaining(20);
    setText("");
    setWordCount(0);
    textareaRef.current!.disabled = false;
    textareaRef.current!.focus();
  };

  const stopClock = () => {
    setIsTimeRunning(false);
    setWordCount(calcWordCount(text));
  };

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsTimeRunning(false);
      stopClock();
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimeRunning, timeRemaining]);

  return (
    <div className="flex flex-col min-h-[80vh] py-10 bg-[#a4cbb4] justify-center">
      <div className="w-[80%] mx-auto flex flex-col items-center gap-5">
        <p>
          {isEnglish
            ? "It is time for a bit of fun, show me how many words you can type in 20 seconds!"
            : "Il est temps de s'amuser un peu, montrez-moi combien de mots vous pouvez taper en 20 secondes!"}
        </p>

        <textarea
          className="w-full max-w-[25rem] bg-white h-[15rem] rounded-lg disabled:opacity-70"
          ref={textareaRef}
          onChange={handleChange}
          value={text}
          disabled={!isTimeRunning}
        />
        {isEnglish ? (
          <p>Time remaining: {timeRemaining} seconds</p>
        ) : (
          <p>Temps restant : {timeRemaining} secondes</p>
        )}
        <button
          onClick={startClock}
          disabled={isTimeRunning}
          className="btn btn-primary"
        >
          {isEnglish ? "Start" : "Démarrer"}
        </button>
        <p>
          {isEnglish ? "Word count:" : "Nombre de mots"} {wordCount}
        </p>
      </div>
    </div>
  );
};

export default SpeedTyping;
