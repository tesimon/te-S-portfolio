import formatedDate from "@/lib/formattedDate";
import { getPostByPath } from "@/lib/posts";
import "highlight.js/styles/codepen-embed.css";
export const revalidate = 10;
export default async function Post({ params }) {
  const { id } = params;

  const post = await getPostByPath(`${id}.mdx`);
  const { content, date, author } = post;

  const dates = formatedDate(date);
  return (
    <>
      <div className="flex justify-between">
        <p>{dates}</p>
        <p>{author}</p>
      </div>
      <article className="prose-code:text-base">{content}</article>
    </>
  );
}
