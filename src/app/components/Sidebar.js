"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarLink from "./SidebarLink";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

const Sidebar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      {/* Navbar for larger screens */}
      <nav className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-90 md:block hidden">
        <div className="flex flex-wrap lg:py-4 items-center justify-between mx-auto px-4 py-2">
          <Link
            href="/"
            className="text-2xl md:text-5xl text-white font-semibold"
          >
            <Logo />
          </Link>
          <div className="menu md:w-auto" id="large-screen-navbar">
            <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-0">
              {navItems.map((link, index) => (
                <li key={index}>
                  <SidebarLink
                    href={link.path}
                    title={link.name}
                    isActive={pathname === link.path}
                    onClick={handleLinkClick}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar and Overlay */}
      <div className="md:hidden">
        <nav className="fixed top-0 left-0 right-0 z-30 bg-black bg-opacity-90">
          <div className="flex flex-wrap lg:py-4 items-center justify-between mx-auto px-4 py-2">
            <Link
              href="/"
              className="text-lg sm:text-xl md:text-sm lg:text-3xl xl:text-4xl text-white font-semibold"
            >
              <Logo />
            </Link>
            <div className="mobile-menu block md:hidden">
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="text-white z-40 relative"
              >
                {navbarOpen ? (
                  <RxCross1 className="h-6 w-6" />
                ) : (
                  <RxHamburgerMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {navbarOpen && (
            <motion.div
              className="menu-overlay fixed top-0 left-0 right-0 bottom-0 bg-black backdrop-blur-sm bg-opacity-90 flex items-center justify-center z-20"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <ul className="text-center space-y-6">
                {navItems.map((link) => (
                  <li key={link.name}>
                    <SidebarLink
                      href={link.path}
                      title={link.name}
                      isActive={pathname === link.path}
                      onClick={handleLinkClick}
                    />
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Sidebar;