import formatedDate from "@/lib/formattedDate";
import Link from "next/link";
const Article = ({ post, isHome }) => {
  const date = formatedDate(post.date);
  return (
    <>
      <div
        className={isHome && "border border-neutral-700 rounded-md px-2 py-3"}
      >
        <div className="flex justify-center flex-col items-start my-2">
          <Link href={`/blogs/${post.id}`}>
            <h1 className="text-zinc-600 dark:text-neutral-300 text-lg font-serif my-1 underline cursor-pointer">
              {post.title}
            </h1>
          </Link>
          <span className="text-gray-700 dark:text-neutral-500 text-sm  text-center">
            {date}
          </span>
        </div>
      </div>
    </>
  );
};

export default Article;
