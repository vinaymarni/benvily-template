'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/styles', label: 'Styles' },
    { href: '/salons', label: 'Salons' },
    // { href: '/gender', label: 'Gender' },
    // { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/policy', label: 'Policy' },
  ];

  const baseUrl = `${process.env.NEXT_PUBLIC_URL}`

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex-shrink-0 font-serif text-2xl font-bold text-primary"
          >
            Benvily
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={`desktop_link_${link.href}`}
                href={`${baseUrl}${link.href}`}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
            >
              <Link href={baseUrl}>Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={`mobile_link_${link.href}`}
                href={`${baseUrl}${link.href}`}
                className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full mt-4"
            >
              <Link href={baseUrl}>Book Now</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
