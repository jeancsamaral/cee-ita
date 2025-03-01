import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/markdown/docs');

export function getAllPosts(fields: string[] = []) {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs
    .filter((slug) => slug.endsWith('.mdx'))
    .map((slug) => getPostBySlug(slug.replace(/\.mdx$/, ''), fields))
    // Sort posts by order field
    .sort((post1, post2) => (post1.order > post2.order ? 1 : -1));

  return posts;
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string | number;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
} 