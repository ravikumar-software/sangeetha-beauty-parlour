"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const allServices = [
  {
    title: "Bridal Makeup",
    category: "Makeup",
    description: "Radiant bridal makeup for your special day.",
    image: "/images/services/bridal.jpg",
  },
  {
    title: "Facial Treatments",
    category: "Skincare",
    description: "Glow with custom facial treatments.",
    image: "/images/services/facial.jpg",
  },
  {
    title: "Hair Styling",
    category: "Hair",
    description: "Trendy cuts and elegant styling.",
    image: "/images/services/hair.jpg",
  },
  {
    title: "Mehndi Art",
    category: "Makeup",
    description: "Beautiful henna for weddings and events.",
    image: "/images/services/mehndi.jpg",
  },
  {
    title: "Manicure & Pedicure",
    category: "Nails",
    description: "Polished nails and spa treatment.",
    image: "/images/services/nails.jpg",
  },
  {
    title: "Threading & Waxing",
    category: "Skincare",
    description: "Smooth skin with gentle hair removal.",
    image: "/images/services/threading.jpg",
  },
];

const categories = ["All", "Makeup", "Hair", "Skincare", "Nails"];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? allServices
      : allServices.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-14 px-4">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-purple-700"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold shadow-md transition-all
                ${
                  activeCategory === cat
                    ? "bg-purple-600 text-white scale-105"
                    : "bg-white text-purple-700 hover:bg-purple-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                layout
                whileHover={{ scale: 1.04 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition"
              >
                <div className="overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={260}
                    className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-purple-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
