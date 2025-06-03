import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import bgImage from './../../../assets/reviewbg.jpg'
import 'aos/dist/aos.css'; // import AOS styles
import AOS from 'aos'; // import AOS library

const reviews =[
  {
    "name": "losteve175",
    "description": "Choosing Blessman Engineering for my kitchen ventilation upgrade was the best decision! They made the entire process stress-free, delivered top-notch work, and provided excellent support even after project completion.",
    "rating": 5,
    "location": "Jurong Road"
  },
  {
    "name": "SamanthaK",
    "description": "The ventilation system installed by Blessman Engineering has improved air quality in my kitchen significantly. Great workmanship and very professional service.",
    "rating": 4,
    "location": "Orchard Road"
  },
  {
    "name": "Rajesh_P",
    "description": "Highly recommend Blessman Engineering for kitchen systems. The installation was quick, and the system runs quietly and efficiently.",
    "rating": 5,
    "location": "Tampines"
  },
  {
    "name": "JiaWen",
    "description": "The team at Blessman Engineering was responsive and knowledgeable. They helped me select the right kitchen ventilation setup for my home.",
    "rating": 4,
    "location": "Bukit Timah"
  },
  {
    "name": "Michael_Lim",
    "description": "Excellent service from consultation to installation by Blessman Engineering. My kitchen ventilation works flawlessly and the airflow is much better now.",
    "rating": 5,
    "location": "Ang Mo Kio"
  },
  {
    "name": "Nurul_A",
    "description": "Very satisfied with the new kitchen ventilation system from Blessman Engineering. The team was punctual and cleaned up after installation.",
    "rating": 5,
    "location": "Bedok"
  },
  {
    "name": "DavidTan",
    "description": "Affordable pricing and professional staff at Blessman Engineering. My kitchen feels fresher and smells less cooking odor thanks to them.",
    "rating": 4,
    "location": "Marine Parade"
  },
  {
    "name": "MeiLin_S",
    "description": "Great experience overall. Blessman Engineering installed the ventilation system quickly and explained how to maintain it properly.",
    "rating": 5,
    "location": "Clementi"
  },
  {
    "name": "Arjun_K",
    "description": "The kitchen ventilation upgrade by Blessman Engineering exceeded my expectations. The airflow is improved, and the noise level is low.",
    "rating": 5,
    "location": "Pasir Ris"
  },
  {
    "name": "Grace_L",
    "description": "Professional and friendly service from Blessman Engineering from start to finish. I would definitely hire them again for future kitchen needs.",
    "rating": 5,
    "location": "Bukit Batok"
  }
]


const Review = () => {


    useEffect(() => {

        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: false,
        });


        AOS.refresh();

    }, []);


    return (
        <div
            className="h-screen  relative bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="h-full w-full bg-black md:py-20  bg-opacity-60">
                <div className="max-w-xl ">
                    <div className="bg-green-700 mb-20 text-white rounded-md shadow-md shadow-green-500 backdrop-blur-sm p-4  inline-block text-center">
                        <h2 className="md:text-5xl  font-extrabold ">
                            <span className="">What Our</span> Clients Say
                        </h2>
                        <hr className="w-1/4 border-b-2 border-white  mt-2" />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 w-full mt-10">
                <div data-aos="zoom-in-down" className="max-w-7xl mx-auto  md:mr-0 mb-10 z-30 rounded-xl p-8 ">

                    <Swiper
                        spaceBetween={0}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        // pagination={{ clickable: true }}
                        modules={[Autoplay, Pagination]}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review.id}>
                                <div className="bg-gradient-to-tr from-green-400 to-green-800 p-6 rounded-xl shadow-md shadow-green-700 m-4 text-center h-[400px] flex flex-col justify-center space-y-5 gap-1 transform transition-transform hover:scale-105">
                                    <h4 className="mt-0 text-2xl font-semibold text-white">{review.name}</h4>
                                   
                                    <div>
                                        <p className=" text-white italic flex items-center justify-center">
                                          
                                            {review.description}
                                        </p>
                                    </div>
                                    <p className="font-bold">{review?.location}</p>
                                    <div className="mt-2 flex justify-center space-x-1">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <span key={index} className={`text-xl ${index < review.rating ? "text-yellow-400" : "text-gray-300"}`}>
                                                ⭐
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Review;
