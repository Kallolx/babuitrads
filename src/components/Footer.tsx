import { HiOutlineHeart } from 'react-icons/hi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="relative bg-nav-dark border-t border-nav-gold/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left Side - Logo and Company Name */}
            <div className="flex items-center gap-4">
              <img 
                src="/images/2.png" 
                alt="MS BABUI TRADERS Logo" 
                className="h-16 w-auto"
              />
              <div>
                <h3 className="text-white font-dm-sans text-xl font-medium">
                  MS BABUI TRADERS
                </h3>
                <p className="text-nav-gold/90 font-dm-sans text-sm">
                  Your Complete Business Solution Partner
                </p>
              </div>
            </div>

            {/* Right Side - Navigation */}
            <div className="flex items-center gap-8">
              <button 
                onClick={scrollToTop}
                className="text-gray-400 hover:text-nav-gold text-sm font-dm-sans 
                         transition-colors duration-300 hover:scale-105 transform"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about-us')}
                className="text-gray-400 hover:text-nav-gold text-sm font-dm-sans 
                         transition-colors duration-300 hover:scale-105 transform"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 hover:text-nav-gold text-sm font-dm-sans 
                         transition-colors duration-300 hover:scale-105 transform"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Copyright - Bottom */}
          <div className="text-center mt-6 pt-6 border-t border-nav-gold/10">
            <p className="text-gray-400 text-sm font-dm-sans flex items-center justify-center gap-1">
              © {currentYear} MS BABUI TRADERS. Made with 
              <HiOutlineHeart className="text-nav-gold w-4 h-4 animate-pulse" />
              by
              <a 
                href="https://github.com/Kallolx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-nav-gold hover:text-white transition-colors duration-300
                         hover:scale-105 transform inline-flex items-center gap-1"
              >
                Kallolx
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 