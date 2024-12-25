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
        <div className="text-center mb-16">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src="/images/2.png" 
              alt="MS BABUI TRADERS Logo" 
              className="h-24 md:h-32 mx-auto"
            />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-dm-sans text-white font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-nav-gold via-white to-nav-gold bg-clip-text text-transparent font-dm-sans">
              Your Complete Business Solution Partner
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-nav-gold/90 font-dm-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            "We will continue growing, innovating, and building a better tomorrow."
          </motion.p>
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