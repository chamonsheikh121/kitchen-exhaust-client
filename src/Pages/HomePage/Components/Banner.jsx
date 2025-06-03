import { useEffect, useState } from 'react';
import bannerImg from './../../../assets/about1.jpg'
import TextAnimation from './TextAnimation';
import { motion } from 'framer-motion';
import VideoPlayer from '../../Components/VideoPlayer';
import { MdSmartDisplay } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Banner = ({ setIsOpen }) => {


  const [shake, setShake] = useState(false);


  useEffect(() => {
    const toggleShake = () => {
      setShake(true);

      setTimeout(() => {
        setShake(false);
      }, 2000); // Shake for 2 seconds
    };

    toggleShake(); // Start the first shake

    const interval = setInterval(toggleShake, 5000); // Repeat every 5 seconds (3s off + 2s on)

    return () => clearInterval(interval);
  }, []);



  return (
    <section className="relative w-full ">
      <div className=" flex flex-col  md:flex-row items-center px-6 gap-40 py-12 md:py-16">
        {/* Left Content */}
        <div className="w-full space-y-4">
          <div className="relative w-full flex items-center justify-center text-center">
            <div className="absolute inset-0 rounded-lg"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-start text-gray-400 text-4xl font-extrabold uppercase tracking-widest">Singapore's Trusted</h2>
              <h1 className="text-5xl text-start font-extrabold uppercase tracking-wider">Kitchen</h1>
              <div className="bg-green-600 p-1 rounded-sm text-white transition-all duration-300 hover:bg-transparent hover:scale-105 group">
                <h1 className="text-2xl text-start font-extrabold uppercase tracking-widest transition-colors duration-300 group-hover:text-green-700">
                  Exhaust
                </h1>
                <h1 className="md:text-5xl text-3xl text-start font-extrabold uppercase tracking-widest transition-colors duration-300 group-hover:text-green-700">
                  & Ventilation
                </h1>
              </div>
              <h1 className="text-5xl text-start font-extrabold uppercase tracking-widest">Solutions</h1>
              <p className="text-xl text-start opacity-90">
                We specialize in professional kitchen exhaust and ventilation systems, helping businesses across Singapore maintain safety, hygiene, and compliance. From installation to maintenance – we've got you covered.
              </p>
            </div>
          </div>

          <div className='flex gap-10 md:w-3/4 flex-col md:flex-row md:items-center items-start justify-start'>

            <Link to={'/about-us'} className='w-full'>
              <button
                className={`bg-gradient-to-r w-full from-green-600 to-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all relative 
        ${shake ? "vibrateHire" : ""}`}
              >
                Get a Free Quote
              </button>
            </Link>

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
      className="w-full rounded-md relative radial-gradient"
    >
      <button
        className="flex h-full w-full relative linear-mask items-center gap-2 px-6 py-[10px] border-[2px] hover:bg-green-700 border-green-700 text-green-700 hover:text-white rounded-lg text-lg font-semibold shadow-lg transition-all hover:border-green-600"
      >
        <p><MdSmartDisplay size={30} /></p>
        Watch Demo
      </button>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button> */}

            <div className="w-full rounded-md relative radial-gradient">
              <Link to='/services'><button
                className="flex h-full w-full relative linear-mask items-center gap-2 px-6 py-[10px] border-[2px] hover:bg-green-700 border-green-700 text-green-700 hover:text-white rounded-lg text-lg font-semibold shadow-lg transition-all hover:border-green-600"
              >
                Services
              </button></Link>
              
            </div>
          </div>

          {/* Reviews Section */}
          <div className="flex items-center space-x-4 pt-6">
            <div className="flex -space-x-2">
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/37cb4ccb641b2e94abaae9c687df21c0-1643211541512/4fb8a622-7db7-4f5e-bede-c9fd2c773f18.jpg" alt="Client" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/03502cb7385663416ff3356307f8d568-1651632902699/ddf92cfe-0d59-4b7a-bb39-25395f734076.jpg" alt="Client" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/18327764/original/12011356_10153630517403665_184373501118724394_n.jpg" alt="Client" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-green-700">2000+ Installations</h4>
              <p className="text-gray-500 text-sm">Across Singapore</p>
            </div>
          </div>
        </div>


        {/* Right Image */}

        <motion.div
          initial={{ opacity: 0, y: -300 }}  // Start above the screen
          animate={{ opacity: 1, y: 0 }}     // End at its normal position
          transition={{ duration: 1, ease: 'easeOut' }}
          className="md:w-3/4 w-full  mx-auto"
        >
          <div className="w-full flex md:h-full h-[400px] justify-end relative mt-8 md:mt-0 before:absolute before:top-[-20px] before:right-[-16px] before:border-t-4 before:border-r-4 before:border-green-600 before:w-32 before:h-32 before:rounded-tr-lg after:absolute after:bottom-[-20px] after:left-[-18px] after:border-b-4 after:border-l-4 after:border-green-600 after:w-32 after:h-32 after:rounded-bl-lg">
            <img
              src={bannerImg}
              alt="Office Environment"
              className="w-full md:h-[600px] h-full duration-500 hover:scale-105 transition-all shadow-2xl object-cover rounded-tl-[80px] rounded-br-[80px]"
            />
            <div className="absolute bottom-0 left-0">
              <TextAnimation textColor={'white'} />
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default Banner;
