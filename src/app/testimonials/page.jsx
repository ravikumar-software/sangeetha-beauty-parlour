"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya S",
    role: "Bridal Client",
    message:
      "Absolutely loved the bridal makeup! The team made me feel so comfortable and beautiful on my big day. Highly recommended.",
    image: "/images/testimonials/client1.jpg",
    rating: 5,
  },
  {
    name: "Anitha R",
    role: "Regular Customer",
    message:
      "The facial treatments are amazing. My skin feels fresh and glowing every time I visit. Great service and friendly staff!",
    image: "/images/testimonials/client2.jpg",
    rating: 5,
  },
  {
    name: "Meena K",
    role: "Hair Styling",
    message:
      "Professional service with excellent hygiene. My haircut and hair spa experience was relaxing and perfect.",
    image: "/images/testimonials/client3.jpg",
    rating: 4,
  },
  {
    name: "Divya M",
    role: "Mehndi Client",
    message:
      "Beautiful mehndi designs and very neat work. Everyone at the wedding loved it!",
    image: "/images/testimonials/client4.jpg",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-700">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real experiences from our happy customers who trust us with their
            beauty and wellness.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl p-6 transition"
            >
              {/* Client Info */}
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-purple-800">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* Message */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                “{t.message}”
              </p>

              {/* Rating */}
              <div className="flex">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center pt-10"
        >
          <h3 className="text-2xl font-semibold text-purple-700 mb-3">
            Want to share your experience?
          </h3>
          <p className="text-gray-600 mb-6">
            Your feedback helps us grow and serve you better.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition"
          >
            Leave a Review
          </a>
        </motion.div>
      </div>
    </div>
  );
}
