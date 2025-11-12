import { useEffect } from 'react';
import AOS from 'aos';
import HeroBanner from './Components/HeroBanner';
import ProductDescription from './Components/ProductDescription';
import Introduction from './Components/Introduction';
import Features from './Components/Features';
import ComparisonTable from './Components/ComparisonTable';
import FAQ from './Components/FAQ';
import ProductComingSoon from './Components/ProductComingSoon';
import Footer from './Components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <main className="min-h-screen bg-fitgenie-light font-sans">
      <HeroBanner />
      <Introduction />
      <ProductDescription />
      <Features />
      <ComparisonTable />
      <FAQ />
      <ProductComingSoon />
      <Footer />
    </main>
  );
}

export default App;
