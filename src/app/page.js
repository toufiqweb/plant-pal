import Banner from "@/components/homePage/Banner";
import CareStepsSection from "@/components/homePage/CareStepsSection";
import PlantsSection from "@/components/homePage/PlantsSection";
import WhyChoosePlantPalSection from "@/components/homePage/WhyChoosePlantPalSection";
import NavBar from "@/components/shared/navbar/NavBar";

export default function Home() {
  return (
    <>
      <Banner/>
      <PlantsSection/>
      <WhyChoosePlantPalSection/>
      <CareStepsSection/>
    </>
  );
}
