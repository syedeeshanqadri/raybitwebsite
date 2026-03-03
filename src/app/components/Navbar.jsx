"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "/public/images/logo.svg";
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/Home" },
    { name: "About Us", href: "/AboutUs" },
    { name: "Services", href: "/Services" },
    { name: "Portfolio", href: "/Portfolio" },
    // { name: "Blogs", href: "/Blogs" },
  ];

  // This will make Services active on its sub-pages
  const isServicesActive =
    pathname === "/Services" ||
    pathname.startsWith("/Services/Consultation") ||
    pathname.startsWith("/Services/SoftwareDev") ||
    pathname.startsWith("/Services/ERP") ||
    pathname.startsWith("/Services/DigitalMarketing") ||
    pathname.startsWith("/Services/WebDesign") ||
    pathname.startsWith("/Services/MobileApp");

  return (
    <header className="bg-white shadow-sm top-0 w-full z-50 border-b border-b-[#D6D6D680] ">
      <div className="mx-auto px-4 md:px-6 lg:px-[100px] py-4 md:py-[28px] flex items-center justify-between xl:container xl:mx-auto">
        {/* Logo */}
        <div className="flex items-center lg:gap-20 gap-[0.5rem]">
          <Link href="/">
            <Logo className="h-10 w-auto" aria-label="Raybit Logo" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ name, href }) => {
              const isActive =
                name === "Services" ? isServicesActive : pathname === href;

              return (
                <div key={name} className="relative flex items-center">
                  <Link
                    href={href}
                    className={`font-[500] transition ${
                      isActive
                        ? "text-primary"
                        : "text-[#212529] hover:text-primary"
                    }`}
                  >
                    {name}
                  </Link>
                  {isActive && (
                    <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rotate-45"></span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Nav Button */}
        <nav className="hidden md:flex">
          <Link
            href="/Contact"
            className={`ml-4 lg:px-8 md:px-5 py-3 rounded-lg font-medium border transition border-primary ${
              pathname === "/Contact"
                ? "bg-white text-primary"
                : "bg-primary text-white hover:bg-white hover:text-primary"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4">
          {navLinks.map(({ name, href }) => {
            const isActive =
              name === "Services" ? isServicesActive : pathname === href;

            return (
              <Link
                key={name}
                href={href}
                className={`block py-2 font-[500] ${
                  isActive
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {name}
              </Link>
            );
          })}
          <Link
            href="/Contact"
            className={`block mt-2 px-4 py-2 rounded text-center border font-[500] ${
              pathname === "/Contact"
                ? "text-primary bg-white border-primary"
                : "text-white bg-primary border-primary"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
