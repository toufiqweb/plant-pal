"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLeaf, FaTint, FaArrowRight } from "react-icons/fa";

const PlantCard = ({ plant }) => {
  const {
    id,
    name,
    picture,
    days_since_watered,
    days_since_contact,
    status,
    tags = [],
    goal,
  } = plant;

  const getStatusColor = (status) => {
    switch (status) {
      case "overdue":
        return "bg-red-500/90 text-white border-red-400";
      case "almost due":
        return "bg-yellow-400/90 text-black border-yellow-300";
      case "on-track":
        return "bg-emerald-500/90 text-white border-emerald-400";
      default:
        return "bg-gray-500/90 text-white border-gray-400";
    }
  };

  const daysPassed = days_since_contact;
  const total = goal;

  const progress = Math.max(
    0,
    Math.min(100, Math.round((daysPassed / total) * 100)),
  );

  const daysLeft = total - daysPassed;

  let progressColor = "from-emerald-400 via-green-500 to-teal-500";
  let glowColor = "shadow-emerald-500/20";

  if (progress >= 90) {
    progressColor = "from-red-400 via-rose-500 to-red-600";
    glowColor = "shadow-red-500/20";
  } else if (progress >= 60) {
    progressColor = "from-yellow-300 via-amber-400 to-orange-500";
    glowColor = "shadow-yellow-500/20";
  }

  return (
    <div className=" relative overflow-hidden rounded-[28px]  backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2  mx-auto">
      {/* Premium Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-primary/5 via-transparent to-secondary/10"></div>

      {/* Image Section */}
      <figure className="relative h-64 overflow-hidden">
        <Image
          src={picture}
          alt={name}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent"></div>

        {/* Status Badge */}
        <div
          className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-md shadow-md ${getStatusColor(
            status,
          )}`}
        >
          {status.toUpperCase()}
        </div>

        {/* Floating Plant Icon */}
        <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/15 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white shadow-lg">
          <FaLeaf size={16} />
        </div>

        {/* Plant Name on Image */}
        <div className="absolute bottom-4 left-5 text-white z-10">
          <h2 className="text-2xl font-bold tracking-tight drop-shadow-lg">
            {name}
          </h2>
        </div>
      </figure>

      {/* Content */}
      <div className="relative p-6 space-y-5">
        {/* Water Info Card */}
        <div className="flex items-center justify-between rounded-2xl bg-base-200/60 border border-base-300/50 px-4 py-3 backdrop-blur-md">
          <div>
            <p className="text-xs text-base-content/60 uppercase tracking-wide">
              Last Watered
            </p>
            <p className="text-sm font-semibold text-base-content mt-1">
              {days_since_watered} days ago
            </p>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <FaTint size={18} />
          </div>
        </div>

        {/* Goal */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-base-content/60">Water Cycle</span>
          <span className="font-semibold text-base-content">
            Every {goal} days
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-[11px] font-medium bg-base-200 border border-base-300 hover:bg-primary/10 transition"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Progress Section */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-base-content/70">
              Care Progress
            </span>
            <span className="font-bold text-sm text-primary">{progress}%</span>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-3 rounded-full bg-base-300 overflow-hidden">
            <div
              className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${progressColor} ${glowColor} shadow-lg transition-all duration-700`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-between text-xs text-base-content/60">
            <span className={daysLeft <= 0 ? "text-red-500 font-semibold" : ""}>
              {daysLeft <= 0 ? "Needs Water 🚨" : `${daysLeft} days left`}
            </span>
            <span>{goal} day cycle</span>
          </div>
        </div>

        {/* Footer Button */}
        <Link href={`/plants/${id}`}>
          <button className="btn btn-primary w-full rounded-2xl group/button overflow-hidden relative">
            <span className="flex items-center gap-2">
              View Details
              <FaArrowRight className="transition-transform duration-300 group-hover/button:translate-x-1" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlantCard;
