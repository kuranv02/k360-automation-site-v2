"use client";

import { useState } from "react";

export default function RequestQuotePage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [modelCode, setModelCode] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  function submitRequest() {
    const subject = encodeURIComponent(`RFQ Request - ${company || name || "K360 Website"}`);

    const body = encodeURIComponent(
`Request for Quote

Contact Information
Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}

Model Code / Existing Part Number
${modelCode}

Additional Information
${additionalInfo}
`
    );

    window.location.href = `mailto:sales@k360automation.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-transparent text-slate-950">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <a href="/" className="font-semibold text-orange-700 hover:underline">
          Back to Home
        </a>

        <h1 className="mt-6 text-5xl font-bold">Request a Quote</h1>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          Send us your contact information, model code, existing part number, or
          application details. K360 Automation will review the request and follow up.
        </p>

        <div className="mt-10 space-y-5 rounded-sm border border-slate-200 bg-white/90 p-8 shadow-lg backdrop-blur">
          <input
            className="w-full rounded-sm border border-slate-300 px-4 py-3"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full rounded-sm border border-slate-300 px-4 py-3"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <input
            className="w-full rounded-sm border border-slate-300 px-4 py-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full rounded-sm border border-slate-300 px-4 py-3"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            className="w-full rounded-sm border border-slate-300 px-4 py-3"
            placeholder="Model Code / Existing Part Number"
            value={modelCode}
            onChange={(e) => setModelCode(e.target.value)}
          />

          <textarea
            className="w-full rounded-sm border border-slate-300 px-4 py-3"
            rows={8}
            placeholder="Additional information: process conditions, application, quantity, required approval, pressure, temperature, flow rate, materials, end user, etc."
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          />

          <button
            onClick={submitRequest}
            className="w-full rounded-sm bg-orange-600 px-7 py-4 font-semibold text-white hover:bg-orange-700"
          >
            Generate RFQ Email
          </button>
        </div>
      </div>
    </main>
  );
}
