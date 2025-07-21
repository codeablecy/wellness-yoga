"use client";

import { Calendar, Heart, Lightbulb, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Spiritual Awakening Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Animated light particles - reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 sm:w-2 sm:h-2 bg-yellow-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-blue-300 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-300 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-pink-300 rounded-full animate-pulse opacity-30"></div>
      </div>

      <div className="relative z-20 text-center w-full max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main heading with improved mobile sizing */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="block">Spiritual Awakening</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 mt-1 sm:mt-2">
              & Inner Light
            </span>
          </h1>

          {/* Subtitle with better mobile spacing */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
            Ignite your inner potential with intuitive guidance and personalized
            self-discovery journeys. Become your own source of light and
            empowerment through dedicated inner work.
          </p>

          {/* Call to action buttons - improved mobile layout */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
            <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Calendar className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Explore Events
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-purple-900 transition-all duration-300">
              <Sparkles className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Begin Your Journey
            </button>
          </div>

          {/* Feature highlights - improved mobile layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-white/20 transition-all duration-300">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-300" />
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                Energy Healing
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm px-2 sm:px-0">
                Experience profound healing and self-empowerment through
                energetic healing techniques
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-white/20 transition-all duration-300">
                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                Conscious Teaching
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm px-2 sm:px-0">
                Navigate your path with clarity and purpose, becoming your own
                energetic healer
              </p>
            </div>

            <div className="text-center group sm:col-span-2 lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-white/20 transition-all duration-300">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-300" />
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                Self-Discovery
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm px-2 sm:px-0">
                Empower yourself with conscious teachings, harnessing the wisdom
                of inner work
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - smaller on mobile */}
      <div className="absolute -bottom-0 md:bottom-4 sm:bottom-12 justify-center items-center transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-4 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-white rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
