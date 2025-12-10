import React from "react";
import { useEvents } from "../context/EventsContext";

export default function EventsGrid() {
  const { events } = useEvents();

  return (
    <section className="w-full bg-black py-12 px-4">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-white mb-7">Upcoming Events</h1>

        {events.length === 0 ? (
          <p className="text-gray-400">No upcoming events yet.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.id}
                className="bg-[#111827] rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src={event.image}
                  alt={event.eventName}
                  className="w-full h-52 object-cover"
                />

                <div className="px-5 pb-5 pt-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="inline-flex items-center rounded-full px-3 py-1 font-semibold bg-green-600 text-white text-[11px]">
                      USER EVENT
                    </span>
                    <span>{event.date}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {event.eventName}
                  </h3>

                  <p className="text-xs text-slate-400">
                    {event.time} • {event.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
