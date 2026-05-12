export default function TemperaturePage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <a href="/" className="text-orange-700 font-semibold">
          ← Back to Home
        </a>

        <h1 className="mt-6 text-5xl font-bold">Temperature</h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Temperature measurement solutions for process monitoring, critical
          control loops, and harsh industrial environments.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            "RTDs",
            "Thermocouples",
            "Temperature Transmitters",
            "Thermowells",
            "Explosion-Proof Assemblies",
            "Custom Temperature Assemblies"
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border