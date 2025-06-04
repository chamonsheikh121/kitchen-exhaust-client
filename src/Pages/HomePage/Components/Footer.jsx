import React from 'react';
import TextAnimation from './TextAnimation';
import { NavLink } from 'react-router-dom';

const Footer = () => {

  const navLinks = [
    // { path: "/", label: "Home" },
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/services", label: "Services" },
  ];

  return (
    <div>
      <footer className="flex justify-around text-white items-center bg-black p-10">

        <div className="flex justify-center w-full flex-col items-center">
          <h5 className="text-2xl font-bold border-b-2 py-2">Pages</h5>
          <div className="flex flex-col">
            {navLinks.map(({ path, label }) => (
              <NavLink
                onClick={(e) => {
                  e.preventDefault(); // Prevent React Router's default navigation
                  window.location.href = path; // Force a full reload
                }}
                key={path}
                to={path}
                className={({ isActive }) =>
                  `relative my-2 backdrop-blur-md hover:text-green-700 mr-1 rounded-sm text-nowrap text-sm transition-all
            ${isActive ? "text-green-400 after:w-full font-extrabold" : "duration-500"}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        <aside className="w-full text-center">
          <div className="text-white mb-6">
            <TextAnimation textColor={"white"} />
          </div>
          <p className="font-bold text-xl mb-1">
            Blessman Engineering – Expert Kitchen & Exhaust Ventilation Systems
          </p>
          <p>
            Delivering efficient and reliable ventilation solutions for healthier kitchens since 2015.
          </p>
          <hr className='my-5'/>
          <address>location: 10 ANSON ROAD
            #10-11
            INTERNATIONAL PLAZA
            SINGAPORE (079903)
          </address>
          <p>email: blessmanengineering7@gmail.com, <br />
            phone: +652342322
          </p>
          <p className="mt-4">Blessman Engineering © {new Date().getFullYear()} - All rights reserved</p>
        </aside>

        <div className="w-full"></div>

      </footer>

    </div>
  );
};

export default Footer;