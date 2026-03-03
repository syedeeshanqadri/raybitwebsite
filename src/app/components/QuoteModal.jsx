// "use client";
// import Image from "next/image";
// import { Mail } from "lucide-react";
// import Modall from "./QuoteModall";
// import QuoteImg from "../../../public/images/quote.jpg";

// export default function QuoteModal({ isOpen, onClose }) {
//   return (
//     <Modall isOpen={isOpen} onClose={onClose} className="md:max-w-5xl w-full">
//       <div className="flex flex-col md:flex-row w-full md:max-w-5xl justify-center bg-white rounded-lg overflow-hidden ">
//         {/* Left Side */}
//         <div className="md:w-1/2 w-full p-8 flex flex-col justify-center font-poppins">
//           <h2 className="text-3xl font-[400] mb-4">Get a Free Quotation</h2>
//           <p className="mb-6 text-[#5F5F5F]">
//             Grow your business with us. Request a Free Quote about your project.
//             Our Specialists will review your project details and get in touch
//             with you within 24 hours.
//           </p>
//           <div className="flex items-center space-x-3">
//             <Mail className="w-5 h-5 text-[#212529]" />
//             <span className="font-[400]">team@raybittechnologies.com</span>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="md:w-1/2 w-full relative p-8 flex items-center justify-center">
//           <Image
//             src={QuoteImg}
//             alt="Office Background"
//             fill
//             className="absolute inset-0 object-cover z-0"
//           />

//           <div className="absolute inset-0 bg-cover bg-center" />
//           <div className="absolute inset-0 bg-black bg-opacity-30" />

//           <form className="relative z-10 w-full space-y-4 lg:py-10 px-6">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full p-3 rounded-md border border-gray-300 bg-white bg-opacity-90"
//             />
//             <input
//               type="email"
//               placeholder="Your Email Address"
//               className="w-full p-3 rounded-md border border-gray-300 bg-white bg-opacity-90"
//             />
//             <input
//               type="text"
//               placeholder="Your Contact Number"
//               className="w-full p-3 rounded-md border border-gray-300 bg-white bg-opacity-90"
//             />
//             <textarea
//               placeholder="Project Details"
//               className="w-full p-3 rounded-md border border-gray-300 bg-white bg-opacity-90"
//               rows="4"
//             />
//             <button
//               type="submit"
//               className="w-full bg-[#00b67a] hover:bg-[#01965d] text-white py-3 rounded-md font-medium "
//             >
//               Request a Free Quote
//             </button>
//           </form>
//         </div>
//       </div>
//     </Modall>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import Modall from "./QuoteModall";
import QuoteImg from "../../../public/images/quote.jpg";

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("✅ Quote request sent successfully!");
        setFormData({ name: "", email: "", contact: "", message: "" });
      } else {
        setStatus("❌ Failed to send: " + result.error);
      }
    } catch (err) {
      setStatus("❌ Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modall isOpen={isOpen} onClose={onClose} className="md:max-w-5xl w-full">
      <div className="flex flex-col md:flex-row w-full justify-center bg-white rounded-lg overflow-hidden">
        {/* Left Side */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center font-poppins">
          <h2 className="text-3xl font-[400] mb-4">Get a Free Quotation</h2>
          <p className="mb-6 text-[#5F5F5F]">
            Grow your business with us. Request a Free Quote about your project.
            Our specialists will review your project details and get in touch
            with you within 24 hours.
          </p>
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-[#212529]" />
            <span className="font-[400]">team@raybittechnologies.com</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 w-full relative p-8 flex items-center justify-center">
          <Image
            src={QuoteImg}
            alt="Office Background"
            fill
            className="absolute inset-0 object-cover z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />

          <form
            onSubmit={handleSubmit}
            className="relative z-10 w-full space-y-4 lg:py-10 px-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              value={formData.name}
              required
              className="w-full p-3 rounded-md border border-gray-300 bg-white bg-opacity-90"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              onChange={handleChange}
              value={formData.email}
              required
              className="w-full p-3 rounded-md border border-gray-300 bg-white bg-opacity-90"
            />
            <input
              type="text"
              name="contact"
              placeholder="Your Contact Number"
              onChange={handleChange}
              value={formData.contact}
              className="w-full p-3 rounded-md border border-gray-300 bg-white bg-opacity-90"
            />
            <textarea
              name="message"
              placeholder="Project Details"
              onChange={handleChange}
              value={formData.message}
              rows="4"
              className="w-full p-3 rounded-md border border-gray-300 bg-white bg-opacity-90"
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md font-medium text-white transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#00b67a] hover:bg-[#01965d]"
              }`}
            >
              {loading ? "Sending..." : "Request a Free Quote"}
            </button>

            {status && <p className="text-center text-sm mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </Modall>
  );
}
