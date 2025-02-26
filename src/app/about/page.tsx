import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="bg-[#ffffff] text-[#10121a]">

      {/* Our Story Section */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-[#400101]">Our Story</h2>
          <p className="text-lg max-w-4xl mx-auto text-gray-600 leading-relaxed">
            Aim Apogee was founded with a passion for innovation, creativity, and collaboration. From our humble beginnings in the creative industry to becoming a leading force in multimedia and education, our journey is one of constant growth and success. Every project is a testament to our dedication and vision.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-12 text-[#400101]">Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#400101]">Our Mission</h3>
              <p className="text-lg text-gray-600">
                Our mission is to empower individuals and businesses to succeed by providing high-quality creative content and cutting-edge educational resources. We aim to spark new ideas, push boundaries, and inspire those around us.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#400101]">Our Vision</h3>
              <p className="text-lg text-gray-600">
                Our vision is to shape the future of multimedia and education by becoming a trusted global leader and innovator. We strive to lead by example and create a lasting impact on the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-12 text-[#400101]">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="team-member rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">
              <Image
                src="/path/to/team-member1.jpg" // Update with actual team member photo
                alt="Team Member 1"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-[#400101]">John Doe</h3>
              <p className="text-lg text-gray-700">CEO & Founder</p>
              <p className="text-sm text-gray-500 italic">{"Innovation is the key to success."}</p>
            </div>
            <div className="team-member rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">
              <Image
                src="/path/to/team-member2.jpg" // Update with actual team member photo
                alt="Team Member 2"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-[#400101]">Jane Smith</h3>
              <p className="text-lg text-gray-700">Creative Director</p>
              <p className="text-sm text-gray-500 italic">{"Creativity drives change."}</p>
            </div>
            <div className="team-member rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">
              <Image
                src="/path/to/team-member3.jpg" // Update with actual team member photo
                alt="Team Member 3"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-[#400101]">Emily Johnson</h3>
              <p className="text-lg text-gray-700">Lead Developer</p>
              <p className="text-sm text-gray-500 italic">{"Turning ideas into reality."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#400101] text-white text-center">
        <h2 className="text-4xl font-semibold mb-6">Join Us and Shape the Future</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Be part of our creative and innovative team. We’re always looking for passionate individuals to join our mission. Together, we can make a lasting impact and change the world for the better.
        </p>
        <a
          href="/contact"
          className="bg-[#ffffff] text-[#10121a] px-8 py-4 rounded-lg text-xl font-semibold hover:bg-[#f4f4f4] transition-all duration-300"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
};

export default AboutUs;
