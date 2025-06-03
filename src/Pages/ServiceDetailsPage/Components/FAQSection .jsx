import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import faq from './../../../assets/faq.png'



const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

   const faqData = [
  {
    question: "How do I get started with your kitchen exhaust system services?",
    answer: "You can get started by contacting us through phone, email, or our website. We'll schedule a site visit to assess your kitchen layout and requirements before providing a quote."
  },
  {
    question: "What information do you need to provide a quote?",
    answer: "We need the kitchen size, type of cooking equipment used, preferred system components (like hoods, filters, fans), and any special requirements like odor control or noise reduction."
  },
  {
    question: "Do you offer a site inspection before installation?",
    answer: "Yes, we offer a free site inspection to evaluate the space and determine the best exhaust system layout and specifications tailored to your kitchen."
  },
  {
    question: "How do you determine the cost of the system?",
    answer: "Pricing is based on factors like kitchen size, type of exhaust system, duct length, number of fans and hoods, control panel complexity, and installation requirements."
  },
  {
    question: "Do you offer both supply and installation?",
    answer: "Yes, we handle the complete process—from supplying high-quality equipment to professional installation and system testing."
  },
  {
    question: "How long does it take to complete the installation?",
    answer: "The duration depends on project size and complexity. Standard installations typically take 3 to 7 working days after site preparation and equipment availability."
  },
  {
    question: "Can you integrate air-cleaner equipment or UVC lamps with the system?",
    answer: "Absolutely! We can integrate advanced purification units like air cleaners, UVC ozone lamps, and activated carbon filters for improved hygiene and odor control."
  },
  {
    question: "Do you provide maintenance and cleaning services?",
    answer: "Yes, we offer periodic cleaning and degreasing services for kitchen exhausts, ducts, and air conditioning units to ensure long-term efficiency and fire safety."
  },
  {
    question: "Can you repair or replace faulty motors and fans?",
    answer: "Yes, we diagnose issues and either repair or replace faulty or spoiled motors, exhaust fans, and fresh air units as needed."
  },
  {
    question: "Do you offer warranty and post-installation support?",
    answer: "Yes, we provide warranty coverage on all equipment and offer ongoing support, maintenance plans, and emergency repair services to keep your system running smoothly."
  }
];

      

    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="md:text-5xl text-4xl font-extrabold text-center  mb-12">
                    Frequently Asked <span className="text-green-700">
                    Questions</span> 
                </h2>

                <div className="flex justify-center flex-col lg:flex-row items-center gap-20">
                  
                        <img className="drop-shadow-[0_10px_10px_rgba(128,128,128,0.8)]" src={faq} alt="" />
                   
                    <div className="space-y-6 w-full">
                        {faqData.map((faq, index) => (
                            <div key={index} className="bg-white bg-opacity-40 backdrop-blur-md p-6 rounded-sm shadow-lg shadow-gray-300 border border-white/30">
                                <div
                                    onClick={() => toggleAnswer(index)}
                                    className="flex justify-between items-center cursor-pointer"
                                >
                                    <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                                    {openIndex === index ? (
                                        <BiChevronUp size={24} className="text-green-700" />
                                    ) : (
                                        <BiChevronDown size={24} className="text-green-700" />
                                    )}
                                </div>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-3 text-gray-700"
                                        >
                                            {faq.answer}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQSection;
