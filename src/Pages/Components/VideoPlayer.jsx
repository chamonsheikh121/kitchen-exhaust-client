
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";


const VideoPlayer = ({ isOpen, setIsOpen }) => {

    const videoSrc = "https://res.cloudinary.com/dz28duolk/video/upload/v1740300554/Team_Webio_okk_n1xz3i.mp4";


    return (
        <div

            className="flex items-center justify-center ">



            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: .5 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex     items-center justify-center z-50"
                        onClick={() => setIsOpen(false)}
                    >
                        <button
                            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={24} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="relative shadow-2xl rounded-md shadow-black w-full max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <video
                                className="w-full rounded-lg shadow-lg"
                                src={videoSrc}
                                controls
                                preload="auto"
                                autoPlay
                                controlsList="nodownload"
                                onContextMenu={(e) => e.preventDefault()} // Disable right-click
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default VideoPlayer;


{/* 
  import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Vimeo from "@vimeo/player";

const VideoPlayer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const videoId = "1054936036"; // Your Vimeo video ID
    const iframeRef = useRef(null);

    useEffect(() => {
        if (isOpen && iframeRef.current) {
            const player = new Vimeo(iframeRef.current);
            player.play(); // Auto-play when modal opens
        }
    }, [isOpen]);

    return (
        <div className="flex items-center justify-center">
            {/* Video Thumbnail 
        //     <div className={`${isOpen ? 'hidden' : 'block'} relative w-[800px] h-[500px] cursor-pointer group`} onClick={() => setIsOpen(true)}>
        //         <iframe
        //             src={`https://player.vimeo.com/video/${videoId}?h=ec5a395384&title=0&byline=0&portrait=0`}
        //             className="w-full h-full object-cover rounded-lg"
        //             allow="autoplay; fullscreen"
        //             allowFullScreen
        //         />
        //         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
        //             <button className="bg-white p-4 rounded-full shadow-lg">
        //                 ▶️
        //             </button>
        //         </div>
        //     </div>

        //     {/* Modal */}
//     <AnimatePresence>
//         {isOpen && (
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//                 onClick={() => setIsOpen(false)}
//             >
//                 <button
//                     className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
//                     onClick={() => setIsOpen(false)}
//                 >
//                     <X size={24} />
//                 </button>
//                 <motion.div
//                     initial={{ scale: 0.8 }}
//                     animate={{ scale: 1 }}
//                     exit={{ scale: 0.8 }}
//                     className="relative shadow-2xl rounded-md shadow-black w-full max-w-5xl"
//                     onClick={(e) => e.stopPropagation()}
//                 >
//                     {/* Vimeo Player */}
//                     <iframe
//                         ref={iframeRef}
//                         src={`https://player.vimeo.com/video/${videoId}?h=ec5a395384&autoplay=1&title=0&byline=0&portrait=0`}
//                         className="w-full h-[500px] rounded-lg shadow-lg"
//                         allow="autoplay; fullscreen"
//                         allowFullScreen
//                     />
//                 </motion.div>
//             </motion.div>
//         )}
//     </AnimatePresence>
// </div>
//     );
// };

// export default VideoPlayer;



