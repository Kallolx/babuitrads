import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  // Reduced number of floating circles and simplified animations
  const floatingCircles = [
    {
      initialX: "10%",
      initialY: "20%",
      animate: {
        y: ["0%", "10%", "0%"],
      }
    },
    {
      initialX: "80%",
      initialY: "50%",
      animate: {
        y: ["0%", "-10%", "0%"],
      }
    },
    {
      initialX: "50%",
      initialY: "80%",
      animate: {
        y: ["0%", "10%", "0%"],
      }
    }
  ]

  return (
    <div className="fixed inset-0 z-0">
      {/* Simplified Grid Lines - reduced count */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] 
                      grid-rows-[repeat(auto-fit,minmax(100px,1fr))] opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="border-[0.5px] border-nav-gold/20"
            />
          ))}
        </div>
      </div>

      {/* Simplified Animated Circles */}
      <div className="absolute inset-0">
        {floatingCircles.map((circle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-nav-gold/20 to-transparent blur-lg"
            style={{
              width: "200px",
              height: "200px",
              left: circle.initialX,
              top: circle.initialY,
            }}
            animate={circle.animate}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-nav-dark/50 to-nav-dark pointer-events-none" />
    </div>
  )
}

export default AnimatedBackground 