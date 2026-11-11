import "./globals.css";
import { profile, about } from "@/content/site";

export const metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: about.short,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bowlby+One&family=Caveat:wght@500;700&family=Special+Elite&family=DM+Sans:wght@400;500;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
