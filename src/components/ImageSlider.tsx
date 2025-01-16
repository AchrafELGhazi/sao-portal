'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define the type for the component props
interface ImageSliderProps {
  images: string[]; // Array of image URLs
}

export const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='relative w-full h-64 rounded-xl overflow-hidden group'>
      <div
        className='absolute inset-0 transition-transform duration-500 ease-in-out'
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          display: 'flex',
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image || '/placeholder.svg'}
            alt={`Event image ${index + 1}`}
            className='w-full h-full object-cover flex-shrink-0'
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white w-4'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
