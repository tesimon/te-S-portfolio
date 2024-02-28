import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { fixIndentation } from "./fixIndentation";
export const getPostByPath = async (path) => {
  const res = await fetch(
    `https://raw.githubusercontent.com/tesimon/blogs/main/${path}`,
    {
      next: {
        revalidate: 60, // Revalidate in 60 seconds
      },

      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  if (!res.ok) {
    throw new Error("failed to fetch");
  }
  const rawMdx = await res.text();
  const fixedMdx = fixIndentation(rawMdx);

  const { frontmatter, content } = await compileMDX({
    source: fixedMdx,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ],
      },
    },
  });
  const id = path.replace(/\.mdx$/, "");

  const blogPost = {
    id,
    title: frontmatter.title,
    date: frontmatter.date,
    content: content,
    author: frontmatter.author,
  };
  return blogPost;
};

export async function GetMetaPost() {
  const res = await fetch(
    "https://api.github.com/repos/tesimon/blogs/git/trees/main?recursive=1",

    {
      next: {
        revalidate: 60, // Revalidate in 60 seconds
      },
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  if (!res.ok) {
    throw new Error("failed to fetch");
  }
  const githubRepoFile = await res.json();
  const files = githubRepoFile.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));
  const posts = [];
  for (const file of files) {
    const post = await getPostByPath(file);
    if (post) posts.push(post);
  }
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
