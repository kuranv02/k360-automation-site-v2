import "./globals.css";

export const metadata = {
  title: "K360 Automation",
  description:
    "Oklahoma industrial instrumentation, automation, and control solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden bg-[linear-gradient(135deg,#e3e5e8_0%,#c5c9cc_35%,#f4f5f6_55%,#bfc3c7_100%)] text-slate-950">
        <div
          className="pointer-events-none fixed inset-0 z-0 bg-[url('/k360-logo.png')] bg-center bg-no-repeat opacity-[0.05]"
          style={{ backgroundSize: "65%" }}
        />

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
