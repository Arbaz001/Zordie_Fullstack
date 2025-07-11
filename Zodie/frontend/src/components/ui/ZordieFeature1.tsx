"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Clock, TrendingUp, Zap, Settings } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const features = [
  {
    id: "management",
    title: "Smart Management System",
    description: "Effortlessly organize and track all your interactions, documents and data in one place.",
    image: "https://framerusercontent.com/images/BAmgCkL3WCAMTbXfMPK1kqYJg3w.png?scale-down-to=1024",
    icon: Target,
  },
  {
    id: "tracking",
    title: "Real-Time Talent & Task Tracking",
    description: "Save time by automating repetitive tasks and streamlining team workflows.",
    image: "https://framerusercontent.com/images/CM73WRAQoCV8Re342SeYL4xBY.png?scale-down-to=1024",
    icon: Clock,
  },
  {
    id: "intelligence",
    title: "Performance & Growth Intelligence",
    description: "Gain actionable insights with customizable reports and real-time data visualization.",
    image: "https://framerusercontent.com/images/Vyb5msDEpKDMnjb9xVj8l9a3gPI.png?scale-down-to=1024",
    icon: TrendingUp,
  },
  {
    id: "interviews",
    title: "AI Voice and Culture fit Interviews",
    description: "Connect with tools like Slack, Mailchimp, and Google Analytics for a unified experience.",
    image: "https://framerusercontent.com/images/obL7O0JUdgAiPWg9C5OTgvSt224.svg",
    icon: Zap,
  },
  {
    id: "screening",
    title: "Advanced ATS with Smart Screening",
    description: "Tailor your workspace to focus on the metrics and activities that matter most to you.",
    image: "https://framerusercontent.com/images/HigOTB4NtzyDfPbugQ62qcTOj4.png?scale-down-to=1024",
    icon: Settings,
  },
]

export default function ZordieFeatures1() {
  const [activeFeature, setActiveFeature] = useState("management")
  const currentFeature = features.find((f) => f.id === activeFeature) || features[0]

  return (
    <section className="min-h-screen bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 rounded-3xl"> 
      <div className="max-w-7xl mx-auto">
        <Badge variant="outline" className="mb-3 sm:mb-4 text-xs sm:text-sm font-medium">
          ✨ Features
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-6 sm:mb-8 md:mb-12">
          Designed to simplify your workflow and maximize efficiency
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start max-w-7xl mx-auto">
        {/* Left sidebar with feature buttons */}
        <div className="space-y-3 sm:space-y-4">
          {features.map((feature) => {
            const IconComponent = feature.icon
            const isActive = activeFeature === feature.id

            return (
              <motion.div
                key={feature.id}
                layout
                whileHover={{ scale: 1.03, boxShadow: "0 4px 24px 0 rgba(0,0,0,0.07)" }}
                animate={isActive ? { scale: 1.04, boxShadow: "0 6px 32px 0 rgba(59,130,246,0.10)" } : { scale: 1, boxShadow: "0 1px 4px 0 rgba(0,0,0,0.03)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`p-0 rounded-2xl`}
              >
                <Card
                  className={`p-4 sm:p-6 cursor-pointer transition-all duration-200 border-2 ${
                    isActive
                      ? "border-blue-200 bg-blue-50/50 shadow-sm"
                      : "border-gray-100 hover:border-gray-200 hover:shadow-sm"
                  }`}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <motion.div
                      className={`p-2 rounded-lg ${isActive ? "bg-blue-100" : "bg-gray-100"}`}
                      layout
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? "text-blue-600" : "text-gray-600"}`} />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-base sm:text-lg font-semibold mb-1 sm:mb-2 truncate ${isActive ? "text-blue-900" : "text-gray-900"}`}>
                        {feature.title}
                      </h3>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p
                            key="desc"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2"
                          >
                            {feature.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}

          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="pt-4 sm:pt-6"
          >
            <Button className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base transition-transform">
              Learn more features
            </Button>
          </motion.div>
        </div>

        {/* Right side with dynamic image */}
        <div className="lg:sticky lg:top-8 mt-6 md:mt-0">
          <Card className="p-0 overflow-hidden shadow-lg h-auto w-full">
            <div className="relative w-full h-full">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={currentFeature.image}
                  src={currentFeature.image || "/placeholder.svg"}
                  alt={currentFeature.title}
                  className="w-full h-auto max-w-full object-contain transition-opacity duration-300"
                  crossOrigin="anonymous"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
