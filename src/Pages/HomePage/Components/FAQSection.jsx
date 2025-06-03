import { useState, useEffect } from "react";
import { BiChevronDownCircle, BiChevronUpCircle } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    question: "What types of exhaust systems do you offer?",
    answer: "We offer custom exhaust systems, performance upgrades, OEM replacements, industrial ventilation solutions, and complete ducting systems tailored to client needs."
  },
  {
    question: "Do you provide installation services?",
    answer: "Yes, we provide professional installation for all our exhaust and ventilation systems, ensuring safety, compliance, and optimal performance."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including automotive workshops, manufacturing plants, commercial kitchens, garages, and residential buildings."
  },
  {
    question: "How do I know which exhaust or ventilation system is right for me?",
    answer: "Our team will evaluate your space, needs, and regulations to recommend the most efficient and cost-effective solution customized for your environment."
  },
  {
    question: "Are your systems compliant with local environmental and safety regulations?",
    answer: "Yes, all our systems comply with local and international safety, fire, and environmental standards. We also offer certification support when needed."
  },
  {
    question: "Do you offer maintenance and repair services?",
    answer: "Absolutely. We offer regular maintenance packages and on-call repair services to ensure your systems remain in top condition and perform reliably."
  },
  {
    question: "Can you upgrade my existing exhaust system?",
    answer: "Yes, we specialize in system upgrades to improve airflow, reduce noise, increase energy efficiency, and meet updated safety standards."
  },
  {
    question: "How much does a ventilation or exhaust system cost?",
    answer: "The cost depends on your specific requirements, space, and installation complexity. We provide free consultations and detailed quotes based on your needs."
  },
  {
    question: "How long does installation take?",
    answer: "Installation timelines vary depending on the project size. Small setups may take 1-3 days, while larger industrial systems may require up to 1-2 weeks."
  },
  {
    question: "Do you provide custom solutions for unique spaces?",
    answer: "Yes, we specialize in custom-designed exhaust and ventilation systems for challenging layouts, high-heat environments, or non-standard buildings."
  },
  {
    question: "Will I receive documentation and support after installation?",
    answer: "Yes, we provide complete documentation, including user manuals, maintenance schedules, and ongoing technical support."
  },
  {
    question: "How can I get started?",
    answer: "Contact us through our website or call us directly. We'll schedule a consultation to understand your needs and recommend the best solution for you."
  }
];



const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <section
      className="relative bg-fixed bg-cover bg-center text-white py-40 px-6"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-photo/professional-stainless-steel-kitchen-design-photo-was-made-restouraunt_613910-12332.jpg?ga=GA1.1.64639178.1716754325&semt=ais_hybrid&w=740')",
      }}
    >
      {/* Blur Overlay for Section */}
      <div className="absolute inset-0  backdrop-blur-md"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto">

        <h2 data-aos="fade-up" className="md:text-5xl text-4xl font-bold text-center text-white mb-20">
          Frequently <span className="text-green-400">Asked Questions</span>
        </h2>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white   shadow-lg 
              rounded-tl-[50px] rounded-br-[50px] md:p-14 p-8  transition-all duration-300 
              hover:shadow-2xl hover:scale-105 bg-opacity-20 backdrop-blur-2xl"
            >
              <button
                className="w-full flex justify-between text-2xl items-center  font-semibold text-white transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <BiChevronUpCircle className="w-7 h-7 text-green-500 transition-transform duration-300 rotate-180" />
                ) : (
                  <BiChevronDownCircle className="w-7 h-7 text-white transition-transform duration-300" />
                )}
              </button>

              {/* Smooth expanding animation */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index
                    ? "max-h-40 opacity-100 mt-3 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-2"
                  }`}
              >
                <p className="text-white text-md leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
