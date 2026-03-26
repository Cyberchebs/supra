import { useState, useEffect } from "react";

import { faqs } from "../../constants/qa";

export default function SupraFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className="min-h-screen  px-4 py-16"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      id="check"
    >
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-12 relative">
        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-600 rounded-full" />

        <p
          className="text-red-500 text-sm font-bold tracking-widest uppercase mb-2"
          style={{ letterSpacing: "0.25em" }}
        >
          🏁 Buyer's Guide
        </p>

        <h1
          className="text-white leading-none mb-3"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(52px, 10vw, 88px)",
            letterSpacing: "0.03em",
          }}
        >
          Toyota <span className="text-red-500">Supra</span>
          <br />
          <span className="text-zinc-400" style={{ fontSize: "0.55em" }}>
            Frequently Asked Questions
          </span>
        </h1>

        <div className="flex gap-1 mt-4">
          <div className="h-1 w-16 bg-red-600 rounded-sm" />
          <div className="h-1 w-6 bg-zinc-600 rounded-sm" />
          <div className="h-1 w-3 bg-zinc-700 rounded-sm" />
        </div>
      </div>

      {/* Accordion */}
      <div className="max-w-2xl mx-auto flex flex-col gap-2">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`rounded-lg border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "border-red-600 bg-zinc-900"
                  : "border-zinc-800 bg-zinc-900 hover:border-zinc-600"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center gap-4 px-5 py-4 text-left group"
              >
                <span
                  className={`shrink-0 w-9 h-9 flex items-center justify-center rounded text-sm font-bold transition-colors duration-300 ${
                    isOpen
                      ? "bg-red-600 text-white"
                      : "bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700"
                  }`}
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "16px", letterSpacing: "0.05em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  className={`flex-1 font-semibold leading-snug tracking-wide transition-colors duration-200 ${
                    isOpen ? "text-white" : "text-zinc-300 group-hover:text-white"
                  }`}
                  style={{ fontSize: "17px" }}
                >
                  {item.q}
                </span>

                <span
                  className={`shrink-0 w-7 h-7 flex items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "border-red-500 bg-red-600 text-white rotate-180"
                      : "border-zinc-700 text-zinc-500 group-hover:border-zinc-500 rotate-0"
                  }`}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              <div
                style={{
                  maxHeight: isOpen ? "300px" : "0px",
                  opacity: isOpen ? 1 : 0,
                  transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
                  overflow: "hidden",
                }}
              >
                <div className="px-5 pb-5 pl-[72px]">
                  <div className="border-l-2 border-red-600 pl-4">
                    <p className="text-zinc-400 leading-relaxed" style={{ fontSize: "15px", fontWeight: 400 }}>
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p
        className="text-center text-zinc-600 mt-10 text-sm tracking-widest uppercase"
      >
        Always get a professional pre-purchase inspection
      </p>
    </section>
  );
}