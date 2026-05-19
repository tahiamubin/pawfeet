import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <Image
            src={"/images/logo 1-01.png"}
            alt="logo"
            width={150}
            height={150}
          ></Image>
          <p className="text-gray-300">
            Bangladesh's most trusted pet adoption platform. <br /> Every pet
            deserves a loving home.
          </p>
          <div className="grid  grid-cols-3 gap-4">
            <FaInstagram />
            <FaFacebook />
            <FaLinkedinIn />
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Adopt</h6>
          <a className="link link-hover hover:text-[#5A8F6E]">Dogs</a>
          <a className="link link-hover hover:text-[#5A8F6E]">Cat</a>
          <a className="link link-hover hover:text-[#5A8F6E]">
            Birds & Rabbits
          </a>
          <a className="link link-hover hover:text-[#5A8F6E]">Senior pets</a>
        </nav>
        <nav>
          <h6 className="footer-title">Dashboard</h6>
          <a className="link link-hover hover:text-[#5A8F6E]">My requests</a>
          <a className="link link-hover hover:text-[#5A8F6E]">My listings</a>
          <a className="link link-hover hover:text-[#5A8F6E]">Add a pet</a>
          <a className="link link-hover hover:text-[#5A8F6E]">Senior pets</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover hover:text-[#5A8F6E]">Terms of use</a>
          <a className="link link-hover hover:text-[#5A8F6E]">Privacy policy</a>
          <a className="link link-hover hover:text-[#5A8F6E]">Cookie policy</a>
        </nav>   
       
      </footer>
        <div className="flex justify-between items-center bg-neutral text-neutral-content p-4">
          <p>© 2026 Pawfect Home. All rights reserved.</p>
          <p>Made with ❤️ for animals across Bangladesh</p>
        </div>
      
    </div>
  );
};

export default Footer;
