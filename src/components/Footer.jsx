import React from "react";
import Banner from "./images/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              ZAAD COLLECTIONS
            </h1>
            <p className="text-gray-300">
              Discover the latest trends in fashion with Zaad Collections. We bring you premium quality clothing and accessories that combine style, comfort, and affordability.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* Important Links */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Quick Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-amber-500 hover:translate-x-1 duration-300 text-gray-200"
                    key={link.title}
                  >
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Support
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer hover:text-amber-500 hover:translate-x-1 duration-300 text-gray-200">
                  <a href="/#">FAQ</a>
                </li>
                <li className="cursor-pointer hover:text-amber-500 hover:translate-x-1 duration-300 text-gray-200">
                  <a href="/#">Shipping & Returns</a>
                </li>
                <li className="cursor-pointer hover:text-amber-500 hover:translate-x-1 duration-300 text-gray-200">
                  <a href="/#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            {/* Social Links and Contact Info */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Follow Us
              </h1>
              <div className="flex items-center gap-3">
                <a href="#" className="hover:text-amber-500 duration-300">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="hover:text-amber-500 duration-300">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="hover:text-amber-500 duration-300">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <FaLocationArrow />
                  <p>Gardo, Puntland, Somalia</p>
                </div>
                <div className="flex items-center gap-3 mt-3 text-gray-300">
                  <FaMobileAlt />
                  <p>+252 906444290</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;