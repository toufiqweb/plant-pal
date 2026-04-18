"use client";

import Image from "next/image";
import React from "react";

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

  // Status color logic
  const getStatusColor = (status) => {
    switch (status) {
      case "overdue":
        return "bg-red-500 text-white";
      case "almost due":
        return "bg-yellow-400 text-black";
      case "on-track":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  const daysPassed = days_since_contact;
  const total = goal;
  const progress = Math.max(
    0,
    Math.min(100, Math.round((daysPassed / total) * 100)),
  );
  const daysLeft = total - daysPassed;
  // 🎯 Dynamic color logic
  let progressColor = "from-green-400 via-emerald-500 to-teal-500";
  let textColor = "text-green-500";

  if (progress >= 90) {
    progressColor = "from-red-400 via-red-500 to-rose-600";
    textColor = "text-red-500";
  } else if (progress >= 60) {
    progressColor = "from-yellow-300 via-yellow-400 to-amber-500";
    textColor = "text-yellow-500";
  }

  return (
    <div className="group card bg-base-100/80 backdrop-blur-xl border border-base-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer w-full max-w-sm mx-auto">
      {/* Image Section */}
      <figure className="relative h-56 overflow-hidden">
        <Image
          src={picture}
          alt={name}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent"></div>

        {/* Status Badge */}
        <div
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold shadow-md ${getStatusColor(
            status,
          )}`}
        >
          {status.toUpperCase()}
        </div>
      </figure>

      {/* Content */}
      <div className="card-body p-5">
        {/* Title */}
        <h2 className="card-title text-xl font-bold text-base-content">
          {name}
        </h2>

        {/* Days Info */}
        <p className="text-sm text-base-content/70">
          Last watered{" "}
          <span className="font-semibold text-base-content">
            {days_since_watered} days ago
          </span>
        </p>

        {/* Goal */}
        <p className="text-xs text-base-content/60">
          Goal: Every <span className="font-medium">{goal} days</span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-[11px] rounded-full border border-base-300 bg-base-200/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Progress Section */}
        <div className="mt-5">
          {/* Top Row */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-base-content/70">
              Watering Progress
            </span>
            <span className={`text-xs font-bold ${textColor}`}>
              {progress}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-base-300 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full bg-linear-to-r ${progressColor} transition-all duration-500 ease-in-out`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Bottom Info */}
          <div className="flex justify-between text-[11px] mt-2 text-base-content/60">
            <span className={daysLeft <= 0 ? "text-red-500 font-medium" : ""}>
              {daysLeft <= 0 ? "Water now 🚨" : `${daysLeft} days left`}
            </span>
            <span>{total}d cycle</span>
          </div>
        </div>

        {/* Footer */}
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-sm btn-ghost text-primary group-hover:translate-x-1 transition">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
