import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    _id: "1",
    title: "Estágio em Desenvolvimento de Software - ITA Jr",
    slug: { current: "estagio-desenvolvimento-software-itajr" },
    metadata: "Oportunidade para estudantes do ITA desenvolverem habilidades práticas em projetos reais de software.",
    mainImage: "/images/blog/blog-01.jpg",
    author: {
      name: "CEE ITA",
      image: "/images/blog/author-01.png",
      slug: { current: "cee-ita" },
      bio: "CEE ITA"
    },
    tags: ["Estágio", "Tecnologia"],
    publishedAt: "2024-03-15",
  },
  {
    _id: "2",
    title: "Programa de Trainee - Empresa Aeroespacial",
    slug: { current: "trainee-empresa-aeroespacial" },
    metadata: "Programa de trainee exclusivo para alunos do ITA com foco em engenharia aeroespacial.",
    mainImage: "/images/blog/blog-02.jpg",
    author: {
      name: "CEE ITA",
      image: "/images/blog/author-01.png",
      slug: { current: "cee-ita" },
      bio: "CEE ITA"
    },
    tags: ["Trainee", "Aeroespacial"],
    publishedAt: "2024-03-14",
  },
  {
    _id: "3",
    title: "Vaga de Estágio em Consultoria Estratégica",
    slug: { current: "estagio-consultoria-estrategica" },
    metadata: "Oportunidade de estágio em consultoria estratégica para estudantes interessados em business.",
    mainImage: "/images/blog/blog-03.jpg",
    author: {
      name: "CEE ITA",
      image: "/images/blog/author-01.png",
      slug: { current: "cee-ita" },
      bio: "CEE ITA"
    },
    tags: ["Estágio", "Consultoria"],
    publishedAt: "2024-03-13",
  },
  {
    _id: "4",
    title: "Programa de Estágio em Pesquisa e Desenvolvimento",
    slug: { current: "estagio-pesquisa-desenvolvimento" },
    metadata: "Vaga para atuar em projetos inovadores de P&D em parceria com grandes empresas.",
    mainImage: "/images/blog/blog-04.jpg",
    author: {
      name: "CEE ITA",
      image: "/images/blog/author-01.png",
      slug: { current: "cee-ita" },
      bio: "CEE ITA"
    },
    tags: ["Estágio", "P&D"],
    publishedAt: "2024-03-12",
  },
];

export default blogData;
