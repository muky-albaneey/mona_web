import React from "react";

const Home_about = () => {
  return (
    <section className="bg-gray-100 w-full flex flex-col items-center justify-center py-16 px-4 lg:px-16">
      {/* Header Section */}
      <div className="text-center max-w-3xl">
        <h5 className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
          About Mona Protect
        </h5>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-2" id="planTitle">
          Protecting Your Devices, Keeping You Connected
        </h1>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed" id="planText">
          At Mona Protect, we know your mobile phone is more than just a device,
          it's your lifeline. That’s why we provide reliable and affordable
          protection plans to safeguard your phone against accidental damage and
          theft. With fast, hassle-free repairs and comprehensive coverage, we
          ensure you’re always connected when it matters most.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition">
          Learn more →
        </button>
      </div>

      {/* Dashboard Image (Mockup) */}
      <div className="mt-12 relative w-full max-w-4xl">
        <div className="rounded-xl overflow-hidden shadow-lg border bg-white p-6">
          <img
            src="./User_dashboard.png" // Replace this with the actual image
            alt="Mona Protect Dashboard"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home_about;
