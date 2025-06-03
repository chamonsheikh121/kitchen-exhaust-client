import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = () => {
    const [style, setStyle] = useState({});

    const randomize = () => {
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;
        const fontSize = `${Math.random() * 1.2 + 0.3}rem`;
        const duration = Math.random() * 3 + 2; // 2s to 5s
        setStyle({
            top,
            left,
            fontSize,
            animationDuration: `${duration}s`,
        });
    };

    useEffect(() => {
        randomize(); // initial
        const interval = setInterval(() => {
            randomize(); // new position periodically
        }, 5000); // match animation duration max

        return () => clearInterval(interval);
    }, []);

    return (
        <FaStar
            className="absolute text-white star-fade"
            style={style}
        />
    );
};

export default function Stars() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(50)].map((_, i) => (
                <Star key={i} />
            ))}
        </div>
    );
}
