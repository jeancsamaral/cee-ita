import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";
import SearchPosts from "@/components/Blog/SearchPosts";

type Props = {
  params: Promise<{ slug: string }>;
};

async function fetchPages() {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_POSTS_DATABASE_ID as string,
      filter: {
        property: 'Status',
        status: {
          equals: 'Live'
        }
      }
    });
    return response;
  } catch (error) {
    console.error('Error in fetchPages:', error);
    throw error;
  }
}

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

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { slug } = params;
  const post = await fetchBySlug(slug);
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  if (post) {
    return {
      title: `${post.properties.Title.title[0]?.plain_text || "Single Post Page"} | ${siteName}`,
      description: `${post.properties.Description?.rich_text[0]?.plain_text?.slice(0, 136)}...`,
      author: authorName,

      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },

      openGraph: {
        title: `${post.properties.Title.title[0]?.plain_text} | ${siteName}`,
        description: post.properties.Description?.rich_text[0]?.plain_text,
        url: `${siteURL}/blogs-2/${post.properties.slug.rich_text[0]?.plain_text}`,
        siteName: siteName,
        images: [
          {
            url: getImageUrl(post),
            width: 1800,
            height: 1600,
            alt: post.properties.Title.title[0]?.plain_text,
          },
        ],
        locale: "en_US",
        type: "article",
      },

      twitter: {
        card: "summary_large_image",
        title: `${post.properties.Title.title[0]?.plain_text} | ${siteName}`,
        description: `${post.properties.Description?.rich_text[0]?.plain_text?.slice(0, 136)}...`,
        creator: `@${authorName}`,
        site: `@${siteName}`,
        images: [getImageUrl(post)],
        url: `${siteURL}/blogs-2/${post.properties.slug.rich_text[0]?.plain_text}`,
      },
    };
  } else {
    return {
      title: "Not Found",
      description: "No blog article has been found",
    };
  }
}

export default async function PostDetail(props: Props) {
  const params = await props.params;
  const { slug } = params;
  const post = await fetchBySlug(slug);
  const allPosts = await fetchPages();
  
  if (!post) {
    notFound();
  }

  // Filter out current post and get up to 3 related posts
  const relatedPosts = allPosts.results
    .filter((p: any) => p.id !== post.id)
    .slice(0, 3);

  const blocks = await fetchPageBlocks(post.id);
  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...blocks);

  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {post.properties.Title.title[0]?.plain_text}
                </h1>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-stroke pb-4 dark:border-stroke-dark">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base text-body-color dark:text-body-color-dark">
                        <span className="mr-3">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            className="fill-current"
                          >
                            <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                            <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                            <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                            <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                            <path d="M3.89531 11.1606H3.10666C2.96327 11.1606 2.86768 11.2562 2.86768 11.3996V12.1644C2.86768 12.3078 2.96327 12.4034 3.10666 12.4034H3.89531C4.03871 12.4034 4.1343 12.3078 4.1343 12.1644V11.3996C4.1343 11.2562 4.03871 11.1606 3.89531 11.1606Z" />
                            <path d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z" />
                            <path d="M8.93828 11.1606H8.14963C8.00624 11.1606 7.91064 11.2562 7.91064 11.3996V12.1644C7.91064 12.3078 8.00624 12.4034 8.14963 12.4034H8.93828C9.08167 12.4034 9.17727 12.3078 9.17727 12.1644V11.3996C9.17727 11.2562 9.08167 11.1606 8.93828 11.1606Z" />
                            <path d="M11.4715 11.1606H10.6828C10.5394 11.1606 10.4438 11.2562 10.4438 11.3996V12.1644C10.4438 12.3078 10.5394 12.4034 10.6828 12.4034H11.4715C11.6149 12.4034 11.7105 12.3078 11.7105 12.1644V11.3996C11.7105 11.2562 11.591 11.1606 11.4715 11.1606Z" />
                            <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
                          </svg>
                        </span>
                        {new Date(post.created_time).toDateString().split(" ").slice(1).join(" ")}
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <a
                      href="#0"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white duration-300 hover:bg-primary/90"
                    >
                      {post.properties.Tags.multi_select[0]?.name}
                    </a>
                  </div>
                </div>
                <div>
                  <div className="mb-10 w-full overflow-hidden rounded-sm">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src={getImageUrl(post)}
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className="blog-details mb-12">
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                  </div>

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <p className="mb-3 text-sm font-medium text-body-color dark:text-body-color-dark">
                        Tags associadas :
                      </p>
                      <div className="flex items-center">
                        {post.properties.Tags.multi_select.map((tag, i) => (
                          <TagButton key={i} text={tag.name} />
                        ))}
                      </div>
                    </div>
                    <div className="mb-5">
                      <p className="mb-3 text-sm font-medium text-body-color dark:text-body-color-dark sm:text-right">
                        Share this post :
                      </p>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-4/12">
              <div className="mb-10 mt-12 rounded-sm bg-white p-6 shadow-three dark:bg-gray-dark dark:shadow-none lg:mt-0">
                <SearchPosts allPosts={allPosts.results} currentPostId={post.id} />
              </div>
              <div className="mb-10 rounded-sm bg-white shadow-three dark:bg-gray-dark dark:shadow-none">
                <h3 className="border-b border-stroke px-8 py-4 text-lg font-semibold text-black dark:border-stroke-dark dark:text-white">
                  Links Úteis
                </h3>
                <ul className="px-8 py-6">
                  <li>
                    <a
                      href="/blogs"
                      className="mb-3 inline-block text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Painel de Vagas
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="mb-3 inline-block text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Sobre o CEE
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="mb-3 inline-block text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Contato
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="mb-3 inline-block text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Nossos Serviços
                    </a>
                  </li>
                  <li>
                    <a
                      href="/team"
                      className="mb-3 inline-block text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Nossa Equipe
                    </a>
                  </li>
                </ul>
              </div>

              <NewsLatterBox />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
