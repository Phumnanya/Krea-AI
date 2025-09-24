"use client";

import React, { useEffect, useState } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import Model from "../components/model";
import TryButton from "../components/Try-button";
//slides to show,
function getSlidesToShow(width: number) {
  if (width < 640) return 1;      // small phones
  if (width < 1024) return 1.0;   // tablets / small desktops you might want 1 (or 1.2)
  return 1.5;                     // large screens show peek
}

export default function Carousel() {
  const [slidesToShow, setSlidesToShow] = useState<number>(1.5);
  useEffect(() => {
    const setFromWindow = () => setSlidesToShow(getSlidesToShow(window.innerWidth));
    setFromWindow();
    window.addEventListener("resize", setFromWindow);
    return () => window.removeEventListener("resize", setFromWindow);
  }, []);

  function NextArrow({ className, style, onClick }: CustomArrowProps) {
  return (
    <div
      className={`${className} hidden md:block`}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
  }
//Previous arrow button
  function PrevArrow({ className, style, onClick }: CustomArrowProps) {
    return (
      <div
        className={`${className} hidden md:block`}
       style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false, 
        dots: true,    
      },
    },
  ],
  };

  return (
      <Slider {...settings} className="w-full h-96">
        {/* Image 1 */}
        <div className="h-96 w-full bg-[url('/img/announce-wan-2-2-image.webp')]
        bg-cover bg-center p-2 relative aspect-[16/9] rounded-2xl md:mr-5">
          <div className="p-1 md:p-3 text-white">
            <Model prop="new image model" />
          </div>
          <div className="text-white absolute bottom-0 flex 
          flex-col md:flex-row w-full justify-between p-1 md:p-3">
            <div className="flex flex-col w-full md:w-1/2 p-2">
            <h1 className="text-2xl md:text-3xl">WAN 2.2 Image generation</h1>
            <p>Generate complex images with the brand new 
              and powerful WAN 2.2 model. Exceptional prompt 
              adherence and ultra-realistic textures
            </p>
            </div>
            <div className="w-fit py-1.5 md:py-3">
            <TryButton prop="Try WAN 2.2" />
            </div>
          </div>
        </div>

        {/* Video 1 */}
        <div className="relative overflow-hidden h-96 w-full md:ml-7">
          <video
          autoPlay
          loop
          playsInline
            className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
          >
            <source src="/img/OSSKreaFlux1_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Video 1 overlay */}
          <div className="absolute inset-0">
            <div className="relative z-10">
              <div className="p-1 md:p-3 text-white">
                <Model prop="new image model" />
              </div>
              <div className="text-white absolute top-[170px] md:top-[220px] flex 
              flex-col md:flex-row w-full justify-between p-1 md:p-3">
                <div className="flex flex-col w-full md:w-1/2 p-2">
                <h1 className="text-2xl md:text-3xl">FLUX.1 Krea</h1>
                <p>We're making the weights to our FLUX.1 Krea model
                 open-source. Download and run our model weights, 
                 read the technical report, or generate with it in 
                 Krea Image.
                </p>
                </div>
                <div className="w-fit py-1.5 md:py-3">
                <TryButton prop="Read report" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="h-96 w-full bg-[url('/img/seedream-4-announcement.webp')]
        bg-cover bg-center p-2 relative aspect-[16/9] rounded-2xl md:ml-14">
          <div className="p-1 md:p-3 text-white">
            <Model prop="new image model" />
          </div>
          <div className="text-white absolute bottom-0 flex 
          flex-col md:flex-row w-full justify-between p-1 md:p-3">
            <div className="flex flex-col w-full md:w-1/2 p-2">
            <h1 className="text-2xl md:text-3xl">Seedream 4.0</h1>
            <p>Try the brand new and record-breaking image 
            generation model Seedream 4.0 by ByteDance.
            </p>
            </div>
            <div className="w-fit py-1.5 md:py-3">
            <TryButton prop="Start Generating" />
            </div>
          </div>
        </div>

        {/* Video 2 */}
        <div className="relative overflow-hidden h-96 w-6/12 md:ml-[5em]">
          <video
          autoPlay
          loop
          playsInline
            className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
          >
            <source src="/img/fish-overlay_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Video 2 overlay */}
          <div className="absolute inset-0">
            <div className="relative z-10">
              <div className="p-1 md:p-3 text-white">
                <Model prop="new image model" />
              </div>
              <div className="text-black absolute top-56 flex 
              flex-col md:flex-row w-full justify-start p-1 md:p-3">
                <div className="flex flex-col w-full md:w-1/2 p-2">
                <h1 className="text-2xl md:text-3xl">Real-Time Video Generation</h1>
                <p>Announcing Realtime Video. Generate videos in 
                  real-time. Fully frame-consistent, controllable 
                  video clips.
                </p>
                </div>
                <div className="w-fit py-1.5 md:py-3">
                <TryButton prop="Try now" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
  );
}
