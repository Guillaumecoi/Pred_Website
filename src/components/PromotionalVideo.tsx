import React, { useRef, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import { PromotionalVideo as PV } from '../constants/types';
import CallToAction from './CallToAction';

interface PromotionalVideoProps {
  promotionalVideoPayload: PV;
}

const PromotionalVideo: React.FC<PromotionalVideoProps> = ({ promotionalVideoPayload: pv }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust this value based on when you want the video to autoplay
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center lg:space-x-20 md:flex-row py-12 px-8 lg:px-14 text-gray-800" id='promo-video'>
      <div className="w-full md:w-1/3 mb-12 md:mb-0 space-y-8">
        <h2 className="h2 mb-4">{pv.title}</h2>
        <p className="text-xl text-justify pb-12">
          {pv.checks.map((check, index) => (
            <span key={index} className="flex items-center mb-2">
              <FaCheck className="mr-2" /> 
              {check}
            </span>
          ))}
        </p>
        <div className="flex flex-col space-y-6 h5 text-gray-50">
          { pv.primaryCta.title &&
            <CallToAction title={pv.primaryCta.title} url={pv.primaryCta.title} className='bg-gradient-to-br from-green-700 to-green-500 w-80'/>
          }
          { pv.secondaryCta.title &&
            <CallToAction title={pv.secondaryCta.title} url={pv.secondaryCta.title} className='bg-gradient-to-r from-n-8 to-n-6 w-80'/>
          }
        </div>
      </div>
      <div className="w-full lg:w-3/5">
        <video ref={videoRef} controls
          width="100%" className="rounded-lg shadow-xl shadow-black/50 transition-transform transform hover:scale-105">
          <source src={pv.url} type="video/mp4" />
          {pv.alt}
        </video>
      </div>
    </div>
  );
};

export default PromotionalVideo;