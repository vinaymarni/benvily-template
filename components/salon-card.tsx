import Image from 'next/image'
import Link from 'next/link'
import { Star, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SalonCardProps {
  image: string
  name: string
  rating: number
  location: string
  distance: string
  href?: string
}

export function SalonCard({ image, name, rating, location, distance, href = '#' }: SalonCardProps) {
  return (
    <div className="bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-border">
      <div className="relative h-40 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? 'fill-primary text-primary'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-1">({rating})</span>
        </div>

        {/* Location */}
        <div className="flex items-start gap-2 mb-3">
          <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <p>{location}</p>
            <p className="text-xs">{distance} away</p>
          </div>
        </div>

        <Button
          asChild
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Link href={href}>Book Now</Link>
        </Button>
      </div>
    </div>
  )
}
