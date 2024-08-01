"use client";

import Image from "next/image";
import Timeline from "@/components/Timeline";
import ProjectCard from "@/components/ProjectCard";
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
      <div className="min-h-screen flex flex-col items-center">
        <h1 className="text-center lg:text-2xl md:text-xl sm:text-base m-10">{`Projects I've Been Working On`}</h1>
        <div className="w-[90%] flex justify-center">
          <div className="flex flex-wrap">
            <ProjectCard
              title="LinkMark"
              image="/LinkMarkLogo.png"
              color="bg-purple-700"
              link="https://github.com/Simon-Han29/LinkMark"
            />
            <ProjectCard
              title="Cutana"
              image="/Tanjiro.png"
              color="bg-emerald-700"
              link="https://github.com/Simon-Han29/CutanaDB"
            />
            <ProjectCard
              title="CinemaBase"
              image="/imdb.png"
              color="bg-amber-600"
              link="https://github.com/Simon-Han29/CinemaBase"
            />
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl text-center">Contact</h2>
        <div className="flex flex-col w-[90%]">
          <div className="flex items-end w-full">
            <div className="border-r p-5 h-full w-2/5 flex justify-end items-center">
              <Image src="/gmail-icon.png" alt="" width={50} height={50} />
            </div>
            <div className="p-5 h-full w-3/5 flex items-center">
              <p>simonhan29@gmail.com</p>
            </div>
          </div>
          <div className="flex items-end w-full">
            <div className="border-r p-5 h-full w-2/5 flex justify-end items-center">
              <Image src="/phone-icon.png" alt="" width={50} height={50} />
            </div>
            <div className="p-5 h-full w-3/5 flex items-center">
              <p>{`(343)-541-8048`}</p>
            </div>
          </div>
          <div className="flex items-end w-full">
            <div className="border-r p-5 h-full w-2/5 flex justify-end items-center">
              <Image src="/linkedin-icon.png" alt="" width={50} height={50} />
            </div>
            <div className="p-5 h-full w-3/5 flex items-center">
              <a
                href="https://www.linkedin.com/in/simon-han29/"
                target="_blank"
              >
                linkedin.com/in/simon-han29/
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
