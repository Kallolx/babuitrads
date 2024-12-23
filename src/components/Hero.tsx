import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineGlobeAlt, HiOutlineCube, HiOutlineChartBar, HiOutlineBriefcase, HiOutlineShieldCheck, HiOutlineClock, HiOutlineGlobe, HiOutlineSparkles } from 'react-icons/hi'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import AnimatedBackground from './AnimatedBackground'

const Hero = () => {
  const [activeCard, setActiveCard] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Testimonials
  const testimonials = [
    {
      text: "MS BABUI TRADERS has transformed our supply chain with their innovative solutions and unwavering commitment to excellence. Their expertise has been instrumental in our growth.",
      author: "John Smith",
      position: "Supply Chain Director"
    },
    {
      text: "A trusted partner that consistently delivers excellence across all business verticals. Their global reach and local understanding make them uniquely valuable.",
      author: "Sarah Johnson",
      position: "Operations Manager"
    },
    {
      text: "Their dedication to quality and customer service sets them apart. Working with MS BABUI TRADERS has been a game-changer for our business.",
      author: "Michael Chen",
      position: "Project Lead"
    }
  ]

  const features = [
    {
      icon: HiOutlineShieldCheck,
      label: "Trusted Excellence",
      description: "15+ Years of Quality Service"
    },
    {
      icon: HiOutlineClock,
      label: "24/7 Support",
      description: "Round-the-Clock Assistance"
    },
    {
      icon: HiOutlineGlobe,
      label: "Global Reach",
      description: "Operating in 10+ Countries"
    },
    {
      icon: HiOutlineSparkles,
      label: "Innovation",
      description: "Cutting-edge Solutions"
    }
  ]

  useEffect(() => {
    // Card rotation
    const cardInterval = setInterval(() => {
      setActiveCard((prev) => (prev === 0 ? 1 : 0))
    }, 4000)

    // Testimonial rotation
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => {
      clearInterval(cardInterval)
      clearInterval(testimonialInterval)
    }
  }, [testimonials.length])

  return (
    <section className="relative min-h-screen bg-nav-dark py-12 lg:py-20 overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Business Card Showcase */}
          <motion.div 
            className="relative w-full max-w-[600px] aspect-[600/350]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Cards Container */}
            <div className="relative w-full h-full">
              {/* Front Card */}
              <div 
                className={`absolute w-full h-full transition-all duration-1000 ease-in-out
                  ${activeCard === 0 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 -translate-y-8 scale-95'}`}
              >
                <img 
                  src="/images/card-front.png" 
                  alt="Business Card Front" 
                  className="w-full h-full object-contain rounded-xl shadow-2xl"
                />
              </div>
              
              {/* Back Card */}
              <div 
                className={`absolute w-full h-full transition-all duration-1000 ease-in-out
                  ${activeCard === 1 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'}`}
              >
                <img 
                  src="/images/card-back.png" 
                  alt="Business Card Back" 
                  className="w-full h-full object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Card Indicators */}
              <div className="absolute -bottom-8 lg:-bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
                {[0, 1].map((index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-500
                      ${activeCard === index 
                        ? 'bg-nav-gold w-6' 
                        : 'bg-nav-gold/30'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hero Title & Description */}
          <div className="mt-20 text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-cinzel text-white font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              MS BABUI TRADERS
            </motion.h1>

            <motion.p 
              className="mt-6 text-lg md:text-xl text-nav-gold/90 font-dm-sans font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pioneering excellence across industries through innovative solutions and 
              unwavering commitment to quality. Your strategic partner in global trade, 
              healthcare, and sustainable development.
            </motion.p>
          </div>

          {/* Feature Badges - Now under the title */}
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                className="group relative bg-nav-dark/50 backdrop-blur-sm border border-nav-gold/20 rounded-xl p-4 
                         hover:border-nav-gold/40 transition-all duration-300 shadow-feature hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center">
                  <feature.icon className="w-8 h-8 text-nav-gold mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-white font-dm-sans font-medium text-sm mb-1">
                    {feature.label}
                  </h3>
                  <p className="text-nav-gold/70 font-dm-sans text-xs">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-nav-gold/0 via-nav-gold/5 to-nav-gold/0 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </motion.div>
            ))}
          </motion.div>

          {/* Business Stats */}
          <motion.div 
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { 
                icon: HiOutlineGlobeAlt, 
                label: 'GLOBAL MARKETS', 
                value: '10+',
                color: 'from-[#FFD700]/20 to-transparent'
              },
              { 
                icon: HiOutlineCube, 
                label: 'BUSINESS VERTICALS', 
                value: '6+',
                color: 'from-[#E6BE8A]/20 to-transparent'
              },
              { 
                icon: HiOutlineChartBar, 
                label: 'YEARS OF GROWTH', 
                value: '15+',
                color: 'from-[#C4A962]/20 to-transparent'
              },
              { 
                icon: HiOutlineBriefcase, 
                label: 'ACTIVE PROJECTS', 
                value: '50+',
                color: 'from-[#DAA520]/20 to-transparent'
              },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="relative group">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-b ${color} opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10`} />
                
                {/* Icon */}
                <div className="flex justify-center">
                  <Icon className="w-12 h-12 text-nav-gold/30 group-hover:text-nav-gold 
                                 transition-all duration-300 transform group-hover:scale-110" />
                </div>

                {/* Value */}
                <div className="mt-4 text-center">
                  <div className="text-white font-dm-sans text-5xl md:text-6xl font-light tracking-tight">
                    {value}
                  </div>
                  <div className="mt-2 text-nav-gold/70 font-dm-sans text-xs tracking-[0.2em] uppercase">
                    {label}
                  </div>
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] 
                              bg-gradient-to-r from-transparent via-nav-gold to-transparent 
                              opacity-0 group-hover:opacity-100 transition-all duration-300
                              group-hover:w-full" />
              </div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div 
            className="mt-20 relative max-w-4xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative bg-nav-dark/50 backdrop-blur-sm border border-nav-gold/20 rounded-2xl p-8 md:p-12">
              {/* Quote Icon */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="bg-nav-dark p-4 rounded-full border border-nav-gold/20">
                  <svg 
                    className="w-6 h-6 text-nav-gold" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              {/* Testimonials Slider */}
              <div className="overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-center"
                  >
                    <p className="text-white/90 font-dm-sans text-xl md:text-2xl font-light leading-relaxed">
                      "{testimonials[activeTestimonial].text}"
                    </p>
                    <div className="mt-8 text-nav-gold">
                      <div className="font-cinzel text-lg">
                        {testimonials[activeTestimonial].author}
                      </div>
                      <div className="text-sm text-nav-gold/70 font-dm-sans uppercase tracking-widest mt-1">
                        {testimonials[activeTestimonial].position}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={() => setActiveTestimonial(prev => 
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )}
                  className="p-2 text-nav-gold hover:text-white transition-colors duration-300 
                             group flex items-center gap-2"
                >
                  <IoArrowBack className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
                  <span className="text-sm font-dm-sans">Previous</span>
                </button>

                {/* Progress Bar */}
                <div className="flex-1 mx-8 h-[2px] bg-nav-gold/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-nav-gold"
                    initial={{ width: '0%' }}
                    animate={{ width: `${((activeTestimonial + 1) / testimonials.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>

                <button
                  onClick={() => setActiveTestimonial(prev => 
                    prev === testimonials.length - 1 ? 0 : prev + 1
                  )}
                  className="p-2 text-nav-gold hover:text-white transition-colors duration-300 
                             group flex items-center gap-2"
                >
                  <span className="text-sm font-dm-sans">Next</span>
                  <IoArrowForward className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.a 
            href="/contact" 
            className="mt-16 group relative px-8 py-4 bg-nav-gold/10 text-nav-gold font-dm-sans 
                     text-lg font-medium tracking-wider overflow-hidden rounded-lg 
                     backdrop-blur-sm transition-all duration-300 hover:text-nav-dark"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="relative z-10 uppercase">Explore Our Ventures</span>
            <div className="absolute inset-0 bg-nav-gold transform scale-x-0 group-hover:scale-x-100 
                          transition-transform duration-300 origin-left" 
            />
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Hero 