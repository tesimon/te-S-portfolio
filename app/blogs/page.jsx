import Article from "@/components/Article";
import { GetMetaPost } from "@/lib/posts";

const Blogs = async () => {
  const posts = await GetMetaPost();
  return posts.map((post) => <Article post={post} key={post.id} />);
};

export default Blogs;
