import Image from 'next/image'
import Link from 'next/link'
import { Scissors, Sparkles, Palette, Clover, Star, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { StyleCard } from '@/components/style-card'
import { SalonCard } from '@/components/salon-card'

export default function Home() {
  const baseUrl = `${process.env.NEXT_PUBLIC_URL}`
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Hero"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 text-balance">
              Discover Your Perfect Style
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 text-balance">
              Book top salons and stylists near you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-base"
              >
                <Link href={`${baseUrl}/services`}>Explore Services</Link>
              </Button>
              <Button
                asChild
                className="bg-white text-foreground hover:bg-white/90 rounded-full px-8 h-12 text-base"
              >
                <Link href={`${baseUrl}/styles`}>View Styles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* other blocks */}

      <Footer />
    </>
  )
}


// other blocks

// <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Featured Services */}
//         <section className="py-16 md:py-20">
//           <div className="mb-12">
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
//               Featured Services
//             </h2>
//             <p className="text-muted-foreground text-lg">
//               Explore our most popular beauty and grooming services
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <ServiceCard
//               icon={Scissors}
//               title="Haircut"
//               description="Professional haircuts tailored to your style and face shape"
//             />
//             <ServiceCard
//               icon={Sparkles}
//               title="Spa"
//               description="Relaxing spa treatments for ultimate rejuvenation"
//             />
//             <ServiceCard
//               icon={Palette}
//               title="Makeup"
//               description="Professional makeup services for any occasion"
//             />
//             <ServiceCard
//               icon={Clover}
//               title="Beard Trim"
//               description="Expert beard grooming and styling"
//             />
//           </div>
//         </section>

//         {/* Trending Styles */}
//         <section className="py-16 md:py-20">
//           <div className="mb-12">
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
//               Trending Styles
//             </h2>
//             <p className="text-muted-foreground text-lg">
//               Get inspired by our latest and most popular hairstyles
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <StyleCard
//               image="/style-1.jpg"
//               title="Modern Fade"
//               gender="Men"
//               href="/styles"
//             />
//             <StyleCard
//               image="/style-2.jpg"
//               title="Elegant Waves"
//               gender="Women"
//               href="/styles"
//             />
//             <StyleCard
//               image="/style-3.jpg"
//               title="Sleek Bob"
//               gender="Women"
//               href="/styles"
//             />
//           </div>
//         </section>

//         {/* Top Salons */}
//         <section className="py-16 md:py-20">
//           <div className="mb-12">
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
//               Top Salons
//             </h2>
//             <p className="text-muted-foreground text-lg">
//               Premium salons and studios near you with expert stylists
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <SalonCard
//               image="/salon.jpg"
//               name="Elegance Salon"
//               rating={4.8}
//               location="Downtown, City Center"
//               distance="2.3 km"
//               href="/salons"
//             />
//             <SalonCard
//               image="/salon.jpg"
//               name="Premium Styles"
//               rating={4.9}
//               location="Midtown, Fashion District"
//               distance="3.1 km"
//               href="/salons"
//             />
//             <SalonCard
//               image="/salon.jpg"
//               name="Luxury Lounge"
//               rating={4.7}
//               location="Uptown, Luxury District"
//               distance="4.5 km"
//               href="/salons"
//             />
//           </div>
//         </section>

//         {/* Quick Services */}
//         <section className="py-16 md:py-20 bg-secondary rounded-3xl px-6 md:px-12 my-12">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-foreground mb-4 text-balance">
//             Quick Services
//           </h2>
//           <p className="text-secondary-foreground/80 text-lg mb-8">
//             Fast bookings for popular services - available same day
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {['Beard Trim', 'Face Cleanup', 'Quick Cut', 'Hair Wash'].map((service) => (
//               <Button
//                 key={service}
//                 asChild
//                 variant="outline"
//                 className="h-12 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
//               >
//                 <Link href="/services">{service}</Link>
//               </Button>
//             ))}
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="py-16 md:py-20">
//           <div className="mb-12">
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
//               Testimonials
//             </h2>
//             <p className="text-muted-foreground text-lg">
//               What our happy clients are saying
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               {
//                 name: 'Sarah Johnson',
//                 role: 'Client',
//                 text: 'Amazing service and professional stylists. I feel like a new person!',
//                 rating: 5,
//               },
//               {
//                 name: 'Michael Chen',
//                 role: 'Client',
//                 text: 'Best haircut I\'ve ever had. The attention to detail is incredible.',
//                 rating: 5,
//               },
//               {
//                 name: 'Emma Wilson',
//                 role: 'Client',
//                 text: 'Fantastic experience from booking to the final result. Highly recommended!',
//                 rating: 5,
//               },
//             ].map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-card rounded-2xl p-6 border border-border shadow-md hover:shadow-lg transition-all"
//               >
//                 <div className="flex gap-1 mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-4 h-4 fill-primary text-primary"
//                     />
//                   ))}
//                 </div>
//                 <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
//                 <div>
//                   <p className="font-semibold text-foreground">{testimonial.name}</p>
//                   <p className="text-sm text-muted-foreground">{testimonial.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* CTA Banner */}
//         <section className="py-16 md:py-20 bg-primary rounded-3xl px-6 md:px-12 my-12 text-center">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4 text-balance">
//             Ready to Transform Your Look?
//           </h2>
//           <p className="text-primary-foreground/90 text-lg mb-8 text-balance">
//             Book your appointment with top stylists today
//           </p>
//           <Button
//             asChild
//             className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-12 text-base"
//           >
//             <Link href="/salons">Browse & Book Now</Link>
//           </Button>
//         </section>
//       </main>
