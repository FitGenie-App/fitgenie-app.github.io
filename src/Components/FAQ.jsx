import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is FitGenie?",
      answer: "FitGenie is an AI-powered fitness companion that helps you master proper exercise form through real-time pose tracking and personalized guidance. It combines gamification, video tutorials, and intelligent workout planning to make fitness accessible and effective for everyone."
    },
    {
      question: "How does the AI pose tracking work?",
      answer: "Our advanced AI uses your device's camera to analyze your body movements in real-time. It tracks key points on your body to ensure proper form, provides instant feedback, and helps prevent injuries by alerting you when your posture needs correction."
    },
    {
      question: "Do I need any special equipment?",
      answer: "No! FitGenie works with just your smartphone or tablet. Simply prop up your device where it can see your full body during workouts. The AI will do the rest. You can use any standard gym equipment or bodyweight exercises."
    },
    {
      question: "Is FitGenie suitable for beginners?",
      answer: "Absolutely! FitGenie is designed for all fitness levels. Our personalized gym planner adapts to your experience, goals, and progress. Beginners get guided video tutorials and form corrections, while advanced users receive challenging workouts tailored to their needs."
    },
    {
      question: "What makes FitGenie different from other fitness apps?",
      answer: "Unlike generic workout apps, FitGenie combines real-time AI pose correction with gamified experiences and personalized planning. We focus on proper form to prevent injuries, make fitness fun through game mechanics, and adapt to your unique fitness journey."
    },
    {
      question: "Will my data be private and secure?",
      answer: "Yes! Your privacy is our top priority. All pose tracking happens on your device, and we follow strict data protection standards. Your workout data is encrypted and only used to improve your personalized experience."
    },
    {
      question: "Can I use FitGenie at home or do I need a gym?",
      answer: "Both! FitGenie works perfectly for home workouts with bodyweight exercises or minimal equipment. It also supports gym workouts with various equipment. The AI adapts to whatever environment you're training in."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className='absolute top-20 left-10 w-32 h-32 bg-fitgenie/20 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 right-10 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl'></div>
      <div className='absolute top-1/2 left-1/3 w-24 h-24 bg-fitgenie-light/15 rounded-full blur-2xl'></div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-fitgenie-dark mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fitgenie-light via-fitgenie to-fitgenie-dark mx-auto mb-6"></div>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Got questions? We've got answers! Find everything you need to know about FitGenie.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-fitgenie/10"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left hover:bg-fitgenie/5 transition-colors duration-300"
              >
                <span className="text-base md:text-lg lg:text-xl font-semibold text-fitgenie-dark pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-fitgenie flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-5 md:pb-6 pt-2">
                  <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 md:mt-16" data-aos="fade-up" data-aos-delay="400">
          <p className="text-base md:text-lg text-slate-600 mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:fitgenie.official.app@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-fitgenie-dark to-fitgenie text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}
