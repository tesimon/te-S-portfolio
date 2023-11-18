import Nav from "@/components/Nav";
import "./global.css";

import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata = {
  title: "Te-S Portfolio",
  description:
    " Hi I'm Simon , a Frontend Web Developer Experienced in JavaScript React Redux Next.js and more....",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="">
      <body
        className={` ${inter.variable} ${montserrat.className} dark:galaxy dark:dark-theme  light-theme flex flex-col   scrollbar-track-transparent dark:scrollbar-thumb-zinc-200 scrollbar-thumb-purple-950 scrollbar-thumb-rounded-md scrollbar-thin`}
      >
        <div className="container flex flex-col max-w-[900px] items-center self-center mt-8 md:mt-20  ">
          <div className="extra-gradient flex justify-center" />
          <div className="w- w-full px-4 sm:px-0 self-center">
            <Nav />
          </div>

          <main className="  prose dark:prose-invert max-w-none px-6 lg:px-4 w-full mt-8 sm:mt-16 relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
