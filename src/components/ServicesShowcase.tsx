import { motion } from 'framer-motion'
import { HiOutlineHeart, HiOutlineLightningBolt, HiOutlineCube } from 'react-icons/hi'

const ServicesShowcase = () => {
  const services = [
    {
      id: 1,
      title: "MS Malek Medical Hall",
      icon: HiOutlineHeart,
      image: "https://images.pexels.com/photos/9742738/pexels-photo-9742738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Your trusted healthcare partner providing quality medical supplies and pharmaceuticals",
      features: ["Medical Supplies", "Pharmaceuticals", "Healthcare Equipment"]
    },
    {
      id: 2,
      title: "Agricultural Division",
      icon: HiOutlineLightningBolt,
      image: "https://images.pexels.com/photos/5531372/pexels-photo-5531372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Sustainable farming practices and modern agricultural solutions",
      features: ["Fish Farming", "Crop Production", "Fresh Produce"]
    },
    {
      id: 3,
      title: "Supply Solutions",
      icon: HiOutlineCube,
      image: "https://images.pexels.com/photos/4483775/pexels-photo-4483775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "End-to-end supply chain management for businesses",
      features: ["Business Supplies", "Distribution", "Logistics"]
    }
  ]

  return (
    <section className="relative bg-gradient-to-b from-black to-nav-dark py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-dm-sans font-bold text-white mb-4">
            Our <span className="text-nav-gold">Services</span>
          </h2>
          <div className="w-20 h-1 bg-nav-gold mx-auto" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-nav-dark border border-nav-gold/20 rounded-xl overflow-hidden 
                            hover:border-nav-gold/40 transition-all duration-300">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nav-dark to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-lg bg-nav-gold/10 backdrop-blur-sm 
                                  flex items-center justify-center border border-nav-gold/20">
                      <service.icon className="w-5 h-5 text-nav-gold" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-dm-sans font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-dm-sans text-sm mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-nav-gold/50" />
                        <span className="text-gray-300 text-sm font-dm-sans">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesShowcase 