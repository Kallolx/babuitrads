import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  // Predefined positions for smoother animations
  const floatingCircles = [
    {
      initialX: "0%",
      initialY: "20%",
      animate: {
        x: ["0%", "10%", "-5%", "0%"],
        y: ["0%", "-15%", "10%", "0%"],
      }
    },
    {
      initialX: "70%",
      initialY: "40%",
      animate: {
        x: ["0%", "-10%", "15%", "0%"],
        y: ["0%", "10%", "-10%", "0%"],
      }
    },
    {
      initialX: "30%",
      initialY: "60%",
      animate: {
        x: ["0%", "15%", "-15%", "0%"],
        y: ["0%", "-10%", "5%", "0%"],
      }
    },
    {
      initialX: "80%",
      initialY: "10%",
      animate: {
        x: ["0%", "-15%", "10%", "0%"],
        y: ["0%", "15%", "-15%", "0%"],
      }
    },
    {
      initialX: "20%",
      initialY: "80%",
      animate: {
        x: ["0%", "10%", "-10%", "0%"],
        y: ["0%", "-5%", "15%", "0%"],
      }
    }
  ]

  return (
    <div className="fixed inset-0 z-0">
      {/* Grid Lines */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] grid-rows-[repeat(auto-fit,minmax(50px,1fr))] opacity-20">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="border-[0.5px] border-nav-gold/20"
            />
          ))}
        </div>
      </div>

      {/* Animated Circles */}
      <div className="absolute inset-0">
        {floatingCircles.map((circle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-nav-gold/20 to-transparent blur-xl"
            style={{
              width: `${Math.random() * 300 + 200}px`,
              height: `${Math.random() * 300 + 200}px`,
              left: circle.initialX,
              top: circle.initialY,
            }}
            animate={circle.animate}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              times: [0, 0.33, 0.66, 1]
            }}
          />
        ))}
      </div>

      {/* Diagonal Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-[200%] bg-gradient-to-r from-transparent via-nav-gold/30 to-transparent"
            style={{
              top: `${i * 25}%`,
              left: '-50%',
              transform: 'rotate(-35deg)',
            }}
            animate={{
              translateX: ['0%', '100%'],
            }}
            transition={{
              duration: 15,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear",
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