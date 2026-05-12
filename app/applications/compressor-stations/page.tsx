export default function CompressorStationsPage() {
  return (
    <>
      <main className="min-h-screen bg-transparent text-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <a href="/" className="font-semibold text-orange-700 hover:underline">
            Back to Home
          </a>

          <h1 className="mt-6 text-5xl font-bold">Compressor Stations</h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
            K360 Automation supports compressor station applications with
            instrumentation and control solutions for pressure, temperature,
            flow, valve automation, gas detection, and process monitoring.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Suction and discharge pressure measurement",
              "Temperature monitoring",
              "Gas flow measurement",
              "Control valves and actuation",
              "Gas detection and safety instrumentation",
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
              Discuss a Compressor Station Application
            </h2>

            <p className="mt-4 text-slate-700">
              Send process conditions, existing model numbers, datasheets, or
              project requirements.
            </p>

            <a
              href="mailto:sales@k360automation.com?subject=Compressor Station Application"
              className="mt-6 inline-block rounded-sm bg-orange-600 px-7 py-4 font-semibold text-white hover:bg-orange-700"
            >
              Discuss with an Expert
            </a>
          </div>
        </div>
      </main>
    </>
  );
}