export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <a href="/" className="font-semibold text-orange-700 hover:underline">
          Back to Home
        </a>

        <div className="mt-8 max-w-5xl">
          <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-700">
            About K360 Automation
          </div>

          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            Industrial instrumentation, automation, measurement, and control
            support built around the application.
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
            K360 Automation is an Oklahoma City-based manufacturers’
            representative focused on industrial instrumentation, automation,
            measurement, and control solutions for oil & gas and industrial
            process applications.
          </p>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            We support end users, EPCs, OEMs, skid builders, and integrators
            with practical application guidance, replacement recommendations,
            technical troubleshooting support, and access to proven field
            instrumentation and automation products.
          </p>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Markets We Support</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Upstream Oil & Gas",
              "Midstream / Gathering",
              "Gas Processing",
              "Produced Water / SWD",
              "Pipeline",
              "Industrial Process",
              "OEM / Skid Builders",
              "Utilities / Water",
            ].map((item) => (
              <div
                key={item}
                className="rounded-sm border border-slate-200 bg-white/85 p-5 shadow-sm backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Capabilities</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Flow Measurement",
              "Pressure Instrumentation",
              "Level Measurement",
              "Temperature Measurement",
              "Control Valves & Automation",
              "Gas Detection",
              "Process Analyzers",
              "PLC / DCS Integration Support",
              "Measurement Packages",
            ].map((item) => (
              <div
                key={item}
                className="rounded-sm border border-slate-200 bg-white/85 p-5 shadow-sm backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">What We Help With</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Application-first product recommendations",
              "Replacement and crossover support",
              "Budgetary pricing and formal quotations",
              "Hazardous-area instrumentation selection",
              "Technical troubleshooting support",
              "Instrumentation modernization projects",
              "Manufacturer coordination",
              "Project specification support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-sm border border-orange-200 bg-orange-50/85 p-5 shadow-sm backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-sm border border-slate-200 bg-white/85 p-10 shadow-lg backdrop-blur">
          <h2 className="text-3xl font-bold">Office Location</h2>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Oklahoma City, Oklahoma
          </p>

          <p className="mt-3 text-lg leading-8 text-slate-700">
            Supporting customers throughout Oklahoma and surrounding industrial
            markets.
          </p>
        </section>

        <section className="mt-16 rounded-sm border border-orange-200 bg-orange-50/90 p-10 shadow-lg backdrop-blur">
          <h2 className="text-4xl font-bold">
            Need help with an application?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            Send a model number, datasheet, process conditions, project scope,
            or instrumentation challenge.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:sales@k360automation.com"
              className="rounded-sm bg-orange-600 px-7 py-4 text-center font-semibold text-white hover:bg-orange-700"
            >
              Discuss an Application
            </a>

            <a
              href="mailto:sales@k360automation.com?subject=Request for Quote"
              className="rounded-sm border border-orange-500 bg-white px-7 py-4 text-center font-semibold text-orange-700 hover:bg-orange-50"
            >
              Request a Quote
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}