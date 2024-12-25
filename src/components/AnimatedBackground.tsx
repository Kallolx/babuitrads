
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Grid Lines */}
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

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-nav-dark/50 to-nav-dark pointer-events-none" />
    </div>
  )
}

export default AnimatedBackground 