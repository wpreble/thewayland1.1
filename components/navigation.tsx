"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <Image src="/logo.png" alt="The Way Logo" width={48} height={48} className="object-contain" />
            </div>
            <span className="text-3xl font-serif font-bold text-slate-900">The Way</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/vision"
              className="text-xl font-serif font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Vision
            </Link>
            <Link
              href="/early-access"
              className="text-xl font-serif font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Early Access
            </Link>
            <Button
              size="lg"
              className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-lg font-serif font-semibold text-white px-8 py-3"
              asChild
            >
              <a href="https://theway.masterymade.com/" target="_blank" rel="noopener noreferrer">
                Launch App
              </a>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </nav>
  )
}
