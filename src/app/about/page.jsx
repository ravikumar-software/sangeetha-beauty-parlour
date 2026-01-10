"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* INTRO */}
        <motion.section
          className="bg-white/90 backdrop-blur p-8 md:p-12 rounded-3xl shadow-xl space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-700">
            About Sangeetha Beauty Parlour
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Sangeetha Beauty Parlour</strong> is a women-led beauty and
            wellness destination located in Chennai. With over{" "}
            <strong>5+ years of experience</strong>, we are dedicated to
            enhancing natural beauty through expert care and premium services.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Our certified professionals combine traditional beauty practices
            with modern techniques, ensuring each client receives personalized,
            hygienic, and high-quality service in a calm and welcoming space.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Whether it’s a regular self-care visit or a bridal transformation,
            our mission is simple — to make every woman feel confident, radiant,
            and beautifully herself.
          </p>
        </motion.section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "300+", label: "Happy Clients" },
            { value: "50+", label: "Bridal Makeovers" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl font-bold text-purple-600">{stat.value}</p>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </section>

        {/* ACHIEVEMENTS */}
        <motion.section
          className="bg-white/90 p-8 md:p-12 rounded-3xl shadow-lg space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-purple-700 text-center">
            Our Achievements
          </h3>

          <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto">
            Our journey is shaped by trust, creativity, and the smiles of our
            happy clients. We are honored to be recognized for excellence in
            beauty services and customer care.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "/images/award1.jpg", title: "Best Bridal Makeup – 2023" },
              {
                img: "/images/award2.jpg",
                title: "Customer Service Excellence – 2022",
              },
              { img: "/images/award3.jpg", title: "Top Rated Salon – Chennai" },
            ].map((award, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-2xl shadow-md"
              >
                <Image
                  src={award.img}
                  alt={award.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-700/80 to-transparent flex items-end">
                  <p className="text-white text-center w-full py-3 font-medium">
                    {award.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="text-center py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-3xl shadow-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Beauty with Care & Elegance
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Book your appointment today and indulge in a luxurious beauty
            experience tailored just for you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-600 px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Book Appointment
          </a>
        </motion.section>
      </div>
    </div>
  );
}
