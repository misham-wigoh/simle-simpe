"use client";

import Image from "next/image";

const schedule = [
  { day: "Monday", hours: "8:00 AM – 5:00 PM", closed: false },
  { day: "Tuesday", hours: "8:00 AM – 5:00 PM", closed: false },
  { day: "Wednesday", hours: "8:00 AM – 5:00 PM", closed: false },
  { day: "Thursday", hours: "8:00 AM – 5:00 PM", closed: false },
  { day: "Friday", hours: "8:00 AM – 1:00 PM", closed: false },
  { day: "Saturday", hours: "Closed", closed: true },
  { day: "Sunday", hours: "Closed", closed: true },
];

export function ContactHours() {
  return (
    <section className="w-full bg-white text-slate-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[76rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Schedule */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2
                data-animate-text
                className="font-heading text-3xl sm:text-4xl text-slate-900 font-normal leading-tight"
              >
                Office Hours
              </h2>
              <p data-animate-text className="mt-2 text-sm text-slate-500">
                Appointments available by appointment:
              </p>
            </div>

            {/* Schedule List */}
            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {schedule.map((item) => (
                <div
                  key={item.day}
                  className="py-3.5 flex items-center justify-between text-sm sm:text-base"
                >
                  <span className={`font-medium ${item.closed ? "text-slate-400" : "text-slate-800"}`}>
                    {item.day}:
                  </span>
                  <span
                    className={
                      item.closed
                        ? "text-[#3b5bff] font-semibold"
                        : "text-slate-700 font-normal"
                    }
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 pt-1">
              Have a dental emergency? Please call us directly at{" "}
              <a href="tel:(651)439-8085" className="text-[#14306b] font-semibold underline">
                (651) 439-8085
              </a>{" "}
              as early in the day as possible so we can coordinate same-day care.
            </p>
          </div>

          {/* Right Column: Man pointing at watch image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white">
              <Image
                src="/images/stock/contact-hours-man.jpg"
                alt="On-time friendly appointments at Simple Smile Endodontics"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 440px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
