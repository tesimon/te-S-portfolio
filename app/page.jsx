import BlogPost from "@/components/BlogPost";
import Image from "next/image";
import Link from "next/link";
const Home = () => {
  return (
    <div className=" text-[1.02rem] tracking-wide leading-8 mb-5 ">
      <div className="mr-3 ">
        <h2 className="m-0 ">Hello 👋</h2>
        <div className="flex gap-3 flex-col sm:flex-row  items-start justify-start">
          <p className="max-extra-small:text-[15px] max-extra-small:leading-[30px] leading-9 self-start font-bold my-2 ">
            {`I'm Simon , a Frontend Web Developer Experienced in `}
            <br />
            <span className="text-white font-extrabold  bg-yellow-500 px-2 py-[7px] rounded-lg mr-1 ">
              JavaScript
            </span>
            <span className="text-black font-extrabold  bg-blue-400 px-2 py-[7px] rounded-lg mx-1">
              React
            </span>
            <span className="text-white font-extrabold  bg-amber-600 px-2 py-[7px] rounded-lg mx-1 ">
              D3
            </span>
            <span className="text-white/90 bg-black px-2 py-[7px] rounded-lg mx-1">
              Next.js
            </span>
            <br /> and more....
          </p>
          <div className="flex flex-col justify-start items-end self-end mr-16">
            <Image
              src="/assets/simon.png"
              alt="logo"
              width={200}
              height={100}
              className="rounded-full border pt-1 dark:border-gray-500 border-neutral-900 dark:bg-transparent bg-gray-400"
            />
          </div>
        </div>

        <div>
          <p className="my-6">
            {`
            Driven front-end developer (under 4 years) passionate about crafting innovative solutions and building user-focused websites. Leverages strong teamwork, communication, and client-facing skills (from previous mobile technician role). Currently focused on building dynamic data visualizations using d3.js and JavaScript, with a preference for tackling unique logic challenges and minimizing library dependence for efficient site development.
            `}
          </p>
          <Link
            href="/info"
            className=" hover:bg-cyan-500 not-prose px-2 py-2 rounded-md font-bold bg-black text-white dark:bg-slate-100 dark:text-black"
          >
            {" "}
            About me{" "}
          </Link>
        </div>

        <div className="dark:text-cyan-100 not-prose my-5  text-[18px]flex gap-1 inline-flex items-center  ">
          <div>
            <span className="text-[18px]">
              I also keep up with the latest technologies.
            </span>
            <div className="bg-blue-500 dark:bg-green-300 h-[0.5px] w-[200px] text-center rounded-sm " />

            <p className="mt-3 leading-8 tracking-[1px]">
              {`
              Join me as I share what I've learned, explore best practices, and stay updated with the latest tech trends. Let's make web development simple and insightful together!`}
            </p>
          </div>
        </div>
        <BlogPost />
        <Link
          className=" not-prose text-base  font-bold hover:text-purple-500  hover:underline "
          href={"/blogs"}
        >
          Explore My Blogs
        </Link>
      </div>
    </div>
  );
};

export default Home;
