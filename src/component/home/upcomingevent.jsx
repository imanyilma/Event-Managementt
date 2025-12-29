import React from "react";

import ImageEvent1 from "../../assets/chatbot.png";
import ImageEvent2 from "../../assets/startup.jpg";
import ImageEvent3 from "../../assets/registration.jpg";
import ImageEvent4 from "../../assets/figma.jpg";
import ImageEvent5 from "../../assets/machine.png";
import ImageEvent6 from "../../assets/frelance.jpg";

const events = [
  {
    id: 1,
    tag: "LEARNING",
    tagColor: "bg-purple-500",
    title: "Chatbots And Virtual Assistants",
    date: "2025-11-01",
    meta: "12:00 PM • 120 ATTENDEES",
    image: ImageEvent1,
  },
  {
    id: 2,
    tag: "NEW GUESTS",
    tagColor: "bg-pink-500",
    title: "Startup Strategies & Founder's Insights",
    date: "2025-11-02",
    meta: "09:30 AM • ;70 ATTENDEES",
    image: ImageEvent2,
  },
  {
    id: 3,
    tag: "CONFERENCE",
    tagColor: "bg-blue-500",
    title: "Registration For Opening Workshop",
    date: "2025-11-03",
    meta: "All day • 450 ATTENDEES",
    image: ImageEvent3,
  },
  {
    id: 4,
    tag: "LEARNING",
    tagColor: "bg-purple-500",
    title: "Modern UI/UX Design Techniques & Tips",
    date: "2025-11-04",
    meta: "04:00 PM • 90 ATTENDEES",
    image: ImageEvent4,
  },
  {
    id: 5,
    tag: "LEARNING",
    tagColor: "bg-indigo-500",
    title: "Machine Learning Night Fastally Part 2",
    date: "2025-11-05",
    meta: "06:30 PM • 200 ATTENDEES",
    image: ImageEvent5,
  },
  {
    id: 6,
    tag: "NEW GUESTS",
    tagColor: "bg-blue-500",
    title: "how to Start and Grow Your Freelance Career",
    date: "2025-11-06",
    meta: "All day • 350 ATTENDEES",
    image: ImageEvent6,
  },
];

export default function EventsGrid() {
  return (
    <section className="w-full bg-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title Section - TOP POSITION */}
        <div className="text-center mb-7">
          <h1 className="text-3xl md:text-4xl font-bold text-white flex justify-start items-start ">
            Upcoming Events
          </h1>
         
        </div>

        {/* Events Grid - BELOW THE TITLE */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.id}
              className="bg-[#111827] rounded-3xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-52 object-cover"
                />
              </div>

              <div className="px-5 pb-5 pt-4">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 font-semibold text-[11px] text-white ${event.tagColor}`}
                  >
                    {event.tag}
                  </span>
                  <span>{event.date}</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-50 mb-2 leading-tight">
                  {event.title}
                </h3>

                <p className="text-xs text-slate-400">{event.meta}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Optional: View More Button at bottom */}
        
      </div>
    </section>
  );
}
