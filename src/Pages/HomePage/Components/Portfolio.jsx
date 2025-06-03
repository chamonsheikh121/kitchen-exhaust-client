import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaEye } from "react-icons/fa";
import WeHaveCompleted from "./WeHaveCompleted";
import 'aos/dist/aos.css'; // import AOS styles
import AOS from 'aos'; // import AOS library
import img1 from '../../../assets/3d-rendering-ventilation-system.jpg'
import img2 from '../../../assets/allen-boguslavsky-FQzRtdl-MpE-unsplash.jpg'
import img3 from '../../../assets/ChatGPT Image May 26, 2025, 11_46_51 PM.png'
import img4 from '../../../assets/low-angle-shot-metal-black-ceiling-with-white-ventilation-pipes.jpg'
import img5 from '../../../assets/nico-smit-25DGbmQ_KPI-unsplash.jpg'
import img6 from '../../../assets/red-shuheart-LDlRkuMoQas-unsplash.jpg'
import img7 from '../../../assets/pexels-davidmcelwee-10431783.jpg'
import img8 from '../../../assets/nico-smit-25DGbmQ_KPI-unsplash.jpg'
import img9 from '../../../assets/ventilation-duct-building-roof.jpg'


const Portfolio = () => {
    const swiperRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const portfolioImages = [
        {
           
            "imageLink": img1 ,
           
        },
        {
           
            "imageLink":  img2,
            

        },
        {
           
            "imageLink": img3 ,
           
        },
        {
           
            "imageLink": img4 ,
            
        },
        {
           
            "imageLink":  img5,
            
        },
        {
           
            "imageLink": img6 ,
            
        },
        {
           
            "imageLink": img7 ,
            
        },
        {
           
            "imageLink": img8 ,
        }

    ];


    // const portfolioImages = [
    //     { id: 1, imageLink: "https://swiperjs.com/demos/images/nature-1.jpg", projectName: "Mountain Adventure" },
    //     { id: 2, imageLink: "https://swiperjs.com/demos/images/nature-2.jpg", projectName: "Serene Waters" },
    //     { id: 3, imageLink: "https://swiperjs.com/demos/images/nature-3.jpg", projectName: "Forest Escape" },
    //     { id: 4, imageLink: "https://swiperjs.com/demos/images/nature-4.jpg", projectName: "Sunset Bliss" },
    //     { id: 5, imageLink: "https://swiperjs.com/demos/images/nature-5.jpg", projectName: "Desert Wonders" },
    //     { id: 6, imageLink: "https://swiperjs.com/demos/images/nature-6.jpg", projectName: "Snowy Peaks" },
    //     { id: 7, imageLink: "https://swiperjs.com/demos/images/nature-7.jpg", projectName: "Ocean View" },
    //     { id: 8, imageLink: "https://swiperjs.com/demos/images/nature-8.jpg", projectName: "Autumn Trail" },
    //     { id: 9, imageLink: "https://swiperjs.com/demos/images/nature-9.jpg", projectName: "Hidden Paradise" },
    // ];



    useEffect(() => {

        AOS.init({
            duration: 2000,
            easing: 'ease',
            once: false,
        });


        AOS.refresh();

    }, []);


    // Function to handle slide change and apply the blur effect
    const handleSlideChange = () => {
        const slides = swiperRef.current.swiper.slides;
        slides.forEach((slide) => {
            slide.style.filter = "blur(8px)"; // Blur all slides
            slide.style.transform = "scale(0.8)"; // Reduce size of side slides
        });
        slides[swiperRef.current.swiper.activeIndex].style.filter = "blur(0px)"; // Keep center slide clear
        slides[swiperRef.current.swiper.activeIndex].style.transform = "scale(1)"; // Keep center slide at full size
    };

    return (
        <div className="relative">
            <div className="absolute w-full -top-16">
                <div className="max-w-7xl mx-auto">
                    <WeHaveCompleted />
                </div>
            </div>
            <section className="bg-gray-900 text-green-600 pb-44">
                <div className="pb-32 pt-52 pl-10">
                    <h2 data-aos="fade-up" className="text-5xl font-extrabold mb-6"><span className="text-green-100">Our</span> Portfolio</h2>
                    <p data-aos="fade-up" className="text-lg mb-8 text-green-100">
                        Explore some of our best work, crafted with precision and creativity.
                    </p>
                </div>

                <div data-aos="zoom-in-down">
                    <div

                        className="w-full"
                        onMouseEnter={() => swiperRef.current?.swiper?.autoplay?.stop()}
                        onMouseLeave={() => swiperRef.current?.swiper?.autoplay?.start()}
                    >
                        <Swiper
                            ref={swiperRef}
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={1.2} // Default: Center image full, side images partially visible
                            spaceBetween={10}
                            touchRatio={1} // Ensure smooth touch scrolling
                            resistanceRatio={0.85} // Less resistance for better swipe feel
                            breakpoints={{
                                480: { slidesPerView: 1.3, spaceBetween: 10 }, // Small devices: One full image, others slightly visible
                                768: { slidesPerView: 2, spaceBetween: 20 }, // Tablets: Normal view
                                1024: { slidesPerView: 2, spaceBetween: 20 }, // Large screens: Normal behavior
                            }}
                            coverflowEffect={{
                                rotate: 30,
                                stretch: 0,
                                depth: 200,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            pagination={{ clickable: true }}
                            navigation={false}

                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            speed={700}
                            onSlideChange={handleSlideChange}
                            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                            className="rounded-xl shadow-xl"
                        >
                            {portfolioImages.map((project, index) => (
                                <SwiperSlide
                                    key={project.id}
                                    className="flex justify-center relative transition-all duration-500"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <img
                                        src={project.imageLink}
                                        alt={project.projectName}
                                        className="rounded-lg transition-all object-cover shadow-2xl shadow-green-800 w-full h-[500px]"
                                        loading="lazy"
                                    />

                                    {/* Hover Effect for "View Details" Button */}
                                    {/* {hoveredIndex === index && ( */}
                                        {/* // <div className="absolute inset-0 bg-gray-700 bg-opacity-50 flex flex-col items-center justify-center rounded-lg transition-opacity duration-500"> */}
                                        //     {/* <h3 className="text-2xl text-white font-bold mb-4">{project.projectName}</h3> */}
                                        //     {/* <Link
                                                
                                        //           onClick={(e) => {
                                        //             e.preventDefault(); // Prevent React Router's default navigation
                                        //             window.location.href = '/projects'; // Force a full reload
                                        //         }}
                                        //         to={`/projects`} // Dynamic Link
                                        //         className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg"
                                        //     >
                                        //         <FaEye className="text-xl" />
                                        //         View all
                                        //     </Link> */}
                                        {/* // </div> */}
                                    {/* )} */}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
