export default function FlowMeasurementPage() {
  return (
<main className="min-h-screen bg-transparent text-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <a href="/" className="text-orange-700 font-semibold">← Back to Home</a>

        <h1 className="mt-6 text-5xl font-bold">Flow Measurement</h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          K360 Automation supports Oklahoma oil & gas and industrial facilities with practical flow measurement recommendations, crossover support, and application guidance.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            "Magnetic Flow Meters",
            "Ultrasonic Flow Meters",
            "Thermal Mass Flow",
            "Vortex Flow Meters",
            "Differential Pressure Flow",
            "Clamp-on Ultrasonic Solutions"
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-orange-200 bg-orange-50 p-8">
          <h2 className="text-3xl font-bold">Need help with a flow application?</h2>
          <p className="mt-4 text-slate-700">
            Send process conditions, flow rates, pressure, temperature, or an existing model number.
          </p>

          <a
            href="mailto:sales@k360automation.com?subject=Flow Measurement Application"
            className="mt-6 inline-block rounded-2xl bg-orange-600 px-7 py-4 font-semibold text-white"
          >
            Discuss with an Expert
          </a>
        </div>
      </div>
    </main>
  );
}
