import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const PORTFOLIO_ITEMS = [
  { before: '/style-1.jpg', after: '/style-2.jpg', title: 'Transformation #1' },
  { before: '/style-2.jpg', after: '/style-3.jpg', title: 'Transformation #2' },
  { before: '/style-3.jpg', after: '/style-1.jpg', title: 'Transformation #3' },
  { before: '/style-1.jpg', after: '/style-3.jpg', title: 'Transformation #4' },
  { before: '/style-2.jpg', after: '/style-1.jpg', title: 'Transformation #5' },
  { before: '/style-3.jpg', after: '/style-2.jpg', title: 'Transformation #6' },
]

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-foreground mb-4">
            Our Portfolio
          </h1>
          <p className="text-secondary-foreground/80 text-lg">
            Stunning before & after transformations from our expert stylists
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Before */}
                <div>
                  <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={item.before}
                      alt={`${item.title} - Before`}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 text-center font-medium">Before</p>
                </div>

                {/* After */}
                <div>
                  <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={item.after}
                      alt={`${item.title} - After`}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 text-center font-medium">After</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="bg-primary rounded-3xl px-6 md:px-12 py-12 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8">
            Book with one of our expert stylists today
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">
            Schedule Consultation
          </button>
        </section>
      </main>

      <Footer />
    </>
  )
}
