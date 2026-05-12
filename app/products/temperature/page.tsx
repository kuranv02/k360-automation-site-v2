import React from "react";

export default function TemperaturePage() {
  return React.createElement(
    "main",
    { className: "min-h-screen bg-stone-50 text-slate-950" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-5xl px-6 py-20" },
      React.createElement(
        "a",
        {
          href: "/",
          className: "text-orange-700 font-semibold"
        },
        "Back to Home"
      ),
      React.createElement(
        "h1",
        { className: "mt-6 text-5xl font-bold" },
        "Temperature"
      ),
      React.createElement(
        "p",
        { className: "mt-6 text-lg leading-8 text-slate-600" },
        "K360 Automation supports Oklahoma oil & gas and industrial facilities with practical temperature measurement solutions."
      )
    )
  );
}