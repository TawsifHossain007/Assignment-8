import React from "react";
import PlayStoreImg from "../assets/PlayStore.png";
import AppStoreImg from "../assets/AppStore.png";
import BannerImg from "../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-4 mt-6 md:mt-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center leading-tight">
          We Build <br />
          <span className="text-[#632ee3]">Productive</span> Apps
        </h1>
        <p className="font-normal text-base sm:text-lg md:text-xl text-[#627382] text-center mt-4 max-w-2xl">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.{" "}
          <br className="hidden md:block" />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center mt-8 sm:mt-12 gap-4 w-full sm:w-auto">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-gray-300 px-4 py-3 rounded-md w-full sm:w-auto hover:bg-gray-300 cursor-pointer"
          >
            <img src={PlayStoreImg} alt="Google Play" className="w-6 sm:w-8" />
            <span className="font-semibold text-lg sm:text-xl">
              Google Play
            </span>
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-gray-300 px-4 py-3 rounded-md w-full sm:w-auto hover:bg-gray-300 cursor-pointer"
          >
            <img src={AppStoreImg} alt="App Store" className="w-6 sm:w-8" />
            <span className="font-semibold text-lg sm:text-xl">App Store</span>
          </a>
        </div>
        <div className="mt-10 sm:mt-12 w-full flex justify-center">
          <img src={BannerImg} alt="Banner" className="max-w-full h-auto" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white px-6 py-12 sm:px-12 md:px-20 lg:px-[80px]">
        <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[48px]">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-around mt-10 md:mt-12 gap-10 md:gap-0">
          <div className="text-center">
            <p className="text-sm sm:text-base">Total Downloads</p>
            <p className="mt-3 font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[64px]">
              29.6M
            </p>
            <p className="mt-3 text-sm sm:text-base">
              21% more than last month
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm sm:text-base">Total Reviews</p>
            <p className="mt-3 font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[64px]">
              906K
            </p>
            <p className="mt-3 text-sm sm:text-base">
              46% more than last month
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm sm:text-base">Active Apps</p>
            <p className="mt-3 font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[64px]">
              132+
            </p>
            <p className="mt-3 text-sm sm:text-base">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
