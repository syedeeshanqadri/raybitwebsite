"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "/public/images/logo.svg";
export default function Footer() {
  const pathname = usePathname();
  return (
    <section className="bg-[#FBFCFE] pb-4 px-6 md:px-20 lg:px-[95px]">
      <footer className="border-t-[1.5px] pt-6 text-sm text-[#14202E9E] font-poppins">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-left">
          {/* Logo */}
          <div className="flex flex-col gap-4 items-start sm:bg-transparent bg-[#F2F3F4] py-4 sm:py-0 cursor-pointer">
            <Link href="/">
              <Logo className="h-10 w-auto" aria-label="Raybit Logo" />
            </Link>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium mb-2 text-[#1B2128]">Company</h4>
            <ul className="space-y-1 font-[500]  [&>li]:cursor-pointer">
              <li>
                {" "}
                <Link
                  href="/AboutUs"
                  className={`block cursor-pointer ${
                    pathname === "/AboutUs" ? "text-primary underline" : ""
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>Commission Program</li>
              <li>
                <Link
                  href="/Careers"
                  className={`block cursor-pointer ${
                    pathname === "/Careers" ? "text-primary underline" : ""
                  }`}
                >
                  Careers
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/Certificate"
                  className={`block cursor-pointer ${
                    pathname === "/Certificate" ? "text-primary underline" : ""
                  }`}
                >
                  Certificate Verification
                </Link>
              </li>
              <Link
                href="/Meetings"
                className={`block cursor-pointer ${
                  pathname === "/Meetings" ? "text-primary underline" : ""
                }`}
              >
                Shedule a Meeting
              </Link>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium mb-2 text-[#1B2128]">Services</h4>
            <ul className="space-y-1 font-[500] [&>li]:cursor-pointer">
              <li>
                <Link
                  href="/Services/Consultation"
                  className={`block cursor-pointer ${
                    pathname === "/Services/Consultation"
                      ? "text-primary underline"
                      : ""
                  }`}
                >
                  {" "}
                  Business Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/Services/SoftwareDev"
                  className={`block cursor-pointer ${
                    pathname === "/Services/SoftwareDev"
                      ? "text-primary underline"
                      : ""
                  }`}
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/Services/ERP"
                  className={`block cursor-pointer ${
                    pathname === "/Services/ERP" ? "text-primary underline" : ""
                  }`}
                >
                  ERP Solution
                </Link>
              </li>
              <li>
                <Link
                  href="/Services/MobileApp"
                  className={`block cursor-pointer ${
                    pathname === "/Services/MobileApp"
                      ? "text-primary underline"
                      : ""
                  }`}
                >
                  Mobile App Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-medium mb-2 text-[#1B2128]">Follow Us</h4>
            <ul className="space-y-1 font-[500] [&>li]:cursor-pointer">
              <li>
                <a
                  href="https://www.linkedin.com/company/raybit-technologies/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/raybittechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/raybittechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@RaybitTechnologiesOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* About Raybit */}
          <div>
            <h4 className="font-medium mb-2 text-[#1B2128]">
              Raybit Technologies
            </h4>
            <p className="font-[500] ">
              Raybit Technologies Pvt Ltd is a Global Software Consulting &
              Development company with expertise in building scalable workflow
              models for different industry uprights.
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 mt-6 justify-center md:justify-start">
          <a
            href="https://www.facebook.com/raybittechnologies"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-block hover:opacity-80 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 1024 1024"
              fill="#14202E9E"
              className="text-gray-700 transition-colors duration-200"
            >
              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/raybittechnologies"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-block hover:opacity-80 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01" />
              </g>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/raybit-technologies/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-block hover:opacity-80 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              />
            </svg>
          </a>
        </div>

        {/* Bottom Links */}
        <div className="mt-6 pt-4 flex flex-col md:flex-row justify-center md:justify-between items-center text-xs text-[#14202E9E] max-w-7xl mx-auto font-[500] text-center md:text-left">
          <p className="max-w-[90%] md:max-w-none">
            © Copyright 2025 | Raybit Technologies Private Limited | All rights
            reserved.
          </p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 mt-2 md:mt-0">
            <span>
              {" "}
              <Link
                href="/TermsConditions"
                className={`block cursor-pointer ${
                  pathname === "/TermsConditions"
                    ? "text-primary underline"
                    : ""
                }`}
              >
                Terms and Conditions
              </Link>
            </span>
            <span>
              <Link
                href="/PrivacyPolicy"
                className={`block cursor-pointer ${
                  pathname === "/PrivacyPolicy" ? "text-primary underline" : ""
                }`}
              >
                Privacy Policy
              </Link>
            </span>
            <span>
              {" "}
              <Link
                href="/Cancellation"
                className={`block cursor-pointer ${
                  pathname === "/Cancellation" ? "text-primary underline" : ""
                }`}
              >
                Cancellation & Refund Policy
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}
