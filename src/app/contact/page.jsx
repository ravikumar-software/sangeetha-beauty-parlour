"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      {/* Contact Info and Form */}
      <div className="grid md:grid-cols-2 gap-10 bg-white/80 p-8 rounded-2xl shadow-xl backdrop-blur-sm">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-purple-600">Contact Info</h2>
          <p className="text-gray-700">
            We're here to help you feel your best. Reach out to us with any
            questions or to schedule your appointment.
          </p>

          <div className="space-y-2">
            <p className="text-lg font-medium text-purple-800">📍 Address</p>
            <p className="text-gray-700">
              42/1, Kennedy Square Cross St,
              <br />
              Thiru Vi Ka Nagar, Perambur,
              <br />
              Chennai, Tamil Nadu 600011
            </p>

            <p className="text-lg font-medium text-purple-800 mt-4">📞 Phone</p>
            <p className="text-gray-700">+91 98411 58495</p>

            <p className="text-lg font-medium text-purple-800 mt-4">📧 Email</p>
            <p className="text-gray-700">
              sangeethabeautyparlour2020@gmail.com
            </p>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:from-purple-600 hover:to-pink-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>

      {/* Google Map */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3885.6693222090194!2d80.2339525!3d13.1201227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265f219cb4175%3A0x3b6b8c1c997a49e7!2sSangeetha%20Beauty%20Parlour%20-%20Vazhga%20Valamudan!5e0!3m2!1sen!2sin!4v1768027031233!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="w-full border-0 rounded-xl shadow-md"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="text-center mt-4">
          <a
            href="https://www.google.com/maps/place/Sangeetha+Beauty+Parlour+-+Vazhga+Valamudan/@13.1201227,80.2339525,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x3a5265f219cb4175:0x3b6b8c1c997a49e7!2sSangeetha+Beauty+Parlour+-+Vazhga+Valamudan!8m2!3d13.1201175!4d80.2365274!16s%2Fg%2F11lg3b7n0d!3m5!1s0x3a5265f219cb4175:0x3b6b8c1c997a49e7!8m2!3d13.1201175!4d80.2365274!16s%2Fg%2F11lg3b7n0d?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-purple-700 transition duration-300"
          >
            View on Map
          </a>
        </div>
      </motion.div>
    </div>
  );
}
