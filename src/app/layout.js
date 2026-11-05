import SmoothScroll from "../components/providers/SmoothScroll";
import "./globals.css";


export const metadata = {
  title: "Mrinmoy Sana | Portfolio",
  description: "Senior Talent Acquisition Specialist & Tech Creator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}