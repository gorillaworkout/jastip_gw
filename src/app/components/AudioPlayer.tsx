// components/AudioPlayer.tsx
"use client"
import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import { gsap } from "gsap";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef<Howl | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    soundRef.current = new Howl({
      src: ["/music/crown_premiere.mp3"],
      volume: 0.5,
      autoplay: false,
      onend: () => setIsPlaying(true),
    });

    const timeline = gsap.timeline({
      onComplete: () => setIsVisible(true),
    });

    timeline.fromTo(
      "#btn-music",
      {
        opacity: 0,
        display: "none",
      },
      {
        opacity: 1,
        duration: 4,
        delay: 4,
        display: "flex",
      }
    );
    return () => {
      soundRef.current?.unload();
    };
  }, []);

  const togglePlayPause = () => {
    if (!soundRef.current) return;

    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player hidden md:flex">
      <button
        id="btn-music"
        onClick={togglePlayPause}
        className={`${
          isVisible ? "flex" : "hidden"
        }  flex-row items-center gap-x-2`}
      >
        {isPlaying ? (
          <>
            <HiOutlineSpeakerWave className="text-red-500 text-[30px]" />
            <p className="text-red-500">SOUNDS ON</p>
          </>
        ) : (
          <>
            <HiOutlineSpeakerXMark className="text-red-500 text-[30px]" />
            <p className="text-red-500">SOUNDS OFF</p>
          </>
        )}
      </button>
    </div>
  );
};
