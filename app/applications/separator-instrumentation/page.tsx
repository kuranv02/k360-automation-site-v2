export default function SeparatorInstrumentationPage() {
  return (
    <main className="min-h-screen bg-transparent text-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <a href="/" className="text-orange-700 font-semibold hover:underline">
          Back to Home
        </a>

        <h1 className="mt-6 text-5xl font-bold">
          Separator Instrumentation
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
          K360 Automation supports separator applications with practical
          instrumentation solutions for pressure, level, interface detection,
          flow measurement, temperature, valve automation, and troubleshooting.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Pressure transmitters and gauges",
            "Radar and guided wave radar level",
            "Interface measurement solutions",
            "Gas / liquid flow measurement",
            "Temperature instrumentation",
            "Control valve automation packages",
            "Separator troubleshooting support",
            "Replacement and crossover recommendations",
            "Hazardous-area instrumentation",
          ].map((item) => (
            <div
              key={item}
              className="rounded-sm border border-slate-200 bg-white/85 p-5 shadow-sm backdrop-blur"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-sm border border-slate-200 bg-white/85 p-8 shadow-lg backdrop-blur">
          <h2 className="text-3xl font-bold">
            Engineering Resource
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Review technical background on separator monitoring, multi-interface
            measurement, separator instrumentation technologies, and control
            considerations.
          </p>

          <a
            href="/white-papers/separator-instrumentation-whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-sm bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700"
          >
            View Separator White Paper
          </a>
        </div>

        <div className="mt-12 rounded-sm border border-orange-200 bg-orange-50/85 p-8 shadow-lg backdrop-blur">
          <h2 className="text-3xl font-bold">
            Discuss a Separator Application
          </h2>

          <p className="mt-4 text-slate-700">
            Need help selecting instrumentation for separator pressure, level,
            interface, flow, or control applications?
          </p>

          <a
            href="mailto:sales@k360automation.com?subject=Separator Instrumentation Application"
            className="mt-6 inline-block rounded-sm bg-orange-600 px-7 py-4 font-semibold text-white hover:bg-orange-700"
          >
            Discuss with an Expert
          </a>
        </div>
      </div>
    </main>
  );
}
