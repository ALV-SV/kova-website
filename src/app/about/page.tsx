import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-[#04342C]">
        <section className="relative py-20 kova-weave">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl md:text-6xl font-bold text-[#F5F4F0] mb-6">
              About KOVA
            </h1>
            <p className="font-[family-name:var(--font-dm-sans)] text-xl text-[#F5F4F0]/80 max-w-3xl">
              Protect. Science. Perform. Our mission is to engineer performance gear that 
              prevents injury — not just treats it.
            </p>
          </div>
        </section>

        <section className="py-20 border-t border-[#F5F4F0]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-[#F5F4F0] mb-6">
                  Our Mission
                </h2>
                <p className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/80 leading-relaxed mb-6">
                  KOVA exists because we saw a fundamental gap in the sports performance industry: 
                  most products focus on recovery after injury occurs, rather than preventing 
                  injury from happening in the first place.
                </p>
                <p className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/80 leading-relaxed">
                  We design every product around a specific biomechanical mechanism — the exact 
                  physiological pathway that leads to a common sports injury. Our products don't 
                  just look protective; they work on a mechanical level to interrupt the injury chain.
                </p>
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-[#F5F4F0] mb-6">
                  Our Vision
                </h2>
                <p className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/80 leading-relaxed mb-6">
                  We envision a world where athletes can train at higher volumes without the 
                  constant fear of injury. Where performance optimization doesn't require 
                  sacrificing structural integrity.
                </p>
                <p className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/80 leading-relaxed">
                  Every KOVA product is a small step toward that world — backed by science, 
                  verified by research, and built to last.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pillars" className="py-20 border-t border-[#F5F4F0]/10 bg-[#2C2C2A]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-[#F5F4F0] mb-12 text-center">
              Three Brand Pillars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#2C2C2A] rounded-lg p-8">
                <h3 className="font-[family-name:var(--font-dm-serif)] text-2xl font-bold text-[#F5F4F0] mb-4">
                  Protect
                </h3>
                <p className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/70 mb-4">
                  Every KOVA product targets a specific injury mechanism with clinically validated protection. 
                  We don't do generic "support" — we engineer precise biomechanical intervention.
                </p>
                <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#F5F4F0]/50">
                  Example: KOVA ANCHOR constrains inversion beyond 20° — the exact threshold responsible for 85% of lateral ankle sprains.
                </p>
              </div>
              <div className="bg-[#2C2C2A] rounded-lg p-8">
                <h3 className="font-[family-name:var(--font-dm-serif)] text-2xl font-bold text-[#F5F4F0] mb-4">
                  Science
                </h3>
                <p className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/70 mb-4">
                  KOVA Verified claims are specific, independently tested, and published in peer-reviewed journals. 
                  We don't do vague wellness promises — we do quantified biomechanical outcomes.
                </p>
                <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#F5F4F0]/50">
                  Every product page cites the specific study, author, year, and journal that validates our claims.
                </p>
              </div>
              <div className="bg-[#2C2C2A] rounded-lg p-8">
                <h3 className="font-[family-name:var(--font-dm-serif)] text-2xl font-bold text-[#F5F4F0] mb-4">
                  Perform
                </h3>
                <p className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/70 mb-4">
                  Protection that enables higher training volume without compromising structural integrity. 
                  Our products are designed to disappear during movement — lightweight, non-restrictive, 
                  and always performing.
                </p>
                <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#F5F4F0]/50">
                  KOVA never compromises performance for protection — we engineer both to work together.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-[#F5F4F0]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-[#F5F4F0] mb-8 text-center">
              What KOVA Is Not
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-start gap-4 p-6 bg-[#2C2C2A] rounded-lg">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D64545] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-dm-sans)] font-bold text-[#F5F4F0] mb-2">
                    Not a Wellness Brand
                  </h3>
                  <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#F5F4F0]/70">
                    We don't sell vague "wellness" benefits. Every product targets a specific, 
                    mechanistically understood injury pathway with quantified outcomes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-[#2C2C2A] rounded-lg">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D64545] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-dm-sans)] font-bold text-[#F5F4F0] mb-2">
                    Not a Medical Device Brand
                  </h3>
                  <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#F5F4F0]/70">
                    We don't make medical claims or sell FDA-cleared devices. KOVA products are 
                    performance sports gear — designed for athletes, not patients.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-[#2C2C2A] rounded-lg">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D64545] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-dm-sans)] font-bold text-[#F5F4F0] mb-2">
                    Not a Tech-First Brand
                  </h3>
                  <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#F5F4F0]/70">
                    Technology is a tool, not the point. We add electronics only when they 
                    enable genuine injury-prevention insights — never for novelty or hype.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-[#F5F4F0]/10 bg-[#2C2C2A]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-[#F5F4F0] mb-8 text-center">
              The Non-Essential App Promise
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/80 mb-6">
                KOVA Hub, our companion app, is always optional. Every KOVA product works 
                at 100% without the app. We will never lock core functionality behind a subscription.
              </p>
              <div className="bg-[#1D9E75]/10 border border-[#1D9E75]/20 rounded-lg p-6">
                <p className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]">
                  <strong className="text-[#1D9E75]">Our Promise:</strong> KOVA Hub enhances your experience — 
                  it never defines it. If we ever change this promise, we'll give you 12 months 
                  notice and a full refund option.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="guarantee" className="py-20 border-t border-[#F5F4F0]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-[#F5F4F0] mb-8 text-center">
              BioBase Material Standard
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/80 mb-6">
                Every KOVA product is built to our BioBase Material Standard — our 
                minimum threshold for structural integrity, durability, and biocompatibility:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#1D9E75]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/80">
                    Minimum 50,000 cycle flex testing for all hinge/joint components
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#1D9E75]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/80">
                    All skin-contact materials hypoallergenic and OEKO-TEX certified
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#1D9E75]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/80">
                    All electronics IP67 or higher water/dust resistance
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#1D9E75]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/80">
                    Replaceable components for 80% of product lifespan extension
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <TrustStrip />
      </main>

      <Footer />
    </div>
  );
}