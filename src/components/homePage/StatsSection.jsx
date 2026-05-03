const StatsSection = () => {
  const stats = [
    {
      number: "10K+",
      title: "Happy Plant Owners",
    },
    {
      number: "50K+",
      title: "Plants Managed",
    },
    {
      number: "95%",
      title: "Reminder Success Rate",
    },
    {
      number: "24/7",
      title: "Plant Monitoring",
    },
  ];

  return (
    <section className="py-24 bg-primary text-primary-content">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h2 className="text-4xl md:text-5xl font-bold mb-3">
                {stat.number}
              </h2>
              <p className="text-primary-content/80 text-sm uppercase tracking-widest">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;