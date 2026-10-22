import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Angeline Mary Marchella — Research. Build. Create.",
  description:
    "AI Researcher · Software Engineer · Tech Founder. Turning Ideas into Intelligent Systems.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Angeline Mary Marchella",
    description: "Turning Ideas into Intelligent Systems.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Extensions may inject body attributes (e.g. cz-shortcut-listen) before hydration.
          Limit the exception to body itself; descendants retain normal mismatch checks. */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
