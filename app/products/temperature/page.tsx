export default function TemperaturePage() {
  return (
    <main className="min-h-screen bg-transparent text-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <a href="/" className="text-orange-700 font-semibold">
          Back to Home
        </a>

        <h1 className="mt-6 text-5xl font-bold">Temperature</h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          K360 Automation supports Oklahoma oil & gas and industrial facilities
          with practical temperature measurement solutions for demanding process
          applications.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            "RTDs",
            "Thermocouples",
            "Temperature Transmitters",
            "Thermowells",
            "Explosion-Proof Assemblies",
            "Custom Temperature Assemblies",
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
            Need help with a temperature application?
          </h2>

          <p className="mt-4 text-slate-700">
            Send process temperatures, pressure, insertion length, hazardous
            area requirements, or an existing model number.
          </p>

          <a
            href="mailto:sales@k360automation.com?subject=Temperature Application"
            className="mt-6 inline-block rounded-sm bg-orange-600 px-7 py-4 font-semibold text-white hover:bg-orange-700"
          >
            Discuss with an Expert
          </a>
        </div>
      </div>
    </main>
  );
}
