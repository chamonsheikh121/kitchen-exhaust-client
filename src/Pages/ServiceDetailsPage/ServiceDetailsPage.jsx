import { useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get the dynamic id from the URL
import { motion } from 'framer-motion';
import FAQSection from './Components/FAQSection ';
import OurWorkProcess from './Components/OurWorkProcess ';
import HireMessageSection from '../HomePage/Components/HireMessageSection';
import 'aos/dist/aos.css'; // import AOS styles
import AOS from 'aos'; // import AOS library
import { Helmet } from 'react-helmet';



const services = [
  {
    id: 0,
    title: "Supply and Installation of Kitchen Exhaust System with Ducts",
    description: "Professional supply and installation of efficient kitchen exhaust systems with high-quality ductwork to ensure safe and effective ventilation.",
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
    description: "Installation of control dampers to regulate airflow in kitchen and ventilation ducts.",
    options: {
      features: [
        { title: "Manual or Motorized", description: "Options to suit your ventilation design." },
        { title: "Air Balancing", description: "Ensures consistent air distribution." }
      ]
    }
  }
];


const ServiceDetailsPage = () => {
    const { id } = useParams(); // Get the service ID from the URL
    const service = services.find(s => s.id === parseInt(id));

    if (!service) {
        return <div>Service not found</div>;
    }

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
    }, []);


    useEffect(() => {

        AOS.init({
            duration: 2000,
            easing: 'ease',
            once: false,

        });


        AOS.refresh();

    }, []);

    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.9 }} // Start small and invisible
            animate={{ opacity: 1, scale: 1 }}  // Grow and appear
            transition={{ duration: 1, ease: "easeOut" }} // Smooth effect
            className="z"
            aria-label="Our Services details "
        >


            <Helmet>
                <title>BM | Services</title>

                <meta description={service?.title} />
            </Helmet>


            <div className="max-w-7xl mx-auto mt-10 rounded-lg overflow-hidden">
                {/* Header Section */}
                <div className="my-10 text-xl">
                    <h1 className="md:text-5xl text-4xl font-extrabold text-green-800 text-center mb-6">{service?.title}</h1>
                    {/* <p className="text-center  max-w-2xl mx-auto">{project?.description ? project?.description : ''}</p> */}
                </div>
                {/* <div className='w-full h-[600px] rounded-md'>
                    <img
                        src={service.img}
                        alt={service.title}
                        className="w-full vibrate rounded-md h-full object-contain"
                    />
                </div> */}

                {/* Service Options Section */}
                <div className="">
                    {service?.options.features && (
                        <div>
                            <div className=' my-10'>
                                <h4 className="text-3xl  font-bold text-green-600">Features:</h4>
                                <hr className='w-1/12 border-2 mt-2 border-green-700'/>
                            </div>
                            <div className="mt-4 p-10 space-y-10">
                                {service.options.features.map((feature, index) => (
                                    <div key={index} className='rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-transparent'>
                                        <div

                                            data-aos="fade-up"
                                            className="relative group overflow-hidden "
                                        >
                                            {/* Blurred Background Layer */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-green-700 via-green-400 to-green-700 rounded-md opacity-50 group-hover:opacity-40 transition-all backdrop-blur-md"></div>

                                            {/* Content */}
                                            <div className="relative p-10 space-y-4 bg-white/40 bg-opacity-50 rounded-lg">
                                                <h5 className="text-xl font-semibold text-green-700 group-hover:text-green-900 transition-all">
                                                    {feature?.title}
                                                </h5>
                                                <p className="text-gray-700 group-hover:text-gray-900 transition-all">
                                                    {feature?.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    )}
                </div>



            </div>


            <OurWorkProcess />
            <FAQSection />

            <HireMessageSection />
        </motion.section>
    );
};

export default ServiceDetailsPage;