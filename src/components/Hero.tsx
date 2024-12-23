import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineGlobeAlt, HiOutlineCube, HiOutlineChartBar, HiOutlineBriefcase, HiOutlineShieldCheck, HiOutlineClock, HiOutlineGlobe, HiOutlineSparkles } from 'react-icons/hi'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import AnimatedBackground from './AnimatedBackground'

const Hero = () => {
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
    // Testimonial rotation
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(testimonialInterval)
  }, [testimonials.length])

  return (
    <section className="relative min-h-screen bg-nav-dark py-12 lg:py-20 overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo Section with Side Badges */}
          <div className="relative w-full max-w-[800px] mx-auto">
            {/* Mobile Badges - Top */}
            <div className="grid grid-cols-2 gap-3 mb-6 md:hidden">
              <motion.div
                className="bg-nav-dark/50 backdrop-blur-sm border border-nav-gold/20 rounded-lg p-2.5 w-full"
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-nav-gold/10 flex items-center justify-center">
                    <HiOutlineGlobeAlt className="w-4 h-4 text-nav-gold" />
                  </div>
                  <div>
                    <div className="text-white font-dm-sans text-xs font-medium">Global Reach</div>
                    <div className="text-nav-gold/70 text-[10px]">10+ Countries</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-nav-dark/50 backdrop-blur-sm border border-nav-gold/20 rounded-lg p-2.5 w-full"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-nav-gold/10 flex items-center justify-center">
                    <HiOutlineShieldCheck className="w-4 h-4 text-nav-gold" />
                  </div>
                  <div>
                    <div className="text-white font-dm-sans text-xs font-medium">Quality Assured</div>
                    <div className="text-nav-gold/70 text-[10px]">ISO Certified</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex items-center justify-center">
              {/* Left Side Badges - Desktop */}
              <div className="hidden md:flex flex-col gap-4 -mr-6">
                <motion.div
                  className="bg-nav-dark/50 backdrop-blur-sm border border-nav-gold/20 rounded-lg p-3 w-[180px]"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 1,
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-nav-gold/10 flex items-center justify-center">
                      <HiOutlineGlobeAlt className="w-5 h-5 text-nav-gold" />
                    </div>
                    <div>
                      <div className="text-white font-dm-sans text-sm font-medium">Global Reach</div>
                      <div className="text-nav-gold/70 text-xs">10+ Countries</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-nav-dark/50 backdrop-blur-sm border border-nav-gold/20 rounded-lg p-3 w-[180px]"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    y: [0, 10, 0]
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-nav-gold/10 flex items-center justify-center">
                      <HiOutlineShieldCheck className="w-5 h-5 text-nav-gold" />
                    </div>
                    <div>
                      <div className="text-white font-dm-sans text-sm font-medium">Quality Assured</div>
                      <div className="text-nav-gold/70 text-xs">ISO Certified</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Main Logo */}
              <motion.div 
                className="relative w-full max-w-[400px] aspect-square"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Main Logo Container */}
                <div className="relative w-full h-full">
                  {/* Logo with Floating Animation */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ 
                      y: [-5, 5, -5],
                      rotate: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <img 
                      src="/images/main.png" 
                      alt="MS BABUI TRADERS Logo" 
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </motion.div>

                  {/* Inner Glowing Ring */}
                  <motion.div
                    className="absolute inset-[10%] rounded-full border-2 border-nav-gold/20 backdrop-blur-sm"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Outer Glowing Ring */}
                  <motion.div
                    className="absolute inset-[-5%] rounded-full border border-nav-gold/10"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.1, 0.3, 0.1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Animated Particles */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-nav-gold/40"
                        style={{
                          top: '50%',
                          left: '50%',
                        }}
                        animate={{
                          x: [0, Math.cos(i * 45 * Math.PI / 180) * 180],
                          y: [0, Math.sin(i * 45 * Math.PI / 180) * 180],
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          delay: i * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>

                  {/* Glowing Accent Lines */}
                  <div className="absolute inset-0">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-nav-gold/30 to-transparent origin-left"
                        style={{
                          transform: `rotate(${i * 90}deg)`,
                        }}
                        animate={{
                          scaleX: [0, 1, 0],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>

                  {/* Radial Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-radial from-nav-gold/5 via-transparent to-transparent opacity-50" />
                </div>
              </motion.div>

              {/* Right Side Badges - Desktop */}
              <div className="hidden md:flex flex-col gap-4 -ml-6">
                <motion.div
                  className="bg-nav-dark/50 backdrop-blur-sm border border-nav-gold/20 rounded-lg p-3 w-[180px]"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    y: [0, 10, 0]
                  }}
                  transition={{
                    duration: 1,
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-nav-gold/10 flex items-center justify-center">
                      <HiOutlineChartBar className="w-5 h-5 text-nav-gold" />
                    </div>
                    <div>
                      <div className="text-white font-dm-sans text-sm font-medium">Growth Rate</div>
                      <div className="text-nav-gold/70 text-xs">25% YoY</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-nav-dark/50 backdrop-blur-sm border border-nav-gold/20 rounded-lg p-3 w-[180px]"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-nav-gold/10 flex items-center justify-center">
                      <HiOutlineBriefcase className="w-5 h-5 text-nav-gold" />
                    </div>
                    <div>
                      <div className="text-white font-dm-sans text-sm font-medium">Active Projects</div>
                      <div className="text-nav-gold/70 text-xs">50+ Running</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Mobile Badges - Bottom */}
            <div className="grid grid-cols-2 gap-3 mt-6 md:hidden">
              <motion.div
                className="bg-nav-dark/50 backdrop-blur-sm border border-nav-gold/20 rounded-lg p-2.5 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-nav-gold/10 flex items-center justify-center">
                    <HiOutlineChartBar className="w-4 h-4 text-nav-gold" />
                  </div>
                  <div>
                    <div className="text-white font-dm-sans text-xs font-medium">Growth Rate</div>
                    <div className="text-nav-gold/70 text-[10px]">25% YoY</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-nav-dark/50 backdrop-blur-sm border border-nav-gold/20 rounded-lg p-2.5 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-nav-gold/10 flex items-center justify-center">
                    <HiOutlineBriefcase className="w-4 h-4 text-nav-gold" />
                  </div>
                  <div>
                    <div className="text-white font-dm-sans text-xs font-medium">Active Projects</div>
                    <div className="text-nav-gold/70 text-[10px]">50+ Running</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Hero Title & Description */}
          <div className="mt-12 text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-dm-sans text-white font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-nav-gold via-white to-nav-gold bg-clip-text text-transparent">
                MS BABUI TRADERS
              </span>
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
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