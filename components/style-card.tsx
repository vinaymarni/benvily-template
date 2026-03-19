import Image from 'next/image'
import Link from 'next/link'

interface StyleCardProps {
  image: string
  title: string
  gender: 'Men' | 'Women' | 'Unisex'
  href?: string
}

export function StyleCard({ image, title, gender, href = '#' }: StyleCardProps) {
  return (
    <Link href={href}>
      <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-80">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full">
              {gender}
            </span>
            <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
