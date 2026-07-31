import Hero from '../components/Hero';
import WhySection from '../components/WhySection';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhySection />
      <Features />
      <Pricing />
      <FAQ />
    </main>
  );
}
