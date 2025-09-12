import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";

const postsDir = path.join(process.cwd(), "src", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
};

export type Post = PostMeta & { contentHtml: string };

function fileToSlug(filename: string) {
  return filename.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

export function getAllSlugs(): string[] {
  return fs.readdirSync(postsDir).filter(f => f.endsWith(".md")).map(fileToSlug);
}

export function getSortedPostsMeta(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));
  const posts: PostMeta[] = files.map(file => {
    const full = path.join(postsDir, file);
    const raw = fs.readFileSync(full, "utf8");
    const { data } = matter(raw);
    const slug = fileToSlug(file);
    const fm = data as any;
    const date = fm.date ?? (file.match(/^(\d{4}-\d{2}-\d{2})-/)?.[1] ?? "");
    return {
      slug,
      title: fm.title ?? slug,
      date,
      description: fm.description ?? "",
    };
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const filename = fs
    .readdirSync(postsDir)
    .find(name => fileToSlug(name) === slug);
  if (!filename) throw new Error("Post not found: " + slug);

  const full = path.join(postsDir, filename);
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);

  const processed = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);

  const fm = data as any;
  const date = fm.date ?? (filename.match(/^(\d{4}-\d{2}-\d{2})-/)?.[1] ?? "");
  return {
    slug,
    title: fm.title ?? slug,
    date,
    description: fm.description ?? "",
    contentHtml: processed.toString(),
  };
}
