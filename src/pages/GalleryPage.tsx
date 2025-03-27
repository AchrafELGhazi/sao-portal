import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Download,
  Share2,
  Heart,
  Info,
  ChevronDown,
} from 'lucide-react';
import { galleryImages } from '../data/galleryData';
import '../styles/Gallery.css';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [showImageInfo, setShowImageInfo] = useState(false);
  const [isFavorited, setIsFavorited] = useState<number[]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Handle scroll effects for the header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter images by category
  const filteredImages =
    category === 'all'
      ? galleryImages
      : galleryImages.filter(image => image.category === category);

  // Extract unique categories for the filter
  const categories = [
    'all',
    ...new Set(galleryImages.map(img => img.category)),
  ];

  // Toggle favorite status
  const toggleFavorite = (id: number) => {
    if (isFavorited.includes(id)) {
      setIsFavorited(isFavorited.filter(itemId => itemId !== id));
    } else {
      setIsFavorited([...isFavorited, id]);
    }
  };

  // Lightbox navigation handlers
  const prevImage = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(
      img => img.id === selectedImage
    );
    const prevIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex].id);
    setLightboxImageIndex(prevIndex);
    setShowImageInfo(false);
  };

  const nextImage = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(
      img => img.id === selectedImage
    );
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex].id);
    setLightboxImageIndex(nextIndex);
    setShowImageInfo(false);
  };

  // Open lightbox with specific image
  const openLightbox = (id: number) => {
    const index = filteredImages.findIndex(img => img.id === id);
    setSelectedImage(id);
    setLightboxImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    setShowImageInfo(false);
    document.body.style.overflow = 'auto';
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      switch (e.key) {
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'Escape':
          closeLightbox();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages]);

  // Scroll to gallery section on load
  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-black via-gray-900 to-black'>
      {/* Hero Section */}
      <section className='relative h-screen'>
        {/* Background Image with Overlay */}
        <div className='absolute inset-0'>
          <img
            src={'/sao1.jpg'}
            alt='Gallery Hero'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90' />

          {/* Grid Lines Overlay - Futuristic Element */}
          <div className='absolute inset-0 grid grid-cols-6 opacity-20'>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className='border-l border-orange-500/30 h-full'
              ></div>
            ))}
          </div>
          <div className='absolute inset-0 grid grid-rows-6 opacity-20'>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className='border-t border-orange-500/30 w-full'
              ></div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className='container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 text-center'>
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight'>
            SAO <span className='text-orange-500'>Gallery</span>
          </h1>
          <p className='text-xl text-gray-300 max-w-2xl mb-10'>
            Explore moments captured from student life, events, and activities
            at Al Akhawayn University.
          </p>

          <button
            onClick={scrollToGallery}
            className='animate-bounce bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 transition-all duration-300 mt-8'
          >
            <ChevronDown className='w-6 h-6' />
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className='py-20 relative'>
        {/* Glassmorphism Header */}
        <div
          className={`sticky top-0 z-20 transition-all duration-500 ${
            isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
          }`}
        >
          <div className='container mx-auto px-4 py-6'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
              <h2 className='text-3xl font-bold text-white'>
                Photo <span className='text-orange-500'>Collection</span>
              </h2>

              {/* Category Filter */}
              <div className='flex flex-wrap gap-3 justify-center'>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      category === cat
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='container mx-auto px-4 mt-8'>
          {/* Gallery Grid with Animation */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className='group relative h-72 overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-500 hover:shadow-orange-500/20 hover:shadow-xl'
                onClick={() => openLightbox(image.id)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.5s ease-out forwards',
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Image Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'>
                  <h3 className='text-white text-xl font-bold mb-1'>
                    {image.alt}
                  </h3>
                  <p className='text-gray-300 text-sm'>{image.description}</p>

                  <div className='flex justify-between items-center mt-4'>
                    <span className='inline-block bg-orange-500/80 text-white text-xs px-2 py-1 rounded-full'>
                      {image.category}
                    </span>
                    <button
                      className='text-white hover:text-orange-500 transition-colors'
                      onClick={e => {
                        e.stopPropagation();
                        toggleFavorite(image.id);
                      }}
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          isFavorited.includes(image.id)
                            ? 'fill-orange-500 text-orange-500'
                            : 'fill-none'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Glowing border on hover - futuristic effect */}
                <div className='absolute inset-0 border border-transparent group-hover:border-orange-500/30 rounded-xl transition-all duration-500'></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          {/* Backdrop */}
          <div
            className='absolute inset-0 bg-black/95 backdrop-blur-sm'
            onClick={closeLightbox}
          />

          {/* Content Container */}
          <div className='relative w-full max-w-5xl z-10 p-4'>
            {/* Close Button */}
            <button
              className='absolute top-4 right-4 z-20 bg-black/50 hover:bg-orange-500 text-white rounded-full p-2 transition-colors duration-300'
              onClick={closeLightbox}
            >
              <X className='w-6 h-6' />
            </button>

            {/* Navigation Buttons */}
            <button
              className='absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-orange-500 text-white rounded-full p-3 transition-colors duration-300'
              onClick={prevImage}
            >
              <ChevronLeft className='w-6 h-6' />
            </button>

            <button
              className='absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-orange-500 text-white rounded-full p-3 transition-colors duration-300'
              onClick={nextImage}
            >
              <ChevronRight className='w-6 h-6' />
            </button>

            {/* Image Container */}
            <div className='relative rounded-xl overflow-hidden shadow-2xl shadow-orange-500/10'>
              <img
                src={filteredImages[lightboxImageIndex]?.src}
                alt={filteredImages[lightboxImageIndex]?.alt}
                className='w-full h-auto max-h-[80vh] object-contain bg-black/80'
              />

              {/* Caption Bar */}
              <div className='absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 flex justify-between items-center'>
                <div>
                  <h3 className='text-white text-xl font-bold'>
                    {filteredImages[lightboxImageIndex]?.alt}
                  </h3>
                  <p className='text-gray-300 text-sm'>
                    {filteredImages[lightboxImageIndex]?.date}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className='flex space-x-4'>
                  <button
                    className='text-white hover:text-orange-500 transition-colors'
                    onClick={() =>
                      toggleFavorite(filteredImages[lightboxImageIndex]?.id)
                    }
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isFavorited.includes(
                          filteredImages[lightboxImageIndex]?.id
                        )
                          ? 'fill-orange-500 text-orange-500'
                          : 'fill-none'
                      }`}
                    />
                  </button>
                  <button
                    className='text-white hover:text-orange-500 transition-colors'
                    onClick={() => setShowImageInfo(!showImageInfo)}
                  >
                    <Info className='w-5 h-5' />
                  </button>
                  <button className='text-white hover:text-orange-500 transition-colors'>
                    <ZoomIn className='w-5 h-5' />
                  </button>
                  <button className='text-white hover:text-orange-500 transition-colors'>
                    <Download className='w-5 h-5' />
                  </button>
                  <button className='text-white hover:text-orange-500 transition-colors'>
                    <Share2 className='w-5 h-5' />
                  </button>
                </div>
              </div>

              {/* Image Info Panel - Slides in from bottom */}
              <div
                className={`absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md p-6 transition-transform duration-300 border-t border-orange-500/20 ${
                  showImageInfo ? 'translate-y-0' : 'translate-y-full'
                }`}
                style={{
                  transform: showImageInfo
                    ? 'translateY(100%)'
                    : 'translateY(200%)',
                  height: '50vh',
                }}
              >
                <div className='h-full overflow-y-auto'>
                  <h3 className='text-white text-2xl font-bold mb-4'>
                    Image Information
                  </h3>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <h4 className='text-orange-500 font-semibold mb-2'>
                        Details
                      </h4>
                      <ul className='space-y-2 text-gray-300'>
                        <li className='flex justify-between'>
                          <span className='text-gray-400'>Title:</span>
                          <span>{filteredImages[lightboxImageIndex]?.alt}</span>
                        </li>
                        <li className='flex justify-between'>
                          <span className='text-gray-400'>Date:</span>
                          <span>
                            {filteredImages[lightboxImageIndex]?.date}
                          </span>
                        </li>
                        <li className='flex justify-between'>
                          <span className='text-gray-400'>Category:</span>
                          <span>
                            {filteredImages[lightboxImageIndex]?.category}
                          </span>
                        </li>
                        <li className='flex justify-between'>
                          <span className='text-gray-400'>Location:</span>
                          <span>
                            {filteredImages[lightboxImageIndex]?.location ||
                              'AUI Campus'}
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className='text-orange-500 font-semibold mb-2'>
                        Description
                      </h4>
                      <p className='text-gray-300'>
                        {filteredImages[lightboxImageIndex]?.fullDescription ||
                          filteredImages[lightboxImageIndex]?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* No inline styles here - they are defined in the CSS file */}
    </div>
  );
};

export default GalleryPage;
