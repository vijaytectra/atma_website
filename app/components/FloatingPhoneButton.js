"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingPhoneButton({ phoneNumber }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Format the phone number with +1 if not present
  const formatNumber = (num) => {
    let cleaned = num.replace(/\D/g, "");
    if (!cleaned.startsWith("1") && cleaned.length === 10) {
      cleaned = `1${cleaned}`;
    }
    return `+${cleaned}`;
  };

  const handleClick = () => {
    if (isClient) {
      window.location.href = `tel:${formatNumber(phoneNumber)}`;
      // Reset after a short delay to allow multiple clicks
      setTimeout(() => {
        window.location.href = "#";
      }, 100);
    }
  };

  return (
    <div className="fixed left-4 bottom-4 z-50">
      <button
        onClick={handleClick}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#dc1d46] !text-white shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#dc1d46] focus:ring-opacity-50"
        aria-label="Call us"
      >
        <Phone size={20} />
      </button>
    </div>
  );
}
