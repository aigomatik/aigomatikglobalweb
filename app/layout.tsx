import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
// import localFont from 'next/font/local'
import "@/public/styles/main.scss";

// const myFont = localFont({ src: './my-font.woff2' })
// const surt = localFont({
//   src: [
//     {
//       path: "./fonts/Surt-Normal-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./fonts/Surt-Normal-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "./fonts/Surt-Normal-Black.woff2",
//       weight: "900",
//       style: "normal",
//     },
//   ],
//   variable: "--font-surt-bold",
// });

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--inter",
  // fallback: [
  //   "-apple-system",
  //   "Segoe UI",
  //   "Roboto",
  //   "Ubuntu",
  //   "Fira Sans",
  //   "Arial",
  //   "sans-serif",
  // ],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
  // fallback: [
  //   "-apple-system",
  //   "Segoe UI",
  //   "Roboto",
  //   "Ubuntu",
  //   "Fira Sans",
  //   "Arial",
  //   "sans-serif",
  // ],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--mont",
  // fallback: [
  //   "-apple-system",
  //   "Segoe UI",
  //   "Roboto",
  //   "Ubuntu",
  //   "Fira Sans",
  //   "Arial",
  //   "sans-serif",
  // ],
});

export const metadata: Metadata = {
  title: "AIGOMATIK GLOBAL | Data Science and AI Product Development Company. ",
  description: "AIGOMATIK GLOBAL a top Data Science company in India, provides consulting and custom AI powered software development services. Focusing on Pattern Recognition, Face Detection and Face Recognition, Consumer Related Software, Web applications, Large Language Models and Computer Vision; we help businesses innovate with AI, enrich customer insights, and be more cost-effective.",
  keywords: [
    "Data Science",
    "Artificial",
    "Ai",
    "Ai models",
    "Deep Learning",
    "Company",
    "React",
    "nextjs",
    "nodejs",
    "face attendance software",
    "crm software",
    "LLM",
    "VILA",
  ],
  authors: [
    {
      name: "aigomatik global llp",
      url: "https://www.aigomatikglobal.com",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
