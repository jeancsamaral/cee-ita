import AboutStyleTwo from "@/components/AboutStyleTwo";
import SingleBlogStyleTwo from "@/components/BlogStyleTwo/SingleBlogStyleTwo";
import BrandsStyleTwo from "@/components/BrandsStyleTwo";
import SectionTitle from "@/components/Common/SectionTitle";
import FaqSection from "@/components/Faq";
import FeaturesStyleTwo from "@/components/FeaturesStyleTwo";
import HeroStyleTwo from "@/components/HeroStyleTwo";
import NewsLatter from "@/components/Newslatter";
import PricingStyleTwo from "@/components/PricingStyleTwo";
import TestimonialsStyleTwo from "@/components/TestimonialsStyleTwo";
import { getPosts } from "@/sanity/sanity-utils";
import { Metadata } from "next";
import { integrations } from "integrations.config";

export const metadata: Metadata = {
  title: "Início - CEE",
  description: "Conectando talentos ao mercado",
  // other metadata
};

const HomePageStyleTwo = async () => {
  const posts = await getPosts();

  return (
    <>
      <HeroStyleTwo />
      <BrandsStyleTwo />
      <FeaturesStyleTwo />
      <AboutStyleTwo />
      {/*<PricingStyleTwo />*/}
      <TestimonialsStyleTwo />
      <FaqSection />
      <NewsLatter />
      {integrations?.isSanityEnabled && (
        <section className="py-16 md:py-20 lg:py-24">
          <div className="container">
            <div>
              <SectionTitle
                title="Novidades de Vagas"
                paragraph="Fique por dentro das últimas oportunidades! Nosso site facilita a busca e análise de vagas, ajudando você a encontrar a melhor oportunidade de forma simples e intuitiva."
                center
                width="735px"
                mb="60px"
              />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.slice(0, 3).map((blog, index) => (
                <SingleBlogStyleTwo key={index} blog={blog} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HomePageStyleTwo;
