'use client';

import React from 'react';
import { Leaf, Plus, Calendar, Award } from 'lucide-react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="hero w-full bg-gradient-to-br  from-emerald-950 via-green-950 to-teal-950 rounded-2xl relative overflow-hidden">
      
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#15803d20_0%,transparent_70%)]"></div>

      <div className="hero-content flex flex-col lg:flex-row items-center justify-between gap-12 px-6 py-12 lg:py-16 max-w-7xl mx-auto relative z-10 min-h-[60vh]">

        {/* Left Side */}
        <div className="flex-1 text-center lg:text-left space-y-6 flex flex-col justify-center">

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mx-auto lg:mx-0">
            <Leaf className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-300 text-xs sm:text-sm font-medium tracking-wider">
              KEEP YOUR PLANTS ALIVE
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-white">
            Never Let Your <br />
            <span className="text-emerald-400">Green Friends</span> Die Again
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0">
            Track watering, fertilizing, and care schedules for all your houseplants.
            Stay consistent and watch them thrive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button
              className="btn btn-primary btn-md  sm:btn-lg gap-2 text-white sm:gap-3 text-base sm:text-lg "
              onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
            >
              <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
              Add New Plant
            </button>

            <button className="btn btn-outline btn-md sm:btn-lg gap-2 sm:gap-3 text-base sm:text-lg border-white/50 text-white hover:bg-white/10">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              View My Plants
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 pt-6 sm:pt-8 text-sm">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <div>
                <p className="font-semibold text-white">98% Survival Rate</p>
                <p className="text-gray-400 text-xs">with consistent care</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="font-semibold text-white">1,247 Plants</p>
                <p className="text-gray-400 text-xs">being kept alive</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 relative flex justify-center lg:justify-end items-center">

          <div className="relative">

            {/* Image */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10 mx-auto lg:mx-0">
              <Image
                src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42"
                alt="Healthy Plant"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-base-100/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-2xl border border-emerald-500/20 w-48 sm:w-56">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-xs text-gray-500">Next Watering</p>
                  <p className="font-semibold text-base sm:text-lg text-emerald-600">
                    Tomorrow
                  </p>
                </div>
                <div className="bg-emerald-100 text-emerald-700 p-2 sm:p-3 rounded-xl">
                  <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>

              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-emerald-500 rounded-full"></div>
              </div>
              <p className="text-xs text-right mt-1 text-gray-500">85% on track</p>
            </div>

            {/* Badge */}
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white text-emerald-700 px-3 sm:px-4 py-1 sm:py-2 rounded-2xl shadow-xl flex items-center gap-2 text-xs sm:text-sm font-medium">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              8 Plants Thriving
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 text-white/60">
        <p className="text-xs tracking-widest">SCROLL TO EXPLORE</p>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
      </div>

    </div>
  );
};

export default Banner;