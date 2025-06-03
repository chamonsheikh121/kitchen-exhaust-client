import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Initial Inquiry & Consultation",
    description: "Contact us with your kitchen ventilation needs. We’ll schedule a consultation to understand your space, cooking volume, and safety requirements."
  },
  {
    step: "02",
    title: "Site Survey & Assessment",
    description: "Our team conducts an on-site inspection to measure dimensions, check existing systems, and evaluate airflow, heat, and grease load."
  },
  {
    step: "03",
    title: "System Planning & Design",
    description: "We design a customized exhaust system layout, including ducts, hoods, filters, fans, and control panels based on your kitchen’s requirements."
  },
  {
    step: "04",
    title: "Quotation & Approval",
    description: "We prepare a detailed quotation covering materials, installation, labor, and timelines. Once approved, we proceed to procurement and scheduling."
  },
  {
    step: "05",
    title: "Procurement of Equipment",
    description: "All system components including kitchen hoods, motor fans, air cleaners, silencers, and VFDs are sourced from trusted suppliers."
  },
  {
    step: "06",
    title: "Installation of System Components",
    description: "Our technicians install the full exhaust and ventilation system — including ducts, hoods, filters, UVC ozone lamps, and electrical controls."
  },
  {
    step: "07",
    title: "Wiring & Control Integration",
    description: "We connect and configure the control panel, DOL starters, VFDs, and fan systems to ensure smooth automation and control of airflow."
  },
  {
    step: "08",
    title: "System Testing & Balancing",
    description: "Once installed, we test airflow, check for noise or vibration, balance duct pressure, and ensure the system meets performance standards."
  },
  {
    step: "09",
    title: "Final Inspection & Handover",
    description: "We conduct a final walkthrough with the client, demonstrating system usage and safety guidelines before handing over full control."
  },
  {
    step: "10",
    title: "Maintenance & Support",
    description: "We offer routine cleaning, degreasing, duct painting, and emergency fan repair services to ensure long-term efficiency and safety."
  }
];


const OurWorkProcess = () => {
  const [activeStep, setActiveStep] = useState(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative py-20"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl font-extrabold text-black mb-6">
          OUR WORK <span className="text-green-700">PROCESS</span>
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          We at Concise Studio take our work process very seriously and ensure it’s transparent,
          so you can track your project’s progress at every stage.
        </p>

        {/* Steps */}
        <div className="relative">
          {/* Vertical Connector Line */}
          <div className="absolute left-8 top-0 h-full w-1 bg-gray-300 hidden md:block"></div>

          {steps.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-6 mb-10 md:mb-16 relative"
            >
              {/* Step Number - Changes Color When Active */}
              <div
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-2xl font-bold rounded-full relative z-10 transition-all duration-500 ${activeStep === index
                  ? "bg-green-700 text-white shadow-lg scale-110"
                  : "bg-gray-300 text-gray-700"
                  }`}
              >
                {item.step}
              </div>

              {/* Step Content - Changes Text Color When Active */}
              <div
                className={`text-left transition duration-500 ${activeStep === index ? "text-green-700" : "text-gray-900"
                  }`}
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OurWorkProcess;
