// import SmoothScroll from "../components/providers/SmoothScroll";
// import "./globals.css";


// export const metadata = {
//   title: "Mrinmoy Sana | Portfolio",
//   description: "Senior Talent Acquisition Specialist & Tech Creator",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className="dark">
//       <body className="bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
//         <SmoothScroll>{children}</SmoothScroll>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

// আপনার সাইট ভেরসেল (Vercel) বা কাস্টম ডোমেইনে লাইভ করার পর এই লিংকটি পরিবর্তন করে নেবেন
const siteUrl = "https://mrinmoy-portfolio.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mrinmoy Sana | Sr. Talent Acquisition Executive & Full-Stack Developer",
    template: "%s | Mrinmoy Sana",
  },
  description:
    "Official portfolio of Mrinmoy Sana — Senior Talent Acquisition Executive at eNexaHire and Full-Stack Web Developer specializing in Next.js, React.js, Node.js, MongoDB, and Technical Recruiting.",
  keywords: [
    "Mrinmoy Sana",
    "Mrinmoy Sana Portfolio",
    "Sr. Talent Acquisition Executive",
    "eNexaHire",
    "Technical Recruiter India",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer Kolkata",
    "PromptVerse",
    "DriveFleet",
  ],
  authors: [{ name: "Mrinmoy Sana", url: siteUrl }],
  creator: "Mrinmoy Sana",
  publisher: "Mrinmoy Sana",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "Mrinmoy Sana | Sr. Talent Acquisition Executive & Full-Stack Developer",
    description:
      "Building digital experiences with Next.js & React, and connecting top-tier talent with growth-focused organizations at eNexaHire.",
    siteName: "Mrinmoy Sana Portfolio",
    images: [
      {
        url: "/og-image.png", // public/og-image.png ফাইলে আপনার হিরো সেকশনের স্ক্রিনশট রাখবেন
        width: 1200,
        height: 630,
        alt: "Mrinmoy Sana — Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mrinmoy Sana | Talent Acquisition & Full-Stack Developer",
    description:
      "Sr. Talent Acquisition Executive @ eNexaHire & Full-Stack Developer (Next.js / React).",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  // Google Knowledge Graph & Rich Results-এর জন্য JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mrinmoy Sana",
    url: siteUrl,
    image: `${siteUrl}/my-avatar.png`,
    jobTitle: [
      "Senior Talent Acquisition Executive",
      "Full-Stack Web Developer",
    ],
    worksFor: {
      "@type": "Organization",
      name: "eNexaHire",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "West Bengal State University",
      },
    ],
    knowsAbout: [
      "Next.js",
      "React.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Technical Recruiting",
      "End-to-End Talent Acquisition",
      "Employer Branding",
      "Graphic Design",
    ],
    sameAs: [
      "https://github.com/mrinmoysana7",
      "https://linkedin.com", // এখানে আপনার আসল LinkedIn প্রোফাইল লিংক বসাবেন
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#060918] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}