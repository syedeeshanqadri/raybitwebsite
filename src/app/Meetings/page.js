"use client";

import React, { useEffect } from "react";

export default function Meetings() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4 font-poppins">
      <h1 className="text-3xl font-medium mb-2 text-center">
        Schedule an Instant Meeting
      </h1>
      <p className="text-center mb-3 max-w-2xl">
        A free business consultation and discussion meeting can be the catalyst
        for your success, providing comprehensive insights and tailored
        strategies to elevate your business to new heights
      </p>

      <div
        className="calendly-inline-widget w-full"
        data-url="https://calendly.com/raybittechnologies/project-discussion-meeting?hide_gdpr_banner=1"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
}
