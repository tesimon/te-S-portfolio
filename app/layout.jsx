import Nav from "@/components/Nav";
import "./global.css";
import { Inter, Crimson_Text } from "next/font/google";

const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  fallback: "mono",
});

export const metadata = {
  title: "Te-S Portfolio",
  description:
    " Hi I'm Simon , a Frontend Web Developer Experienced in JavaScript React d3, Next.js and more....",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={` ${crimsonText.className} dark:galaxy dark:dark-theme  light-theme flex flex-col overflow-y-scroll `}
      >
        <div className="container flex flex-col max-w-[900px] items-center self-center mt-4 md:mt-10  ">
          <div className="extra-gradient flex justify-center" />
          <div className=" w-full px-2 sm:px-0 self-center">
            <Nav />
          </div>
          <main className=" prose dark:prose-invert max-w-none px-6 lg:px-4 w-full mt-8 sm:mt-16 relative self-center  ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
