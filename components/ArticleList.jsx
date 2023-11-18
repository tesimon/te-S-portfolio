"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
const ArticleList = ({ params, singlePost }) => {
  const router = useRouter();
  const backFunc = () => {
    router.back("/blogs");
  };

  return (
    <article className="">
      <div
        className=" flex justify-between items-center my-6 relative w-full "
        onClick={backFunc}
      >
        <div className="backBtn flex items-center justify-center">
          <Image
            src={"/assets/back-icon.png"}
            alt="back icon"
            width={40}
            height={40}
            className="cursor-pointer"
          />
          <p className="text-xs  text-zinc-600 font-serif dark:text-slate-300 dark:hover:text-orange-200 cursor-pointer">
            back
          </p>
        </div>
        <div className="deleteBtn">
          <button className="rounded-md bg-red-400 px-3  py-2 md:px-4 md:py-2 hover:bg-red-500 text-black text-xs ">
            Delete{" "}
          </button>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center">
        <h1 className="text-2xl font-mono text-zinc-700  dark:text-cyan-100 my-8">
          {singlePost?.title}
        </h1>
        <div className="image">
          <Image
            src={"/assets/code-icon.png"}
            alt="back icon"
            width={300}
            height={280}
            className="cursor-pointer"
          />
        </div>
        <p className="text-md text-zinc-600 dark:text-zinc-200 font-serif   my-2 tracking-tight leading-8 ">
          {singlePost?.content}
        </p>
      </div>
    </article>
  );
};

export default ArticleList;
