import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary border border-border">
      <div className="mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}
