import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';


const AboutUs = () => {

  const [loading, setLoading] = useState(false)

  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };




  const sendEmail = (e) => {
    e.preventDefault();


    setLoading(true);

    emailjs.sendForm('service_9y0agtn', 'template_lhgszij', form.current, 'PvcVsaugKqJgSNDnv')
      .then((result) => {

        Swal.fire({
          title: "Message Sent!",
          text: "Thank you for reaching out to us. We'll get back to you as soon as possible.",
          icon: "success",
          confirmButtonText: "Okay",
          confirmButtonColor: "#3085d6"
        });
        form.current.reset(); // ✅ Reset the form here
        setLoading(false);
      }, (error) => {

        Swal.fire({
          title: "Message Failed",
          text: "Oops! Something went wrong. Please try again later or contact us directly.",
          icon: "error",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#d33"
        });

        setLoading(false);
      });
  };

  return (

    <motion.section
      initial={{ opacity: 0, scale: 0.9 }} // Start small and invisible
      animate={{ opacity: 1, scale: 1 }}  // Grow and appear
      transition={{ duration: 1, ease: "easeOut" }} // Smooth effect
      className="min-h-screen flex items-center justify-center"
      aria-label="Our Services"
    >
      <section className='relative w-full'>
        {/* Hero Section */}
        <section className="relative py-20 px-6 md:px-16 bg-gray-900 text-white text-center">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-blue-600 opacity-20 blur-3xl"></div>

          {/* Animated Heading */}
          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl py-4 font-extrabold bg-gradient-to-r from-green-400 to-green-800 text-transparent bg-clip-text"
          >
            About Blessman Engineering
          </motion.h2>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Based in <strong>Singapore</strong>, Blessman Engineering is a trusted name in the field of <strong>kitchen exhaust systems and ventilation solutions</strong>.
            Led by <strong>Mr. Samsul Alom</strong>, we specialize in designing, installing, and maintaining high-performance systems that ensure <strong>safety, hygiene, and efficiency</strong> for commercial kitchens of all sizes.
          </p>

          {/* Service Highlights */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <div className="px-6 py-3 md:w-auto w-full bg-white/10 border border-white/20 rounded-lg shadow-md hover:bg-white/20 transition-all">
              🏗️ Tailored Ventilation System Design
            </div>
            <div className="px-6 py-3 md:w-auto w-full bg-white/10 border border-white/20 rounded-lg shadow-md hover:bg-white/20 transition-all">
              🛠️ Quality Installation & Long-term Maintenance
            </div>
            <div className="px-6 py-3 md:w-auto w-full bg-white/10 border border-white/20 rounded-lg shadow-md hover:bg-white/20 transition-all">
              🌬️ Advanced Airflow & Noise Control Solutions
            </div>
          </div>
        </section>


        <section className="relative max-w-6xl mx-auto">
          <h1 className="text-5xl my-20  font-bold  text-center text-green-800"></h1>

          <p className="mb-6 text-lg leading-relaxed">
            Blessman Engineering, founded by Samsul Alom, is a trusted name in Singapore specializing in <strong>kitchen exhaust and ventilation systems.</strong>
            Based at Jurong Road, we proudly provide top-notch services across all locations in Singapore.
          </p>

          <p className="mb-6 text-lg leading-relaxed">
            Our company boasts a team of highly skilled experts who have served numerous satisfied clients. We have earned a solid reputation as a reliable and professional service provider with no bad reviews.
          </p>

          <p className="mb-6 text-lg leading-relaxed">
            At Blessman Engineering, we ensure easy communication, offering <strong>free spot inspections</strong> and complete service including all necessary instruments and equipment for your project.
            You can explore all the services we provide by visiting our <Link to="/services" className="text-green-600 underline hover:text-green-800">Services page</Link>.
          </p>

          <p className="mb-10 text-lg leading-relaxed">
            Contact us today at <a
              href="mailto:blessmanengineering7@gmail.com"
              className="text-green-600 underline hover:text-green-800"
            >
              blessmanengineering7@gmail.com
            </a>
             or call <a href="tel:+652342322" className="text-green-600 underline hover:text-green-800">+65 2342 322</a>.
            We look forward to assisting you with your kitchen ventilation needs!
          </p>
 <hr className='border-2 border-green-600 my-20'/>
          <h2 className="text-3xl font-semibold mb-4 text-center text-green-700">Kindly fill in your details, and we’ll be in touch soon.</h2>

          <form ref={form} onSubmit={sendEmail} className="max-w-3xl text-gray-600 mx-auto p-8 rounded-lg ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 bg-white shadow-md py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  placeholder="Wei Ming ***"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border bg-white shadow-md border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  placeholder="+65 **** ****"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border bg-white shadow-md border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="example@gmail.com"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white shadow-md border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Your message or inquiry"
              ></textarea>
            </div>
            <input type="hidden" name="time" value={new Date().toLocaleString()} />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mb-20 bg-green-700 shadow-md  text-white py-3 rounded-md font-semibold hover:bg-green-800 transition-colors"
            >
              {loading ? <span className='flex justify-center gap-1 items-end'>Loading <span className="loading loading-dots loading-sm"></span></span> : 'Submit'}
            </button>
          </form>

        </section>
      </section>

    </motion.section>





  );
};

export default AboutUs;
