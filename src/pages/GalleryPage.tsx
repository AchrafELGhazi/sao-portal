import { useState } from 'react';
import { X } from 'lucide-react';

type Image = {
  id: number;
  src: string;
  alt: string;
};

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const images: Image[] = [
    {
      id: 1,
      src: '/placeholder.svg?height=300&width=400',
      alt: 'Student Fair',
    },
    {
      id: 2,
      src: '/placeholder.svg?height=300&width=400',
      alt: 'Sports Event',
    },
    {
      id: 3,
      src: '/placeholder.svg?height=300&width=400',
      alt: 'Cultural Festival',
    },
    {
      id: 4,
      src: '/placeholder.svg?height=300&width=400',
      alt: 'Graduation Ceremony',
    },
    { id: 5, src: '/placeholder.svg?height=300&width=400', alt: 'Campus Life' },
    {
      id: 6,
      src: '/placeholder.svg?height=300&width=400',
      alt: 'Academic Conference',
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8'>Photo Gallery</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {images.map(image => (
          <div
            key={image.id}
            className='relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105'
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src || '/placeholder.svg'}
              alt={image.alt}
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
              <p className='text-white text-lg font-semibold'>{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
          <div className='relative bg-white rounded-lg overflow-hidden shadow-lg'>
            <button
              className='absolute top-2 right-2 text-white bg-black rounded-full p-1'
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
