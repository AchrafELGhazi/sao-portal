import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Image, X } from 'lucide-react';

type GalleryItemProps = {
  image: string;
  title: string;
  category: string;
  onClick: () => void;
};

type LightboxProps = {
  image: string;
  title: string;
  onClose: () => void;
  isOpen: boolean;
};

const GallerySection: React.FC = () => {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    image: '',
    title: '',
  });

  // Sample gallery data
  const galleryItems = [
    {
      image: '/gallery/campus-life1.webp',
      title: 'Student Union Gathering',
      category: 'Campus Life',
    },
    {
      image: '/gallery/academic1.webp',
      title: 'Research Symposium',
      category: 'Academic',
    },
    {
      image: '/gallery/sports1.webp',
      title: 'Intramural Basketball Championship',
      category: 'Sports',
    },
    {
      image: '/gallery/cultural1.webp',
      title: 'International Culture Festival',
      category: 'Cultural',
    },
    {
      image: '/gallery/leadership1.webp',
      title: 'Leadership Workshop Series',
      category: 'Leadership',
    },
    {
      image: '/gallery/community1.webp',
      title: 'Community Service Day',
      category: 'Community',
    },
  ];

  const openLightbox = (image: string, title: string) => {
    setLightbox({
      isOpen: true,
      image,
      title,
    });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox({
      ...lightbox,
      isOpen: false,
    });
    document.body.style.overflow = 'auto';
  };

  return (
    <section className='py-20 bg-black'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='flex justify-between items-center mb-12'>
          <div>
            {/* Tag */}
            <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-4'>
              <span className='text-orange-500 text-sm font-medium'>
                Campus Moments
              </span>
              <ChevronRight className='w-4 h-4 text-orange-500' />
            </div>

            <h2 className='text-3xl md:text-4xl font-bold text-white'>
              Photo Gallery
            </h2>
            <p className='text-gray-400 mt-2 max-w-2xl'>
              Explore memorable moments from student life, campus events, and
              activities at Al Akhawayn University.
            </p>
          </div>

          <Link
            to='/gallery'
            className='group hidden md:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors'
          >
            <span>View Full Gallery</span>
            <ArrowRight className='w-5 h-5 transform group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>

        {/* Gallery grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              {...item}
              onClick={() => openLightbox(item.image, item.title)}
            />
          ))}
        </div>

        {/* Mobile view all button */}
        <div className='mt-8 flex md:hidden justify-center'>
          <Link
            to='/gallery'
            className='group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300'
          >
            <span>View Full Gallery</span>
            <ArrowRight className='w-5 h-5 transform group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.isOpen && (
        <Lightbox
          image={lightbox.image}
          title={lightbox.title}
          onClose={closeLightbox}
          isOpen={lightbox.isOpen}
        />
      )}
    </section>
  );
};

const GalleryItem: React.FC<GalleryItemProps> = ({
  image,
  title,
  category,
  onClick,
}) => (
  <div
    className='relative overflow-hidden rounded-lg group cursor-pointer h-64 md:h-72'
    onClick={onClick}
  >
    <img
      src={image}
      alt={title}
      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300'></div>

    <div className='absolute bottom-0 left-0 right-0 p-4'>
      <div className='mb-2'>
        <span className='bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full'>
          {category}
        </span>
      </div>
      <h3 className='text-white text-lg font-semibold group-hover:text-orange-500 transition-colors'>
        {title}
      </h3>
    </div>

    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
      <div className='bg-orange-500 rounded-full p-3'>
        <Image className='w-6 h-6 text-white' />
      </div>
    </div>
  </div>
);

const Lightbox: React.FC<LightboxProps> = ({
  image,
  title,
  onClose,
  isOpen,
}) => (
  <div
    className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-300 ${
      isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
  >
    <div className='relative max-w-4xl w-full mx-4'>
      <button
        className='absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors focus:outline-none'
        onClick={onClose}
      >
        <X className='w-8 h-8' />
      </button>

      <div className='relative'>
        <img src={image} alt={title} className='w-full h-auto rounded-lg' />
        <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent'>
          <h3 className='text-white text-xl font-semibold'>{title}</h3>
        </div>
      </div>
    </div>
  </div>
);

export default GallerySection;
