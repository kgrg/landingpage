import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function OptimizedImage({ src, alt, width, height, className }: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true)

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        className,
        "duration-700 ease-in-out",
        isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
      )}
      onLoadingComplete={() => setLoading(false)}
      priority
    />
  )
} 