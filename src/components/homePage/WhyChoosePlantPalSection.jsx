import { FaLeaf, FaBell, FaTint, FaChartLine } from "react-icons/fa";

const WhyChoosePlantPalSection = () => {
  const features = [
    {
      icon: <FaLeaf />,
      title: "Healthy Plant Tracking",
      description:
        "Monitor your plants and keep them healthy with easy care tracking.",
    },
    {
      icon: <FaBell />,
      title: "Care Reminders",
      description: "Never forget watering schedules with smart reminders.",
    },
    {
      icon: <FaTint />,
      title: "Watering Insights",
      description: "Track watering frequency and optimize plant health.",
    },
    {
      icon: <FaChartLine />,
      title: "Growth Monitoring",
      description: "Watch your plant journey with beautiful progress tracking.",
    },
  ];

  return (
    <section className="py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest mb-3">
            Why PlantPal
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-base-content">
            Plant Care Made Beautiful
          </h2>
          <p className="mt-5 text-base-content/70 max-w-2xl mx-auto">
            PlantPal helps you build better plant habits with modern tracking,
            reminders, and care management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-base-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2 border border-base-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-base-content">
                {feature.title}
              </h3>

              <p className="text-base-content/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoosePlantPalSection;
