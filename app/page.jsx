import BlogPost from "@/components/BlogPost";
import Image from "next/image";
import Link from "next/link";
const Home = () => {
  return (
    <div className=" dark:font-light text-[15px] tracking-wide leading-7   mb-5">
      <div className="mr-3 ">
        <h2 className="mt-0">Hi there 👋</h2>
        <div className="flex gap-3 flex-col sm:flex-row  items-center">
          <p className=" max-extra-small:text-[13px] max-extra-small:leading-[30px] leading-9 self-start font-bold my-2 ">
            {`I'm Simon , a Frontend Web Developer Experienced in `}
            <br />
            <span className="text-white font-extrabold  bg-yellow-500 px-2 py-[7px] rounded-lg mr-1 ">
              JavaScript
            </span>
            <span className="text-black font-extrabold  bg-blue-400 px-2 py-[7px] rounded-lg mx-1">
              React
            </span>
            <span className="text-white font-extrabold  bg-purple-600 px-2 py-[7px] rounded-lg mx-1 ">
              Redux
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

        <div className="">
          <p className="mt-5">
            {`
            
            As a dedicated and growth-driven frontend web developer, I embarked on my coding journey in late 2020 with a primary focus on monetary aspirations. My early experiences as a part-time mobile technician during high school exposed me to the value of hard work and determination. However, as I delved deeper into the realm of coding, an unexpected transformation occurred—I found myself captivated by the art and science of web development, leading me to a profound realization that this newfound skill could become an integral part of my life. I am excited to continue my journey and contribute to the digital landscape, where I can continue to refine my skills, embrace new challenges, and make meaningful contributions to the world's narrative.
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

            <p className="mt-3  leading-8 tracking-[1px]">
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
