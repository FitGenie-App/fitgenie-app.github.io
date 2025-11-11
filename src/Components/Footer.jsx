export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-fitgenie-light to-fitgenie-light/90 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className='absolute top-10 left-10 w-32 h-32 bg-fitgenie/20 rounded-full blur-3xl'></div>
      <div className='absolute bottom-10 right-10 w-40 h-40 bg-fitgenie-light/20 rounded-full blur-3xl'></div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-8 md:py-12" data-aos="fade-up">
          <div className="text-center space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              FitGenie
            </h3>
            <p className="text-sm md:text-base text-white/70">
              © {new Date().getFullYear()} FitGenie. All rights reserved.
            </p>
            <p className="text-xs md:text-sm text-white/60 flex items-center justify-center gap-1.5 flex-wrap">
              Made with 
              <svg className="w-4 h-4 text-red-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              by 
              <span className="font-semibold text-white/80">Geek4AI</span>
              for
              <span className="font-semibold text-white">Alibaba Jumpstarter ZPIRE Student AI Challenge</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
