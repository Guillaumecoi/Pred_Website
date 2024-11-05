import React, { useRef, useEffect } from 'react';
import { PromotionalVideo as PV } from '../constants/types';
import CallToAction from './general/CallToAction';
import Checkpoints from './general/CheckPoints';

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

    const currentVideoRef = videoRef.current;
    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-6 lg:space-x-20 lg:flex-row py-20 px-8 lg:px-14 text-gray-800" id='promo-video'>
      <div className="w-full lg:w-1/3 mb-12 lg:mb-0 space-y-8">
        <h2 className="h2 mb-4">{pv.title}</h2>
        <div className="text-xl pb-4 lg:pb-12">
          <Checkpoints checks={pv.checks} />
        </div>
        <div className="flex flex-col space-y-6 h5 text-gray-50">
          { pv.primaryCta &&
            <CallToAction title={pv.primaryCta.title} url={pv.primaryCta.url} className='bg-gradient-to-br from-green-700 to-green-500 w-80'/>
          }
          { pv.secondaryCta &&
            <CallToAction title={pv.secondaryCta.title} url={pv.secondaryCta.url} className='bg-gradient-to-r from-n-8 to-n-6 w-80'/>
          }
        </div>
      </div>
      <div className="w-full lg:w-3/5">
        <video ref={videoRef} controls
          width="100%" className="rounded-lg shadow-xl shadow-black/50 transition-transform transform hover:scale-105">
          <source src={pv.videoUrl} type="video/mp4" />
          {pv.alt}
        </video>
      </div>
    </div>
  );
};

export default PromotionalVideo;