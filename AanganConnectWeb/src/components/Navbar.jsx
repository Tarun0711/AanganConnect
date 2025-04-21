import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
  const NavData = [
    { id: 1, title: "home", path: "/" },
    { id: 2, title: "about", path: "/about" },
    { id: 3, title: "features", path: "/features" },
    { id: 4, title: "pricing", path: "/pricing" },
    { id: 5, title: "contact us", path: "/contact" },
    // { id: 6, title: "testimonials", path: "/testimonials"},
  ];

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full h-[12vh] flex justify-between fixed z-[99] px-5 items-center bg-[#fff]">
      <div>
        { scrolled ? (<h1 className="nico">Aangan Connect</h1>):(
          <img
          className=" absolute w-[130px]"
          src={Logo}
          alt="logo"
        />)}
      </div>
      <div className="flex items-center gap-8 mr-[4vw]">
        {NavData.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            onClick={() => setActive(item.title)}
            className={`text-xl transition-all cursor-pointer nico capitalize ${
              item.title === active ? "text-[#ae1d1d] mb-1" : "text-black"
            }`}
          >
            {item.title}
            {item.title === active && (
              <hr className="w-full h-1 transition-all rounded-full bg-[#ae1d1d]" />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
