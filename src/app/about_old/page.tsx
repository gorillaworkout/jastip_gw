
"use client"
import Image from "next/image";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";
import { AudioPlayer } from "../components/AudioPlayer";
import crown from '../../assets/photos/crown.jpg';
import crown_icon from '../../assets/photos/crown_icon.png';
import HomePlayer from "../components/HomePlayer";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Howl } from 'howler';
// import MenuOption from "./component/MenuOption";
import VideoPlayer from "../components/VideoPlayer";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => setIsVisible(true),
    });

    timeline.fromTo(
      ".about-container",
      {
        opacity: 0,
        display: "none"
      },
      {
        opacity: 1,
        duration: 5,
        delay: 3,
        display: "flex"
      },
    );
  }, []);
  return (
    <div className="w-full h-full flex flex-col bg-black overflow-x-hidden">
      <Loader />
      <Header />
      <div className={`w-screen z-5 bg-black px-4 md:px-40 flex flex-col justify-center gap-x-10 mb-10 py-[120px] about-container `}>
        {/* <HomePlayer/> */}
        <div className="about-container flex-col">
          <div className=" flex-col relative top-[120px] mb-10 md:mb-[200px] ">
            <div className="flex flex-row gap-x-5">
              <h1 className="text-[70px] md:text-[100px] font-bold ">ABOUT</h1>
              <h1 className="text-[70px] md:text-[100px] font-bold flex md:hidden ">US</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-5 w-full">
              <h1 className="text-[70px] md:text-[100px] font-bold w-[15%] hidden md:flex">US</h1>
              <Image src={crown} alt="test_01" className="h-[500px] w-[90%] md:w-[60%]  rounded-2xl" />
              <div className="flex flex-col  w-full md:w-1/4 gap-y-5">
                <Image src={crown_icon} alt="test_01" className="bg-cover rounded-2xl" />
                <p className="font-bold text-[30px]">OUR Philosophy</p>
                <p className="text-[16px]">CROWN ALLSTAR CHEERLEADING is a prototype team under the auspices of the APSI parent organization, established in Bandung on September 23, 2007.</p>

              </div>
            </div>
          </div>
        </div>
        <div className="about-container flex flex-row w-full justify-center gap-x-5">
          <div className="flex flex-row relative top-[120px] w-[40%] ">
            <div className="flex flex-col w-full h-[700px] shadow-xl gap-y-10  rounded-2xl p-4  bg-white border">
              <p className="text-red-500 text-[20px]">How it started</p>
              <h1 className="text-black font-bold text-[40px]">Our Dream is Global Learning Transformation</h1>
              <p className="text-black">CROWN ALLSTAR CHEERLEADING IS A PROTOTYPE TEAM UNDER THE PARENT ORGANIZATION APSI, ESTABLISHED IN BANDUNG ON SEPTEMBER 23, 2007. ATHLETES FROM THE CROWN ALLSTAR TEAM CONSIST OF A GROUP OF YOUNG MEN AND WOMEN FROM VARIOUS BACKGROUNDS AND AGES WHO ACTIVELY PURSUE THE SPORT OF CHEERLEADING. SINCE ITS INCEPTION, CROWN ALLSTAR HAS ALWAYS BEEN A LEADING TEAM THAT CONSISTENTLY ACHIEVES PROUD ACCOMPLISHMENTS IN BOTH NATIONAL AND INTERNATIONAL CHAMPIONSHIPS. CROWN ALLSTAR CHEERLEADING ATHLETES ARE TRAINED WITH A SERIES OF EXCELLENT PROGRAMS DEVELOPED BY THE BEST COACHES IN INDONESIA. CROWN ALLSTAR CHEERLEADING IS COMMITTED TO CONTINUING TO SHAPE THE NATION&apos;S BEST CHEERLEADING ATHLETES, PARTICULARLY THOSE FROM WEST JAVA, TO CONTINUE TO LEAD HEALTHY, PRODUCTIVE, AND ACHIEVING LIVES THROUGH THE SPORT OF CHEERLEADING.</p>
            </div>
          </div>
          <div className="flex flex-row relative top-[120px] w-[40%]">
            <div className="flex flex-col w-full h-full gap-y-5">
              <Image src={crown} alt="test_01" className="h-1/2 w-full  rounded-2xl" />
              <div className=" bg-white border p-4 shadow-xl  rounded-2xl h-1/2 flex flex-row flex-wrap justify-between">
                <div className="flex border bg-[#fafafa] w-[48%] h-[45%] rounded-2xl flex-col justify-center  p-4">
                  <p className="text-black text-[40px] font-bold">12</p>
                  <p className="text-gray-500">Years Experience</p>
                </div>
                <div className="flex border bg-[#fafafa] w-[48%] h-[45%] rounded-2xl flex-col justify-center  p-4">
                  <p className="text-black text-[40px] font-bold">12</p>
                  <p className="text-gray-500">Years Experience</p>
                </div>
                <div className="flex border bg-[#fafafa] w-[48%] h-[45%] rounded-2xl flex-col justify-center  p-4">
                  <p className="text-black text-[40px] font-bold">12</p>
                  <p className="text-gray-500">Years Experience</p>
                </div>
                <div className="flex border bg-[#fafafa] w-[48%] h-[45%] rounded-2xl flex-col justify-center  p-4">
                  <p className="text-black text-[40px] font-bold">12</p>
                  <p className="text-gray-500">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-container w-full h-screen">
          <VideoPlayer />
        </div>
      </div>
      <AudioPlayer />
    </div>
  );
}
