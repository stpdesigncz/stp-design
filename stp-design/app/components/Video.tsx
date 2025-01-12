'use client';

import React from 'react';

const Video: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.mp4" // Nahraď správnou cestou k videu
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default Video;
