import { motion } from 'framer-motion';
import Banner from "./Components/Banner";
import Marquee from "react-fast-marquee";
import Review from "./Components/Review";
import AboutUs from "./Components/AboutUs";
import Portfolio from "./Components/Portfolio";
import MarqueSectionLeft from "./Components/MarqueSectionLeft";
import MarqueSectionRight from "./Components/MarqueSectionRight";
import FAQSection from "./Components/FAQSection";
import HireMessageSection from "./Components/HireMessageSection";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Helmet } from 'react-helmet';
import VideoPlayer from '../Components/VideoPlayer';
import { useState } from 'react';
import Stars from '../Components/Star';

const HomePage = () => {


    const [isOpen, setIsOpen] = useState(false);

    const services = [
  { title: 'Supply & Installation of Kitchen Exhaust System' },
  { title: 'Kitchen Exhaust Duct Installation' },
  { title: 'Kitchen Hoods Installation' },
  { title: 'Air Cleaner Equipment Installation' },
  { title: 'UVC Ozone Lamps Installation' },
  { title: 'Activated Carbon Filters Installation' },
  { title: 'Exhaust Silencers Installation' },
  { title: 'Exhaust Motor Fans Installation' },
  { title: 'Fresh Air Motor Fans Installation' },
  { title: "Fan's Control Panel Installation" },
  { title: 'VFD (Variable Frequency Drive) Installation' },
  { title: 'DOL (Direct On Line) Starters Installation' },
  { title: 'Control Dampers Installation' },
  { title: 'Air Conditioning Ducts & Diffusers Installation' },
  { title: 'Air Conditioning Duct Cleaning' },
  { title: 'Kitchen Exhaust Cleaning & Degreasing' },
  { title: 'Ductwork Painting' },
  { title: 'Motor Fan Fault Diagnosis & Repair' },
  { title: 'Replacement of Faulty Motor Fans' },
  { title: 'New Motor Installation' }
];


    return (
        <div className="space-y-40">
            {/* Banner Section with Animation */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="max-w-7xl mx-auto"
            >
                <Banner setIsOpen={setIsOpen} />
            </motion.div>


            {

                isOpen && <VideoPlayer isOpen={isOpen} setIsOpen={setIsOpen} />

            }

            <Helmet>
                <title>BM | HOME</title>
            </Helmet>

            {/* Starry Marquee Section with Animation */}
           
    <Link
        onClick={(e) => {
            e.preventDefault();
            window.location.href = '/services';
        }}
        to="/services"
    >
        <div className="relative bg-gradient-to-t from-green-700 via-green-900 to-green-700 py-10 mt-20  duration-500  overflow-hidden shadow-2xl">
            {/* Starry Background */}
            <Stars></Stars>

            {/* Marquee Content */}
            <Marquee speed={150}>
                {services.map((item, i) => (
                    <div
                        key={i}
                        className="pl-10 ease-in-out flex items-center justify-center rounded-tl-3xl rounded-br-3xl will-change-transform"
                    >
                        <h1 className="md:text-2xl text-xl px-20 py-8 uppercase mr-14 bg-white/10 rounded-tl-3xl rounded-br-3xl backdrop-blur-lg shadow-lg font-semibold text-gray-100">
                            {item.title}
                        </h1>
                    </div>
                ))}
            </Marquee>
        </div>
    </Link>



            <VideoPlayer />

            {/* About Us Section with Animation */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="max-w-7xl mx-auto"
            >
                <AboutUs setIsOpen={setIsOpen} />
            </motion.div>

            {/* About Us Section with Animation */}




            {/* Marquee Sections with Different Animations */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                className="space-y-20"
            >
                <MarqueSectionLeft />
                {/* <MarqueSectionRight /> */}
            </motion.div>
            {/* Marquee Sections with Different Animations */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                className="space-y-20"
            >
                <MarqueSectionRight></MarqueSectionRight>                {/* <MarqueSectionRight /> */}
            </motion.div>

            {/* FAQ Section with Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                className="pb-40"
            >
                <FAQSection />
            </motion.div>

            {/* Portfolio, Review, and Hire Message Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
            >
                <Portfolio />

            </motion.div>
            <div className='pt-32'>
                <Review />
                <HireMessageSection />
            </div>
        </div>
    );
};

export default HomePage;
