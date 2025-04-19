import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

import image_1 from "@/assets/imagens/image-fair-1.jpg";
import image_2 from "@/assets/imagens/image-fair-2.jpg";
import SingleBrand from "../Brands/SingleBrand";
import brandsData from "../Brands/brandsData";

const AboutFair = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <div>
          <SectionTitle
            title="Feira de Carreiras CEE - Conectando Talentos e Oportunidades"
            paragraph="A Feira de Carreiras CEE é o maior evento de recrutamento do ITA, reunindo as melhores empresas do mercado com os talentos mais promissores da engenharia brasileira. Um ambiente exclusivo para networking, entrevistas e descoberta de novas oportunidades profissionais."
            center
            width="670px"
            mb="60px"
          />
        </div>

        <div className="mb-24 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="w-full">
            <Image src={image_1} alt="Feira de Carreiras CEE - Organização" />
          </div>

          <div className="w-full">
            <div className="mb-12 block">
              <Image src={image_2} alt="Feira de Carreiras CEE - Equipe" />
            </div>

            <div className="md:pl-10">
              <div className="mb-10">
                <h3 className="text-center text-[28px] font-semibold leading-snug text-black dark:text-white sm:text-[32px] lg:text-left">
                  Impacto da Feira de Carreiras 2023
                </h3>
              </div>

              <div className="flex w-full items-center justify-between">
                <div>
                  <h4 className="text-3xl font-bold text-black dark:text-white">
                    800+
                  </h4>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Vagas de Emprego e Estágio
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-black dark:text-white">
                    60+
                  </h4>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Empresas Participantes
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-black dark:text-white">
                    50+
                  </h4>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Alunos Conectados
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

export default AboutFair; 