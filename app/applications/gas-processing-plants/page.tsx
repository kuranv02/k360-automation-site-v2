export default function GasProcessingPlantsPage() {
  return (
    <main className="min-h-screen bg-transparent text-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <a href="/" className="font-semibold text-orange-700 hover:underline">
          Back to Home
        </a>

        <h1 className="mt-6 text-5xl font-bold">Gas Processing Plants</h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
          K360 Automation supports gas processing facilities with instrumentation,
          analytical, automation, and control solutions for measurement,
          separation, treatment, compression, and plant reliability.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Gas flow measurement",
            "Pressure and differential pressure measurement",
            "Temperature instrumentation",
            "Separator and vessel level measurement",
            "Control valves and automated valve packages",
            "Gas detection and safety systems",
            "Process analyzers and sample systems",
            "PLC / DCS integration support",
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
            Discuss a Gas Processing Application
          </h2>

          <p className="mt-4 text-slate-700">
            Send process conditions, P&amp;IDs, analyzer requirements, existing
            model numbers, or project details for review.
          </p>

          <a
            href="mailto:sales@k360automation.com?subject=Gas Processing Plant Application"
            className="mt-6 inline-block rounded-sm bg-orange-600 px-7 py-4 font-semibold text-white hover:bg-orange-700"
          >
            Discuss with an Expert
          </a>
        </div>
      </div>
    </main>
  );
}