const CareStepsSection = () => {
  const steps = [
    {
      number: "01",
      title: "Add Your Plants",
      desc: "Create your personal plant collection in seconds.",
    },
    {
      number: "02",
      title: "Track Care Schedule",
      desc: "Set watering and care reminders easily.",
    },
    {
      number: "03",
      title: "Stay Consistent",
      desc: "Follow reminders to keep plants healthy.",
    },
  ];

  return (
    <section className="py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest mb-3">
            Simple Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-base-content">
            How PlantPal Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-[30px] p-10 text-center border border-base-300 hover:shadow-xl transition duration-500"
            >
              <div className="text-6xl font-black text-primary/20 mb-6">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-base-content">
                {step.title}
              </h3>

              <p className="text-base-content/70 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareStepsSection;