import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  HiOutlinePhone, 
  HiOutlineMail, 
  HiOutlineLocationMarker,
  HiOutlineClipboard,
  HiOutlineClipboardCheck
} from 'react-icons/hi'
import { 
  FaFacebook, 
  FaInstagram
} from 'react-icons/fa'

const Contact = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      setTimeout(() => setCopiedText(null), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  const contactInfo = [
    {
      icon: HiOutlinePhone,
      title: "Phone",
      details: ["+8801611-100189"]
    },
    {
      icon: HiOutlineMail,
      title: "Email",
      details: ["msbabuitradersbd@gmail.com"]
    }
  ]

  const locations = [
    {
      title: "Dhaka Office",
      address: "House #55/C, Road #9/A, Dhanmondi, Dhaka-1209"
    },
    {
      title: "Khulna Office",
      address: "109, KCC Super Market (1st Floor) KD Ghosh Road, Khulna"
    }
  ]

  const socialLinks = [
    {
      icon: FaFacebook,
      url: "https://facebook.com/msbabuiltraders",
      label: "Facebook"
    },
    {
      icon: FaInstagram,
      url: "https://instagram.com/msbabuiltraders",
      label: "Instagram"
    }
  ]

  return (
    <section id="contact" className="relative bg-gradient-to-b from-nav-dark to-black py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-dm-sans font-bold text-white mb-4">
            Get in <span className="text-nav-gold">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-nav-gold mx-auto" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Info Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-nav-gold/10 to-transparent 
                              rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative border-l-2 border-nav-gold pl-6 py-2">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-nav-dark 
                                border-2 border-nav-gold group-hover:scale-125 transition-transform duration-300" />
                  <h3 className="text-white font-dm-sans font-medium text-lg mb-3 flex items-center gap-3">
                    <info.icon className="w-5 h-5 text-nav-gold" />
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-3 mb-2 last:mb-0 bg-nav-dark/30 rounded-lg p-2
                                hover:bg-nav-dark/50 transition-colors duration-300 group/item"
                    >
                      <p className="text-gray-300 font-dm-sans flex-1">
                        {detail}
                      </p>
                      <button
                        onClick={() => handleCopy(detail)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-md
                                 bg-nav-gold/10 hover:bg-nav-gold/20 transition-all duration-300
                                 border border-nav-gold/20 hover:border-nav-gold/40"
                        title="Copy to clipboard"
                      >
                        {copiedText === detail ? (
                          <motion.div
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            className="flex items-center gap-2 text-green-500"
                          >
                            <HiOutlineClipboardCheck className="w-4 h-4" />
                            <span className="text-xs font-dm-sans">Copied!</span>
                          </motion.div>
                        ) : (
                          <div className="flex items-center gap-2 text-nav-gold">
                            <HiOutlineClipboard className="w-4 h-4" />
                            <span className="text-xs font-dm-sans">Copy</span>
                          </div>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Locations Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-white font-dm-sans font-medium text-lg mb-6 flex items-center gap-3 justify-center">
              <HiOutlineLocationMarker className="w-5 h-5 text-nav-gold" />
              Our Locations
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {locations.map((location, index) => (
                <motion.div
                  key={location.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-nav-dark/50 backdrop-blur-sm border border-nav-gold/20 rounded-xl p-6
                            hover:border-nav-gold/40 transition-all duration-300"
                >
                  <h4 className="text-nav-gold font-dm-sans font-medium mb-2">
                    {location.title}
                  </h4>
                  <p className="text-gray-300 font-dm-sans">
                    {location.address}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-white font-dm-sans font-medium mb-6">
              Connect With Us
            </h3>
            <div className="flex justify-center items-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="w-14 h-14 rounded-full bg-nav-gold/10 flex items-center justify-center
                             hover:bg-nav-gold/20 transform hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-6 h-6 text-nav-gold" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast Notification */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: copiedText ? 1 : 0, 
          y: copiedText ? 0 : 50 
        }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 
                   bg-nav-gold/90 backdrop-blur-sm text-nav-dark px-4 py-2 rounded-lg
                   font-dm-sans font-medium shadow-lg flex items-center gap-2"
      >
        <HiOutlineClipboardCheck className="w-5 h-5" />
        <span>Copied to clipboard!</span>
      </motion.div>
    </section>
  )
}

export default Contact 