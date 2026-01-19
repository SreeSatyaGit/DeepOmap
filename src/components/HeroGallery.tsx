'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
    {
        src: '/images/gallery/ICSB_presentation.jpg',
        alt: 'ICSB Presentation',
        caption: 'Presenting research findings at IIT Bombay'
    },
    {
        src: '/images/gallery/ICSB_me_and_kiran.jpg',
        alt: 'ICSB Conference',
        caption: 'Dr.Vanaja and Me at ISCB 2024'
    }
];

export default function HeroGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={image.src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                        }`}
                    style={{ transition: 'opacity 1000ms ease-in-out, transform 10000ms linear' }}
                >
                    <div className="absolute inset-0 bg-black/30 z-10" /> {/* Subtle overlay for better text readability */}
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />

                    {/* Caption */}
                    <div className="absolute bottom-12 left-12 z-20 hidden md:block">
                        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-xl">
                            <p className="text-white text-sm font-medium tracking-wide flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#6366F1] rounded-full animate-pulse" />
                                {image.caption}
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'w-8 bg-[#6366F1]'
                            : 'w-2 bg-white/50 hover:bg-white'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Decorative gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </div>
    );
}
