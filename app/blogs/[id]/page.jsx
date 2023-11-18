import formatedDate from "@/lib/formattedDate";
import { getPostByPath } from "@/lib/posts";
import "highlight.js/styles/shades-of-purple.css";
export const revalidate = 10;
export default async function Post({ params }) {
  const { id } = params;

  const post = await getPostByPath(`${id}.mdx`);
  const { content, date } = post;
  console.log(date);
  const dates = formatedDate(date);
  return (
    <>
      <p>{dates}</p>
      <article className="">{content}</article>
    </>
  );
}
