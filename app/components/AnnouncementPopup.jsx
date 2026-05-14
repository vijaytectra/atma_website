"use client";

import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AnnouncementPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      const isPopupClosed = sessionStorage.getItem("announcementPopupClosed");
      if (!isPopupClosed) setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [pathname]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("announcementPopupClosed", "true");
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div className="relative">
        <button
          onClick={handleClose}
          className="absolute right-2 -top-3 z-10 bg-white rounded-full p-1 shadow-md hover:scale-110 transition-transform"
          aria-label="Close"
        >
          <IoClose className="w-5 h-5 text-gray-700" />
        </button>

        <Link
          href="https://www.atmawestcoast.com/"
          target="_blank"
          rel="noopener"
        >
          <Image
            src="/popup.png"
            alt="Announcement"
            width={618}
            height={846}
            className="max-h-[70vh] object-contain"
            priority
          />
        </Link>
      </div>
    </div>
  );
}
