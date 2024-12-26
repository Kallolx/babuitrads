import { motion } from 'framer-motion'
import { HiOutlineGlobeAlt, HiOutlineTruck, HiOutlineOfficeBuilding, HiOutlineArrowDown } from 'react-icons/hi'
import AnimatedBackground from './AnimatedBackground'

const Hero = () => {
  // Reduced number of categories to show key services
  const businessCategories = [
    {
      icon: HiOutlineGlobeAlt,
      title: "Trading & Supply",
      description: "Comprehensive trading solutions and supply chain management",
      highlights: ["Import/Export", "Local Distribution", "Business Supplies"]
    },
    {
      icon: HiOutlineOfficeBuilding,
      title: "Healthcare",
      description: "MS Malek Medical Hall - Complete healthcare solutions",
      highlights: ["Medical Supplies", "Pharmaceuticals", "Equipment"]
    },
    {
      icon: HiOutlineTruck,
      title: "Agriculture",
      description: "Modern farming and sustainable development",
      highlights: ["Crop Production", "Fish Farming", "Fresh Produce"]
    }
  ]

  return (
    <section className="relative min-h-screen bg-nav-dark py-12 lg:py-20 overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main Hero Content */}
        <div className="text-center space-y-12">
          {/* Logo Section with animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotateY: [0, 360],
            }}
            transition={{ 
              duration: 1.5,
              rotateY: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            className="relative"
          >
            {/* Circular Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-32 h-32 md:w-40 md:h-40 rounded-full bg-nav-gold/10 blur-xl z-0" />
            
            {/* Logo Image */}
            <img 
              src="/images/2.png" 
              alt="MS BABUI TRADERS Logo" 
              className="h-32 md:h-36 lg:h-40 mx-auto relative z-10"
            />

            {/* Rotating Border */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-32 h-32 md:w-40 md:h-40 border-2 border-nav-gold/20 rounded-full
                          animate-[spin_10s_linear_infinite] z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-32 h-32 md:w-40 md:h-40 border-2 border-nav-gold/10 rounded-full
                          animate-[spin_15s_linear_infinite_reverse] z-0" />
          </motion.div>

          {/* Title and Tagline Container */}
          <div className="relative z-20">
            {/* Title Section */}
            <motion.h1 
              className="text-5xl md:text-4xl lg:text-6xl font-dm-sans font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-[#C4A962] via-white/90 to-[#C4A962] bg-clip-text text-transparent">
                Your Complete Business Solution Partner
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p 
              className="text-base md:text-lg text-[#C4A962] font-dm-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              "We will continue growing, innovating, and building a better tomorrow."
            </motion.p>
          </div>
        </div>

        {/* Business Categories Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {businessCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative bg-nav-dark/50 backdrop-blur-sm border border-nav-gold/20 
                       rounded-xl p-6 hover:border-nav-gold/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-nav-gold/10 flex items-center justify-center
                              group-hover:bg-nav-gold/20 transition-colors duration-300">
                  <category.icon className="w-6 h-6 text-nav-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-dm-sans font-medium text-lg mb-2">
                    {category.title}
                  </h3>
                  <p className="text-nav-gold/70 text-sm mb-4 font-dm-sans">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/80 text-sm font-dm-sans">
                        <div className="w-1.5 h-1.5 rounded-full bg-nav-gold/50" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-nav-gold/70 text-sm font-dm-sans">Discover More</span>
            <HiOutlineArrowDown className="w-6 h-6 text-nav-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 