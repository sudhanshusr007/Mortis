import React from "react";
import Imge1 from "../assets/virus.png";
import { Navigate } from "react-router-dom";
const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              src={Imge1}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-4xl font-bold sm:text-4xl">
              <span className="font-bold text-green-800">Empowering</span>{" "}
              Health: Your Journey to Wellness Simplified
            </h2>

            <p className="mt-4 text-gray-600">
              Our dedicated team of doctors ensures that every diagnosis is
              seamless, hassle-free, and confidential. We prioritize your
              comfort and peace of mind, providing personalized care tailored to
              your unique needs. Trust us to guide you through your health
              journey with expertise, compassion, and confidentiality
            </p>

            <button
              onClick={() =>  window.location.href = '/schedule'}
              className="mt-8 inline-block rounded bg-gray-800 px-12 py-3 text-sm font-medium text-white transition hover:bg-green-900 focus:outline-none focus:ring focus:ring-white"
            >
              Book a Test
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
