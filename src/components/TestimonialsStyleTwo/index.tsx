import SectionTitle from "../Common/SectionTitle";
import SingleTestimonialStyleTwo from "./SingleTestimonialStyleTwo";
import testimonialStyleTwoData from "./testimonialStyleTwoData";

const TestimonialsStyleTwo = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-24">
      <div className="container">
        <div>
          <SectionTitle
            title="O que dizem sobre nós"
            paragraph="A CEE conecta alunos a oportunidades únicas e promove eventos que transformam carreiras. Veja o que nossos parceiros e alunos têm a dizer."
            width="735px"
            center
            mb="60px"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialStyleTwoData.map((testimonial, index) => (
            <SingleTestimonialStyleTwo key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsStyleTwo;
