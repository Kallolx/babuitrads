import { motion } from 'framer-motion'
import { HiOutlineLightBulb, HiOutlineGlobe, HiOutlineScale, HiOutlineChartBar } from 'react-icons/hi'

const AboutUs = () => {
  const companyStats = [
    { number: "15+", label: "Years of Trust", icon: HiOutlineLightBulb },
    { number: "100+", label: "Happy Partners", icon: HiOutlineGlobe },
    { number: "500+", label: "Projects Done", icon: HiOutlineScale },
    { number: "95%", label: "Happy Clients", icon: HiOutlineChartBar },
  ]

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about-us" className="relative py-20 bg-gradient-to-b from-nav-dark to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("/images/pattern.png")',
          backgroundSize: '30px 30px',
          backgroundRepeat: 'repeat'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUpVariant}
        >
          <h2 className="text-3xl md:text-4xl font-dm-sans font-bold text-white mb-4">
            Who We <span className="text-nav-gold">Are</span>
          </h2>
          <div className="w-20 h-1 bg-nav-gold mx-auto mb-6" />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-dm-sans">
            Since we started, MS BABUI TRADERS has been helping businesses grow. We work in many areas like trade, healthcare, and farming.
          </p>
        </motion.div>

        {/* Company Overview */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="object-cover w-full h-full"
              >
                <source 
                  src="/images/vid.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-nav-gold/10" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white font-dm-sans">
              Making Business Simple
            </h3>
            <p className="text-gray-300 font-dm-sans">
              We help businesses succeed by making things easier. Our team works hard to bring the best solutions to our partners. Whether it's trading goods, providing medical supplies, or helping farmers, we do it all with care.
            </p>
            <div className="space-y-4">
              {[
                "Best Quality Products & Services",
                "Quick & Reliable Solutions",
                "Friendly Support Team",
                "Fair Prices",
                "Always Here to Help"
              ].map((item, index) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-nav-gold" />
                  <span className="text-gray-200 font-dm-sans">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {companyStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-nav-dark/50 border border-nav-gold/20 rounded-xl p-6 
                            backdrop-blur-sm group-hover:border-nav-gold/40 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-nav-gold mb-4" />
                <h4 className="text-3xl font-bold text-white mb-2 font-dm-sans">{stat.number}</h4>
                <p className="text-gray-400 text-sm font-dm-sans">{stat.label}</p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-nav-gold/0 via-nav-gold/5 to-nav-gold/0 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs 