'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Slider from 'react-slick'

const allGallery = [
  { src: '/images/gallery/bridal1.jpg', category: 'Bridal' },
  { src: '/images/gallery/bridal2.jpg', category: 'Bridal' },
  { src: '/images/gallery/hair1.jpg', category: 'Hair' },
  { src: '/images/gallery/hair2.jpg', category: 'Hair' },
  { src: '/images/gallery/skin1.jpg', category: 'Skin' },
  { src: '/images/gallery/skin2.jpg', category: 'Skin' },
]

const categories = ['All', 'Bridal', 'Hair', 'Skin']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredGallery =
    activeCategory === 'All'
      ? allGallery
      : allGallery.filter((img) => img.category === activeCategory)

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2500,
    arrows: false,
  }

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center text-purple-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Beauty Moments Captured
        </motion.h2>

        {/* Carousel */}
        <motion.div
          className="rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Slider {...sliderSettings}>
            {allGallery.map((img, idx) => (
              <div key={idx}>
                <Image
                  src={img.src}
                  alt={`Slide ${idx + 1}`}
                  width={1200}
                  height={500}
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium shadow ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-purple-700 hover:bg-purple-100'
              } transition`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredGallery.map((img, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-xl shadow-md group"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={img.src}
                alt={`Gallery ${idx + 1}`}
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}