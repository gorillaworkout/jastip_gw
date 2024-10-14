
"use client"
import React, { useEffect, useRef, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './Carousel/EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './Carousel/EmblaCarouselArrowButton'
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";
import Image_1 from "../../assets/photos/bayu.jpg"; // Assuming you have images in your public folder
import aca from "../../assets/photos/aca.png";
import aldy from "../../assets/photos/aldy.png";
import iskel from "../../assets/photos/iskel.png";
import bel from "../../assets/photos/bel.png";
import christo from "../../assets/photos/christo.png";
import diniish from "../../assets/photos/dini.jpg";
import fiona from "../../assets/photos/fiona.jpg";
import jorja from "../../assets/photos/jorja.jpg";
import mashita from "../../assets/photos/mashita.jpg";
import mauhan from "../../assets/photos/mauhan.jpg";
import mia from "../../assets/photos/mia.jpg";
import renanda from "../../assets/photos/renan.jpg";
import sharon from "../../assets/photos/sharon.jpg";
import taya from "../../assets/photos/taya.jpg";
import yuni from "../../assets/photos/yuni.jpg";
import serli from "../../assets/photos/serli.jpg";
import alma from "../../assets/photos/alma.png";
import amay from "../../assets/photos/amay.jpg";
import dewi from "../../assets/photos/dewi.jpg";
import malika from "../../assets/photos/malika.jpg";
import caca from "../../assets/photos/caca.jpg";
import cuko from "../../assets/photos/cuko.jpg";
import dila from "../../assets/photos/dila.jpg";
import esta from "../../assets/photos/esta.jpg";
import helmi from "../../assets/photos/helmi.jpg";
import iki from "../../assets/photos/iki.jpg";
import kania from "../../assets/photos/kania.jpg";
import kijay from "../../assets/photos/kijay.jpg";
import nadiya from "../../assets/photos/nadiya.jpg";
import yurii from "../../assets/photos/yuri.jpg";
import nanda from "../../assets/photos/nanda.jpg";
import opik from "../../assets/photos/opik.jpg";
import pat from "../../assets/photos/pat.jpg";
import sasa from "../../assets/photos/sasa.jpg";
import siti from "../../assets/photos/siti.jpg";
import yudea from "../../assets/photos/yudea.jpg";
import zaidan from "../../assets/photos/zaidan.png";
import zihan from "../../assets/photos/zihan.jpg";
import padli from "../../assets/photos/padli.png";
import {Modal} from './Modal'
import { gsap } from "gsap";
import { Howl } from 'howler';
import '../css/base.css'
import '../css/sandbox.css'
import '../css/embla.css'
import Typewriter from 'typewriter-effect'; 
type PropType = {}
const EmblaCarousel: React.FC<PropType> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const soundRef = useRef<Howl | null>(null);
  const OPTIONS: EmblaOptionsType = { loop: true }
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  const slides = [
    { image: Image_1,
      name: 'Bayu Darmawan',
      angkatan:'15',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: aca,
      name: 'Khansa Adira Wicaksana',
      angkatan:'14',
      position:'Flyer',
      instagram:'',
      tiktok:''
     },
    { image: aldy,
      name: 'Renaldy Hardyanto',
      angkatan:'06',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: iskel ,
      name: 'Moch Ihsan Tripamungkas',
      angkatan:'03',
      position:'base',
      instagram:'',
      tiktok:''
    },
    { image: diniish,
      name: 'Dini Yunitasari Holis',
      angkatan:'15',
      position:'Flyer',
      instagram:'',
      tiktok:''
     },
    { image: bel,
      name: 'Clara Bella',
      angkatan:'15',
      position:'Flyer',
      instagram:'',
      tiktok:''
     },
    { image: fiona,
      name: 'Fiona Putri Salwa',
      angkatan:'13',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: christo,
      name: 'Christofel Kawuwung',
      angkatan:'14',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: mashita,
      name: 'Mashita Aurellia Putri',
      angkatan:'14',
      position:'Flyer',
      instagram:'',
      tiktok:''
     },
    { image: mauhan,
      name: 'Muh Mauhan Novriando',
      angkatan:'14',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: mia,
      name: 'Mia Aulia',
      angkatan:'14',
      position:'Flyer',
      instagram:'',
      tiktok:''
     },
    { image: renanda,
      name: 'Renanda Suwandi Putri',
      angkatan:'13',
      position:'Flyer',
      instagram:'',
      tiktok:''
     },
    { image: taya,
      name: 'Adinda Athaya Putri Darmawan ',
      angkatan:'12',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: yuni,
      name: 'Yuni Supriyani Sapari',
      angkatan:'12',
      position:'Flyer',
      instagram:'',
      tiktok:''
     },
    { image: jorja,
      name: 'Jorja Dara Effendi',
      angkatan:'15',
      position:'Flyer',
      instagram:'',
      tiktok:''
     },
    { image: serli,
      name: 'Sherly Seftia Bun',
      angkatan:'06',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: sharon,
      name: 'Victoria Sharon',
      angkatan:'15',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: alma,
      name: 'Gabriella Laeticia Alma Zanitta',
      angkatan:'14',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: amay,
      name: 'Muhammad Akmal',
      angkatan:'15',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: dewi,
      name: 'Dewi Ramadhan Tri Mulya',
      angkatan:'13',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: yurii,
      name: 'Yurifa Rasyaad',
      angkatan:'15',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: malika,
      name: 'Malika Sakhi Nurachman',
      angkatan:'15',
      position:'Flyer',
      instagram:'',
      tiktok:''
     },
    { image: caca,
      name: 'Alexa Nadia Putri',
      angkatan:'15',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: cuko,
      name: 'Wahyu Cahyadi',
      angkatan:'09',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: dila,
      name: 'Dilla Nabila Rosdiana',
      angkatan:'13',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: esta,
      name: 'Raden Estha Nugroho',
      angkatan:'07',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: helmi,
      name: 'Helmi Kurniawan',
      angkatan:'08',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: iki,
      name: 'Muhammad Rizki Firdaus Muslim',
      angkatan:'09',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: kania,
      name: 'Kania Diza Nuryadi',
      angkatan:'15',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: kijay,
      name: 'Kiki Jaya Darmawan',
      angkatan:'09',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: nadiya,
      name: 'Nadiya Hazizah Mulyanto',
      angkatan:'15',
      position:'Flyer',
      instagram:'',
      tiktok:''
     },
    { image: nanda,
      name: 'Nanda Natasya',
      angkatan:'15',
      position:'Flyer',
      instagram:'',
      tiktok:''
     },
    { image: opik,
      name: 'Muh Taufik Hidayah',
      angkatan:'14',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: pat,
      name: 'Patricia Bertha Ailsa',
      angkatan:'14',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: sasa,
      name: 'Salwa Salsabila Putri',
      angkatan:'15',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: siti,
      name: 'Siti Ramadhani',
      angkatan:'08',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: yudea,
      name: 'Yudea Tamariska',
      angkatan:'14',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: zaidan,
      name: 'Zaidan Naufal Hawari',
      angkatan:'14',
      position:'base',
      instagram:'',
      tiktok:''
     },
    { image: zihan,
      name: 'Zihan Felisha Hidayat',
      angkatan:'15',
      position:'Flyer',
      instagram:'',
      tiktok:''
     },
    { image: padli,
      name: 'Padli Zein Sonjaya',
      angkatan:'14',
      position:'base',
      instagram:'',
      tiktok:''
     },

  ]

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => setIsVisible(true),
    });

    timeline.fromTo(
      ".home-container",
      {
        opacity: 0,
        display: "none"
      },
      { 
        opacity: 1, 
        duration: 5,
        delay: 4,
        display: "flex"
      },
    );

    soundRef.current = new Howl({
      src: ['/music/onClickMusic.mp3'],
      volume: 0.5,
    });

    return () => {
      soundRef.current?.unload();
    };
  }, []);




  // 
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
  const [activePlayer,setActivePlayer] = useState(0)

  
  const openModalPlayer =(id:number)=>{
    setActivePlayer(id)
    setIsOpen(true)
  }
  const onChangeDot = (index: number) => {
    onDotButtonClick(index)
    soundRef.current?.play();
    console.log('soundref running', soundRef)
    console.log(Math.floor(index / itemsPerPage))
    if(endIndex - 2 === index){
      setCurrentPage(currentPage + 1)
      console.log('420', Math.floor(index / itemsPerPage), index, itemsPerPage)
    }
  }
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSlides = slides.slice(startIndex, endIndex);

  useEffect(() => {
    soundRef.current = new Howl({
        src: ['/music/onClickMusic.mp3'],
        volume: 0.5,
    });

    return () => {
        soundRef.current?.unload();
    };
}, []);

  const onBack=()=>{
    onPrevButtonClick()
    soundRef.current?.play();
  }
  const onNext=()=>{
    onNextButtonClick()
    soundRef.current?.play();
  }
  return (
    <>
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} dataPlayer={slides[activePlayer]}/>
      <section className={`embla home-container`}>
        <Typewriter
          options={{
            strings: ['CHOOSE YOUR PLAYER'],
            autoStart: true,
            loop: true,
          }}
        />
  
        <div className={`embla__viewport `} ref={emblaRef}>
          <div className="embla__container">
            {slides.map((value, index) => (
              <div className="embla__slide max-w-full md:max-w-[40%]" key={index}>
                <div className="embla__slide__number">
                  {
                    index === selectedIndex ? 
                    <Image onClick={()=>openModalPlayer(index)} src={value.image} alt="test_01" className="active_image h-fit" loading="eager"/>
                    :
                    <Image onClick={()=>onChangeDot(index)} src={value.image} alt="test_01" className="blur_image  h-fit" loading="eager"/>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`embla__controls ${isVisible ? 'flex' : 'hidden'}`}>
          <div className="embla__controls">
            <div className="embla__buttons w-full md:w-[60%]">
              <PrevButton onClick={onBack} disabled={prevBtnDisabled} />
              <NextButton onClick={onNext} disabled={nextBtnDisabled} />
            </div>
          </div>
          {/* if want to use dots */}
          {/* <div className={`embla__dots `}>
            {currentSlides.map((_, index) =>  {
                if (index >= startIndex && index < endIndex) {
                  return (
                    <DotButton
                      key={index}
                      onClick={() => onChangeDot(index)}
                      className={'embla__dot'.concat(
                        index === selectedIndex ? 'embla__dot--selected' : ''
                      )}
                    />
                  )
                }
            })}
          </div> */}
        </div>
      </section>
    </>
  )
}

export default EmblaCarousel
