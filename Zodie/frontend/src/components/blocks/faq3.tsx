"use client"

import { useState } from "react"
import { ChevronDown, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface FAQItem {
  id: string
  question: string
  answer: string
}

interface FAQData {
  heading: string
  description: string
  items: FAQItem[]
  supportHeading: string
  supportDescription: string
  supportButtonText: string
  supportButtonUrl: string
}

interface FAQProps {
  data: FAQData
}

export default function FAQ({ data }: FAQProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-6 ">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-700 via-orange-500 to-pink-500 bg-clip-text text-transparent">
          {data.heading}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
          {data.description}
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4 mb-16">
        {data.items.map((item) => {
          const isOpen = openItems.has(item.id)
          return (
            <motion.div
              key={item.id}
              layout
              whileHover={{ scale: 1.02, boxShadow: "0 4px 24px 0 rgba(0,0,0,0.07)" }}
              animate={isOpen ? { scale: 1.01, boxShadow: "0 6px 32px 0 rgba(59,130,246,0.10)" } : { scale: 1, boxShadow: "0 1px 4px 0 rgba(0,0,0,0.03)" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white/80 backdrop-blur-md transition-all duration-200"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-blue-50/40 transition-colors duration-200 "
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="text-lg font-semibold pr-4 text-gray-900">{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-blue-400 transition-transform duration-200 flex-shrink-0",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* Support Section */}
      <div className="text-center max-w-md mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-orange-300 to-pink-400 mb-6 shadow">
          <MessageCircle className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-gray-900">{data.supportHeading}</h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto font-medium">{data.supportDescription}</p>
        <Button asChild size="lg" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-orange-400 text-white hover:from-blue-700 hover:to-orange-500 transition-all">
          <a href={data.supportButtonUrl} target="_blank" rel="noopener noreferrer">
            <Mail className="h-4 w-4" />
            {data.supportButtonText}
          </a>
        </Button>
      </div>
    </section>
  )
}
