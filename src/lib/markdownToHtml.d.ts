declare module '@/lib/markdownToHtml' {
  export default function markdownToHtml(markdown: string): Promise<string>;
} 