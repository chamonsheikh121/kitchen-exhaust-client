import { useEffect } from 'react';
import 'aos/dist/aos.css'; // import AOS styles
import AOS from 'aos'; // import AOS library
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import img1 from '../../../assets/about1.jpg'
import img2 from '../../../assets/about2.jpg'
import { MdSmartDisplay } from 'react-icons/md';

const AboutUs = ({ setIsOpen }) => {

    useEffect(() => {
        // Initialize AOS with custom settings
        AOS.init({
            duration: 1000, // duration of the animation
            easing: 'ease', // easing function
            once: false, // whether animation should happen only once or every time it comes into view
        });

        // Refresh AOS after initialization
        AOS.refresh(); // Force AOS to trigger again in case of any issues

    }, []);

    return (
        <section
            data-aos="fade-up"
            data-aos-duration="3000"
            className="relative py-16 px-2 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-10"
            style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?automotive,mechanic')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white opacity-60"></div>

            {/* Content Wrapper */}
            <div className="relative w-full flex flex-col md:flex-row items-center gap-20">
                {/* Left Side: Images */}
                <div className="relative h-[500px] w-full md:w-1/2 flex items-center justify-center">
                    {/* Top Left Image */}
                    <div data-aos="fade-up" className="absolute top-0 right-0 shadow-lg rounded-br-[100px] rounded-tl-[100px] w-40 md:w-60 h-[300px] hover:shadow-2xl hover:scale-105 transition-all">
                        <img
                            src={img1}
                            alt="Exhaust System Manufacturing"
                            className="absolute object-cover rounded-br-[100px] rounded-tl-[100px] w-full h-full"
                        />
                    </div>

                    {/* Bottom Right Image */}
                    <div data-aos="fade-down" className='absolute bottom-0 left-0 h-[300px] w-40 md:w-60 shadow-lg rounded-br-[100px] rounded-tl-[100px] hover:shadow-2xl hover:scale-105 transition-all'>
                        <img
                            src={img2}
                            alt="Precision Engineering"
                            className="object-cover w-full h-full rounded-br-[100px] rounded-tl-[100px]"
                        />
                    </div>

                    {/* Feature Box */}
                    <div className="absolute top-4 left-4 text-white bg-green-600 px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
                        <span className="text-lg font-bold">Noise Reduction</span>
                        <p className="text-sm">Advanced Sound Dampening</p>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-green-500 font-semibold uppercase text-sm">About Us</h3>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-2">
                        Premium <span className="text-green-700">Exhaust Solutions</span> for Maximum Performance
                    </h2>
                    <p className="text-gray-500 mt-4 text-lg font-semibold">
                        We specialize in designing and manufacturing <strong>high-performance exhaust systems</strong> that ensure superior airflow, reduced emissions, and enhanced vehicle sound. From custom setups to OEM replacements, our solutions are engineered for <strong>durability, efficiency,</strong> and peak output across all driving conditions.
                    </p>

                    {/* <motion.button
                        initial={{ "--x": "100%", scale: 1 }}
                        animate={{ "--x": "-100%" }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setIsOpen(true)}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            repeatDelay: 1,
                            type: "spring",
                            stiffness: 20,
                            damping: 15,
                            mass: 2,
                            scale: {
                                type: "spring",
                                stiffness: 10,
                                damping: 5,
                                mass: 0.1,
                            },
                        }}
                        className="mt-6 rounded-md relative radial-gradient"
                    >
                        <button
                            className="flex h-full w-full relative linear-mask items-center gap-2 px-6 py-[10px] border-[2px] hover:bg-green-700 border-green-700 text-green-700 hover:text-white rounded-lg text-lg font-semibold shadow-lg transition-all hover:border-green-600"
                        >
                            <p><MdSmartDisplay size={30} /></p>
                            Learn more
                        </button>
                        <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
                    </motion.button> */}

                    <div className="mt-6 rounded-md relative radial-gradient">
                        <Link to='/about-us'>
                        <button
                            className="flex md:w-3/6 h-full w-full relative linear-mask items-center gap-2 px-6 py-[10px] border-[2px] hover:bg-green-700 border-green-700 text-green-700 hover:text-white rounded-lg text-lg font-semibold shadow-lg transition-all hover:border-green-600"
                        >
                            {/* <p><MdSmartDisplay size={30} /></p> */}
                            Learn more
                        </button></Link>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default AboutUs;
