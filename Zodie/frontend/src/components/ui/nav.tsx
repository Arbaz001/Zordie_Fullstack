"use client"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { MenuItem, MegaMenu } from "@/components/ui/Navbar"
import Logo from '@/images/Logo.png'
import platform from '@/images/Platform.png'
import solutions from '@/images/Solutions.png'
import agents from '@/images/Agents.png'
import resource from '@/images/resources.jpg'
import about from '@/images/about.jpg'

const menuItems = [
  {
    name: "Platform",
    href: "/",
    megaMenu: {
      title: "Agentic Automation",
      description: "Learn more about the next generation of process automation",
      image: platform,
      items: [
        { name: "Home", href: "/" },
      ],
    },
  },
  {
    name: "AI Agents",
    href: "/prime",
    megaMenu: {
      title: "AI Agents",
      description: "Discover our powerful AI agents for your business",
      image: agents,
      items: [
        { name: "Prime HR", href: "/prime" },
        { name: "Onix", href: "/onix" },
        { name: "Nova", href: "/Nova" },
        { name: "Maxi", href: "/maxi" },
        { name: "Optimus", href: "/optimus" },
        { name: "Archie", href: "/archie" },
      ],
    },
  },
  {
    name: "Solutions",
    href:'#',
    megaMenu: {
      title: "Solutions",
      description: "We cater all the Hr related things",
      image: solutions,
      items: [
        { name: "Solutions", href: "/solution" },
        {name:"Pricing",href:"/pricing"}
      ],
    },
  },
  {
    name: "Resources",
    href: "/resource",
    megaMenu: {
      title: "Resources",
      description: "Learn and grow with our comprehensive resources",
      image: resource,
      items: [
        { name: "Documentation", href: "/resource" },
        { name: "Blog", href: "/resource" },
      ],
    },
  },
  {
    name: "About",
    href: "/about",
    megaMenu: {
      title: "About Us",
      description: "Learn more about our company and mission",
      image: about,
      items: [
        { name: "About", href: "/about" },
      ],
    },
  },
]

export default function Navbar() {
  const [menuState, setMenuState] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <nav
      data-state={menuState && "active"}
      className={cn(
        "group fixed z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-lg" 
          : "bg-gradient-to-r from-orange-50/90 via-white/90 to-blue-50/90 backdrop-blur-md"
      )}
      onMouseLeave={() => setActiveItem(null)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 sm:h-20 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" aria-label="home" className="flex items-center space-x-2">
              <img src={Logo} alt="Logo" className="h-8 md:h-12 transition-transform duration-200 hover:scale-105" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuState(!menuState)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
          >
            <span className="sr-only">{menuState ? "Close menu" : "Open menu"}</span>
            {menuState ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <ul className="flex space-x-8">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <MenuItem setActive={setActiveItem} active={activeItem} item={item.name}>
                    {item.megaMenu && (
                      <MegaMenu
                        title={item.megaMenu.title}
                        description={item.megaMenu.description}
                        image={item.megaMenu.image}
                        items={item.megaMenu.items}
                      />
                    )}
                  </MenuItem>
                </li>
              ))}
            </ul>
          </div>

          {/* Auth buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Button 
              asChild 
              variant="ghost" 
              size="sm"
              className="font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-100/80"
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button 
              asChild 
              size="sm"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Link to="/waitlist">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile menu panel */}
          {menuState && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
              <div className="px-4 pt-2 pb-3 space-y-1">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    onClick={() => setMenuState(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col space-y-2 px-3">
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="w-full justify-center font-semibold"
                  >
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button 
                    asChild 
                    className="w-full justify-center bg-gradient-to-r from-orange-500 to-orange-600 font-semibold"
                  >
                    <Link to="/waitlist">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
