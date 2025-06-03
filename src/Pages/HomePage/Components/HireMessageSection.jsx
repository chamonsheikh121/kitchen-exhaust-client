import { Link } from 'react-router-dom';

const HireMessageSection = ({ firstPart, lastPart }) => {
  return (
    <section
  className="relative text-white py-32 px-6 flex flex-col items-center text-center"
>
  {/* Background Blur Effect */}
  <div className="absolute inset-0 bg-black/5"></div>

  {/* Content Wrapper */}
  <div className="relative space-y-10 z-10 max-w-3xl">
    <h2 className="md:text-5xl text-3xl font-extrabold mb-4 text-gray-700">
      {firstPart ? firstPart : 'Need a Professional'}{' '}
      <span className="text-green-800">
        {lastPart ? lastPart : 'Kitchen Exhaust System?'}
      </span>
    </h2>
    <p className="text-lg mb-6 text-gray-600">
      Take the first step towards a cleaner, safer kitchen with our expert supply, installation, and maintenance services for exhaust and ventilation systems. Get your free consultation today!
    </p>
    <Link
      to={'tel:+65 8691 2550'} // Replace with your phone number or a proper call link
      className="w-full block"
    >
      <button className="bg-gradient-to-t from-green-400 to-green-800 text-green-100 font-semibold px-14 py-3 rounded-md hover:scale-105 md:text-lg shadow-lg transition-all duration-300 hover:bg-green-700 hover:text-white hover:shadow-xl">
        Call Us Today
      </button>
    </Link>
  </div>
</section>

  );
};

export default HireMessageSection;
