export default function ProductDescription() {
  return (
    <section className="relative bg-fitgenie-light py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className='absolute top-20 right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl'></div>
      <div className='absolute bottom-32 left-10 w-48 h-48 bg-fitgenie-dark/20 rounded-full blur-3xl'></div>
      <div className='absolute top-1/2 right-1/3 w-32 h-32 bg-fitgenie/30 rounded-3xl rotate-45 blur-2xl'></div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            How FitGenie Works
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6">
            Your journey to better fitness, simplified in three easy steps
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-fitgenie to-fitgenie-dark mx-auto rounded-full mt-6"></div>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12 lg:space-y-16 mb-16 md:mb-20 lg:mb-24">
          
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12" data-aos="fade-right">
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full flex items-center justify-center text-4xl md:text-5xl lg:text-6xl font-bold text-fitgenie shadow-2xl">
              1
            </div>
            <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-fitgenie-dark mb-3 md:mb-4">
                Set Your Goals
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-fitgenie-dark/80 leading-relaxed">
                Tell us about your fitness level, goals, and preferences. Whether you want to build muscle, lose weight, or improve your overall health, our AI creates a personalized workout plan just for you.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8 lg:gap-12" data-aos="fade-left">
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full flex items-center justify-center text-4xl md:text-5xl lg:text-6xl font-bold text-fitgenie shadow-2xl">
              2
            </div>
            <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-fitgenie-dark mb-3 md:mb-4">
                Work Out with Real-Time Feedback
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-fitgenie-dark/80 leading-relaxed">
                Position your phone camera and start exercising. Our AI tracks your movements in real-time, analyzing your form and providing instant corrections. Every workout is recorded for your progress tracking.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12" data-aos="fade-right">
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full flex items-center justify-center text-4xl md:text-5xl lg:text-6xl font-bold text-fitgenie shadow-2xl">
              3
            </div>
            <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-fitgenie-dark mb-3 md:mb-4">
                Track Progress & Level Up
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-fitgenie-dark/80 leading-relaxed">
                Review your workout videos, see detailed posture analysis, and watch your improvement over time. Complete challenges, earn achievements, and keep your digital pet companion happy as you build lasting fitness habits.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12 border border-white/50" data-aos="zoom-in">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-fitgenie-dark text-center mb-8 md:mb-10 lg:mb-12">
            Powered by Advanced Technology
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Computer Vision */}
            <div className="text-center space-y-4" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-fitgenie to-fitgenie-dark rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg md:text-xl text-fitgenie-dark">Computer Vision AI</h4>
              <p className="text-sm md:text-base text-fitgenie-dark/70">
                State-of-the-art pose estimation algorithms track 33+ body keypoints with precision
              </p>
            </div>

            {/* Machine Learning */}
            <div className="text-center space-y-4" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-fitgenie to-fitgenie-dark rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg md:text-xl text-fitgenie-dark">Adaptive ML Models</h4>
              <p className="text-sm md:text-base text-fitgenie-dark/70">
                Personalized recommendations that learn from your unique movement patterns
              </p>
            </div>

            {/* Cloud Processing */}
            <div className="text-center space-y-4" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-fitgenie to-fitgenie-dark rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h4 className="font-bold text-lg md:text-xl text-fitgenie-dark">Secure Cloud Storage</h4>
              <p className="text-sm md:text-base text-fitgenie-dark/70">
                Your workout videos and progress data safely stored and accessible anywhere
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
