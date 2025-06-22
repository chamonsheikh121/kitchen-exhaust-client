import { useEffect, useState } from 'react';
import ServiceCard from "./Components/ServiceCard";
import { motion } from 'framer-motion';
import HireMessageSection from '../HomePage/Components/HireMessageSection';
import { Helmet } from 'react-helmet';
import airCleaner from '../../assets/airCleaner.webp'
import system from '../../assets/system.webp'
import Uvlamp from '../../assets/UvLamp.webp'
import FIlters from '../../assets/Filters.webp'
import hood from '../../assets/hood.webp'
import silencer from '../../assets/51AYf5JWdAL._AC_UF894,1000_QL80_.jpg'
import fan from '../../assets/nico-smit-25DGbmQ_KPI-unsplash.jpg'
import damper from '../../assets/MD6TU_MD8TU_MD10TU_1.jpg'
import controlPanel from '../../assets/Control Panel_high res-1.webp'
import dsc from '../../assets/dsc_3895.jpg'


const OurService = () => {


  const services = [
    {
      id: 0,
      title: "Supply and Installation of Kitchen Exhaust System with Ducts",
      description: "Professional supply and installation of efficient kitchen exhaust systems with high-quality ductwork to ensure safe and effective ventilation.",
      img: system,
      options: {
        features: [
          { title: "Custom Duct Design", description: "Tailored duct designs for optimal airflow and space efficiency." },
          { title: "High-Grade Materials", description: "Durable stainless steel or galvanized ducts for long-term use." },
          { title: "Compliance with Safety Standards", description: "Installations follow all fire and hygiene regulations." }
        ]
      }
    },
    {
      id: 1,
      title: "Kitchen Hoods",
      description: "Design and installation of powerful kitchen hoods to capture smoke, grease, and steam effectively.",
      img: hood,
      options: {
        features: [
          { title: "Baffle or Mesh Filters", description: "Options to suit different cooking needs and grease loads." },
          { title: "Stainless Steel Build", description: "Rust-resistant and easy-to-clean hoods." },
          { title: "Custom Sizes", description: "Available in various dimensions to fit any kitchen layout." }
        ]
      }
    },
    {
      id: 2,
      title: "Air-Cleaner Equipment",
      description: "Air purification systems to remove smoke, grease particles, and odours from commercial kitchens.",
      img: airCleaner,
      options: {
        features: [
          { title: "Electrostatic Precipitators", description: "Captures airborne particles efficiently." },
          { title: "HEPA & Carbon Filters", description: "Advanced filtration for cleaner indoor air." },
          { title: "Compact Design", description: "Easy to install and maintain in limited spaces." }
        ]
      }
    },
    {
      id: 3,
      title: "UVC Ozone Lamps",
      description: "Installation of UVC ozone lamps for advanced disinfection and odour control in kitchen exhaust systems.",
      img: Uvlamp,
      options: {
        features: [
          { title: "Kills Bacteria and Viruses", description: "Reduces airborne pathogens within ducts." },
          { title: "Minimizes Grease Build-up", description: "Breaks down grease molecules in the air." },
          { title: "Low Maintenance", description: "Long lamp lifespan and minimal upkeep." }
        ]
      }
    },
    {
      id: 4,
      title: "Activated Carbon Filters",
      description: "Activated carbon filters for efficient odour absorption and smoke reduction.",
      img: FIlters,
      options: {
        features: [
          { title: "High Adsorption Rate", description: "Effectively removes VOCs and kitchen odours." },
          { title: "Easy Replacement", description: "Modular and user-friendly filter access." }
        ]
      }
    },
    {
      id: 5,
      title: "Silencers",
      description: "Sound-dampening silencers for ventilation systems to maintain a quieter kitchen environment.",
      img: silencer,
      options: {
        features: [
          { title: "Noise Reduction", description: "Reduces motor and airflow noise in ducts." },
          { title: "Compact and Efficient", description: "Fits easily into duct systems without disrupting airflow." }
        ]
      }
    },
    {
      id: 6,
      title: "Exhaust and Fresh Air Motor Fans",
      description: "Supply and installation of powerful exhaust and fresh air motor fans for kitchen ventilation systems.",
      img: fan,
      options: {
        features: [
          { title: "Energy-Efficient Motors", description: "Low power consumption with high airflow output." },
          { title: "Indoor & Outdoor Use", description: "Weather-resistant models available." },
          { title: "Quiet Operation", description: "Low-vibration and quiet-running fans." }
        ]
      }
    },
    {
      id: 7,
      title: "Fan Control Panel",
      description: "Smart control panels for managing exhaust and supply fan operations in commercial kitchens.",
      img: controlPanel,
      options: {
        features: [
          { title: "Auto & Manual Modes", description: "Flexible control over fan settings." },
          { title: "LED Indicators", description: "Visual feedback on system status." }
        ]
      }
    },
    {
      id: 8,
      title: "VFD and DOL Starters",
      description: "Variable Frequency Drives (VFD) and Direct On Line (DOL) starters for precise motor control and energy savings.",
      img: dsc,
      options: {
        features: [
          { title: "Speed Control", description: "VFDs allow smooth fan speed adjustment." },
          { title: "Overload Protection", description: "Ensures motor safety under heavy loads." }
        ]
      }
    },
    {
      id: 9,
      title: "Control Dampers",
      img: damper,
      description: "Installation of control dampers to regulate airflow in kitchen and ventilation ducts.",
      options: {
        features: [
          { title: "Manual or Motorized", description: "Options to suit your ventilation design." },
          { title: "Air Balancing", description: "Ensures consistent air distribution." }
        ]
      }
    }
  ];


  const [visibleCard, setVisibleCard] = useState(null);


  useEffect(() => {

    window.scrollTo(0, 0); // Scroll to the top


    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find(entry => entry.isIntersecting);
        if (visibleEntry) {
          setVisibleCard(visibleEntry.target.dataset.id);
        }
      },
      { threshold: 0.5 }
    );

    const cards = document.querySelectorAll(".service-card");
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);



  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }} // Start small and invisible
      animate={{ opacity: 1, scale: 1 }}  // Grow and appear
      transition={{ duration: 1, ease: "easeOut" }} // Smooth effect
      className="min-h-screen flex items-center justify-center"
      aria-label="Our Services"
    >

      <Helmet>
        <title>BM | Services</title>

        <meta description='Discover our latest projects showcasing innovation, creativity, and technical excellence.
                            From web applications to impactful solutions, explore how we bring ideas to life. 🚀'/>
      </Helmet>


      <section className="relative  w-full">



        <div className="">

          {/* Hero Section */}
          <section className="relative py-20 px-6 md:px-16 bg-gray-900 text-white text-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-blue-600 opacity-20 blur-3xl"></div>

            {/* Animated Heading */}
            <motion.h2
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-5xl py-4 font-extrabold bg-gradient-to-r from-green-400 to-green-800 text-transparent bg-clip-text"
            >
              Expert Kitchen Exhaust & Ventilation Systems
            </motion.h2>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We provide <strong>comprehensive supply, installation, and maintenance</strong> of kitchen exhaust and ventilation systems tailored for commercial kitchens.
              Our solutions ensure <strong>efficient air quality, safety, and regulatory compliance</strong> so you can focus on what matters—running your kitchen smoothly.
            </p>

            {/* Service Highlights */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <div className="px-6 py-3 md:w-auto w-full bg-white/10 border border-white/20 rounded-lg shadow-md hover:bg-white/20 transition-all">
                🔧 Expert Installation & Repairs
              </div>
              <div className="px-6 py-3 md:w-auto w-full bg-white/10 border border-white/20 rounded-lg shadow-md hover:bg-white/20 transition-all">
                ♻️ Efficient Air Filtration & Cleaning
              </div>
              <div className="px-6 py-3 md:w-auto w-full bg-white/10 border border-white/20 rounded-lg shadow-md hover:bg-white/20 transition-all">
                ⚙️ Custom Control Panels & Automation
              </div>
            </div>
          </section>







          <div className='max-w-7xl mx-auto'>
            <div data-aos="fade-up" className="text-center my-10 py-10">
              <h1 className="text-5xl font-bold text-gray-900">
                Our <span className="text-green-700">Services</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
                We specialize in professional kitchen exhaust and ventilation solutions, ensuring <strong>clean air, fire safety, and compliance</strong> for commercial kitchens.
                From expert installation to routine maintenance and system upgrades, our team delivers reliable, efficient, and customized services
                designed to keep your kitchen environment safe and running smoothly. Let’s enhance your kitchen’s airflow and safety today! 🌬️🔥
              </p>
            </div>


            {/* Services List */}
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                id={service?.id}
                title={service.title}
                description={service.description}
                img={service.img}
                isReversed={index % 2 !== 0}
                visibleCard={visibleCard} // Pass visibleCard as a prop
              />
            ))}
          </div>

        </div>

        <HireMessageSection />
      </section>
    </motion.section>
  );
};

export default OurService;
