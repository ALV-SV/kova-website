import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import PillarBlock from "@/components/PillarBlock";
import SignalDropBanner from "@/components/SignalDropBanner";
import TrustStrip from "@/components/TrustStrip";
import { products } from "@/data/products";

const ShieldIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const BeakerIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.414 1.414.586 3.414-1 3.414H5.828a2 2 0 00-1.414.586L3.5 17.5a2 2 0 000 3l1.914 1.914a2 2 0 001.414.586L8 20l1 1v-5.172a2 2 0 00-.586-1.414l-5-5c-1.414-1.414-.586-3.414 1-3.414h5.172a2 2 0 001.414-.586l1.914-1.914a2 2 0 00.586-1.414V5z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="relative min-h-[90vh] flex items-center bg-[#04342C] kova-weave">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <h1 className="font-[family-name:var(--font-dm-serif)] text-5xl md:text-7xl font-bold text-[#F5F4F0] leading-tight mb-6 tracking-wide">
                Protect the Form.
              </h1>
              <p className="font-[family-name:var(--font-dm-sans)] text-xl md:text-2xl text-[#F5F4F0]/80 mb-10">
                Performance gear engineered around injury prevention science.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/shop"
                  className="inline-block px-8 py-4 bg-[#1D9E75] text-[#F5F4F0] rounded font-[family-name:var(--font-dm-sans)] font-medium text-lg hover:bg-[#177A5F] transition-colors duration-200 text-center"
                >
                  Shop Now
                </Link>
                <Link 
                  href="/science"
                  className="inline-block px-8 py-4 border-2 border-[#F5F4F0] text-[#F5F4F0] rounded font-[family-name:var(--font-dm-sans)] font-medium text-lg hover:bg-[#F5F4F0]/10 transition-colors duration-200 text-center"
                >
                  Our Science
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#04342C] py-20 border-t border-[#F5F4F0]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PillarBlock 
                icon={<ShieldIcon />}
                title="Protect"
                description="Every product targets a specific injury mechanism with clinically validated protection."
              />
              <PillarBlock 
                icon={<BeakerIcon />}
                title="Science"
                description="KOVA Verified claims are specific, independently tested, and published — never vague."
              />
              <PillarBlock 
                icon={<ChartIcon />}
                title="Perform"
                description="Protection that enables higher training volume without compromising structural integrity."
              />
            </div>
          </div>
        </section>

        <section className="bg-[#04342C] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl md:text-4xl font-bold text-[#F5F4F0] mb-12 text-center">
              Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#04342C] py-20 border-t border-[#F5F4F0]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl md:text-4xl font-bold text-[#F5F4F0] mb-6">
                KOVA Verified Standard
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-lg text-[#F5F4F0]/80 mb-8">
                Every KOVA Verified claim is specific, independently tested, and published — not a vague wellness promise. We cite peer-reviewed research for every performance claim, and our advisory board of sports science experts reviews all product development.
              </p>
              <Link 
                href="/science"
                className="inline-block px-6 py-3 border border-[#1D9E75] text-[#1D9E75] rounded font-[family-name:var(--font-dm-sans)] font-medium hover:bg-[#1D9E75] hover:text-[#F5F4F0] transition-colors duration-200"
              >
                Learn More About Our Standards
              </Link>
            </div>
          </div>
        </section>

        <SignalDropBanner />

        <TrustStrip />
      </main>

      <Footer />
    </div>
  );
}