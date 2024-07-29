"use client";

import Image from "next/image";
import Timeline from "@/components/Timeline";
export default function Home() {
  return (
    <div>
      <div
        className="min-h-screen flex flex-col justify-center items-center 
        text-xs 
        sm:text-sm 
        md:text-base 
        lg:text-lg"
      >
        <div className="animate-fadeIn flex flex-col items-center">
          <div
            className="border border-black rounded-full 
            w-20 h-20 
            sm:w-40 sm:h-40 
            md:w-60 md:h-60 
            lg:w-80 lg:h-80 
            overflow-hidden"
          >
            <Image src="/SelfPortrait.jpg" alt={""} width={500} height={500} />
          </div>
          <h1>{`Hi, I'm Simon Han`}</h1>
          <h1>Welcome to My Website!</h1>
        </div>
        <div className="mt-8">
          <Image
            src="/narutomaki.png"
            alt=""
            width={64}
            height={64}
            className="
            sm:w-16 sm:h-16
            md:w-28 md:h-28
            lg:w-40 lg:h-40
            "
          />
        </div>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="h-[80%] w-[90%]">
          <Timeline />
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
