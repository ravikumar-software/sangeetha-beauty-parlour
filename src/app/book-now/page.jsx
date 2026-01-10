"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone } from "lucide-react";

export default function BookNowPage() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919600185783"; // 🔴 Replace with your WhatsApp number

    const message = `
🌸 *New Appointment Request* 🌸

👩 Name: ${form.name}
📞 Mobile: ${form.mobile}
💄 Service: ${form.service}
📅 Date: ${form.date}
⏰ Time: ${form.time}

📝 Message:
${form.message || "No special request"}
  `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-700">
            Book Your Appointment
          </h2>
          <p className="text-gray-600 mt-4">
            Schedule your beauty session with us — we can’t wait to pamper you!
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-6 md:p-10"
        >
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div className="relative">
              <User className="absolute top-3 left-3 text-purple-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className="pl-10 w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>

            {/* Mobile */}
            <div className="relative">
              <Phone className="absolute top-3 left-3 text-purple-400" />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                required
                value={form.mobile}
                onChange={handleChange}
                className="pl-10 w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>

            {/* Service */}
            <div>
              <select
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
              >
                <option value="">Select Service</option>
                <option>Bridal Makeup</option>
                <option>Facial Treatment</option>
                <option>Hair Styling</option>
                <option>Mehndi</option>
                <option>Manicure & Pedicure</option>
                <option>Threading & Waxing</option>
              </select>
            </div>

            {/* Date */}
            <div className="relative">
              <Calendar className="absolute top-3 left-3 text-purple-400" />
              <input
                type="date"
                name="date"
                required
                value={form.date}
                onChange={handleChange}
                className="pl-10 w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>

            {/* Time */}
            <div className="relative md:col-span-2">
              <Clock className="absolute top-3 left-3 text-purple-400" />
              <input
                type="time"
                name="time"
                required
                value={form.time}
                onChange={handleChange}
                className="pl-10 w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <textarea
                name="message"
                rows="4"
                placeholder="Any special request (optional)"
                value={form.message}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 text-center pt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-3 rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition text-lg"
              >
                Book Now
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
