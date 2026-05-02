import React from "react";
import PlantCard from "../ui/PlantCard";
import { getData } from "@/lib/plants/Plants";

const PlantsSection = async () => {
  const plants = await getData();

  return (
    <section className="my-20 px-5">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
          Our Plants
        </h1>
        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
          Discover our carefully curated collection of beautiful and unique plants
        </p>
        <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Plants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>

      {/* Optional: View All Button */}
      {plants.length > 8 && (
        <div className="flex justify-center mt-12">
          <button className="btn btn-primary btn-lg">
            View All Plants
          </button>
        </div>
      )}
    </section>
  );
};

export default PlantsSection;