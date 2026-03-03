"use client";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function Modal({ isOpen, onClose, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 ">
      <div className=" rounded-lg max-w-lg w-full relative  max-h-[100vh] overflow-y-auto scrollbar-hide ">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-3xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
