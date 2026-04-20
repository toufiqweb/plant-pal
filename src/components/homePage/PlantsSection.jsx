import React from "react";
import PlantCard from "../ui/PlantCard";
import { getData } from "@/lib/plants/Plants";



const PlantsSection = async () => {
  const plants = await getData();
  // console.log(plants);

  return (
    <div className="my-20 px-5 space-y-5">
      <h1 className="text-5xl font-bold text-center ">Plants</h1>

      <div className="grid grid-cols-4 gap-10">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default PlantsSection;
