import Marquee from "react-fast-marquee";


const MarqueSectionLeft = () => {

   const cardSlides = [
  {
    name: "Tan Wei Jie",
    description: "Mr. Samsul and his team did an excellent job in upgrading our kitchen ventilation. The airflow has improved significantly, and their team worked fast and cleanly."
  },
  {
    name: "Nadia Rahman",
    description: "Blessman Engineering helped us resolve a long-standing exhaust issue. Now our kitchen feels cooler and smoke-free even during peak hours. Highly dependable team!"
  },
  {
    name: "Haruto Sakamoto",
    description: "Their exhaust design was customized for our compact kitchen. The noise level is minimal, and everything runs smoothly. Great after-sales service too!"
  },
  {
    name: "Ravi Menon",
    description: "We chose Blessman Engineering for our central kitchen project, and it was the right decision. Their work meets all safety and hygiene standards in Singapore."
  },
  {
    name: "Michelle Koh",
    description: "Very responsive and transparent. The whole process—from site inspection to installation—was handled professionally. Samsul is knowledgeable and approachable."
  },
  {
    name: "Ahmed Bashir",
    description: "Our kitchen used to get unbearably hot. After Blessman’s installation, the ventilation is much better, and our staff are happier. Strongly recommended!"
  },
  {
    name: "Evelyn Lim",
    description: "I’ve worked with several contractors over the years, and Blessman Engineering stands out for their punctuality and honest pricing. Excellent workmanship."
  },
  {
    name: "Jason Tham",
    description: "Impressive planning and execution. The exhaust hoods and ducting were fitted perfectly, and everything passed inspection without issues. Reliable vendor."
  },
  {
    name: "Siti Nur Aisyah",
    description: "The Blessman team completed the job ahead of schedule without compromising quality. I appreciate the regular updates and detailed explanation at every stage."
  },
  {
    name: "Rajesh Nair",
    description: "Blessman Engineering helped us renovate our old kitchen exhaust system. Now it runs efficiently, with better suction and no foul smell. Thumbs up to Samsul and his crew!"
  }
];




    return (
        <div className="rotate-2 w-[calc(100%-15px)]">
            <Marquee

                gradient
                gradientWidth={200}
                speed={120}
                gradientColor="#ffffff"
            >
                {
                    cardSlides?.map((item, i) => <div
                        key={i}
                        className="w-[400px] h-60 bg-white mx-4 p-6 space-y-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-start flex-col  justify-center">
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

export default MarqueSectionLeft;