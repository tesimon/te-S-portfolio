import BlogPost from "@/components/BlogPost";
import Image from "next/image";
import Link from "next/link";
const Home = () => {
  return (
    <div className="my-10">
      <div className="mr-3 ">
        <h2 className="m-0 ">Hi 👋</h2>
        <div className="flex gap-3 flex-col sm:flex-row  items-start justify-start">
          <p className="max-extra-small:text-[15px] max-extra-small:leading-[30px] leading-9 self-start font-bold my-2 text-lg ">
            {`I'm Simon , a Frontend Web Developer Experienced in `}
            <br />
            <span className="text-blue-900 font-extrabold  bg-yellow-500/95 px-2 py-[7px] rounded-lg mr-1 ">
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
          <div className="flex flex-col justify-start items-end self-center ">
            <Image
              src="/assets/my-profile.png"
              alt="logo"
              width={220}
              height={80}
              className="rounded-full border px-2 pt-1 dark:border-gray-500 border-neutral-900 dark:bg-transparent bg-gray-400  "
            />
          </div>
        </div>

        <div>
          <p className="my-6 text-[17px] tracking-[1.1px] leading-8  dark:text-slate-300">
            {`
            Driven front-end developer (under 4 years) passionate about crafting innovative solutions and building user-focused websites. Leverages strong teamwork, communication, and client-facing skills (from previous mobile technician role) . 
             Currently : focused on building creative, dynamic web apps and data visualizations using JavaScript.
             
             I'm eager to build upon my experiences, collaborate with fellow developers, and tackle projects that challenge me to grow.
            `}
          </p>
          <Link
            href="/info"
            className=" hover:ring-1 px-2 py-2 rounded-md  italic"
          >
            {" "}
            More info..{" "}
          </Link>
        </div>

        <div className="dark:text-cyan-100 not-prose my-5 text-[18px] gap-1 inline-flex items-center  ">
          <div>
            <span className="text-[18px]">
              I also keep up with the latest technologies.
            </span>
            <div className="bg-blue-900 dark:bg-green-300 h-[0.4px] w-[200px] text-center rounded-sm " />

            <p className="mt-3 leading-8 tracking-[1px]">
              {`
              Join me as I share what I've learned, explore best practices, and stay updated with the latest tech trends. Let's make web development simple and insightful together!`}
            </p>
          </div>
        </div>
        <BlogPost />
        <Link
          className="text-base hover:ring-1 p-2 rounded-md "
          href={"/blogs"}
        >
          Explore My Blogs
        </Link>
      </div>
    </div>
  );
};

export default Home;
