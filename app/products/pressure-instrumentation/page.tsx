export default function PressureInstrumentationPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <a href="/" className="text-orange-700 font-semibold">← Back to Home</a>

        <h1 className="mt-6 text-5xl font-bold">Pressure Instrumentation</h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Pressure measurement solutions for demanding oilfield and industrial applications.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            "Pressure Transmitters",
            "Pressure Gauges",
            "Pressure Switches",
            "High Pressure Applications",
            "Diaphragm Seals",
            "Manifolds & Accessories"
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              {item}
            </div>
          ))}
        </div>

        <a
          href="mailto:sales@k360automation.com?subject=Pressure Instrumentation Application"
          className="mt-12 inline-block rounded-2xl bg-orange-600 px-7 py-4 font-semibold text-white"
        >
          Discuss with an Expert
        </a>
      </div>
    </main>
  );
}