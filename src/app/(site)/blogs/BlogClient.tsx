'use client';

import { useState, useMemo } from "react";
import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SearchBlogs from "@/components/Blog/SearchBlogs";
import TagFilter from "@/components/Blog/TagFilter";
import TipoFilter from "@/components/Blog/TipoFilter";

interface BlogClientProps {
  initialPosts: any;
}

export default function BlogClient({ initialPosts }: BlogClientProps) {
  const [posts] = useState(initialPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedTipo, setSelectedTipo] = useState<string | null>(null);

  // Get all unique tags from posts
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.results.forEach((post: any) => {
      post.properties.Tags.multi_select.forEach((tag: any) => {
        tags.add(tag.name);
      });
    });
    return Array.from(tags).sort();
  }, [posts]);

  // Filter posts based on search term, selected tags, and tipo
  const filteredPosts = useMemo(() => {
    return {
      ...posts,
      results: posts.results.filter((post: any) => {
        const title = post.properties.Title.title[0]?.plain_text.toLowerCase() || '';
        const matchesSearch = title.includes(searchTerm.toLowerCase());
        
        const postTags = post.properties.Tags.multi_select.map((tag: any) => tag.name);
        const matchesTags = selectedTags.length === 0 || 
          selectedTags.some(tag => postTags.includes(tag));

        const postTipo = post.properties.Tipo.select?.name || "Regular";
        const matchesTipo = !selectedTipo || postTipo === selectedTipo;

        return matchesSearch && matchesTags && matchesTipo;
      })
    };
  }, [posts, searchTerm, selectedTags, selectedTipo]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleTagSelect = (tags: string[]) => {
    setSelectedTags(tags);
  };

  const handleTipoSelect = (tipo: string | null) => {
    setSelectedTipo(tipo);
  };

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
        pageName="Vagas Disponíveis"
        description="Confira as últimas oportunidades de estágio, trainee e emprego para alunos e ex-alunos do ITA."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-row items-center gap-4 mb-8">
            <div className="w-64">
              <SearchBlogs onSearch={handleSearch} />
            </div>
            <TagFilter allTags={allTags} onTagSelect={handleTagSelect} />
            <TipoFilter onTipoSelect={handleTipoSelect} />
          </div>
          
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {filteredPosts?.results.map((post: any) => (
              <SingleBlog 
                key={post.id} 
                blog={formatNotionPost(post)} 
              />
            ))}
          </div>

          {filteredPosts?.results.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500">Nenhuma vaga encontrada com os filtros selecionados.</p>
            </div>
          )}
        </div>
        {/*<div className="mt-8 text-center">
          <details className="bg-gray-50 p-4 rounded-lg">
            <summary className="cursor-pointer text-gray-700 font-semibold">
              Mostrar JSON das vagas (Debug)
            </summary>
            <pre className="mt-4 text-left overflow-auto max-h-96 bg-white p-4 rounded">
              {JSON.stringify(filteredPosts, null, 2)}
            </pre>
          </details>
        </div>*/}
      </section>
    </>
  );
} 