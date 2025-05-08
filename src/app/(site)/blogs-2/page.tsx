import SingleBlogStyleTwo from "@/components/BlogStyleTwo/SingleBlogStyleTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { notion } from "@/lib/notion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vagas - CEE",
  description: "Painel de vagas e oportunidades disponíveis",
  // other metaDescription
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
    
    console.log('Notion API raw response:', response);
    return response;
  } catch (error) {
    console.error('Error in fetchPages:', error);
    throw error;
  }
}

export default async function BlogPageStyleTwo() {
  const posts: any = await fetchPages();
  
  const formatNotionPost = (post: any) => {
    // Função auxiliar para obter a URL da imagem
    const getImageUrl = () => {
      try {
        // Tenta pegar a imagem de capa do Notion
        if (post.properties.cover?.files[0]?.file?.url) {
          return post.properties.cover.files[0].file.url;
        }
        // Tenta pegar a imagem externa do Notion
        if (post.properties.cover?.files[0]?.external?.url) {
          return post.properties.cover.files[0].external.url;
        }
        // Fallback para imagem default
        return "/images/blog/blog-03.jpg";
      } catch (error) {
        return "/images/blog/blog-03.jpg";
      }
    };

    return {
      _id: post.id,
      title: post.properties.Title.title[0]?.plain_text || "Sem título",
      slug: {
        current: post.properties.slug.rich_text[0]?.plain_text || "sem-slug"
      },
      metadata: post.properties.Description?.rich_text[0]?.plain_text || "Sem descrição disponível",
      mainImage: getImageUrl(),
      author: {
        name: "CEE ITA",
        image: "/images/blog/author-01.png",
        slug: {
          current: "cee-ita"
        },
        bio: "Centro de Carreiras do ITA"
      },
      tags: post.properties.Tags.multi_select.map((tag: any) => tag.name), 
      tipo: post.properties.Tipo.select?.name || "Regular",
      publishedAt: post.created_time || new Date().toISOString()
    };
  };

  return (
    <>
      <Breadcrumb
        pageName="Treinamentos e Eventos"
        description="Confira os próximos treinamentos, eventos e divulgações do Centro de Carreiras do ITA."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.results.map((post: any) => (
              <SingleBlogStyleTwo 
                key={post.id} 
                blog={formatNotionPost(post)} 
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
