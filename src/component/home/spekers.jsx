// EventSpeakers.jsx
import Image1 from "../../assets/spe1.jpg";
import Image2 from "../../assets/spe2.jpg";
import Image3 from "../../assets/spe3.jpg";
import Image4 from "../../assets/spe4.jpg";

const speakers = [
  {
    name: "Mensure mohammed",
    title: "ui/ux designer",
    image: Image3,
  },
  {
    name: "Yusuf Abdushkure",
    title: "Frontend Developer",
    image: Image2,
  },
  {
    name: "Kalid sherfu",
    title: "Brand Strategist",
    image: Image4,
  },
  {
    name: "Iman yilma",
    title: "Event Producer",
    image: Image1,
  },
];

export default function EventSpeakers() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-500 uppercase">
            Listen to the
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-green-500">
            Event Speakers
          </h2>
          <div className="mt-3 flex justify-center">
            <span className="h-[2px] w-16 bg-green-400 rounded-full" />
          </div>
        </div>

        {/* Speaker Avatars */}
        <div className="grid gap-10 grid-cols-4">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="flex flex-col items-center text-center"
            >
              <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-gray-900 shadow-md shadow-green-500">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-100">
                {speaker.name}
              </p>
              <p className="mt-1 text-xs text-slate-500">{speaker.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
