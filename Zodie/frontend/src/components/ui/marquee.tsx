import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 60,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div 
      className={cn(
        "w-full bg-transparent py-6",
        className
      )} 
      {...props}
    >
      <div className="relative flex justify-center max-w-6xl mx-auto overflow-hidden">
        <div 
          className={cn(
            "flex w-max animate-marquee items-center gap-12",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" && "animate-marquee-reverse"
          )}
          style={{ "--duration": `${speed}s` } as React.CSSProperties}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  )
}