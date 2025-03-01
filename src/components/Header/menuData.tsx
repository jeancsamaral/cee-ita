import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Início",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Sobre",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Vagas",
    path: "/blogs",
    newTab: false,
  },
  {
    id: 34,
    title: "Contato",
    path: "/contact",
    newTab: false,
  },
  {
    id: 34,
    title: "Feira",
    path: "/job-fair",
    newTab: false,
  }
  /*{
    id: 3,
    title: "Documentação",
    path: "/docs",
    newTab: false,
  },*/
  /*{
    id: 4,
    title: "Páginas",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Sobre Nós",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contato",
        path: "/contact",
        newTab: false,
      },
      {
        id: 42,
        title: "Preços",
        path: "/pricing",
        newTab: false,
      },
      {
        id: 42,
        title: "Perguntas Frequentes",
        path: "/faq",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog em Grade",
        path: "/blogs",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog em Grade 2",
        path: "/blogs-2",
        newTab: false,
      },
      {
        id: 46,
        title: "Entrar",
        path: "/auth/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Cadastrar",
        path: "/auth/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "E-mail Enviado",
        path: "/mail-success",
        newTab: false,
      },
      {
        id: 48,
        title: "Página de Erro",
        path: "/error",
        newTab: false,
      },
    ],
  },*/
];
export default menuData;
