import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useFrench, useEnglish } from "@/app/components/LangaugeContext";


const Navigation = () => {
  const english = useEnglish()
  const french = useFrench()

  return (
    <div className="flex flex-row justify-between p-3">
      <Link href="/">
        <Image
          priority={true}
          src="/Logo.png"
          alt="logo"
          width={50}
          height={50}
        />
      </Link>
      <div>
        <button onClick={() => english()}>En</button> | <button onClick={() => french()}> Fr</button>
      </div>
    </div>
  );
};

export default Navigation;
