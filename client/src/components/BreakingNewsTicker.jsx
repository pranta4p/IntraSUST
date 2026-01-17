import React from 'react';

const BreakingNewsTicker = () => {
  const message = "If you even think about cheating or using AI during the contest, just know this: the consequences will hit harder than a 3 a.m. realization that you forgot to submit. 💀 We're talking a legendary L-moment, permanent ban from the CP community, and a lifetime of randomly whispering to yourself, 'why did I fumble that day?'";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white py-2 overflow-hidden shadow-lg border-b-2 border-red-500">
      <div className="flex items-center">
        <div className="bg-yellow-400 text-red-900 font-bold px-4 py-1 mr-4 text-sm uppercase tracking-wider flex-shrink-0">
          ⚠️ Warning
        </div>
        <div className="ticker-wrapper">
          <div className="ticker-content">
            <span className="ticker-item font-medium text-sm md:text-base">
              {message}
            </span>
            <span className="ticker-item font-medium text-sm md:text-base">
              {message}
            </span>
            <span className="ticker-item font-medium text-sm md:text-base">
              {message}
            </span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
        }
        
        .ticker-content {
          display: flex;
          animation: scroll 40s linear infinite;
        }
        
        .ticker-item {
          white-space: nowrap;
          padding-right: 100px;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .ticker-content:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BreakingNewsTicker;
