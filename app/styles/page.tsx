'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { StyleCard } from '@/components/style-card'

const STYLES = [
  { image: '/style-1.jpg', title: 'Modern Fade', gender: 'Men' as const },
  { image: '/style-2.jpg', title: 'Elegant Waves', gender: 'Women' as const },
  { image: '/style-3.jpg', title: 'Sleek Bob', gender: 'Women' as const },
  { image: '/style-1.jpg', title: 'Textured Crop', gender: 'Men' as const },
  { image: '/style-2.jpg', title: 'Long & Layered', gender: 'Women' as const },
  { image: '/style-3.jpg', title: 'Modern Undercut', gender: 'Men' as const },
  { image: '/style-1.jpg', title: 'Pixie Cut', gender: 'Women' as const },
  { image: '/style-2.jpg', title: 'Pompadour', gender: 'Men' as const },
  { image: '/style-3.jpg', title: 'Beach Waves', gender: 'Women' as const },
  { image: '/style-1.jpg', title: 'Shag Style', gender: 'Unisex' as const },
  { image: '/style-2.jpg', title: 'Classic Trim', gender: 'Men' as const },
  { image: '/style-3.jpg', title: 'Curtain Bangs', gender: 'Women' as const },
]

export default function StylesPage() {
  const [selectedGender, setSelectedGender] = useState<'All' | 'Men' | 'Women' | 'Unisex'>('All')

  const filteredStyles = selectedGender === 'All' 
    ? STYLES 
    : STYLES.filter(style => style.gender === selectedGender)

  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-foreground mb-4">
            Trending Styles
          </h1>
          <p className="text-secondary-foreground/80 text-lg">
            Explore our curated collection of the hottest hairstyles
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Filter */}
        <div className="mb-12 flex flex-wrap gap-4">
          {(['All', 'Men', 'Women', 'Unisex'] as const).map((gender) => (
            <button
              key={gender}
              onClick={() => setSelectedGender(gender)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedGender === gender
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-secondary text-secondary-foreground hover:bg-border'
              }`}
            >
              {gender}
            </button>
          ))}
        </div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStyles.map((style, index) => (
            <StyleCard
              key={index}
              image={style.image}
              title={style.title}
              gender={style.gender}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredStyles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No styles found for this category
            </p>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}
