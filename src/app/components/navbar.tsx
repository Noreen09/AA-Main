"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#400101] border-b-2 border-[#ffffff] shadow-lg fixed z-50 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/"
            width="100"
            height="100"
            className="h-10"
            alt="Aim Apogee Logo"
          />
          <span className="self-center text-2xl font-semibold text-white uppercase tracking-wider">
            Aim Apogee
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#ffffff] hover:text-[#400101]"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navbar Items */}
        <div
          className={`w-full md:flex md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 text-white font-medium">
            <li className="relative z-50">
              {/* Dropdown Button */}
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full py-2 px-3 hover:text-[#ffffff] md:hover:text-[#ffffff] transition duration-300 ease-in-out"
              >
                Explore
                <svg
                  className={`w-4 h-4 ml-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeWidth="2" d="M1 1l4 4 4-4" />
                </svg>
              </button>

              {/* Dropdown Content */}
              <div
                className={`absolute left-0 mt-2 w-72 bg-[#ffffff] text-[#10121a] rounded-lg shadow-xl transition-all duration-300 transform ${
                  isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <ul className="py-3">
                  {/* Dropdown Item 1 */}
                  <li className="hover:bg-[#400101] hover:text-white px-4 py-3 rounded-lg transition duration-300 ease-in-out">
                    <Link href="#" className="block">
                      <h4 className="font-semibold ">AA Studios</h4>
                      <p className="text-sm">
                        Explore our latest animation projects and creations.
                      </p>
                    </Link>
                  </li>

                  {/* Dropdown Item 2 */}
                  <li className="hover:bg-[#400101] hover:text-white px-4 py-3 rounded-lg transition duration-300 ease-in-out">
                    <Link href="#" className="block">
                      <h4 className="font-semibold  ">AA Academy</h4>
                      <p className=" text-sm">
                        Learn from professionals with courses on animations and design.
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="about"
                className="block py-2 px-3 hover:text-[#ffffff] hover:underline md:hover:text-[#ffffff]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className="block py-2 px-3 hover:text-[#ffffff] hover:underline md:hover:text-[#ffffff]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
