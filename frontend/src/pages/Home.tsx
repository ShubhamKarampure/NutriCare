import Header from '../components/home/Header';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonial from '../components/home/Testimonial';
import CTA from '../components/home/CTA';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

