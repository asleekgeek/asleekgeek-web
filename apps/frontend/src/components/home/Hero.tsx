"use client";

import AnimatedLogo from '../ui/AnimatedLogo';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-violet-900/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <AnimatedLogo />

          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Beyond the Code. Building the Future.
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
Deep insights into software architecture, cutting-edge development practices, and the technologies shaping tomorrow&apos;s digital landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              <span className="flex items-center justify-center">
                Explore Articles
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="border-2 border-gray-600 hover:border-blue-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-blue-500/10">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
