const productLines = [
  ['Flow Measurement', 'Magnetic, ultrasonic, vortex, thermal mass, DP, and process measurement solutions for field-proven oil & gas applications.'],
  ['Pressure Instrumentation', 'Pressure gauges, transmitters, switches, diaphragm seals, thermowells, and engineered field assemblies.'],
  ['Level Measurement', 'Radar, guided wave radar, ultrasonic, displacer, interface level, and point level technologies.'],
  ['Temperature', 'RTDs, thermocouples, thermowells, temperature transmitters, and custom temperature assemblies.'],
  ['Control Valves', 'Control valves, automated valves, actuators, accessories, and application-specific valve packages.'],
  ['Process Control', 'Automation hardware, measurement packages, panels, analyzers, and PLC/DCS field integration support.'],
];

const manufacturers = ['Tektrol', 'Reotemp', 'Proflo Valves', 'Campbell Automation & Measurement'];
const applications = ['Separator instrumentation', 'SWD and produced water', 'Compressor stations', 'Gas processing plants', 'LACT and measurement skids', 'Pipeline pressure and flow', 'Tank level and overfill', 'Control valve replacement'];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-600 text-xl font-black text-white">K</div>
            <div>
              <div className="text-xl font-bold">K360 Automation</div>
              <div className="text-xs uppercase tracking-widest text-slate-500">Oklahoma Instrumentation • Automation • Control</div>
            </div>
          </div>
          <a href="mailto:sales@k360automation.com" className="hidden rounded-2xl bg-orange-600 px-5 py-3 font-semibold text-white md:inline-block">Request Support</a>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-800">Oklahoma manufacturers' representative for industrial process instrumentation</div>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">Automation support built for Oklahoma oil & gas.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">K360 represents proven manufacturers across flow, pressure, level, temperature, control valves, automation, and measurement — helping operators and engineers select equipment that works in the field, not just on paper.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:sales@k360automation.com" className="rounded-2xl bg-orange-600 px-7 py-4 text-center font-semibold text-white">Talk Through an Application</a>
              <a href="#solutions" className="rounded-2xl border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-900">View Product Areas</a>
            </div>
          </div>
          <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-xl">
            <div className="text-sm font-medium text-slate-500">Typical support areas</div>
            <div className="mt-1 text-2xl font-bold">From spec to startup</div>
            <div className="mt-6 space-y-3">
              {['New project specification', 'Replacement and crossover support', 'Control valve sizing guidance', 'Hazardous-area instrumentation', 'Measurement troubleshooting', 'Lead-time and budgetary quotes'].map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-stone-50 px-4 py-3 text-slate-700">{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="manufacturers" className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-6 text-sm font-semibold uppercase tracking-widest text-orange-700">Initial Manufacturer Line Card</div>
        <div className="grid gap-4 md:grid-cols-4">{manufacturers.map((name) => <div key={name} className="rounded-3xl border border-slate-200 bg-white p-6 text-center text-lg font-bold shadow-sm">{name}</div>)}</div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-700">Product Lines</div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Instrumentation and control solutions built around the application.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Whether you are replacing a failed field device, building a new skid, or standardizing across facilities, K360 helps narrow the options quickly and technically.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {productLines.map(([title, copy]) => <div key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{copy}</p></div>)}
        </div>
      </section>

      <section id="applications" className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-700">Applications We Support</div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Focused on Oklahoma oil & gas. Capable across industrial process.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Built for Oklahoma field conditions: wet gas, produced water, pressure swings, corrosive fluids, vibration, solids, and tight maintenance windows.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">{applications.map((item) => <div key={item} className="rounded-3xl border border-slate-200 bg-stone-50 p-5 font-semibold">{item}</div>)}</div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-orange-200 bg-orange-50 p-8 md:p-12">
          <h2 className="text-4xl font-bold">Need help selecting or replacing instrumentation?</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">Send process conditions, an existing model number, datasheet, photo, or application details. K360 will help identify a practical path forward.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row"><a className="rounded-2xl bg-orange-600 px-7 py-4 text-center font-semibold text-white" href="mailto:sales@k360automation.com">sales@k360automation.com</a><a className="rounded-2xl border border-slate-300 bg-white px-7 py-4 text-center font-semibold" href="tel:4050000000">405-000-0000</a></div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">© 2026 K360 Automation. Oklahoma industrial instrumentation, automation, valve, and process control representation.</footer>
    </main>
  );
}
