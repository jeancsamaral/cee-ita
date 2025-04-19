import AboutFair from "@/components/AboutFair";
import Breadcrumb from "@/components/Common/Breadcrumb";
import NewsLatter from "@/components/Newslatter";
import Video from "@/components/Video";
import TimelineFeiras from "@/components/TimelineFeiras";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre - CEE",
  description: "Centro de Carreiras dos alunos do ITA - Conectando talentos ao mercado",
  // other metadata
};

const FairPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre a CEE"
        description="O Centro de Carreiras dos alunos do ITA. Promovemos a conexão entre os estudantes e a iniciativa privada através de eventos e oportunidades acadêmicas exclusivas."
      />
      <AboutFair />

      <TimelineFeiras />

      <Video />

      <div className="py-16 md:py-20 lg:py-24">
        <NewsLatter />
      </div>
    </>
  );
};

export default FairPage;
