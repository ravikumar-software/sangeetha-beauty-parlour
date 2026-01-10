"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Sangeetha Beauty Parlour</title>
        <meta
          name="description"
          content="Premium beauty, bridal, skincare and haircare services in Perambur, Chennai."
        />
      </Head>

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-pink-100 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-purple-200 text-purple-700 px-4 py-1 rounded-full text-sm mb-4">
              Since 2020 • Trusted by Women
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
              Embrace Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Natural Beauty
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Welcome to{" "}
              <span className="font-semibold text-purple-600">
                Sangeetha Beauty Parlour - Beauty & Wellness in Chennai
              </span>
              , where beauty, care, and confidence come together. Experience
              premium beauty services designed just for you.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full shadow-lg text-lg"
                >
                  Explore Services
                </motion.button>
              </Link>

              <Link href="/book-now">
                <button className="border-2 border-purple-400 text-purple-600 px-8 py-3 rounded-full text-lg hover:bg-purple-50 transition">
                  Book Appointment
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-40" />
            <Image
              src="/images/home.jpeg"
              alt="Sangeetha Beauty Parlour"
              width={500}
              height={600}
              className="relative z-10 rounded-3xl shadow-2xl object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ================= TRUST BADGES ================= */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "5+ Years Experience",
            "Premium Products",
            "Certified Beauticians",
            "300+ Happy Clients",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-purple-50 rounded-2xl p-6 shadow-sm"
            >
              <p className="font-semibold text-purple-700">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES HIGHLIGHT ================= */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Signature Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Hair Care", desc: "Stylish cuts, spa & treatments" },
              { title: "Skin & Facials", desc: "Glow, acne & anti-aging care" },
              {
                title: "Bridal & Makeup",
                desc: "Elegant looks for special days",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
              >
                <h3 className="text-xl font-semibold text-purple-600 mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Pamper Yourself Today
        </motion.h2>

        <p className="max-w-xl mx-auto text-lg mb-8">
          Book your appointment and experience luxury beauty care in a calm,
          hygienic and professional environment.
        </p>

        <Link href="/book-now">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-purple-600 px-10 py-4 rounded-full font-semibold text-lg shadow-lg"
          >
            Book Now
          </motion.button>
        </Link>
      </section>
    </>
  );
}
