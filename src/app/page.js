import Banner from "@/components/homePage/Banner";
import PlantsSection from "@/components/homePage/PlantsSection";
import WhyChoosePlantPalSection from "@/components/homePage/WhyChoosePlantPalSection";
import NavBar from "@/components/shared/navbar/NavBar";

export default function Home() {
  return (
    <>
      <Banner/>
      <PlantsSection/>
      <WhyChoosePlantPalSection/>
    </>
  );
}
