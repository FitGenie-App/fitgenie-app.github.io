import FitGenie from '../Assets/FitGenie.png';
import PostureAI from '../Assets/PostureAI.png';
import Freeletics from '../Assets/Freeletics.png';

const data = [
  {
    name: 'FitGenie',
    image: FitGenie,
    Live_Workout_Recording: '✅ Real-time video capture during workouts',
    AI_Posture_Feedback: '✅ Instant Feedback',
    Workout_Personalization: '✅ Adaptive plans based on posture and goals',
    Gamified_Experience: '✅ Challenges and interactive mascot motivating streaks',
    Target_Audience: 'Everyone, particularly young people',
    Major_Differentiator: 'Combines live recording + posture feedback',
  },
  {
    name: 'PostureAI',
    image: PostureAI,
    Live_Workout_Recording: '❌ No live recording',
    AI_Posture_Feedback: '✅ Static posture analysis',
    Workout_Personalization: '⚠️ Limited personalization',
    Gamified_Experience: '❌ No gamification',
    Target_Audience: 'Posture wellness enthusiasts',
    Major_Differentiator: 'Focused on static posture analysis',
  },
  {
    name: 'Freeletics',
    image: Freeletics,
    Live_Workout_Recording: '❌ No live recording',
    AI_Posture_Feedback: '❌ No posture correction',
    Workout_Personalization: '✅ AI-driven training plans',
    Gamified_Experience: '✅ Challenges and progress tracking',
    Target_Audience: 'General fitness users',
    Major_Differentiator: 'Broad fitness coaching without form analysis',
  },
];

export default function ComparisonTable() {
  const features = [
    { key: 'Live_Workout_Recording', label: 'Live Workout Recording' },
    { key: 'AI_Posture_Feedback', label: 'AI Posture Feedback' },
    { key: 'Workout_Personalization', label: 'Workout Personalization' },
    { key: 'Gamified_Experience', label: 'Gamified Experience' },
    { key: 'Target_Audience', label: 'Target Audience' },
    { key: 'Major_Differentiator', label: 'Major Differentiator' },
  ];

  return (
    <section className="relative bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className='absolute top-20 left-5 w-40 h-40 bg-fitgenie/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-32 right-10 w-48 h-48 bg-fitgenie-light/30 rounded-full blur-3xl'></div>
      <div className='absolute top-1/2 left-1/3 w-32 h-32 bg-fitgenie-dark/5 rounded-3xl rotate-45 blur-2xl'></div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fitgenie-dark mb-4 md:mb-6">
            Why Choose FitGenie?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-fitgenie-dark/80 max-w-3xl mx-auto mb-6">
            See how we stack up against the competition
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-fitgenie to-fitgenie-dark mx-auto rounded-full"></div>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden lg:block max-w-7xl mx-auto" data-aos="zoom-in">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-fitgenie/20">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-fitgenie-light to-fitgenie">
                  <th className="py-6 px-6 text-left text-white font-bold text-lg">Features</th>
                  {data.map((product) => (
                    <th key={product.name} className="py-6 px-6 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className={`w-20 h-20 rounded-2xl ${product.name === 'FitGenie' ? 'bg-white p-2' : 'bg-white/90 p-2'} shadow-lg`}>
                          <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                        </div>
                        <span className={`font-bold text-lg ${product.name === 'FitGenie' ? 'text-white' : 'text-white/90'}`}>
                          {product.name}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, idx) => (
                  <tr key={feature.key} className={idx % 2 === 0 ? 'bg-fitgenie-light/5' : 'bg-white'}>
                    <td className="py-5 px-6 font-semibold text-fitgenie-dark text-base border-b border-fitgenie/10">
                      {feature.label}
                    </td>
                    {data.map((product) => (
                      <td key={`${product.name}-${feature.key}`} className="py-5 px-6 text-center text-sm text-fitgenie-dark/80 border-b border-fitgenie/10">
                        {product[feature.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Comparison Cards */}
        <div className="lg:hidden space-y-8">
          {data.map((product, idx) => (
            <div 
              key={product.name}
              className={`rounded-2xl shadow-xl overflow-hidden border-2 ${
                product.name === 'FitGenie' 
                  ? 'border-fitgenie bg-gradient-to-br from-fitgenie-light/20 to-white' 
                  : 'border-fitgenie/20 bg-white/80 backdrop-blur-sm'
              }`}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Product Header */}
              <div className={`p-6 ${
                product.name === 'FitGenie' 
                  ? 'bg-gradient-to-r from-fitgenie to-fitgenie-dark' 
                  : 'bg-gradient-to-r from-fitgenie-light/40 to-fitgenie-light/20'
              }`}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-white p-2 shadow-lg">
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                  </div>
                  <h3 className={`text-2xl font-bold ${
                    product.name === 'FitGenie' ? 'text-white' : 'text-fitgenie-dark'
                  }`}>
                    {product.name}
                  </h3>
                </div>
              </div>

              {/* Product Features */}
              <div className="p-6 space-y-4">
                {features.map((feature) => (
                  <div key={feature.key} className="border-b border-fitgenie/10 pb-4 last:border-0 last:pb-0">
                    <p className="text-sm font-semibold text-fitgenie-dark mb-2">{feature.label}</p>
                    <p className="text-sm text-fitgenie-dark/80">{product[feature.key]}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
