"use client"

import { useState } from "react"
import { ChevronDown, CheckCircle2, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import dash from '@/assets/Dashboard-1.png'

const features = [
  {
    id: 1,
    title: "All-in-One Dashboard",
    description: "Access and manage all HR tasks — from Hiring to performance tracking to payroll — through a single, intuitive interface.",
    icon: CheckCircle2,
  },
  {
    id: 2,
    title: "Smart Hiring System",
    description: "Automate the full hiring workflow from JD generation to onboarding with just one-click execution and AI orchestration and Verify GitHub projects, certifications (Coursera, NPTEL, etc.), and portfolios using intelligent crawling and authenticity checks.",
    icon: CheckCircle2,
  },
  {
    id: 3,
    title: "Agents That Automate Everything",
    description: "Every function is handled by specialized AI agents (Optimus, Maxi, Onix) that evolve and adapt — delivering scalable, autonomous HR ops.",
    icon: CheckCircle2,
  },
  {
    id: 4,
    title: "Compliance Made Easy",
    description: "Ensure compliance with local and global labor laws through built-in compliance checks and reporting tools.",
    icon: CheckCircle2,
  }
]

export default function ZordieFeatures() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id)
  }

  return (
    <section className="relative py-10 overflow-hidden rounded-3xl">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-white pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-semibold text-orange-600 tracking-wide uppercase mb-3">
              Why Choose Zordie AI
            </h2>
            <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Powerful Features to Simplify HR Management
            </h3>
            <p className="text-xl text-gray-600">
              Our platform offers tools designed to streamline HR processes, boost efficiency, and enhance the employee experience.
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  className="group"
                  initial={false}
                >
                  <div 
                    onClick={() => toggleItem(feature.id)}
                    className="bg-white rounded-2xl p-6 cursor-pointer border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-200">
                        <feature.icon className="w-6 h-6" />
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
                            {feature.title}
                          </h4>
                          <ChevronDown 
                            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                              expandedItem === feature.id ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        <AnimatePresence>
                          {expandedItem === feature.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <p className="mt-4 text-gray-600 leading-relaxed">
                                {feature.description}
                              </p>
                              <button className="mt-4 inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium">
                                Learn more <ArrowRight className="w-4 h-4" />
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-8"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-x-20 -inset-y-16">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-orange-500/10 to-blue-500/5 blur-3xl" />
              </div>

              {/* Card Container */}
              <div className="relative">
                <div className="p-2 rounded-3xl bg-gradient-to-br from-gray-100 via-white to-gray-100 shadow-2xl">
                  <div className="relative rounded-2xl overflow-hidden bg-white">
                    <div className="aspect-[16/10]">
                      <img
                        src={dash}
                        alt="Zordie AI Dashboard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Feature highlights */}
                <div className="absolute -right-4 -bottom-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200/50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Trusted by</p>
                      <p className="text-lg font-semibold text-gray-900">500+ Companies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
