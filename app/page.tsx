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
  { title: "Separator instrumentation", slug: "separator-instrumentation" },
  { title: "SWD and produced water", slug: "swd-produced-water" },
  { title: "Compressor stations", slug: "compressor-stations" },
  { title: "Gas processing plants", slug: "gas-processing-plants" },
  { title: "LACT and measurement skids", slug: "lact-measurement-skids" },
  { title: "Pipeline pressure and flow", slug: "pipeline-pressure-flow" },
  { title: "Tank level monitoring", slug: "tank-level-monitoring" },
  { title: "Fuel gas systems", slug: "fuel-gas-systems" },
];

const manufacturers = [
  {
    name: "Rosemount",
    logo: "/manufacturers/rosemount.png",
    url: "https://www.emerson.com/en/measurement-instrumentation/rosemount",
  },
  {
    name: "Hobre",
    logo: "/manufacturers/hobre.png",
    url: "https://hobre.com/",
  },
  {
    name: "Teledyne",
    logo: "/manufacturers/teledyne.png",
    url: "https://www.teledynegasandflamedetection.com/en-us",
  },
  {
    name: "TASI",
    logo: "/manufacturers/tasi.png",
    url: "https://tasimeasurement.com/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="relative z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
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
                Instrumentation • Automation • Measurement • Controls
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-5 md:flex">
            <Link
              href="/about"
              className="font-semibold text-slate-700 hover:text-orange-700"
            >
              About
            </Link>

            <Link
              href="/request-quote"
              className="font-semibold text-slate-700 hover:text-orange-700"
            >
              Request Quote
            </Link>

            <a
              href="mailto:sales@k360automation.com"
              className="rounded-sm bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-700"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </header>

      <section className="relative z-10 border-b border-slate-200 bg-white/85 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex rounded-sm border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-800">
              Manufacturers&apos; representative for industrial instrumentation and control products
            </div>

            <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
              Automation, measurement and control built for the industrial space.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              K360 represents proven manufacturers across flow, pressure, level,
              temperature, control valves, automation, and measurement solutions.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/request-quote"
                className="rounded-sm bg-orange-600 px-7 py-4 text-center font-semibold text-white hover:bg-orange-700"
              >
                Request a Quote
              </Link>

              <a
                href="#solutions"
                className="rounded-sm border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-900 hover:bg-slate-50"
              >
                View Product Areas
              </a>
            </div>
          </div>

          <div className="rounded-sm border border-orange-100 bg-white/95 p-8 shadow-xl">
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

      <section id="solutions" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-700">
            Product Lines
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Instrumentation and control solutions targeted at your application.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {productPages.map(({ slug, title, description, subject }) => (
            <div
              key={slug}
              className="rounded-sm border border-slate-200 bg-white/95 p-7 shadow-sm backdrop-blur"
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
                  className="rounded-sm border border-orange-600 bg-white px-5 py-3 text-center font-semibold text-orange-700 hover:bg-orange-50"
                >
                  Discuss with an Expert
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 border-y border-slate-200 bg-white/85 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="mb-10 text-4xl font-bold">Applications We Support</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((item) => (
              <Link
                key={item.slug}
                href={`/applications/${item.slug}`}
                className="rounded-sm border border-slate-200 bg-stone-50/95 p-5 font-semibold transition hover:border-orange-300 hover:bg-orange-50"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

            <section className="relative z-10 border-y border-slate-200 bg-white/85 px-6 py-16 backdrop-blur">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-700">
              Manufacturers We Trust
            </div>

            <h2 className="text-4xl font-bold">
              Proven instrumentation, analytical, and automation manufacturers.
            </h2>
          </div>
          
          <p className="mt-3 text-xs text-slate-500">
  Manufacturer names, trademarks, and logos are the property of their respective
  owners and are used for identification purposes only. Product availability and
  representation may vary by application and territory.
</p>

          <div className="overflow-hidden">
            <div className="flex w-max animate-scroll gap-6">
              {[...manufacturers, ...manufacturers].map((manufacturer, index) => (
                <a
                  key={`${manufacturer.name}-${index}`}
                  href={manufacturer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-28 w-64 items-center justify-center rounded-sm border border-slate-200 bg-white/95 p-6 shadow-sm transition hover:border-orange-300 hover:shadow-md"
                >
                  <img
                    src={manufacturer.logo}
                    alt={manufacturer.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-sm border border-orange-200 bg-orange-50/95 p-8 shadow-lg md:p-12">
          <h2 className="text-4xl font-bold">
            Need help selecting or replacing instrumentation?
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Send process conditions, an existing model number, datasheet, photo,
            or application details.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/request-quote"
              className="rounded-sm bg-orange-600 px-7 py-4 text-center font-semibold text-white hover:bg-orange-700"
            >
              Request a Quote
            </Link>

            <a
              href="mailto:sales@k360automation.com"
              className="rounded-sm border border-orange-400 bg-white px-7 py-4 text-center font-semibold text-orange-600 hover:bg-orange-50"
            >
              Email Sales
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-slate-200 bg-white/90 px-6 py-8 text-center text-sm text-slate-600 backdrop-blur">
        <div className="mx-auto max-w-7xl space-y-2">
          <div className="font-semibold">K360 Automation © 2026</div>
          <div>Oklahoma City, Oklahoma</div>
          <div>
            <a href="tel:+14050000000" className="hover:text-orange-700">
              405-000-0000
            </a>
          </div>
          <div>
            <a
              href="mailto:sales@k360automation.com"
              className="hover:text-orange-700"
            >
              sales@k360automation.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
