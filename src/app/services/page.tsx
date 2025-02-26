"use client";

const Services = () => {
  const services = [
    {
      title: "3D Animations",
      description:
        "Creating immersive and realistic 3D animations that bring your vision to life.",
      icon: "🎥",
    },
    {
      title: "2D Animations",
      description:
        "Crafting vibrant 2D animations for storytelling, branding, and entertainment.",
      icon: "✏️",
    },
    {
      title: "Motion Graphics",
      description:
        "Designing captivating motion graphics for presentations, ads, and more.",
      icon: "🎞️",
    },
    {
      title: "Character Design",
      description:
        "Developing unique and memorable characters for your projects.",
      icon: "🧙‍♂️",
    },
    {
      title: "Storyboarding",
      description:
        "Planning and visualizing your concepts with detailed storyboards.",
      icon: "📝",
    },
    {
      title: "3D Modeling",
      description:
        "Creating detailed 3D models for animations, games, and product visualization.",
      icon: "🛠️",
    },
  ];

  return (
    <div className="bg-gray-100 py-20 text-gray-900">
      {/* Hero Section */}
      <div className="max-w-screen-xl mx-auto text-center px-6 lg:px-12">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Our <span className="text-[#A19367]">Services</span>
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          We specialize in crafting animations and visuals that captivate and inspire.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-5xl text-blue-600 mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-screen-xl mx-auto text-center mt-16 px-6 lg:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Let Us Bring Your Ideas to Life
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          From concept to creation, we deliver animation services that exceed expectations.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-[#A19367] transition-all"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Services;
