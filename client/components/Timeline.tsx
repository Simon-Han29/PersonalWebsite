import React from "react";
import Image from "next/image";
const Timeline = () => {
  return (
    <div className="min-h-[100%] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="mb-24 text-2xl">My Computer Science Journey so Far</h2>
        <ul className="flex">
          <li className="border-t w-40 flex flex-col items-center">
            <div className="border h-10 bg-zinc-800"></div>
            <div className="text-sm text-gray-600 w-[95%] flex flex-col h-[14rem]">
              <p className="text-center text-white my-5">Sep 2019</p>
              <p className="text-center">
                Began Studying at Carleton University
              </p>
            </div>
            <Image src="/carleton-logo1.png" alt="" height={75} width={75} />
          </li>
          <li className="border-t w-40 flex flex-col items-center">
            <div className="border h-10 bg-zinc-800"></div>
            <div className="text-sm text-gray-600 w-[95%] flex flex-col items-center h-[14rem]">
              <p className="text-center text-white my-5">May 2021 - May 2022</p>
              <p className="text-center">
                Worked at Nokia as a Co-op Integration & verification Automation
                Developer
              </p>
            </div>
            <Image src="/nokia-logo.webp" alt="" height={75} width={75} />
          </li>
          <li className="border-t w-40 flex flex-col items-center">
            <div className="border h-10 bg-zinc-800"></div>
            <div className="text-sm text-gray-600 w-[95%]  flex flex-col items-center h-[14rem]">
              <p className="text-center text-white my-5">May 2022 - Sep 2022</p>
              <p className="text-center">
                Worked at JSI Telecom as a Co-op Software Developer
              </p>
            </div>
            <Image src="/jsi-logo.jpg" alt="" height={75} width={75} />
          </li>
          <li className="border-t w-40 flex flex-col items-center">
            <div className="border h-10 bg-zinc-800"></div>
            <div className="text-sm text-gray-600 w-[95%] flex flex-col items-center h-[14rem]">
              <p className="text-center text-white my-5">May 2023 - Sep 2023</p>
              <p className="text-center">
                Worked at Nokia as a Co-op Software Developer
              </p>
            </div>
            <Image src="/nokia-logo.webp" alt="" height={75} width={75} />
          </li>
          <li className="border-t w-40 flex flex-col items-center">
            <div className="border h-10 bg-zinc-800"></div>
            <div className="text-sm text-gray-600 w-[95%] flex flex-col items-center h-[14rem]">
              <p className="text-center text-white my-5">April 2024</p>
              <p className="text-center">
                Graduated from Carleton University With a Bachelor of Computer
                Science Honours
              </p>
            </div>
            <Image src="/gradcap.png" alt="" height={75} width={75} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
