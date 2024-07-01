import React from 'react';
// Import the image and rename it to avoid confusion with the CSS class name
import bannerImage from "../assets/banner.jpg";

const Banner = () => {
  // Use the imported image in the style attribute
  const bannerStyle = {
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
  };

  return (
    <section
      className="relative"
      style={bannerStyle} // Apply the style here
    >
    <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
    
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl text-black  font-extrabold sm:text-5xl">
      Providing you the best

        <strong className="block font-extrabold text-green-800 ">Health Services. </strong>
      </h1>

      <p className="mt-4 max-w-lg  font-bold sm:text-xl/relaxed text-black ">
        Compassionate care, cutting-edge medicine, excellence, trust, expertise, empathy, innovation, comfort, recovery, community.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-green-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-white-50 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-green-800 shadow hover:text-green-800 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Banner
