import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // import AOS styles
import AOS from 'aos'; // import AOS library


const stats = [
    { id: 1, value: 1100, suffix: "+", label: "Clients Served" },
    { id: 2, value: 2000, suffix: "+", label: "Projects Completed" },
    { id: 3, value: 20, suffix: "+", label: "Employees" },
    { id: 4, value: 5, suffix: "", label: "Average Review", icon: "⭐" },
];

const WeHaveCompleted = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 }); // Ensures animation starts only when 30% is visible


    useEffect(() => {

        AOS.init({
            duration: 2000,
            easing: 'ease',
            once: false,
        });


        AOS.refresh();

    }, []);


    return (
      <div data-aos="fade-up">
          <motion.div
        
            ref={ref}
            className="bg-gradient-to-b md:rounded-tl-full shadow-2xl shadow-green-950 md:rounded-br-full from-green-600 to-green-400 text-white py-8 px-6 "
        >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map(({ id, value, suffix, label, icon }) => (
                    <motion.div
                        key={id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: id * 0.2 }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="md:text-4xl text-3xl font-bold flex items-center gap-2">
                            {icon && <span className="md:text-5xl">{icon}</span>}
                            {inView ? <CountUp end={value} duration={2.5} /> : "0"}
                            {suffix}
                        </h2>
                        <p className="md:text-lg font-medium">{label}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
      </div>
    );
};

export default WeHaveCompleted;
