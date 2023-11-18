import { GetMetaPost } from "@/lib/posts";
import Article from "./Article";
export default async function BlogPost() {
  const posts = await GetMetaPost();
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="prose dark:prose-invert">
          <Article post={post} isHome={true} />
        </div>
      ))}
    </>
  );
}
