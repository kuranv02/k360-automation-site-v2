import Link from "next/link";

const productPages = [
  {
    slug: "flow-measurement",
    title: "Flow Measurement",
    description:
      "Magnetic, ultrasonic, vortex, thermal mass, DP, and process measurement solutions for oil & gas and industrial applications.",
    subject: "Flow Measurement Application",
  },
  {
    slug: "pressure-instrumentation",
    title: "Pressure Instrumentation",
    description:
      "Transmitters, gauges, switches, diaphragm seals, and field-ready pressure solutions.",
    subject: "Pressure Instrumentation Application",
  },
  {
    slug: "level-measurement",
    title: "Level Measurement",
    description:
      "Radar, ultrasonic, guided wave radar, interface, and point level technologies.",
    subject: "Level Measurement Application",
  },
  {
    slug: "temperature",
    title: "Temperature",
    description:
      "RTDs, thermocouples, thermowells, transmitters, and custom temperature assemblies.",
    subject: "Temperature Application",
  },
  {
    slug: "control-valves",
    title: "Control Valves",
    description:
      "Control valves, actuators, automated packages, and severe-service valve solutions.",
    subject: "Control Valve Application",
  },
  {
    slug: "process-control",
    title: "Process Control",
    description:
      "Automation hardware, analyzers, panels, PLC/DCS integration, and process support.",
    subject: "Process Control Application",
  },
];

const applications = [
  "Separator instrumentation",
  "SWD and produced water",
  "Compressor stations",
  "Gas processing plants",
  "LACT and measurement skids",
  "Pipeline pressure and flow",
  "Tank level monitoring",
  "Fuel gas systems",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src="/k360-logo.png"
              alt="K360 Automation"
              className="h-20 w-auto"
            />

            <div>
              <div className="text-xl font-bold">K360 Automation</div>
              <div className="text-xs uppercase tracking-widest text-slate-500">
                Oklahoma Instrumentation • Automation • Controls
              </div>
            </div>
          </div>

          <a
            href="mailto:sales@k360automation.com"
            className="hidden rounded-md bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-700 md:inline-block"
          >
            Contact Sales
          </a>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex rounded-sm border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-800">
              Oklahoma manufacturers' representative for industrial instrumentation
            </div>

            <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
              Automation support built for Oklahoma oil & gas.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              K360 represents proven manufacturers across flow, pressure, level,
              temperature, control valves, automation, and measurement solutions.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:sales@k360automation.com"
                className="rounded-sm bg-orange-600 px-7 py-4 text-center font-semibold text-white hover:bg-orange-700"
              >
                Talk Through an Application
              </a>

              <a
                href="#solutions"
                className="rounded-sm border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-900 hover:bg-slate-50"
              >
                View Product Areas
              </a>
            </div>
          </div>

          <div className="rounded-sm border border-orange-100 bg-white p-8 shadow-xl">
            <div className="text-sm font-medium text-slate-500">
              Typical support areas
            </div>

            <div className="mt-1 text-2xl font-bold">From spec to startup</div>

            <div className="mt-6 space-y-3">
              {[
                "New project specification",
                "Replacement and crossover support",
                "Control valve sizing guidance",
                "Hazardous-area instrumentation",
                "Measurement troubleshooting",
                "Lead-time and budgetary pricing",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-orange-600"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-700">
            Product Lines
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Instrumentation and control solutions built around the application.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {productPages.map(({ slug, title, description, subject }) => (
            <div
              key={slug}
              className="rounded-sm border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-lg font-bold">{title}</h3>

              <p className="mt-3 text-slate-600">{description}</p>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href={`/products/${slug}`}
                  className="rounded-sm bg-orange-600 px-5 py-3 text-center font-semibold text-white hover:bg-orange-700"
                >
                  Learn More
                </Link>

                <a
                  href={`mailto:sales@k360automation.com?subject=${encodeURIComponent(
                    subject
                  )}`}
                  className="rounded-sm border border-orange-600 px-5 py-3 text-center font-semibold text-orange-700 hover:bg-orange-50"
                >
                  Discuss with an Expert
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10">
            <h2 className="text-4xl font-bold">Applications We Support</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((item) => (
              <div
                key={item}
                className="rounded-sm border border-slate-200 bg-stone-50 p-5 font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-sm border border-orange-200 bg-orange-50 p-8 md:p-12">
          <h2 className="text-4xl font-bold">
            Need help selecting or replacing instrumentation?
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Send process conditions, an existing model number, datasheet, photo,
            or application details.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:sales@k360automation.com"
              className="rounded-sm bg-orange-600 px-7 py-4 text-center font-semibold text-white hover:bg-orange-700"
            >
              Email Sales
            </a>

            <a
              href="tel:+14050000000"
              className="rounded-sm border border-orange-400 bg-white px-7 py-4 text-center font-semibold text-orange-600 hover:bg-orange-50"
            >
              405-000-0000
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        © 2026 K360 Automation
      </footer>
    </main>
  );
}
