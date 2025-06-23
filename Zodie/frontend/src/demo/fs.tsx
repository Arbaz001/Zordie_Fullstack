import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SocialIcon } from 'react-social-icons'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [isChatOpen, setIsChatOpen] = React.useState(false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t border-t-primary-400 text-foreground transition-colors duration-300 bg-gradient-to-br from-orange-50 via-blue-50 to-white rounded-t-3xl shadow-2xl overflow-hidden">
      {/* Animated gradient border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-orange-400 to-pink-400 animate-pulse rounded-t-3xl z-10" />
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 relative z-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* Vertical dividers for large screens */}
          <div className="hidden lg:block absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-blue-200 via-orange-100 to-pink-100 opacity-40" />
          <div className="hidden lg:block absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-blue-200 via-orange-100 to-pink-100 opacity-40" />
          <div className="hidden lg:block absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-blue-200 via-orange-100 to-pink-100 opacity-40" />
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-700 via-orange-500 to-pink-500 bg-clip-text text-transparent">Stay Connected</h2>
            <p className="mb-6 text-muted-foreground">
              Get the latest news and updates on AI-powered hiring
            </p>
            <form className="relative bg-white/60 backdrop-blur-md rounded-xl shadow p-2 flex items-center gap-2 group focus-within:ring-2 focus-within:ring-blue-400">
              <span className="absolute left-4 text-blue-400">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v.217l8 5.333 8-5.333V6.5a.5.5 0 0 0-.5-.5h-15Zm15 13a.5.5 0 0 0 .5-.5V9.383l-7.5 5-7.5-5V17.5a.5.5 0 0 0 .5.5h15Z"/></svg>
              </span>
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border-none bg-transparent focus:ring-0 pl-10"
              />
              <Button
                type="submit"
                size="icon"
                className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-orange-400 text-white hover:from-blue-700 hover:to-orange-500 transition-transform hover:scale-110 animate-pulse"
              >
                <Send className="h-5 w-5" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-blue-700">Quick Links</h3>
            <nav className="space-y-2 text-sm font-semibold">
              <a href="#Home" className="block transition-colors hover:text-blue-700 hover:underline underline-offset-4">
                Home
              </a>
              <a href="#Contact" className="block transition-colors hover:text-blue-700 hover:underline underline-offset-4">
                Contact Us
              </a>
              <a href="#Features" className="block transition-colors hover:text-blue-700 hover:underline underline-offset-4">
                Features
              </a>
              <a href="#Pricing" className="block transition-colors hover:text-blue-700 hover:underline underline-offset-4">
                Pricing
              </a>
              <a href="#Login" className="block transition-colors hover:text-blue-700 hover:underline underline-offset-4">
                Login/Signup
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-blue-700">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p className="flex items-center gap-2"><span className="text-blue-500"></span><span className="font-semibold">Located in Kanpur</span></p>
              <p className="flex items-center gap-2"><span className="text-orange-500"></span><span className="font-semibold">Uttar Pradesh, India</span></p>
              <p className="flex items-center gap-2"><span className="text-green-500"></span><span className="font-semibold">+91 9044 173 100</span></p>
              <p className="flex items-center gap-2"><span className="text-pink-500"></span><span className="font-semibold">snehal.23546@sscbs.du.ac.in</span></p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold text-blue-700">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full bg-white/40 backdrop-blur-md shadow-lg hover:scale-110 hover:rotate-6 transition-transform border-2 border-blue-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width='40%'
                        height='50%'
                        className="sm:w-24 w-full  text-black-500"
                        fill="currentColor"
                      viewBox="0 0 24 24"
                       >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full bg-white/40 backdrop-blur-md shadow-lg hover:scale-110 hover:rotate-6 transition-transform border-2 border-blue-100">
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='40%'
                        height='50%'
                        viewBox='0 0 70 62'
                        fill='none'
                        className='sm:w-24 w-full  text-black-500'
                      >
                        <path
                          d='M55.1291 0H65.8629L42.4127 26.2626L70 62H48.3994L31.481 40.3254L12.1226 62H1.38228L26.4646 33.9092L0 0H22.149L37.4417 19.8114L55.1291 0ZM51.3619 55.7046H57.3096L18.9172 5.96472H12.5347L51.3619 55.7046Z'
                          fill='currentColor'
                        ></path>
                      </svg>
                      <span className="sr-only">X</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on X</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full bg-white/40 backdrop-blur-md shadow-lg hover:scale-110 hover:rotate-6 transition-transform border-2 border-blue-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full bg-white/40 backdrop-blur-md shadow-lg hover:scale-110 hover:rotate-6 transition-transform border-2 border-blue-100">
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='40%'
                        height='50%'
                        viewBox='0 0 80 78'
                        fill='none'
                        className='sm:w-24 w-full text-black-500'
                      >
                        <path
                          d='M16.6 8.79036C16.6 13.3937 12.9 17.1237 8.33333 17.1237C3.76667 17.1237 0.0666667 13.3937 0.0666667 8.79036C0.0666667 4.19036 3.76667 0.457031 8.33333 0.457031C12.9 0.457031 16.6 4.19036 16.6 8.79036ZM16.6667 23.7904H0V77.1237H16.6667V23.7904ZM43.2733 23.7904H26.7133V77.1237H43.2767V49.127C43.2767 33.5604 63.3733 32.287 63.3733 49.127V77.1237H80V43.3537C80 17.087 50.26 18.0437 43.2733 30.9737V23.7904Z'
                          fill='currentColor'
                        ></path>
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            {/* <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div> */}
          </div>
        </div>
        {/* Full-width gradient divider at the very top of the footer */}
        <div className="w-full h-1 bg-gradient-to-r from-blue-400 via-orange-400 to-pink-400 rounded-full opacity-60 mb-8" />
        <div className="flex flex-col font-semibold md:flex-row items-center justify-between gap-4 pt-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Zordie AI. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-8 text-sm">
            <a href="#" className="transition-colors hover:text-blue-700 hover:underline underline-offset-4">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-blue-700 hover:underline underline-offset-4">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-blue-700 hover:underline underline-offset-4">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }