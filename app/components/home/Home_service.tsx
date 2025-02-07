import React from "react";

const services = [
  {
    title: "Accidental Damage",
    description:
      "Life happens, and so do accidents. Whether it’s a cracked screen, water damage, a shattered back cover, malfunctioning buttons, or a dropped device, we’ve got you covered.",
    image: "./first.png", // Replace with actual image
  },
  {
    title: "Guaranteed Repair",
    description:
      "We stand behind every repair with a guarantee. If something goes wrong, we’ll make it right – fast. Your device is in safe hands with Mona Protect.",
    image: "two.png" // Replace with actual image
  },
  {
    title: "Theft/Total Loss",
    description:
      "Whether your phone is stolen, lost, or damaged beyond repair, we’ve got your back. Mona Protect helps cover the cost of replacing your device.",
    image: "./third.png", // Replace with actual image
  },
];

const HomeServices = () => {
  return (
    <section className="bg-gradient-to-b from-blue-700 to-blue-500 py-16 px-4 lg:px-16 text-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h5 className="text-white font-semibold uppercase tracking-wide text-sm">
          Our Services
        </h5>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mt-2" id="serviceTitle">
          We Offer Complete Protection <br /> for Your Mobile Devices
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <a
                href="#"
                className="text-blue-600 font-semibold inline-flex items-center mt-4 hover:underline"
              >
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
