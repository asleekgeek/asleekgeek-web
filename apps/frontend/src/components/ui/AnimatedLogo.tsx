"use client";

import { useState, useEffect } from 'react';

export default function AnimatedLogo() {
  const [typedText, setTypedText] = useState('');
  const [showAnimation, setShowAnimation] = useState(false);
  const fullText = 'ASleekGeek';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setShowAnimation(true);
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-8">
      <h1 className="text-6xl lg:text-8xl font-mono font-bold mb-4">
        <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
          {typedText}
          <span className="animate-pulse">|</span>
        </span>
      </h1>

      {/* Network Animation */}
      {showAnimation && (
        <div className="flex justify-center">
          <div className="relative w-64 h-32">
            <div className="absolute inset-0 opacity-50">
              <svg viewBox="0 0 256 128" className="w-full h-full">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
                {/* Animated network lines */}
                <path d="M32,64 L224,64" stroke="url(#gradient)" strokeWidth="2" className="animate-pulse">
                  <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="2s" repeatCount="indefinite" />
                </path>
                <path d="M128,32 L128,96" stroke="url(#gradient)" strokeWidth="2" className="animate-pulse">
                  <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="2s" begin="0.5s" repeatCount="indefinite" />
                </path>
                <path d="M64,32 L192,96" stroke="url(#gradient)" strokeWidth="1" className="animate-pulse">
                  <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="2s" begin="1s" repeatCount="indefinite" />
                </path>
                <path d="M192,32 L64,96" stroke="url(#gradient)" strokeWidth="1" className="animate-pulse">
                  <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="2s" begin="1.5s" repeatCount="indefinite" />
                </path>
                {/* Network nodes */}
                <circle cx="32" cy="64" r="4" fill="url(#gradient)" className="animate-pulse" />
                <circle cx="128" cy="32" r="4" fill="url(#gradient)" className="animate-pulse" />
                <circle cx="128" cy="96" r="4" fill="url(#gradient)" className="animate-pulse" />
                <circle cx="224" cy="64" r="4" fill="url(#gradient)" className="animate-pulse" />
                <circle cx="64" cy="32" r="3" fill="url(#gradient)" className="animate-pulse" />
                <circle cx="64" cy="96" r="3" fill="url(#gradient)" className="animate-pulse" />
                <circle cx="192" cy="32" r="3" fill="url(#gradient)" className="animate-pulse" />
                <circle cx="192" cy="96" r="3" fill="url(#gradient)" className="animate-pulse" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
