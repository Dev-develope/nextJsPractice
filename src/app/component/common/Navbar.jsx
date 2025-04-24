"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Home,
  ShoppingCart,
  Briefcase,
  FileText,
  Users,
  Phone,
  BookOpen,
  Code,
  Palette,
} from "lucide-react"
// import { cn } from "@/lib/utils"
import { MenuSquare } from "lucide"

// Navigation data with submenus
const navigationItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Products",
    href: "#",
    icon: ShoppingCart,
    submenu: [
      { name: "Product 1", href: "/products/1", icon: ShoppingCart },
      { name: "Product 2", href: "/products/2", icon: ShoppingCart },
      { name: "Product 3", href: "/products/3", icon: ShoppingCart },
    ],
  },
  {
    name: "Services",
    href: "#",
    icon: Briefcase,
    submenu: [
      { name: "Consulting", href: "/services/consulting", icon: Users },
      { name: "Development", href: "/services/development", icon: Code },
      { name: "Design", href: "/services/design", icon: Palette },
    ],
  },
  {
    name: "Resources",
    href: "#",
    icon: FileText,
    submenu: [
      { name: "Blog", href: "/blog", icon: FileText },
      { name: "Documentation", href: "/docs", icon: BookOpen },
      { name: "Tutorials", href: "/tutorials", icon: Code },
    ],
  },
  {
    name: "About",
    href: "/about",
    icon: Users,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Phone,
  },
]

export default function Navbar(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-900">Logo</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigationItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileMenu items={navigationItems} />
        </div>
      </div>
    </nav>
  )
}

// Desktop navigation item with submenu
function NavItem({ item }) {
  const [showSubmenu, setShowSubmenu] = useState(false)
  const Icon = item.icon

  if (!item.submenu) {
    return (
      <Link
        href={item.href}
        className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
      >
        {Icon && <Icon className="h-4 w-4" />}
        {item.name}
      </Link>
    )
  }

  return (
    <div className="relative" onMouseEnter={() => setShowSubmenu(true)} onMouseLeave={() => setShowSubmenu(false)}>
      <button
        className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
        onClick={() => setShowSubmenu(!showSubmenu)}
      >
        {Icon && <Icon className="h-4 w-4" />}
        {item.name}
        <ChevronDown className="h-4 w-4" />
      </button>

      {/* Submenu for desktop */}
      {showSubmenu && (
        <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg py-2 bg-white ring-1 ring-black ring-opacity-5 z-10 border border-gray-100">
          <div className="px-3 py-2 border-b border-gray-100 mb-1">
            <p className="text-sm font-medium text-gray-900">{item.name} Options</p>
          </div>
          {item.submenu.map((subItem) => {
            const SubIcon = subItem.icon
            return (
              <Link
                key={subItem.name}
                href={subItem.href}
                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {SubIcon && <SubIcon className="h-4 w-4 text-gray-500" />}
                <span>{subItem.name}</span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

// Mobile menu with expandable submenus
function MobileMenu({ items }) {
  return (
    <div className="space-y-1">
      {items.map((item) => (
        <MobileMenuItem key={item.name} item={item} />
      ))}
    </div>
  )
}

function MobileMenuItem({ item }) {
  const [isOpen, setIsOpen] = useState(false)
  const Icon = item.icon

  if (!item.submenu) {
    return (
      <Link
        href={item.href}
        className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
      >
        {Icon && <Icon className="h-5 w-5 text-gray-500" />}
        {item.name}
      </Link>
    )
  }

  return (
    <div>
      <button
        className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-3">
          {Icon && <Icon className="h-5 w-5 text-gray-500" />}
          {item.name}
        </span>
        {/* <ChevronRight className={cn("h-5 w-5 transition-transform", isOpen ? "rotate-90" : "")} /> */}
      </button>

      {isOpen && (
        <div className="pl-4 mt-1 mb-2 border-l-2 border-gray-100 ml-4">
          {item.submenu.map((subItem) => {
            const SubIcon = subItem.icon
            return (
              <Link
                key={subItem.name}
                href={subItem.href}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {SubIcon && <SubIcon className="h-5 w-5 text-gray-500" />}
                {subItem.name}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
