"use client";
import React, { useState, useContext, ReactNode } from "react";

const LanguageContext = React.createContext(false);
const FrenchContext = React.createContext();
const EnglishContext = React.createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}
export function useFrench() {
  return useContext(FrenchContext);
}
export function useEnglish() {
  return useContext(EnglishContext);
}

type Props = {
  children: ReactNode;
};

export function LanguageProvider({ children }: Props) {
  const [isEnglish, setIsFrench] = useState(true);

  function french() {
    setIsFrench(false);
  }

  function english() {
    setIsFrench(true);
  }

  return (
    <LanguageContext.Provider value={isEnglish}>
      <FrenchContext.Provider value={french}>
        <EnglishContext.Provider value={english}>
          {children}
        </EnglishContext.Provider>
      </FrenchContext.Provider>
    </LanguageContext.Provider>
  );
}
