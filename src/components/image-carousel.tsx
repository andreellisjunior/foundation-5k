'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

import image1 from '../../public/assets/4th Graders Studying Science.jpg'
import image2 from '../../public/assets/3rd-7th Grade Chapel Time.jpg'
import image3 from '../../public/assets/Chantel Waving Hello.jpg'
import image4 from '../../public/assets/Kindergarten Learning to Read.jpg'

export function ImageCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        image1.src,
        image2.src,
        image3.src,
        image4
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

