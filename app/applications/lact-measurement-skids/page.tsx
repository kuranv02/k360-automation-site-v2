export default function LactMeasurementSkidsPage() {
  return (
    <main className="min-h-screen bg-transparent text-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <a href="/" className="font-semibold text-orange-700 hover:underline">
          Back to Home
        </a>

        <h1 className="mt-6 text-5xl font-bold">LACT and Measurement Skids</h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
          K360 Automation supports LACT units and measurement skids with
          instrumentation and control solutions for flow measurement, pressure,
          temperature, sampling, valve automation, and skid reliability.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Custody-adjacent flow measurement",
            "Pressure and temperature instrumentation",
            "Control valves and automated valves",
            "Sampling and proving support",
            "Meter skid instrumentation",
            "Batch and transfer measurement",
            "Replacement and crossover support",
            "Hazardous-area instrumentation",
            "Startup and troubleshooting support",
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
            Discuss a LACT or Measurement Skid Application
          </h2>

          <p className="mt-4 text-slate-700">
            Send your skid details, process conditions, existing model numbers,
            meter requirements, or project scope.
          </p>

          <a
            href="mailto:sales@k360automation.com?subject=LACT and Measurement Skid Application"
            className="mt-6 inline-block rounded-sm bg-orange-600 px-7 py-4 font-semibold text-white hover:bg-orange-700"
          >
            Discuss with an Expert
          </a>
        </div>
      </div>
    </main>
  );
}