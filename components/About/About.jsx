import Image from "next/image";
import React from "react";
import WideBGImg from "./images/wide.png";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col h-screen border-[#88929a] border-l-2 border-r-2">
      <div className="basis-2/3 w-full h-full relative flex flex-row justify-center border-[#88929a] border-b-2">
        <Image
          src={WideBGImg.src}
          layout="fill"
          objectFit="cover"
          alt="wide_interior"
        />
        <Link href="/products">
          <button className="absolute w-64 h-14 bg-stone-500 shadow-2xl shadow-[#e8e2b4] text-2xl text-white top-1/3 m-auto hover:shadow-white ease-in duration-300">
            Discover Now
          </button>
        </Link>
      </div>
      <div className="bg-[#3f4346] basis-1/3 flex flex-row justify-evenly items-center">
        <div className="ml-20 w-3/5 h-full flex items-center border-[#88929a] border-r-2">
          <h1 className="text-8xl text-white font-medium">
            OUR FEATURED PRODUCTS
          </h1>
        </div>
        <div className="flex flex-col items-center w-2/5 justify-center h-2/5">
          <Link href="/products">
            <h4 className="text-xl text-white underline text-white cursor-pointer hover:text-stone-500 ease-in duration-300">
              See All
            </h4>
          </Link>
          <Link href="/reviews">
            <h4 className="text-xl text-white underline text-white cursor-pointer hover:text-stone-500 ease-in duration-300">
              Reviews
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
