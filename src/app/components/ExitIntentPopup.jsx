"use client";

import React, { useEffect, useState, useRef } from "react";

const ExitIntentPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const hasSeenPopup = useRef(false); // 👈 In-memory only

  useEffect(() => {
    if (typeof window === "undefined") return;

    let lastMouseY = window.innerHeight;

    const handleMouseMove = (e) => {
      if (cooldown || hasSeenPopup.current) return;

      const currentMouseY = e.clientY;
      const speed = lastMouseY - currentMouseY;
      lastMouseY = currentMouseY;

      if (speed > 15 && currentMouseY <= 1) {
        setShowPopup(true);
        setCooldown(true);
        hasSeenPopup.current = true; // 👈 Mark as seen for this load
        setTimeout(() => setCooldown(false), 3000);
      }
    };

    const handleMouseLeave = (e) => {
      if (cooldown || hasSeenPopup.current || e.clientY > 1) return;
      setShowPopup(true);
      setCooldown(true);
      hasSeenPopup.current = true; // 👈 Mark as seen for this load
      setTimeout(() => setCooldown(false), 3000);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [cooldown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/crm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, voucher: "RAYBIT20" }),
    });
    setSubmitted(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setEmail("");
    setSubmitted(false);
    hasSeenPopup.current = true; // 👈 Mark as seen when user clicks "No thanks"
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[9999]">
      <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-2xl max-w-md w-full mx-4 border border-blue-100">
        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4H5z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Claim Your Exclusive Offer!
              </h2>
              <p className="text-gray-600 mb-4">
                Get <span className="font-bold text-primary">20% discount</span>{" "}
                on Raybit Technologies products by registering below. The
                voucher will be linked to your account.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-center">
                <p className="font-mono text-lg font-bold text-gray-800 tracking-wider">
                  RAYBIT20
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Will be activated in your account
                </p>
              </div>

              <div className="flex flex-col space-y-3">
                <button
                  type="submit"
                  className="bg-primary  text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Claim Voucher & Continue
                </button>
                <button
                  type="button"
                  onClick={closePopup}
                  className="text-gray-500 hover:text-gray-700 text-sm font-medium"
                >
                  No thanks, I'll pass
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Voucher Claimed!
            </h2>
            <p className="text-gray-600 mb-6">
              Your <span className="font-bold">RAYBIT20</span> voucher has been
              linked to your account. Check your email for confirmation.
            </p>
            <button
              onClick={closePopup}
              className="bg-primary text-white font-medium py-3 px-6 rounded-lg transition-colors w-full"
            >
              Continue Browsing
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExitIntentPopup;
