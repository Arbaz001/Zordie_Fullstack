"use client"

import { useState } from "react"
import { TrendingUp, Users, Lightbulb } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Flow() {
  const [activeTab, setActiveTab] = useState("automate-tasks")

  const tabs = [
    {
      id: "choose-agents",
      label: "Choose Agents",
      icon: Users,
      title: "Choose Agents",
      description: "Pick from a library of ready-to-use AI agents tailored for specific business workflows.",
      image: "/src/images/4417da43e61fb4ef3fd13917fd21a505.gif"
    },
    {
      id: "write-prompt",
      label: "Write a Prompt",
      icon: Lightbulb,
      title: "Write a Prompt",
      description:
        "Easily guide Zordie AI agents by entering a simple prompt—customize tasks like candidate screening, interview questions, or job descriptions in seconds.",
      image: "/src/images/3607fd13fddeb924c0bd732b7b3f3ca6.gif"
    },
    {
      id: "automate-tasks",
      label: "Automate Tasks",
      icon: TrendingUp,
      title: "Automate Tasks",
      description:
        "Let Zordie AI automate repetitive hiring tasks—like resume screening, interview scheduling, follow-ups, and updates—so your team can focus on smarter decisions.",
      image: "/src/assets/agentic.png"
    },
  ]

  const activeTabData = tabs.find((tab) => tab.id === activeTab)

  return (
    <section className="w-full py-4 md:py-6 lg:py-8 rounded-3xl">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6 shadow-md">
            Benefits
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-700 via-orange-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
            How It Works<span className="text-blue-600">?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience game-changing advantages that boost your productivity, streamline operations, and give you an
            edge over the competition.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 shadow-sm ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-orange-400 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Content Box */}
        <AnimatePresence mode="wait" initial={false}>
          {activeTabData && (
            <motion.div
              key={activeTabData.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-black/10 backdrop-blur-md"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left Content */}
                <div className="space-y-6">
                  <div className="flex gap-4 flex-col items-stretch">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                      <activeTabData.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {activeTabData.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">{activeTabData.description}</p>
                </div>

                {/* Right Image */}
                <motion.div
                  className="relative w-full h-full min-h-[300px]"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full h-full rounded-3xl bg-gray-900 overflow-hidden shadow-xl flex items-center justify-center">
                    <motion.img
                      key={activeTabData.image}
                      src={activeTabData.image || "/placeholder.svg"}
                      alt={activeTabData.title}
                      className="w-full h-full object-cover max-h-[400px]"
                      style={{ aspectRatio: '1.5/1', objectPosition: 'center' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
