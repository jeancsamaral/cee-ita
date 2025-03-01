import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactStyleTwo from "@/components/ContactStyleTwo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato - CEE",
  description: "Entre em contato com a CEE - Centro de Carreiras dos alunos do ITA. Conectamos talentos às melhores oportunidades do mercado.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Entre em Contato"
        description="Estamos aqui para conectar talentos excepcionais às melhores oportunidades. Entre em contato conosco e descubra como podemos colaborar."
      />

      <ContactStyleTwo />
    </>
  );
};

export default ContactPage;
