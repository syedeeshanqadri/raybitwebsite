"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    service: "",
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
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("✅ Email sent successfully!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          contact: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send email: " + result.error);
      }
    } catch (err) {
      setStatus("❌ Error sending email: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex-1 bg-white px-6 py-5 rounded-[16px] shadow space-y-4"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h3 className="text-[16px] sm:text-2xl font-[500]">
        Please fill in the information below
      </h3>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col w-full">
          <label className="font-[500] text-[14px] sm:text-lg mb-1">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="border border-[#D6D6D6] px-4 py-2 rounded-[4px]"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="font-[500] text-[14px] sm:text-lg mb-1">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="border border-[#D6D6D6] px-4 py-2 rounded-[4px]"
            required
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="font-[500] text-[14px] sm:text-lg mb-1">
          Your Contact
        </label>
        <input
          type="text"
          name="contact"
          onChange={handleChange}
          value={formData.contact}
          className="border border-[#D6D6D6] px-4 py-2 rounded-[4px]"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-[500] text-[14px] sm:text-lg mb-1">
          Type of Service
        </label>
        <select
          name="service"
          onChange={handleChange}
          value={formData.service}
          className="border border-[#D6D6D6] px-4 py-2 rounded-[4px]"
        >
          <option value="">Please Choose an Option</option>
          <option value="web">Progressive Web Applications</option>
          <option value="mobile">Customized Mobile Applications</option>
          <option value="erp">ERP Solutions</option>
          <option value="automation">Automation Solutions</option>
          <option value="white_label">White Labelled Products</option>
          <option value="marketing">Digital Marketing Services</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="font-[500] text-[14px] sm:text-lg mb-1">
          Your Message
        </label>
        <textarea
          name="message"
          onChange={handleChange}
          value={formData.message}
          className="border border-[#D6D6D6] px-4 py-2 rounded-[4px] min-h-[120px]"
        />
      </div>

      <button
        type="submit"
        onClick={(e) => {
          if (!formData.name || !formData.email) {
            e.preventDefault();
            setStatus("⚠️ Please fill in required fields (Name and Email)");
            return;
          }
        }}
        disabled={loading}
        className={`w-full py-3 rounded-[8px] text-lg font-[500] transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-primary text-white hover:opacity-90"
        }`}
      >
        {loading ? "Sending..." : "Submit Message"}
      </button>

      {status && <p className="text-center text-sm mt-2">{status}</p>}
    </motion.form>
  );
}
