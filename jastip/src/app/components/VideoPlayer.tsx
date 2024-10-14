"use client";

import React, { useEffect, useRef, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./Carousel/EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./Carousel/EmblaCarouselArrowButton";
import useEmblaCarousel from "embla-carousel-react";
import { Modal } from "./Modal";
import { gsap } from "gsap";
import { Howl } from "howler";
import "../css/base.css";
import "../css/sandbox.css";
import "../css/embla.css";

type PropType = {};

const VideoPlayer: React.FC<PropType> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const soundRef = useRef<Howl | null>(null);
  const OPTIONS: EmblaOptionsType = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const slides = [
    { link: "" },
    { link: "" },
    { link: "" },
    { link: "" },
    { link: "" },
    { link: "" },
    { link: "" },
    { link: "" },
  ];

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => setIsVisible(true),
    });

    timeline.fromTo(
      ".home-container",
      {
        opacity: 0,
        display: "none",
      },
      {
        opacity: 1,
        duration: 2,
        delay: 0,
        display: "flex",
      }
    );
  }, []);

  useEffect(() => {
    soundRef.current = new Howl({
      src: ["/music/onClickMusic.mp3"],
      volume: 0.5,
    });

    return () => {
      soundRef.current?.unload();
    };
  }, []);

  const onChangeDot = (index: number) => {
    onDotButtonClick(index);
    soundRef.current?.play();
    console.log("soundref running", soundRef);
  };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (emblaApi) {
  //       const nextIndex = (selectedIndex + 1) % scrollSnaps.length;
  //       onChangeDot(nextIndex);
  //     }
  //   }, 5000);

  //   return () => clearInterval(intervalId); // Clean up interval on component unmount
  // }, [emblaApi, selectedIndex, scrollSnaps.length]);

  // MODAL player
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <Modal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      <section className={`embla  home-container`}>
        <div className={`embla__viewport `} ref={emblaRef}>
          <div className="embla__container">
            {slides.map((value, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  {index === selectedIndex ? (
                    <iframe
                      className="active_video"
                      width="1080"
                      height="450"
                      src="https://www.youtube.com/embed/TDZsByXVr_k?si=TKLaUcAtOIsxClCf"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      {/* <div className=" blur_image" onClick={() => onChangeDot(index)}> */}
                      <iframe
                        className="blur_image video_blur"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/TDZsByXVr_k?si=TKLaUcAtOIsxClCf"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                      {/* <div className="overlay"></div> */}
                      {/* </div> */}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`embla__controls ${isVisible ? "flex" : "hidden"} mt-5`}>
          <div className={`embla__dots `}>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onChangeDot(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? "embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoPlayer;

