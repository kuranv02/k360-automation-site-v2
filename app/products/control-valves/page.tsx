export default function ControlValvesPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <a href="/" className="text-orange-700 font-semibold">
          ← Back to Home
        </a>

        <h1 className="mt-6 text-5xl font-bold">Control Valves</h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Control valve solutions for pressure reduction, flow control,
          severe-service applications, and automated shutdown systems.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            "Globe Control Valves",
            "Segmented V-Ball Valves",
            "Butterfly Valves",
            "Electric Actuation",
            "Pneumatic Actuation",
            "Sizing & Replacement Support"
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-orange-200 bg-orange-50 p-8">
          <h2 className="text-3xl font-bold">
            Need help sizing or replacing a valve?
          </h2>

          <p className="mt-4 text-slate-700">
            Send process pressure, temperature, flow rates, fluid composition,
            or an existing valve model number.
          </p>

          <a
            href="mailto:sales@k360automation.com?subject=Control Valve Application"
            className="mt-6 inline-block rounded-2xl bg-orange-600 px-7 py-4 font-semibold text-white"
          >
            Discuss with an Expert
          </a>
        </div>
      </div>
    </main>
  );
}