import { fetchPages } from "@/lib/notion";
import BlogClient from "./BlogClient";

export default async function BlogList() {
  const posts = await fetchPages();
  return <BlogClient initialPosts={posts} />;
} 