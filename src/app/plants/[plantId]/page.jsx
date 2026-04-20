import { getData } from "@/lib/plants/Plants";
import Image from "next/image";
import React from "react";

const PlantDetailPage = async ({ params }) => {
  const { plantId } = await params;
  //   console.log(plantId);
  const plants = await getData();
  // console.log(plants);

  const plant = plants.find((plant) => plant.id.toString() === plantId);

  console.log(plant);
  if (!plant) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Plant not found
          </h2>
          <p className="text-gray-600 mt-2">
            The plant your are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }
  // 🔥 Status Config
  const statusConfig = {
    "on-track": {
      label: "On Track",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-500",
    },
    "almost due": {
      label: "Almost Due",
      bg: "bg-amber-50",
      text: "text-amber-700",
      dot: "bg-amber-500",
    },
    overdue: {
      label: "Overdue",
      bg: "bg-red-50",
      text: "text-red-700",
      dot: "bg-red-500",
    },
  };
  const currentStatus = statusConfig[plant.status];

  // ✅ Correct next care calculation
  const remainingDays = plant.goal - plant.days_since_contact;

  return (
    <div className="min-h-[70vh] pb-20 my-10">
      {/* Hero Section */}
      <div className="relative h-[420px] md:h-[500px] overflow-hidden bg-zinc-900">
        <Image
          src={plant.picture}
          alt={plant.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <div className="max-w-5xl mx-auto">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {plant.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-5 py-1.5 bg-white/20 backdrop-blur-md text-white text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl font-bold mb-3">
              {plant.name}
            </h1>

            {/* Bio */}
            <p className="text-lg md:text-xl text-white/90 max-w-lg">
              {plant.bio}
            </p>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-8">
            <div
              className={`bg-white rounded-3xl shadow-xl p-8 md:p-10 ${
                plant.status === "overdue" ? "border-2 border-red-400" : ""
              }`}
            >
              {/* Status + Date */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full ${currentStatus.dot} animate-pulse`}
                  />
                  <span
                    className={`font-semibold uppercase tracking-widest text-sm ${currentStatus.text}`}
                  >
                    {currentStatus.label}
                  </span>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-500 tracking-widest">
                    NEXT DUE DATE
                  </p>
                  <p className="text-xl font-semibold text-gray-800">
                    {new Date(plant.next_due_date).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {/* Next Care */}
              <div className="mb-12">
                <p className="text-4xl md:text-5xl font-bold text-gray-900">
                  Next care in{" "}
                  <span className={currentStatus.text}>
                    {remainingDays > 0 ? remainingDays : 0}
                  </span>{" "}
                  days
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="bg-emerald-50 rounded-2xl p-7">
                  <p className="text-emerald-600 text-sm font-medium">
                    Watering Goal
                  </p>
                  <p className="text-5xl font-bold text-emerald-700 mt-3">
                    {plant.goal}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    days between waterings
                  </p>
                </div>

                <div className="bg-teal-50 rounded-2xl p-7">
                  <p className="text-teal-600 text-sm font-medium">
                    Last Contact
                  </p>
                  <p className="text-5xl font-bold text-teal-700 mt-3">
                    {plant.days_since_contact}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">days ago</p>
                </div>

                {/* Dynamic Status Card */}
                <div className={`${currentStatus.bg} rounded-2xl p-7`}>
                  <p className={`text-sm font-medium ${currentStatus.text}`}>
                    Current Status
                  </p>
                  <p
                    className={`text-4xl font-semibold mt-4 ${currentStatus.text}`}
                  >
                    {currentStatus.label}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {plant.status === "overdue"
                      ? "Needs immediate care!"
                      : plant.status === "almost due"
                        ? "Act soon!"
                        : "All good!"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 sticky top-8">
              <h3 className="font-semibold text-2xl text-gray-800 mb-7">
                Quick Actions
              </h3>

              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-2xl mb-4">
                ✅ Mark as Watered Today
              </button>

              <button className="w-full border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-semibold py-4 rounded-2xl">
                📅 Reschedule Next Care
              </button>

              {/* Tips */}
              <div className="mt-12">
                <h4 className="font-medium text-gray-700 mb-5">Care Tips</h4>

                <div className="space-y-6 text-sm text-gray-600">
                  <div className="flex gap-4">
                    <span className="text-2xl">💧</span>
                    <p>Water when top soil feels dry.</p>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-2xl">☀️</span>
                    <p>Bright indirect light is best.</p>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-2xl">🌱</span>
                    <p>Avoid moving frequently.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetailPage;
