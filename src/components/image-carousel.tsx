'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function ImageCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((current) =>
                current === slides.length - 1 ? 0 : current + 1
            )
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative h-full w-full">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <Image
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
            ))}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 w-2 rounded-full ${
                            index === currentSlide ? 'bg-white' : 'bg-white/50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
