export default function ProductComingSoon() {
  return (
    <section className="relative bg-white py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className='absolute top-16 left-8 w-40 h-40 bg-fitgenie/20 rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute bottom-20 right-12 w-56 h-56 bg-fitgenie-dark/20 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
      <div className='absolute top-1/3 right-1/4 w-32 h-32 bg-fitgenie-light/40 rounded-3xl rotate-45 blur-2xl'></div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Main Heading */}
          <div className="mb-8 md:mb-12">
            <div 
              className="inline-block bg-gradient-to-r from-fitgenie to-fitgenie-dark text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold mb-6 md:mb-8 shadow-lg"
              data-aos="zoom-in"
            >
              🚀 Coming Soon
            </div>
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-fitgenie-dark mb-6 md:mb-8 leading-tight"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Your Fitness Revolution
              <br />
              <span className="bg-gradient-to-r from-fitgenie to-fitgenie-dark bg-clip-text text-transparent">
                Starts Here
              </span>
            </h2>
            <p 
              className="text-xl md:text-2xl lg:text-3xl text-fitgenie-dark/80 leading-relaxed max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Get ready to transform your workouts with AI-powered guidance!
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
            <div 
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">🎯</div>
              <h3 className="font-bold text-lg md:text-xl text-fitgenie-dark mb-2">AI Posture Tracking</h3>
              <p className="text-sm md:text-base text-fitgenie-dark/70">Real-time form correction</p>
            </div>
            <div 
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-aos="flip-left"
              data-aos-delay="400"
            >
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">🎮</div>
              <h3 className="font-bold text-lg md:text-xl text-fitgenie-dark mb-2">Gamified Experience</h3>
              <p className="text-sm md:text-base text-fitgenie-dark/70">Make fitness fun & addictive</p>
            </div>
            <div 
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-aos="flip-left"
              data-aos-delay="600"
            >
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">📱</div>
              <h3 className="font-bold text-lg md:text-xl text-fitgenie-dark mb-2">Mobile First</h3>
              <p className="text-sm md:text-base text-fitgenie-dark/70">Train anywhere, anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
