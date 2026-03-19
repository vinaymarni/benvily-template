import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SalonCard } from '@/components/salon-card'

const SALONS = [
  { name: 'Elegance Salon', rating: 4.8, location: 'Downtown, City Center', distance: '2.3 km' },
  { name: 'Premium Styles', rating: 4.9, location: 'Midtown, Fashion District', distance: '3.1 km' },
  { name: 'Luxury Lounge', rating: 4.7, location: 'Uptown, Luxury District', distance: '4.5 km' },
  { name: 'Modern Beauty Studio', rating: 4.6, location: 'Arts District', distance: '5.2 km' },
  { name: 'Chic & Elegant', rating: 4.8, location: 'Riverside, boutique area', distance: '2.8 km' },
  { name: 'Prestige Salon', rating: 4.9, location: 'Central Business District', distance: '1.5 km' },
  { name: 'VIP Styling', rating: 4.7, location: 'North Avenue, Premier location', distance: '3.8 km' },
  { name: 'Bespoke Hair Studio', rating: 4.8, location: 'Fashion Quarter', distance: '2.6 km' },
  { name: 'Signature Salon', rating: 4.9, location: 'Downtown Plaza', distance: '1.9 km' },
]

export default function SalonsPage() {
  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-foreground mb-4">
            Top Salons
          </h1>
          <p className="text-secondary-foreground/80 text-lg">
            Discover premium salons and studios near you with expert stylists
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SALONS.map((salon, index) => (
            <SalonCard
              key={index}
              image="/salon.jpg"
              name={salon.name}
              rating={salon.rating}
              location={salon.location}
              distance={salon.distance}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
