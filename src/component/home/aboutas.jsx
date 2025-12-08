import React from "react";
import ImageLeft from "../../assets/tech1.jpg";
import ImageRight from "../../assets/tech2.png";
export default function AboutUs() {
  return (
    <section className="bg-gray-900 text-green-300 font-sans px-6 lg:px-60 md:px-6 py-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
      {/* Left Image + Text */}
      <div>
           <h1 className="text-5xl font-semibold text-green-500 tracking-wide mb-6">ABOUT US</h1>

        <p className="text-green-200  leading-relaxed mb-4">
          Welcome to <span className="font-semibold text-white">Tech Wave</span>, 
          a forward-thinking event production company specializing in high-impact 
          technology events. For over a decade, we have been creating immersive 
          experiences that connect innovation, creativity, and community.
        </p>
      </div>
     <img
  src={ImageLeft}
  alt="Interior"
  className="rounded-xl shadow-lg mb-6 cursor-pointer hover:opacity-80 transition"
/>

           <img
  src={ImageRight}
  alt="Room"
  className="rounded-xl shadow-lg mt-0 cursor-pointer hover:opacity-80 w-[600px] transition"
/>

      {/* Right Side Text */}
      <div className="flex flex-col justify-center">
        <p className="text-green-200  leading-relaxed mb-4">
           At Tech Wave, our expert production team transforms ideas into 
          unforgettable tech-driven experiences. From concept creation to 
          full-scale event execution, we bring together cutting-edge visuals, 
          immersive environments, and seamless operations.
        </p>

        <p className="text-green-200  leading-relaxed mb-6">
          Whether it's conferences, product launches, tech festivals, or 
          corporate showcases, we ensure every detail reflects innovation, 
          precision, and the spirit of technology.
        </p>


 

      </div>
    </section>
  );
}
