const CreativeDivider = () => {
  return (
    <section className="py-12 theme-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative flex items-center justify-center">
          {/* Animated dots pattern */}
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-primary/40 animate-pulse"
                style={{ 
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s' 
                }}
              />
            ))}
          </div>
          
          {/* Subtle geometric lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeDivider;