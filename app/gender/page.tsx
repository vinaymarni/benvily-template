'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { StyleCard } from '@/components/style-card'
import { Scissors, Sparkles, Palette, Droplets, Wind } from 'lucide-react'

const GENDER_SERVICES = {
  Men: [
    { icon: Scissors, title: 'Haircut', description: 'Professional haircuts and styling' },
    { icon: "", title: 'Beard Trim', description: 'Expert beard grooming and shaping' },
    { icon: Droplets, title: 'Hair Treatment', description: 'Nourishing treatments for men' },
    { icon: Wind, title: 'Blow Dry', description: 'Professional styling service' },
  ],
  Women: [
    { icon: Scissors, title: 'Haircut', description: 'Customized cuts for all hair types' },
    { icon: Palette, title: 'Hair Coloring', description: 'Expert color and highlights' },
    { icon: Sparkles, title: 'Facial', description: 'Rejuvenating skincare treatments' },
    { icon: Wind, title: 'Styling', description: 'Professional hair styling' },
  ],
  Unisex: [
    { icon: Scissors, title: 'Haircut', description: 'Gender-neutral cuts for everyone' },
    { icon: Sparkles, title: 'Spa Treatments', description: 'Relaxing spa and wellness services' },
    { icon: Palette, title: 'Makeup', description: 'Professional makeup application' },
    { icon: Droplets, title: 'Hair Care', description: 'Complete hair health treatments' },
  ],
}

const GENDER_STYLES = {
  Men: [
    { image: '/style-1.jpg', title: 'Modern Fade' },
    { image: '/style-1.jpg', title: 'Textured Crop' },
    { image: '/style-1.jpg', title: 'Classic Trim' },
    { image: '/style-1.jpg', title: 'Pompadour' },
  ],
  Women: [
    { image: '/style-2.jpg', title: 'Elegant Waves' },
    { image: '/style-2.jpg', title: 'Long & Layered' },
    { image: '/style-2.jpg', title: 'Beach Waves' },
    { image: '/style-2.jpg', title: 'Curtain Bangs' },
  ],
  Unisex: [
    { image: '/style-3.jpg', title: 'Shag Style' },
    { image: '/style-3.jpg', title: 'Sleek Bob' },
    { image: '/style-3.jpg', title: 'Modern Undercut' },
    { image: '/style-3.jpg', title: 'Pixie Cut' },
  ],
}

export default function GenderPage() {
  const [selectedGender, setSelectedGender] = useState<keyof typeof GENDER_SERVICES>('Women')

  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-foreground mb-4">
            Services by Gender
          </h1>
          <p className="text-secondary-foreground/80 text-lg">
            Tailored services and styles for everyone
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Gender Tabs */}
        <div className="mb-12 flex flex-wrap gap-4">
          {(Object.keys(GENDER_SERVICES) as Array<keyof typeof GENDER_SERVICES>).map((gender) => (
            <button
              key={gender}
              onClick={() => setSelectedGender(gender)}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                selectedGender === gender
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-secondary text-secondary-foreground hover:bg-border'
              }`}
            >
              {gender}
            </button>
          ))}
        </div>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
            Featured Services for {selectedGender}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GENDER_SERVICES[selectedGender].map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>

        {/* Styles Section */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
            Popular Styles for {selectedGender}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GENDER_STYLES[selectedGender].map((style, index) => (
              <StyleCard
                key={index}
                image={style.image}
                title={style.title}
                gender={selectedGender}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
