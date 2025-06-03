import Marquee from "react-fast-marquee";


const MarqueSectionRight = () => {

const cardSlides = [
  {
    name: "Aaliyah Mahmoud",
    description: "Blessman Engineering delivered exactly what we needed. Our kitchen exhaust system is efficient, quiet, and compliant with all Singapore regulations. Highly impressed with their professionalism."
  },
  {
    name: "Jakub Nowicki",
    description: "From the initial consultation to the final installation, Samsul Alom and his team were outstanding. They clearly know their craft — we’ve seen a major reduction in heat and smoke."
  },
  {
    name: "Chiara Bianchi",
    description: "We run a busy restaurant in central Singapore, and thanks to Blessman Engineering, our kitchen is now safer and more comfortable for the staff. A truly reliable partner."
  },
  {
    name: "Omar El-Farouk",
    description: "Top-notch service from start to finish. The exhaust system was customized to our space and works flawlessly. I appreciate how Mr. Samsul personally oversaw the project."
  },
  {
    name: "Sophie Tremblay",
    description: "We’ve worked with other contractors before, but none matched the professionalism of Blessman Engineering. The team was punctual, tidy, and transparent throughout the process."
  },
  {
    name: "Renato Silva",
    description: "Their attention to detail is unmatched. The ductwork, filters, and airflow setup were all done perfectly. Highly recommend them to anyone in the F&B industry."
  },
  {
    name: "Mai Nguyen",
    description: "Blessman Engineering helped us meet NEA compliance smoothly. Excellent workmanship and responsive communication from Mr. Samsul and his staff."
  },
  {
    name: "Zubair Khan",
    description: "We were struggling with poor ventilation until Blessman stepped in. Now our system runs efficiently, and we’ve had zero complaints since. Thank you!"
  },
  {
    name: "Lucía Fernández",
    description: "The professionalism and knowledge of the Blessman team really stood out. Everything was explained clearly, and the results speak for themselves."
  },
  {
    name: "Kenji Tanaka",
    description: "Very satisfied with the overall service. Our staff noticed the difference immediately. Clean air, reduced heat, and smooth operation — well done!"
  }
];







    return (
        <div className="rotate-2 w-[calc(100%-15px)] ml-1  ">
            <Marquee


                gradient
                gradientWidth={200}
                speed={120}
                direction="right"

                gradientColor="#ffffff"
            >
                {
                    cardSlides?.map((item, i) => <div className="w-[400px]  h-60 bg-white mx-4 p-6 space-y-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-start flex-col  justify-center">
                        {/* Profile Section */}
                        
                         <div className="">
                            <div className="w-full  space-y-6 ">
                                <div className="">

                                    <h1 className="text-xl font-semibold text-gray-900">
                                        {(() => {
                                            const firstName = item.name.split(" ")[0]; // Get first name
                                            const visiblePart = firstName.slice(0, 2); // Take first 4 letters
                                            const hiddenPart = firstName.length > 4 ? "★".repeat(firstName.length - 4) : ""; // Replace remaining with stars
                                            return visiblePart + hiddenPart;
                                        })()}
                                    </h1>

                                </div>

                                {/* Description */}
                                <p className=" text-gray-700 line-clamp-4 ">
                                    {item.description.length > 200
                                        ? item.description.slice(0, 200) + "..."
                                        : item.description}
                                </p>
                            </div>

                            {/* Project Image */}
                            <div className="rounded-lg w-full overflow-hidden">
                               
                            </div>
                        </div>
                    </div>

                    )
                }
            </Marquee>
        </div>
    );
};

export default MarqueSectionRight;