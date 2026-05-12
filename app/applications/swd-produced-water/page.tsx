export default function SWDProducedWaterPage() {
  return (
    <main className="min-h-screen bg-transparent text-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <a href="/" className="font-semibold text-orange-700 hover:underline">
          Back to Home
        </a>

        <h1 className="mt-6 text-5xl font-bold">SWD and Produced Water</h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
          K360 Automation supports saltwater disposal and produced water
          applications with instrumentation and control solutions for flow,
          pressure, tank monitoring, pump protection, valve automation, and
          water handling reliability.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Produced water flow measurement",
            "Injection pressure monitoring",
            "Pump suction / discharge instrumentation",
            "Tank level monitoring",
            "Valve automation and shutdown support",
            "Remote monitoring instrumentation",
            "Corrosion-tolerant instrumentation",
            "Hazardous-area instrumentation",
            "Replacement and crossover support",
          ].map((item) => (
            <div
              key={item}
              className="rounded-sm border border-slate-200 bg-white/85 p-5 shadow-sm backdrop-blur"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-sm border border-orange-200 bg-orange-50/85 p-8 shadow-lg backdrop-blur">
          <h2 className="text-3xl font-bold">
            Discuss an SWD or Produced Water Application
          </h2>

          <p className="mt-4 text-slate-700">
            Send line size, flow rates, injection pressure, tank details,
            hazardous-area requirements, or current instrumentation details.
          </p>

          <a
            href="mailto:sales@k360automation.com?subject=SWD and Produced Water Application"
            className="mt-6 inline-block rounded-sm bg-orange-600 px-7 py-4 font-semibold text-white hover:bg-orange-700"
          >
            Discuss with an Expert
          </a>
        </div>
      </div>
    </main>
  );
}