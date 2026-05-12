export default function ProcessControlPage() {
  return (
    <main className="min-h-screen bg-transparent text-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <a href="/" className="text-orange-700 font-semibold">
          Back to Home
        </a>

        <h1 className="mt-6 text-5xl font-bold">Process Control</h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Practical automation support for oil & gas and industrial process
          facilities, from field instrumentation to control integration.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            "Automation Hardware",
            "PLC / DCS Integration",
            "Process Analyzers",
            "Gas Detection",
            "Control Panels",
            "Field Troubleshooting Support",
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
            Need help with an automation application?
          </h2>

          <p className="mt-4 text-slate-700">
            Send your application details, control requirements, instrumentation
            challenges, or project scope.
          </p>

          <a
            href="mailto:sales@k360automation.com?subject=Process Control Application"
            className="mt-6 inline-block rounded-sm bg-orange-600 px-7 py-4 font-semibold text-white hover:bg-orange-700"
          >
            Discuss with an Expert
          </a>
        </div>
      </div>
    </main>
  );
}
