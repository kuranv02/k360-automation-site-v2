export default function FuelGasSystemsPage() {
  return (
    <main className="min-h-screen bg-transparent text-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <a href="/" className="font-semibold text-orange-700 hover:underline">
          Back to Home
        </a>

        <h1 className="mt-6 text-5xl font-bold">Fuel Gas Systems</h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
          K360 Automation supports fuel gas systems with instrumentation and
          control solutions for pressure regulation, flow measurement,
          temperature monitoring, filtration, shutdown protection, and valve
          automation.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Fuel gas pressure measurement",
            "Gas flow measurement",
            "Temperature monitoring",
            "Regulators and control valves",
            "Shutdown valves and actuation",
            "Filtration and conditioning instrumentation",
            "Low pressure / high pressure protection",
            "Replacement and crossover support",
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

        <div className="mt-12 rounded-sm border border-orange-200 bg-orange-50/85 p-8 shadow-lg backdrop-blur">
          <h2 className="text-3xl font-bold">
            Discuss a Fuel Gas Application
          </h2>

          <p className="mt-4 text-slate-700">
            Send fuel gas conditions, existing model numbers, pressure
            requirements, flow rates, or project details.
          </p>

          <a
            href="mailto:sales@k360automation.com?subject=Fuel Gas Systems Application"
            className="mt-6 inline-block rounded-sm bg-orange-600 px-7 py-4 font-semibold text-white hover:bg-orange-700"
          >
            Discuss with an Expert
          </a>
        </div>
      </div>
    </main>
  );
}