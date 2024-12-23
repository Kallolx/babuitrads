import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenuOutline, IoCloseOutline, IoChevronDown } from 'react-icons/io5'

interface DropdownProps {
  title: string;
  items: { name: string; path: string; }[];
}

const DropdownMenu = ({ title, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={(e) => {
        // Check if we're not hovering over the dropdown menu
        const relatedTarget = e.relatedTarget as HTMLElement;
        if (!relatedTarget?.closest('.dropdown-menu')) {
          setTimeout(() => setIsOpen(false), 100);
        }
      }}
    >
      <button className="flex items-center gap-1 text-nav-gold hover:text-white font-cinzel py-2">
        {title}
        <IoChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <div 
        className={`dropdown-menu absolute top-full left-0 mt-0 w-60 bg-nav-dark/95 backdrop-blur-sm 
          border border-nav-gold/20 rounded-sm shadow-xl transition-all duration-300 origin-top z-50
          ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="py-2">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-3 text-nav-gold hover:bg-nav-gold/10 hover:text-white 
                       font-cinzel text-sm transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Separate arrays for desktop dropdowns
  const businessLinks = [
    { name: 'IMPORT & EXPORT', path: '/import-export' },
    { name: 'CONTRACTING', path: '/contracting' },
    { name: 'SUPPLY CHAIN', path: '/supply-chain' },
  ]

  const servicesLinks = [
    { name: 'AGRICULTURE', path: '/agriculture' },
    { name: 'HEALTHCARE', path: '/healthcare' },
  ]

  // Combined array for mobile menu
  const allLinks = [
    ...businessLinks,
    { name: 'ABOUT US', path: '/about' },
    ...servicesLinks,
    { name: 'CONTACT US', path: '/contact' },
  ]

  return (
    <nav className="bg-nav-dark relative z-40">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-end pr-16">
            <DropdownMenu title="BUSINESS" items={businessLinks} />
            <Link to="/about" className="text-nav-gold hover:text-white font-cinzel">
              ABOUT US
            </Link>
          </div>

          {/* Logo section */}
          <div className="flex items-center gap-2 lg:gap-4">
            <span className="hidden lg:block text-white font-cinzel text-xl tracking-wider font-medium">
              MS BABUI
            </span>
            
            <Link to="/">
              <img 
                src="/images/2.png" 
                alt="Logo" 
                className="h-12 w-auto lg:h-16"
              />
            </Link>

            <span className="hidden lg:block text-white font-cinzel text-xl tracking-wider font-medium">
              TRADERS
            </span>

            {/* Mobile Logo Text */}
            <div className="lg:hidden flex flex-col text-white font-cinzel text-sm leading-tight font-medium">
              <span>MS BABUI</span>
              <span>TRADERS</span>
            </div>
          </div>

          {/* Desktop Right Menu - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-start pl-16">
            <DropdownMenu title="SERVICES" items={servicesLinks} />
            <Link to="/contact" className="text-nav-gold hover:text-white font-cinzel">
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden fixed right-4 top-4 z-50 text-nav-gold bg-nav-dark/90 rounded-full p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <IoCloseOutline size={28} className="transition-all duration-300" />
            ) : (
              <IoMenuOutline size={28} className="transition-all duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-500 ease-in-out lg:hidden
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Slide-out - Optimized animation */}
      <div 
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[50%] bg-nav-dark z-40 transform 
          transition-transform duration-300 ease-out lg:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col pt-24 px-8">
          {/* Close button at top */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-nav-gold hover:text-white 
                     transition-colors duration-200"
            aria-label="Close Menu"
          >
            <IoCloseOutline size={28} />
          </button>

          {/* Mobile Links - Simplified animation */}
          <div className="space-y-6">
            {allLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-nav-gold hover:text-white font-cinzel text-base 
                         transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 