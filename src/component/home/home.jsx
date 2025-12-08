
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/image10.jpg";
import Image2 from "../../assets/image30.png";
import Image3 from "../../assets/im9.png";
import Logo from "../../assets/logo.png";
import Footer from "./../home/footer.jsx";
import Event from "./../home/upcomingevent.jsx";
import Spekers from "./../home/spekers.jsx";
import AboutUs from "./../home/aboutas.jsx";
import Total from "./../home/total.jsx";
// ---------------------------------------------------
// TYPEWRITER COMPONENT
// ---------------------------------------------------
function TypeWriter({ text, speed = 60, onComplete, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText(""); // reset on slide change
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        if (onComplete) {
          setTimeout(() => {
            onComplete(); // trigger callback after extra delay
          }, delay);
        }
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, onComplete, delay]);

  return (
    <span className="inline-block whitespace-pre text-left w-full">
      {displayedText.split("").map((char, idx) => (
        <span
          key={idx}
          className="inline-block animate-slide-right"
          style={{ animationDelay: `${idx * 0.02}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

// ---------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------
export default function EventsPage() {
  const images = [
    {
      src: Image1,
      type: "full",
      title: "Welcome to Motivec Events",
      subtitle: "Discover our latest conferences and gatherings.",
      textPosition: "center",
    },
    {
      src: Image2,
      type: "right",
      customHeight: "h-[600px]",
      customWidth: "w-[600px]",
      title: "Learn From Top Speakers",
      subtitle: "We bring world-class speakers to motivate you.",
      textPosition: "right",
    },
    {
      src: Image3,
      type: "right",
      customHeight: "h-[550px]",
      customWidth: "w-[500px]",
      title: "Build Your Future",
      subtitle: "Join future-changing events hosted by Motivec.",
      textPosition: "right",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Text alignment classes
  let alignmentClasses = "text-center";
  if (images[currentIndex].textPosition === "left") {
    alignmentClasses = "lg:text-left lg:mr-auto lg:pl-10";
  } else if (images[currentIndex].textPosition === "right") {
    alignmentClasses = "lg:text-right lg:ml-auto lg:pr-10";
  } else {
    alignmentClasses = "lg:text-center";
  }
const footerRef = useRef(null);
const scrollToFooter = (e) => {
  e.preventDefault(); // prevent default link jump
  footerRef.current.scrollIntoView({ behavior: "smooth" });
};
const eventsRef = useRef(null);

const scrollToEvents = (e) => {
  e.preventDefault();
  eventsRef.current.scrollIntoView({ behavior: "smooth" });
};
const speakersRef = useRef(null);

const scrollToSpeakers = (e) => {
  e.preventDefault();
  speakersRef.current.scrollIntoView({ behavior: "smooth" });
};
const aboutRef = useRef(null);
const scrollToAbout = (e) => {
  e.preventDefault();
  aboutRef.current.scrollIntoView({ behavior: "smooth" });
};
const heroRef = useRef(null);
const scrollToHero = (e) => {
  e.preventDefault();
  heroRef.current.scrollIntoView({ behavior: "smooth" });
};

  return (
    <div className="w-full min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <header className="w-full bg-[#0f172a] text-gray-200 py-4 shadow-sm fixed top-0 left-0 z-50">

        <div className="max-w-[1250px] mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center gap-0 md:-ml-2 -ml-10 relative">
            <img
              src={Logo}
              alt="Tech Wave Logo"
              className="absolute top-1/2 -translate-y-1/2 w-[150px]"
            />
            <h1 className="text-3xl font-bold text-green-700 ml-[110px]">Tech Wave</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
           <a href="#" onClick={scrollToHero} className="hover:text-[#4ade80]">HOME</a>

             <a href="#about" onClick={scrollToAbout} className="hover:text-[#4ade80]">ABOUT US</a>

           <a href="#events" onClick={scrollToEvents} className="hover:text-[#4ade80]">EVENTS</a>
            <a href="#speakers" onClick={scrollToSpeakers} className="hover:text-[#4ade80]">SPEAKERS</a>

           
           
<Link to="/signin" className="hover:text-[#4ade80]">REGISTER</Link>
        <a href="#contact" onClick={scrollToFooter} className="hover:text-[#4ade80]">CONTACT</a>

          </nav>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col w-8 h-8 justify-between items-center text-white z-50 relative"
            >
              <span
                className={`block h-1 w-full bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-3" : ""
                }`}
              ></span>
              <span
                className={`block h-1 w-full bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-1 w-full bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-3" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Sliding Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#0f172a] transform transition-transform duration-300 ease-in-out z-40 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col px-6 py-8 space-y-6 text-gray-200">
            <a href="#" onClick={scrollToHero} className="hover:text-[#4ade80]">HOME</a>
<a href="#" onClick={scrollToAbout} className="hover:text-[#4ade80]">ABOUT US</a>
<a href="#" onClick={scrollToEvents} className="hover:text-[#4ade80]">EVENTS</a>
<a href="#" onClick={scrollToSpeakers} className="hover:text-[#4ade80]">SPEAKERS</a>
<a href="#" onClick={scrollToFooter} className="hover:text-[#4ade80]">CONTACT</a>


          </div>
        </div>

        {/* Optional overlay when menu is open */}
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/40 z-30"
          ></div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="w-full h-[600px] relative overflow-hidden">
        {/* SLIDER */}
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="min-w-full h-full relative">

              {/* Full Background Image */}
              {img.type === "full" && (
                <div className="relative w-full h-full">
                  <img src={img.src} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
              )}

             
              {/* SECOND IMAGE */}
{img.type === "right" && index === 1 && (
  <div className="w-full h-full ">
    <img
      src={img.src}
      className={`${img.customHeight} ${img.customWidth} rounded-lg object-cover`}
    />
     <div className="absolute inset-0  bg-black/50"></div>
  </div>
)}


{/* THIRD IMAGE */}
{img.type === "right" && index === 2 && (
  <div className="w-full h-full flex justify-end items-end">
    <img
      src={img.src}
      className={`${img.customHeight} ${img.customWidth} rounded-lg object-cover`}
    />
  </div>
)}

            </div>
          ))}
        </div>

        {/* OVERLAY TEXT */}
        {currentIndex === 0 && (
          <div className="absolute inset-0 flex justify-center items-center z-20 px-17 lg:px-0">
            <div className="relative w-full max-w-[600px] text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-0 text-white drop-shadow-2xl">
                <TypeWriter
                  text={images[0].title}
                  speed={Math.max(10, 1800 / images[0].title.length)}
                  onComplete={nextSlide}
                  delay={3000}
                />
              </h1>
              <p className="text-gray-300 text-lg md:text-3xl lg:text-3xl drop-shadow-lg -mt-1">
                <TypeWriter
                  text={images[0].subtitle}
                  speed={Math.max(10, 1800 / images[0].subtitle.length)}
                />
              </p>
            </div>
          </div>
        )}

        {currentIndex === 1 && (
          <div className="absolute inset-0 flex justify-center lg:justify-end items-center px-17 lg:px-5 z-30">
            <div className="relative max-w-[600px] w-full text-center lg:text-right">
              <h1 className="text-3xl md:text-4xl font-bold mb-0 text-white drop-shadow-2xl">
                <TypeWriter
                  text={images[1].title}
                  speed={Math.max(10, 1800 / images[1].title.length)}
                  onComplete={nextSlide}
                  delay={3000}
                />
              </h1>
              <p className="text-gray-300 text-lg md:text-2xl drop-shadow-lg -mt-1">
                <TypeWriter
                  text={images[1].subtitle}
                  speed={Math.max(10, 1800 / images[1].subtitle.length)}
                />
              </p>
            </div>
          </div>
        )}

        {currentIndex === 2 && (
          <div className="absolute inset-0 flex items-center px-17 lg:px-20 z-30">
            <div className="relative max-w-[600px] mr-auto w-full text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-0 text-white drop-shadow-2xl">
                <TypeWriter
                  text={images[2].title}
                  speed={Math.max(10, 1800 / images[2].title.length)}
                  onComplete={nextSlide}
                  delay={3000}
                />
              </h1>
              <p className="text-gray-300 text-lg md:text-3xl lg:text-3xl drop-shadow-lg -mt-1">
                <TypeWriter
                  text={images[2].subtitle}
                  speed={Math.max(10, 1800 / images[2].subtitle.length)}
                />
              </p>
            </div>
          </div>
        )}

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-2xl text-white font-bold hover:text-black  transition"
        >
          &lt;
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-2xl text-white font-bold hover:text-black  transition"
        >
          &gt;
        </button>

        {/* DOTS */}
        <div className="absolute bottom-5 w-full flex justify-center space-x-2 z-40">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === i
                  ? "bg-green-400 scale-125 shadow-lg"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            ></div>
          ))}
        </div>
      </section>
      <Total />
      <section ref={aboutRef}>
  <AboutUs />
</section>
      {/* UPCOMING EVENTS SECTION */}
      
<section ref={eventsRef}>
  <Event />
</section>
<section ref={speakersRef}>
  <Spekers/> {/* your component showing speakers */}
</section>


<Footer ref={footerRef} />

      

    </div>
  );
}
