import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "High Point Properties | Premium Landscaping & Property Services | New Brighton, MN",
  description:
    "High Point Properties is a locally owned landscaping and property services company serving New Brighton and the Twin Cities north metro. Expert lawn care, hardscaping, snow removal, and more.",
  keywords:
    "landscaping New Brighton MN, lawn care twin cities, hardscaping Minnesota, snow removal north metro, landscape design Arden Hills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
