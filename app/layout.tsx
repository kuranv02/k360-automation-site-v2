import './globals.css';

export const metadata = {
  title: 'K360 Automation | Oklahoma Instrumentation & Automation',
  description: 'Oklahoma industrial instrumentation, automation, valve, and process control representation for oil and gas applications.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
