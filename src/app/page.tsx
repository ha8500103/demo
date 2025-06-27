import SmoothScroll from '../components/SmoothScroll';
import FadeInSection from '../components/FadeInSection';
import SlideInSection from '../components/SlideInSection';
import ScrollProgress from '../components/ScrollProgress';

export default function AboutPage() {
  return (
    <div id="smooth-wrapper" className="h-screen overflow-hidden relative">
      <ScrollProgress />
      <SmoothScroll />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div
        id="smooth-content"
        className="relative z-10 min-h-screen bg-cover bg-center flex flex-col"
        style={{ backgroundImage: "url('/office-bg.jpg')" }}
      >
        {/* Sticky Navbar */}
        <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-black/70 text-white backdrop-blur-md">
          <div className="text-3xl font-bold">
            <span className="text-black">Samsung</span>{" "}
            <span className="text-white">Mobiles</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-yellow-400 text-black px-4 py-2 rounded font-bold hover:bg-yellow-300">
              PHONE MODELS
            </button>
            <button className="border-2 border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
              CONTACT US
            </button>
            <button className="border-2 border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
              POLICY & PRIVACY
            </button>
          </div>
        </header>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 bg-black/60 text-white py-4 px-6">
          <a href="#mobiles">
            <button className="px-4 py-2 bg-white text-black rounded font-semibold hover:bg-yellow-400 hover:text-black transition">
              Mobiles
            </button>
          </a>
          <a href="#tv">
            <button className="px-4 py-2 bg-white text-black rounded font-semibold hover:bg-yellow-400 hover:text-black transition">
              TV
            </button>
          </a>
          <a href="#appliances">
            <button className="px-4 py-2 bg-white text-black rounded font-semibold hover:bg-yellow-400 hover:text-black transition">
              More Appliances
            </button>
          </a>
        </div>

        {/* Mobiles Section with Cards */}
        <FadeInSection>
          <section id="mobiles" className="py-20 px-6 text-white bg-black/60">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Mobile Phones</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {['Galaxy S24', 'Galaxy A54', 'Galaxy Fold5'].map((model, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 rounded-xl p-6 backdrop-blur-md hover:bg-yellow-400/20 transition shadow-xl"
                  >
                    <h3 className="text-xl font-bold mb-2">{model}</h3>
                    <p>Latest specs and stylish design for everyday use.</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* TV Section with Slide-In */}
        <SlideInSection direction="right">
          <section id="tv" className="px-6 py-20 text-white bg-black/70">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">TV</h2>
              <p>Stunning 4K smart TVs with immersive sound and visuals.</p>
            </div>
          </section>
        </SlideInSection>

        {/* More Appliances Section with Slide-In */}
        <SlideInSection direction="left">
          <section id="appliances" className="px-6 py-20 text-white bg-black/60">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">More Appliances</h2>
              <p>High-performance appliances that make your life easier and smarter.</p>
            </div>
          </section>
        </SlideInSection>

        {/* Footer */}
        <footer className="bg-black/80 text-white text-center py-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Samsung Mobiles. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
