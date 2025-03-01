"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface ContactFormBoxProps {
  formId?: string;
}

const ContactFormBox = ({ formId }: ContactFormBoxProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    console.log("Form data:", formData);
    try {
      const response = await fetch(`/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao enviar mensagem");
      }

      router.push("/mail-success");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.";
      setError(message);
      console.error('Error details:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="relative rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11">
      <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
        Envie sua Mensagem
      </h3>
      <p className="mb-11 text-base font-medium text-body-color dark:text-body-color-dark">
        Estamos prontos para ajudar. Preencha o formulário abaixo e entraremos em contato em breve.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8">
              <label
                htmlFor="name"
                className="mb-3 block text-sm text-dark dark:text-white"
              >
                Seu Nome
              </label>
              <input
                type="text"
                placeholder="Digite seu nome completo"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8">
              <label
                htmlFor="email"
                className="mb-3 block text-sm text-dark dark:text-white"
              >
                Seu Email
              </label>
              <input
                type="email"
                placeholder="Digite seu email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4">
            <div className="mb-8">
              <label
                htmlFor="message"
                className="mb-3 block text-sm text-dark dark:text-white"
              >
                Sua Mensagem
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Digite sua mensagem"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              ></textarea>
            </div>
          </div>
          <div className="w-full px-4">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark disabled:opacity-70"
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </div>
        </div>

        {error && (
          <div className="mt-4 text-red-500">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactFormBox;
