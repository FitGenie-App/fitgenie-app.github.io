const features = [
  {
    title: 'Gamified Experience',
    description: 'Stay motivated with streaks, records, missions, and nurture your digital pet companion as you progress',
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'AI-Powered Pose Tracker',
    description: 'Real-time pose correction and detailed post-workout feedback to perfect your form',
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Guidance Videos',
    description: 'Step-by-step video tutorials to help you master every exercise with proper technique',
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Personalized Gym Planner',
    description: 'AI-generated workout plans tailored to your fitness level, goals, and preferences',
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
];

export default function Features() {
  return (
    <section className="relative bg-fitgenie-light py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className='absolute top-16 left-10 w-40 h-40 bg-fitgenie/30 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 right-10 w-48 h-48 bg-fitgenie/20 rounded-full blur-3xl'></div>
      <div className='absolute top-1/3 right-1/4 w-32 h-32 bg-white/40 rounded-3xl rotate-45 blur-2xl'></div>
      <div className='absolute bottom-1/4 left-1/4 w-28 h-28 bg-fitgenie/25 rounded-2xl -rotate-12 blur-xl'></div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Powerful Features
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            Everything you need to achieve your fitness goals, powered by AI
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-fitgenie to-fitgenie-dark mx-auto rounded-full mt-6"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white border border-fitgenie/30"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-fitgenie to-fitgenie-dark rounded-xl lg:rounded-2xl p-3 md:p-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-2 md:space-y-3">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-fitgenie-dark group-hover:text-fitgenie transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-fitgenie-dark/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
