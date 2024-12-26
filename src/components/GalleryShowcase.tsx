import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineX, HiOutlineExternalLink } from 'react-icons/hi'

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
  featured?: boolean
  description: string
  details: {
    title: string
    points: string[]
    date?: string
    location?: string
    extraInfo?: {
      size?: string
      material?: string
      designer?: string
      maintenance?: string
      vehicles?: string
      storage?: string
      tracking?: string
      service?: string
      coverage?: string
      partners?: string
      delivery?: string
      farmers?: string
      crops?: string
      training?: string
      support?: string
    }
  }
}

const GalleryShowcase = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/images/3.png",
      alt: "Our Office Logo",
      category: "branding",
      featured: true,
      description: "Our beautiful 3D wall logo shows who we are and what we stand for.",
      details: {
        title: "Our Brand Story",
        points: [
          "Special 3D logo that lights up day and night",
          "Made with the best materials to last long",
          "Shows our modern business style",
          "Makes our office look professional and welcoming"
        ],
        location: "Main Office: Dhaka",
        date: "New in 2024",
        extraInfo: {
          size: "8 feet wide",
          material: "Premium acrylic and LED lights",
          designer: "Local craftsmen team",
          maintenance: "Easy to clean and care for"
        }
      }
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1502740479091-635887520276",
      alt: "Healthcare Services",
      category: "healthcare",
      description: "We provide the best medical supplies to help people stay healthy.",
      details: {
        title: "Making Healthcare Better",
        points: [
          "Top quality medical tools and supplies",
          "Safe storage for all medicines",
          "Working with the best medical companies",
          "Quick delivery to hospitals and clinics"
        ],
        location: "MS Malek Medical Hall, Khulna",
        date: "Running since 2020",
        extraInfo: {
          coverage: "All of Bangladesh",
          partners: "Leading medical brands",
          storage: "Temperature controlled rooms",
          delivery: "24/7 emergency service"
        }
      }
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7",
      alt: "Farming Help",
      category: "agriculture",
      description: "We help farmers grow more food with new farming methods.",
      details: {
        title: "Better Farming for Everyone",
        points: [
          "Teaching new farming tricks",
          "Using water wisely",
          "Helping farmers sell their crops",
          "Making farming easier with machines"
        ],
        location: "All over Bangladesh",
        date: "Ongoing work",
        extraInfo: {
          farmers: "Helping 1000+ farmers",
          crops: "All types of local crops",
          training: "Free farming classes",
          support: "24/7 farmer helpline"
        }
      }
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Supply Chain Management",
      category: "logistics",
      description: "Fast and reliable delivery network across Bangladesh.",
      details: {
        title: "Smart Supply Chain Solutions",
        points: [
          "Quick delivery to all areas",
          "Safe storage facilities",
          "Real-time tracking system",
          "Professional handling team"
        ],
        location: "Multiple Hubs in Bangladesh",
        date: "Active Service",
        extraInfo: {
          vehicles: "Own transport fleet",
          storage: "Modern warehouses",
          tracking: "Live GPS tracking",
          service: "365 days operation"
        }
      }
    }
  ]

  return (
    <section className="relative bg-gradient-to-b from-black to-nav-dark py-20 overflow-hidden font-dm-sans">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-nav-gold">Business</span> Portfolio
          </h2>
          <div className="w-20 h-1 bg-nav-gold mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our diverse range of operations and commitment to excellence across multiple sectors
          </p>
        </motion.div>

        <div className="space-y-12">
          {galleryImages.filter(img => img.featured).map((image) => (
            <motion.div
              key={image.id}
              layoutId={`image-${image.id}`}
              className="relative aspect-square md:aspect-[21/9] cursor-pointer overflow-hidden rounded-2xl group"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500
                         md:filter md:grayscale md:group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90
                           opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-nav-gold text-sm">
                      {image.details.date}
                    </span>
                    <button className="inline-flex items-center gap-2 text-nav-gold hover:text-white transition-colors duration-300">
                      <span className="text-sm">View Details</span>
                      <HiOutlineExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" layout>
            {galleryImages.filter(img => !img.featured).map((image) => (
              <motion.div
                key={image.id}
                layoutId={`image-${image.id}`}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-xl group"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-500
                           md:filter md:grayscale md:group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90
                             opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-nav-gold text-sm">
                        {image.category}
                      </span>
                      <span className="text-white/80 text-sm">
                        Click to view
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 backdrop-blur-sm" />
            
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-50 group"
            >
              <div className="relative p-2">
                <div className="absolute inset-0 rounded-full bg-nav-dark border border-nav-gold/20 
                             group-hover:border-nav-gold/40 transition-colors duration-300" />
                <HiOutlineX className="w-6 h-6 text-nav-gold relative z-10 
                                    group-hover:rotate-90 transition-transform duration-300" />
              </div>
            </button>
            
            <div className="relative z-10 max-w-7xl w-full overflow-y-auto max-h-[90vh]">
              <div className="flex flex-col md:flex-row gap-8">
                <motion.div className="flex-1">
                  <motion.img
                    layoutId={`image-${selectedImage.id}`}
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full rounded-lg shadow-2xl"
                  />
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-nav-gold text-sm">
                      {selectedImage.details.location}
                    </div>
                    <div className="text-nav-gold text-sm">
                      {selectedImage.details.date}
                    </div>
                  </div>
                </motion.div>

                <div className="flex-1 text-white">
                  <h3 className="text-2xl font-medium mb-8">
                    {selectedImage.details.title}
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-nav-gold text-sm mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {selectedImage.details.points.map((point, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-nav-gold/50 mt-2 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {selectedImage.details.extraInfo && (
                      <div className="grid grid-cols-2 gap-4 mt-8">
                        {Object.entries(selectedImage.details.extraInfo).map(([key, value]) => (
                          <div key={key} className="bg-nav-dark/30 p-4 rounded-lg">
                            <p className="text-nav-gold text-sm mb-1 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </p>
                            <p className="text-gray-300">{value}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GalleryShowcase 