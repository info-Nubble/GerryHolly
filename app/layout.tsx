
import "./globals.css";


export const metadata = {
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/brand/logo_256.png",
  },
  openGraph: {
    title: "Gerry Holly Lacrosse — Elite Off‑Season Training",
    description: "Specialized lacrosse training for middle and high school males — Exeter, NH.",
    images: ["/og-image.png"],
  },

  title: "Gerry Holly Lacrosse — Elite Off‑Season Training",
  description: "Specialized lacrosse training for middle and high school males — Exeter, NH.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased font-sans">{children}</body>
    </html>
  );
}
