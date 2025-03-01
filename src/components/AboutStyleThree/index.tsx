import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

import image_1 from "@/assets/about/image-about-1.jpg";
import image_2 from "@/assets/about/image-about-2.jpg";
import SingleBrand from "../Brands/SingleBrand";
import brandsData from "../Brands/brandsData";

const AboutStyleThree = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <div>
          <SectionTitle
            title="Contrate os Melhores Talentos"
            paragraph="A CEE é o Centro de Carreiras dos alunos do ITA. Facilitamos a conexão entre empresas e os melhores talentos em engenharia do país, promovendo eventos e oportunidades exclusivas que beneficiam tanto as empresas quanto nossos alunos."
            center
            width="670px"
            mb="60px"
          />
        </div>

        <div className="mb-24 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="w-full">
            <Image src={image_1} alt="Feira de Carreiras CEE" />
          </div>

          <div className="w-full">
            <div className="mb-12 block">
              <Image src={image_2} alt="Eventos CEE" />
            </div>

            <div className="md:pl-10">
              <div className="mb-10">
                <h3 className="text-center text-[28px] font-semibold leading-snug text-black dark:text-white sm:text-[32px] lg:text-left">
                  Nossa Experiência em 2023
                </h3>
              </div>

              <div className="flex w-full items-center justify-between">
                <div>
                  <h4 className="text-3xl font-bold text-black dark:text-white">
                    800+
                  </h4>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Oportunidades Divulgadas
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-black dark:text-white">
                    60+
                  </h4>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Eventos Realizados
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-black dark:text-white">
                    50+
                  </h4>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Empresas Atendidas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center justify-center">
            {brandsData.map((brand) => (
              <SingleBrand key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStyleThree;
