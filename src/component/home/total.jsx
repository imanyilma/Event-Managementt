import { useEffect, useRef, useState } from "react";

export default function EventStats() {
 const stats = [
  {
    value: "120+",
    label: "Tech Events Hosted",
    description:
      "From webinars to discussion events, each tech event is organized with precision and innovation.",
    step: 3,
  },
  {
    value: "5000+",
    label: "Tech Enthusiasts Attended",
    description:
      "Attendees engaged through interactive sessions, workshops, and tech talks.",
    step: 80, // custom step for this stat
  },
  {
    value: "25+",
    label: "Expert Speakers",
    description:
      "Industry leaders and innovators sharing insights on the latest technologies.",
  },
];


  // Hook to animate number only when visible
  const useCountUp = (endValue, isVisible, step = 1) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) {
        setCount(0); // reset for re-count
        return;
      }

      const target = parseInt(endValue);
      const duration = 800; // total duration in ms
      const intervalTime = Math.max(20, (duration / (target / step))); // adjust timing based on step

      let current = 0;
      const timer = setInterval(() => {
        current += step;
        setCount(current >= target ? target : current);
      }, intervalTime);

      return () => clearInterval(timer);
    }, [endValue, isVisible, step]);

    return count;
  };

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black">
      {/* Top wave / curve effect */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-r from-black/70 via-green-400 to-gray-800 rounded-b-[50%]" />

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
            {stats.map((item) => {
              // Use step if defined, default 1
              const count = useCountUp(item.value, visible, item.step || 1);

              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center md:items-start"
                >
                  <div className="text-5xl font-semibold tracking-tight text-green-500">
                    {count}
                    {item.value.includes("+") && "+"}
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {item.label}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
