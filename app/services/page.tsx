'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { Scissors, Sparkles, Palette, Droplets, Zap, Heart, Wind } from 'lucide-react'

const SERVICES = {
  Hair: [
    { icon: Scissors, title: 'Haircut', description: 'Professional haircuts tailored to your style and face shape' },
    { icon: Palette, title: 'Hair Coloring', description: 'Expert color treatments and highlights' },
    { icon: Droplets, title: 'Hair Treatment', description: 'Nourishing treatments for healthy hair' },
    { icon: Wind, title: 'Blow Dry', description: 'Professional blow drying and styling' },
  ],
  Skin: [
    { icon: Sparkles, title: 'Facial', description: 'Rejuvenating facials for all skin types' },
    { icon: Zap, title: 'Chemical Peel', description: 'Advanced skin resurfacing treatment' },
    { icon: Heart, title: 'Microdermabrasion', description: 'Non-invasive skin resurfacing' },
    { icon: Droplets, title: 'Hydration', description: 'Deep hydration treatments' },
  ],
  Spa: [
    { icon: Sparkles, title: 'Massage', description: 'Relaxing therapeutic massage services' },
    { icon: Heart, title: 'Body Treatment', description: 'Complete body spa treatments' },
    { icon: Droplets, title: 'Aromatherapy', description: 'Essential oil and aromatherapy sessions' },
    { icon: Wind, title: 'Reflexology', description: 'Traditional reflexology treatment' },
  ],
  Makeup: [
    { icon: Palette, title: 'Bridal Makeup', description: 'Special makeup for your big day' },
    { icon: Sparkles, title: 'Party Makeup', description: 'Event and party makeup styling' },
    { icon: "", title: 'Makeup Lesson', description: 'Learn makeup application techniques' },
    { icon: Zap, title: 'Touch Up', description: 'Quick makeup touch up service' },
  ],
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof SERVICES>('Hair')

  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-foreground mb-4">
            Our Services
          </h1>
          <p className="text-secondary-foreground/80 text-lg">
            Discover our complete range of professional beauty and grooming services
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-4">
          {(Object.keys(SERVICES) as Array<keyof typeof SERVICES>).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-secondary text-secondary-foreground hover:bg-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES[activeCategory].map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
