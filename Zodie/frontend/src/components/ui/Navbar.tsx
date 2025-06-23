"use client"
import type React from "react"
import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  children?: React.ReactNode
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <span className="cursor-pointer text-gray-700 hover:text-orange-600 font-medium block transition-colors duration-200">
        {item}
      </span>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white rounded-2xl overflow-hidden border shadow-xl shadow-gray-200/70 dark:shadow-none w-max"
              >
                <motion.div layout className="w-full h-full">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const MegaMenu = ({
  title,
  description,
  image,
  items,
}: {
  title: string
  description: string
  image: string
  items: { name: string; href: string }[]
}) => {
  return (
    <div className="flex gap-8 p-6">
      {/* Left side - Image and Description */}
      <div className="max-w-[320px]">
        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-orange-100">
              {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {description}
            </p>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-200"></div>
              <div className="relative">
                <img 
                  src={image || "/placeholder.svg"} 
                  alt={title} 
                  className="w-full h-auto rounded-lg shadow-lg transform transition duration-200 group-hover:scale-[1.02]" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Menu Items */}
      <div className="py-2">
        <h4 className="text-lg font-semibold text-gray-900 mb-4 px-2">
          Quick Links
        </h4>
        <ul className="space-y-1 min-w-[200px]">
          {items.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.href} 
                className="flex items-center gap-2 px-2 py-2 text-gray-600 hover:text-orange-600 rounded-lg hover:bg-orange-50 transition-all duration-200 group"
              >
                <span className="font-medium">{item.name}</span>
                <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const HoveredLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link 
      to={href} 
      className="text-gray-600 hover:text-orange-600 font-medium transition-colors duration-200"
    >
      {children}
    </Link>
  )
}

export const Menu = ({ setActive, children }: { setActive: (item: string) => void; children: React.ReactNode }) => {
  return <>{children}</>
}

export const ProductItem = ({
  title,
  href,
  src,
  description,
}: { 
  title: string
  href: string
  src: string
  description: string 
}) => {
  return (
    <Link to={href} className="group relative block overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
      <img
        src={src || "/placeholder.svg"}
        alt={title}
        className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <h3 className="font-semibold text-white mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-300 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {description}
        </p>
      </div>
    </Link>
  )
}
