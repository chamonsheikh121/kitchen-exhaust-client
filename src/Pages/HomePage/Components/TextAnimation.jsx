import './Style.css'
import 'aos/dist/aos.css'; // import AOS styles
import AOS from 'aos'; // import AOS library
import { useEffect } from 'react';
import TW from '../../../assets/icon.png'

const TextAnimation = ({textColor}) => {


    useEffect(() => {
      
              AOS.init({
                  duration: 1000,
                  easing: 'ease',
                  once: false,
              });
      
      
              AOS.refresh();
      
          }, []);

    return (
        <div  className="flex  hover:scale-125  duration-300 transition-all items-center justify-center ">
          {/* Container */}
          <div data-aos="zoom-in" className="relative  w-48 h-48 flex items-center justify-center">
            {/* Centered TW Text */}
            <div className=" text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text"><img src={TW} alt="" className='block w-32 p-4' /></div>
    
            {/* Circling Text */}
            <div className="absolute w-full h-full animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path id="circlePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                </defs>
                <text className=" text-sm font-bold">
                  <textPath fill={textColor} href="#circlePath" startOffset="0%">
                    BLESSMAN • ENGINEERING • BLESSMAN •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      );
};

export default TextAnimation;