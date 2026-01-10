"use client";

import { Facebook, Instagram, Youtube, Phone } from "lucide-react";

export default function SocialSticky() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-4">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919841158495"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110"
        title="WhatsApp"
      >
        <Phone className="w-5 h-5 group-hover:animate-bounce" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/sangeethabeautyparlour1/"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-gradient-to-tr from-pink-500 to-yellow-400 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110"
        title="Instagram"
      >
        <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/YOUR_FACEBOOK"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110"
        title="Facebook"
      >
        <Facebook className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/@YOUR_CHANNEL"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-red-600 hover:bg-red-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110"
        title="YouTube"
      >
        <Youtube className="w-5 h-5 group-hover:scale-125 transition-transform" />
      </a>
    </div>
  );
}
