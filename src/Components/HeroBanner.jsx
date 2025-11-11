import HeroPic from '../Assets/HeroPic.png'

export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-b from-fitgenie-light via-blue-50 to-white h-[100dvh] overflow-hidden" >
      {/* Decorative Background Blobs */}
      <div className='absolute top-10 left-10 w-32 h-32 bg-fitgenie/20 rounded-2xl rotate-12 blur-sm'></div>
      <div className='absolute top-32 right-20 w-24 h-24 bg-blue-300/30 rounded-xl -rotate-12 blur-sm'></div>
      <div className='absolute bottom-40 left-20 w-40 h-40 bg-fitgenie/25 rounded-3xl rotate-45 blur-md'></div>
      <div className='absolute top-1/3 left-1/4 w-20 h-20 bg-blue-200/40 rounded-lg rotate-6'></div>
      <div className='absolute bottom-1/3 right-1/3 w-28 h-28 bg-fitgenie/15 rounded-2xl -rotate-12'></div>
      
      <div className="container mx-auto px-6 min-h-[100dvh] flex items-center relative z-10 py-8 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full lg:pb-0">
          
          {/* Left Column - Content */}
          <div className='flex-1 text-center lg:text-left space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-8 max-w-3xl mb-6 lg:mb-12 mx-auto lg:mx-0'>
            <h1 
              className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-fitgenie-dark leading-tight tracking-tight drop-shadow-sm'
              data-aos="fade-up"
            >
              FitGenie
            </h1>
            <h2 
              className='text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold bg-gradient-to-r from-fitgenie-dark via-fitgenie to-blue-500 bg-clip-text text-transparent leading-tight drop-shadow-sm'
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Master Your Form!
            </h2>
            <p 
              className='text-base sm:text-lg md:text-xl lg:text-3xl text-slate-700 font-medium leading-relaxed'
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Your AI Trainer, Every Workout
            </p>
            <p 
              className='text-sm sm:text-base lg:text-xl text-slate-600 leading-relaxed'
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Brought to you by Geek4AI
            </p>
            
            {/* Learn More Buttons */}
            <div 
              className='flex flex-col sm:flex-row gap-3 lg:gap-6 justify-center lg:justify-start pt-3 md:pt-4 lg:pt-8'
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className='bg-white/90 backdrop-blur-sm hover:bg-white text-fitgenie-dark font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg rounded-xl border-2 border-fitgenie/50 hover:border-fitgenie transition-all duration-300 hover:shadow-lg animate-bounce'>
                Scroll down to learn more!
              </div>
            </div>
          </div>

          {/* Right Column*/}
          <div 
            className='flex-1 flex items-center justify-center lg:justify-end w-full'
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className='relative w-full max-w-md sm:max-w-lg lg:max-w-2xl flex items-center justify-center'>
              {/* Decorative background circle */}
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-gradient-to-br from-blue-300/30 to-fitgenie/30 rounded-full blur-3xl'></div>
              
              {/* Mobile app screenshot with fade mask */}
              <div className='relative w-auto max-h-[80vh] sm:max-h-[75vh] lg:max-h-[90vh] overflow-hidden'>
                <img 
                  src={HeroPic} 
                  alt='FitGenie Mobile App Starting Screen' 
                  className='h-full w-auto object-contain object-bottom drop-shadow-2xl hover:scale-105 transition-transform duration-300'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}