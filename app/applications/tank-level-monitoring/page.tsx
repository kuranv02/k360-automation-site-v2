export default function TankLevelMonitoringPage() {
  return (
    <main className="min-h-screen bg-transparent text-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <a href="/" className="font-semibold text-orange-700 hover:underline">
          Back to Home
        </a>

        <h1 className="mt-6 text-5xl font-bold">Tank Level Monitoring</h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
          K360 Automation supports tank monitoring applications with practical
          instrumentation solutions for level measurement, overfill protection,
          pressure monitoring, remote visibility, and hazardous-area reliability.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Radar level measurement",
            "Guided wave radar level",
            "Point level switches",
            "Tank pressure monitoring",
            "Overfill protection instrumentation",
            "Remote monitoring and telemetry support",
            "Interface level applications",
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
            Discuss a Tank Monitoring Application
          </h2>

          <p className="mt-4 text-slate-700">
            Send tank height, fluid type, pressure conditions, hazardous-area
            requirements, or existing instrumentation details.
          </p>

          <a
            href="mailto:sales@k360automation.com?subject=Tank Level Monitoring Application"
            className="mt-6 inline-block rounded-sm bg-orange-600 px-7 py-4 font-semibold text-white hover:bg-orange-700"
          >
            Discuss with an Expert
          </a>
        </div>
      </div>
    </main>
  );
}