
"use client"
import Image from "next/image";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { AudioPlayer } from "./components/AudioPlayer";
import cyberpunk_3 from '../../public/cyberpunk/3.png';
import HomeJastip from "./home_jastip/home_jastip";

// import MenuOption from "./component/MenuOption";

export default function Home() {

  return (
    <div className="w-full h-full flex flex-col bg-white mx-auto max-w-7xl px-6 lg:px-8  py-8 lg:py-10">
      <div className="h-full w-full z-5">
        <HomeJastip />
      </div>
    </div>
  );
}
