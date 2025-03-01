import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import Link from "next/link";
import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { Metadata } from "next";
import { NotionPage } from "@/types/notion";
import RetryButton from "@/components/Common/RetryButton";

// Função auxiliar para obter a URL da imagem
const getImageUrl = (post: any) => {
  try {
    // Tenta pegar a imagem de capa do Notion
    if (post.properties?.cover?.files[0]?.file?.url) {
      return post.properties.cover.files[0].file.url;
    }
    // Tenta pegar a imagem externa do Notion
    if (post.properties?.cover?.files[0]?.external?.url) {
      return post.properties.cover.files[0].external.url;
    }
    // Fallback para imagem default
    return "/images/blog/blog-03.jpg";
  } catch (error) {
    return "/images/blog/blog-03.jpg";
  }
};

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await fetchBySlug(params.slug);
  if (!post) {
    return <div>Post not found</div>
  }

  const blocks = await fetchPageBlocks(post.id);
  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...blocks);
  const coverImage = getImageUrl(post);

  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                {post.properties.Title.title[0]?.plain_text}
              </h1>
              
              <div className="mb-10 flex flex-wrap items-center justify-between border-b border-stroke pb-4 dark:border-stroke-dark">
                <div className="flex flex-wrap items-center">
                  <div className="mb-5 mr-10 flex items-center">
                    <div className="mr-4">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src="/images/blog/author-01.png"
                          alt="CEE ITA"
                          fill
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="mb-1 text-base text-body-color dark:text-body-color-dark">
                        Por CEE ITA
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-5 flex items-center">
                    <p className="mr-5 flex items-center text-base text-body-color dark:text-body-color-dark">
                      {new Date(post.created_time).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>

                <div className="mb-5">
                  {post.properties.Tags.multi_select.map((tag: any) => (
                    <TagButton key={tag.id} text={tag.name} />
                  ))}
                </div>
              </div>

              {/* Imagem principal do post */}
              <div className="mb-10 w-full overflow-hidden rounded-sm">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={coverImage}
                    alt={post.properties.Title.title[0]?.plain_text || "Post image"}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Conteúdo do post */}
              <div className="blog-details mb-12 prose prose-lg max-w-none dark:prose-invert prose-img:w-full prose-img:max-w-3xl prose-img:mx-auto prose-img:rounded-lg">
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
              </div>

              {/* Tags e compartilhamento */}
              <div className="items-center justify-between sm:flex">
                <div className="mb-5">
                  <h5 className="mb-3 text-sm font-medium text-body-color dark:text-body-color-dark">
                    Tags:
                  </h5>
                  <div className="flex items-center gap-2">
                    {post.properties.Tags.multi_select.map((tag: any) => (
                      <TagButton key={tag.id} text={tag.name} />
                    ))}
                  </div>
                </div>
                <div className="mb-5">
                  <h5 className="mb-3 text-sm font-medium text-body-color dark:text-body-color-dark sm:text-right">
                    Compartilhar:
                  </h5>
                  <div className="flex items-center sm:justify-end">
                    <SharePost />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
