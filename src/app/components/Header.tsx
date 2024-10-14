"use client"
import { GoNorthStar } from 'react-icons/go';
import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { Howl } from 'howler';
import { FaCrown } from "react-icons/fa6";
import { useRouter } from 'next/navigation';


interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const [hoveredItem, setHoveredItem] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const soundRef = useRef<Howl | null>(null);
  const router = useRouter();

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => setIsVisible(true),
    });

    timeline.fromTo(
      ".header-container",
      {
        opacity: 0,
        display: "none"
      },
      { 
        opacity: 1, 
        duration: 4,
        delay: 4,
        display: "flex"
      },
    );
  }, []);

  useEffect(() => {
    soundRef.current = new Howl({
      src: ['/music/onClickMusic.mp3'],
      volume: 0.5,
    });

    return () => {
      soundRef.current?.unload();
    };
  }, []);

  const handleMouseEnter = (itemName: string) => {
    setHoveredItem(itemName);
    if (!soundRef.current?.playing()) {
      soundRef.current?.play();
    }
    gsap.to(`#${itemName}`, { fontSize: '1.5em', lineHeight: '1.5em', duration: 0.3 });
  };

  const handleMouseLeave = (itemName: string) => {
    setHoveredItem('');
    soundRef.current?.pause();
    gsap.to(`#${itemName}`, { fontSize: '1em', lineHeight: '1em', duration: 0.3 });
  };

  return (
    <div className={`w-full h-24 flex justify-center items-end fixed z-50 `}>
      <div className={`w-auto flex-row gap-x-2 header-container ${isVisible ? 'flex' : 'hidden'} `}>
        <div className="flex justify-center items-center rounded-full h-12 w-12 bg-[#EFF0F0]">
          <FaCrown className="w-8 h-8 text-[#434345]" />
        </div>
        <div className="h-[45px] bg-[#EFF0F0] flex flex-row gap-x-4 md:gap-x-16 justify-between items-center px-8 py-6 rounded-lg">
          <p
            id="Home"
            className={`tracking-[.2em] menu-item cursor-pointer transition-colors duration-500 ${
              hoveredItem === '' ? 'text-[#434345]' : hoveredItem === 'Home' ? 'text-red-500' : 'text-[#7f7f7f]'
            }`}
            onMouseEnter={() => handleMouseEnter('Home')}
            onMouseLeave={() => handleMouseLeave('Home')}
            onClick={()=>router.push('/')}
          >
            Home
          </p>
          <p
            id="About"
            className={`tracking-[.2em] menu-item cursor-pointer transition-colors duration-500 ${
              hoveredItem === '' ? 'text-[#434345]' : hoveredItem === 'About' ? 'text-red-500 ' : 'text-[#7f7f7f]'
            }`}
            onMouseEnter={() => handleMouseEnter('About')}
            onMouseLeave={() => handleMouseLeave('About')}
            onClick={()=>router.push('/about')}
          >
            About
          </p>
          <p
            id="Contact"
            className={`tracking-[.2em] menu-item cursor-pointer transition-colors duration-500 ${
              hoveredItem === '' ? 'text-[#434345]' : hoveredItem === 'Contact' ? 'text-red-500' : 'text-[#7f7f7f]'
            }`}
            onMouseEnter={() => handleMouseEnter('Contact')}
            onMouseLeave={() => handleMouseLeave('Contact')}
          >
            Contact
          </p>
          {/* <p
            id="Portfolio"
            className={`tracking-[.2em] menu-item cursor-pointer transition-colors duration-500 ${
              hoveredItem === '' ? 'text-[#434345]' : hoveredItem === 'Portfolio' ? 'text-red-500' : 'text-[#7f7f7f]'
            }`}
            onMouseEnter={() => handleMouseEnter('Portfolio')}
            onMouseLeave={() => handleMouseLeave('Portfolio')}
          >
            Portfolio
          </p> */}
        </div>
      </div>
    </div>
  );
};


