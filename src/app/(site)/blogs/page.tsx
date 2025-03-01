import { Metadata } from "next";
import { fetchPages } from "@/lib/notion";
import { NotionPage } from "@/types/notion";
import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Vagas - CEE",
  description: "Painel de vagas e oportunidades disponíveis",
  // other metaDescription
};

export default async function BlogPage() {
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
      publishedAt: post.created_time || new Date().toISOString()
    };
  };
  
  return (
    <>
      <Breadcrumb
        pageName="Vagas Disponíveis"
        description="Confira as últimas oportunidades de estágio, trainee e emprego para alunos e ex-alunos do ITA."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {posts.results.map((post: any) => (
              <SingleBlog 
                key={post.id} 
                blog={formatNotionPost(post)} 
              />
            ))
            }
          </div>
        </div>
      <div className="container mt-10">
        <div className="flex justify-center">
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto max-w-full">
            <code>
              {JSON.stringify(posts, null, 2)}
            </code>
          </pre>
        </div>
      </div>
      
      </section>
    </>
  );
}
