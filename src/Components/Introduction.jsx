export default function Introduction() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className='absolute top-20 right-10 w-40 h-40 bg-fitgenie/10 rounded-full blur-2xl'></div>
      <div className='absolute bottom-32 left-5 w-32 h-32 bg-fitgenie-light/30 rounded-3xl rotate-45 blur-xl'></div>
      <div className='absolute top-1/2 right-1/4 w-24 h-24 bg-fitgenie-dark/5 rounded-2xl -rotate-12'></div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fitgenie-dark mb-4 md:mb-6">
            The Problem We're Solving
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fitgenie to-fitgenie-dark mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
          
          {/* Challenge Section */}
          <div className="bg-gradient-to-br from-fitgenie-light/30 to-fitgenie-light/10 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in">
            <p className="text-lg md:text-xl lg:text-2xl text-fitgenie-dark/80 leading-relaxed text-center">
              The fitness industry has seen tremendous growth, yet many individuals face significant barriers to achieving their health and fitness goals.
            </p>
          </div>

          {/* Cost Barrier */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center" data-aos="fade-right">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-fitgenie-dark">
                Cost Barrier
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-fitgenie-dark/70 leading-relaxed">
                Many people aspire to work with personal trainers but find the cost prohibitive. Traditional personal training can be expensive, often making it inaccessible for the average person.
              </p>
            </div>
            
            {/* Stats Card */}
            <div className="bg-gradient-to-br from-fitgenie to-fitgenie-dark rounded-2xl lg:rounded-3xl p-8 md:p-10 text-white shadow-fit hover:shadow-2xl transition-all duration-300 hover:scale-105" data-aos="flip-left" data-aos-delay="200">
              <div className="text-center space-y-3 md:space-y-4">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold">400 - 1000 HKD</p>
                <p className="text-lg md:text-xl opacity-90">per session (Hong Kong numbers)</p>
                <p className="text-sm md:text-base opacity-75 mt-4 pt-4 border-t border-white/30">
                  (Private session, depending on trainer's experience)
                </p>
                <p className="text-xs md:text-sm opacity-60">Source: HelloToby, 2025</p>
              </div>
            </div>
          </div>

          {/* Knowledge Gap */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center" data-aos="fade-left">
            {/* Stats Card */}
            <div className="bg-gradient-to-br from-fitgenie-dark to-fitgenie-dark/80 rounded-2xl lg:rounded-3xl p-8 md:p-10 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 order-2 md:order-1" data-aos="flip-right" data-aos-delay="200">
              <div className="text-center space-y-3 md:space-y-4">
                <p className="text-5xl md:text-6xl lg:text-7xl font-bold">1 in 5</p>
                <p className="text-lg md:text-xl opacity-90">gym-goers feel</p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mt-4">"Clueless"</p>
                <p className="text-xs md:text-sm opacity-60 mt-4 pt-4 border-t border-white/30">Source: Nuffield Health, 2018</p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 order-1 md:order-2">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-fitgenie-dark">
                Knowledge Gap
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-fitgenie-dark/70 leading-relaxed">
                Without proper guidance, many gym-goers struggle with correct form and technique, leading to ineffective workouts and potential injuries.
              </p>
            </div>
          </div>

          {/* Solution Section */}
          <div className="bg-gradient-to-br from-fitgenie-dark to-fitgenie rounded-2xl lg:rounded-3xl p-8 md:p-12 lg:p-16 text-white shadow-2xl mt-12 md:mt-16 lg:mt-20" data-aos="zoom-in-up">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-10 lg:mb-12">
              That's Why We're Here
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-4xl mx-auto">
              {/* Solution 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="bg-fitgenie-light rounded-full p-3 md:p-4 flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">Accessible & Affordable</h4>
                    <p className="text-sm md:text-base lg:text-lg opacity-90 leading-relaxed">
                      Providing accessible personal training for everyone at an affordable price while enhancing convenience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="bg-fitgenie-light rounded-full p-3 md:p-4 flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">Perfect Form</h4>
                    <p className="text-sm md:text-base lg:text-lg opacity-90 leading-relaxed">
                      Focus on posture correction to optimize fitness performance and prevent injuries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}