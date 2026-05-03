import Image from "next/image";

const TestimonialsSection = () => {
  const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Plant Enthusiast",
    review: "PlantPal completely changed how I care for my indoor plants.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Carter",
    role: "Home Gardener",
    review: "Beautiful UI and very easy tracking system.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Rose",
    role: "Plant Collector",
    review: "The reminder system keeps my plants healthy all year.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

  return (
    <section className="py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-base-content">
            Loved by Plant Owners
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-base-100 rounded-[30px] p-8 shadow-lg border border-base-300 hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-base-content">
                    {item.name}
                  </h4>
                  <p className="text-sm text-base-content/60">
                    {item.role}
                  </p>
                </div>
              </div>

              <p className="text-base-content/70 leading-relaxed">
                “{item.review}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;