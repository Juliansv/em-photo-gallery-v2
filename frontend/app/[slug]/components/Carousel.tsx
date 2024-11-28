'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

// Sample image data with different placeholders
const images = [
  { id: 1, src: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1701665194440/ede4dffe-46e7-4204-b5ea-421470c927a3.webp', alt: 'Image 1' },
  { id: 2, src: '/placeholder.svg?height=800&width=1200&text=Image+2', alt: 'Image 2' },
  { id: 3, src: '/placeholder.svg?height=800&width=1200&text=Image+3', alt: 'Image 3' },
  { id: 4, src: '/placeholder.svg?height=800&width=1200&text=Image+4', alt: 'Image 4' },
  { id: 5, src: '/placeholder.svg?height=800&width=1200&text=Image+5', alt: 'Image 5' },
  { id: 6, src: '/placeholder.svg?height=800&width=1200&text=Image+6', alt: 'Image 6' },
  { id: 7, src: '/placeholder.svg?height=800&width=1200&text=Image+7', alt: 'Image 7' },
  { id: 8, src: '/placeholder.svg?height=800&width=1200&text=Image+8', alt: 'Image 8' },
]

export default function ImageGallery() {
  const [currentImage, setCurrentImage] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleImageClick = (index: number) => {
    setCurrentImage(index)
    scrollToImage(index)
  }

  const scrollToImage = (index: number) => {
    if (carouselRef.current) {
      const imageWidth = carouselRef.current.children[0].clientWidth
      carouselRef.current.scrollTo({
        left: imageWidth * index,
        behavior: 'smooth'
      })
    }
  }

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += e.deltaY
    }
  }

  const handleNavigation = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentImage - 1 + images.length) % images.length
      : (currentImage + 1) % images.length
    setCurrentImage(newIndex)
    scrollToImage(newIndex)
  }

  useEffect(() => {
    scrollToImage(currentImage)
  }, [currentImage])

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow relative p-4">
        <div className="relative h-full">
          <Image
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority
          />
          <div 
            className="absolute left-0 top-0 w-1/4 h-full cursor-[url('/left-arrow.svg'),_w-resize]"
            onClick={() => handleNavigation('prev')}
            aria-label="Previous image"
          />
          <div 
            className="absolute left-1/4 top-0 w-1/2 h-full cursor-pointer"
            onClick={() => setModalOpen(true)}
            aria-label="Open full screen view"
          />
          <div 
            className="absolute right-0 top-0 w-1/4 h-full cursor-[url('/right-arrow.svg'),_e-resize]"
            onClick={() => handleNavigation('next')}
            aria-label="Next image"
          />
        </div>
      </div>
      
      <div className="h-24 relative" onWheel={handleWheel}>
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto space-x-2 p-2 h-full scrollbar-hide"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {images.map((image, index) => (
            <div 
              key={image.id}
              className={`flex-shrink-0 h-full aspect-[4/3] cursor-pointer ${
                index === currentImage ? 'ring-2 ring-primary' : ''
              }`}
              style={{ scrollSnapAlign: 'start' }}
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={120}
                height={90}
                className="object-cover h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0">
          <div className="relative w-full h-full">
            <Image
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              fill
              className="object-contain"
              sizes="95vw"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-10"
              onClick={() => setModalOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
              onClick={() => handleNavigation('prev')}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
              onClick={() => handleNavigation('next')}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}