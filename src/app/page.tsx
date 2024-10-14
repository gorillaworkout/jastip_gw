
"use client"
import Image from "next/image";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { AudioPlayer } from "./components/AudioPlayer";
import cyberpunk_3 from '../../public/cyberpunk/3.png';
import HomePlayer from "./components/HomePlayer";

// import MenuOption from "./component/MenuOption";

export default function Home() {

  return (
    <div className="w-full h-full flex flex-col bg-white">
      <Loader />
      {/* <Header /> */}
      <div className="h-full w-screen z-5 bg-white">
        <HomePlayer />
      </div>
      <AudioPlayer />
    </div>
  );
}
