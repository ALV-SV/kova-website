import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import KovaVerifiedBadge from "@/components/KovaVerifiedBadge";
import ScienceClaim from "@/components/ScienceClaim";
import { getProductBySlug, products } from "@/data/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const colorwayClasses: Record<string, string> = {
    Obsidian: "bg-[#04342C] border-2 border-[#F5F4F0]/30",
    Stone: "bg-[#F5F4F0] border-2 border-[#F5F4F0]/30",
    Vitality: "bg-[#1D9E75] border-2 border-[#F5F4F0]/30",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-[#04342C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/shop"
            className="inline-flex items-center gap-2 text-[#F5F4F0]/70 hover:text-[#1D9E75] transition-colors mb-8 font-[family-name:var(--font-dm-sans)]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="aspect-square relative kova-weave flex items-center justify-center bg-[#1D2420] rounded-lg">
              <div className="text-center p-6">
                <div 
                  className="w-48 h-48 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: product.colorways[0] === "Obsidian" ? "#04342C" : product.colorways[0] === "Stone" ? "#F5F4F0" : "#1D9E75" }}
                >
                  <span className="font-[family-name:var(--font-dm-serif)] text-xl text-center text-[#F5F4F0]" style={{ color: product.colorways[0] === "Stone" ? "#04342C" : "#F5F4F0" }}>
                    {product.fullName}
                  </span>
                </div>
                <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#F5F4F0]/60">{product.subtitle}</p>
              </div>
            </div>

            <div>
              <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl md:text-5xl font-bold text-[#F5F4F0] mb-2">
                {product.fullName}
              </h1>
              <p className="font-[family-name:var(--font-dm-sans)] text-xl text-[#F5F4F0]/70 mb-6">
                {product.subtitle}
              </p>

              <div className="mb-6">
                <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#F5F4F0]/50 uppercase tracking-wider mb-3">
                  Colorway
                </p>
                <div className="flex gap-3">
                  {product.colorways.map((colorway) => (
                    <button
                      key={colorway}
                      className={`w-10 h-10 rounded-full ${colorwayClasses[colorway]}`}
                      title={colorway}
                    />
                  ))}
                </div>
              </div>

              {product.sizes.length > 0 && (
                <div className="mb-6">
                  <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#F5F4F0]/50 uppercase tracking-wider mb-3">
                    Size
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className="px-4 py-2 border border-[#F5F4F0]/30 rounded text-[#F5F4F0] font-[family-name:var(--font-dm-sans)] text-sm hover:border-[#1D9E75] hover:text-[#1D9E75] transition-colors"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-8">
                <p className="font-[family-name:var(--font-dm-sans)] text-3xl font-bold text-[#F5F4F0]">
                  ${product.priceRange.min}–${product.priceRange.max}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="flex-1 px-8 py-4 bg-[#1D9E75] text-[#F5F4F0] rounded font-[family-name:var(--font-dm-sans)] font-medium text-lg hover:bg-[#177A5F] transition-colors duration-200">
                  Add to Cart
                </button>
                <button className="flex-1 px-8 py-4 border border-[#F5F4F0] text-[#F5F4F0] rounded font-[family-name:var(--font-dm-sans)] font-medium text-lg hover:bg-[#F5F4F0]/10 transition-colors duration-200">
                  Add to Wishlist
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {product.sports.map((sport) => (
                  <span 
                    key={sport} 
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-[#2C2C2A] text-[#F5F4F0]/80 rounded font-[family-name:var(--font-dm-sans)]"
                  >
                    {sport}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="border-b border-[#F5F4F0]/20">
              <div className="flex gap-8">
                <button className="pb-4 border-b-2 border-[#1D9E75] text-[#1D9E75] font-[family-name:var(--font-dm-sans)] font-medium">
                  Science
                </button>
                <button className="pb-4 border-b-2 border-transparent text-[#F5F4F0]/60 hover:text-[#F5F4F0] font-[family-name:var(--font-dm-sans)] font-medium">
                  Specs
                </button>
              </div>
            </div>

            <div className="py-8">
              <h3 className="font-[family-name:var(--font-dm-serif)] text-2xl font-bold text-[#F5F4F0] mb-4">
                Injury Prevention Mechanism
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/80 mb-6">
                {product.injuryTarget}
              </p>
              <ScienceClaim claim={product.scienceClaim} reference={product.studyReference} />
            </div>

            <div className="py-8 border-t border-[#F5F4F0]/10">
              <h3 className="font-[family-name:var(--font-dm-serif)] text-2xl font-bold text-[#F5F4F0] mb-6">
                Technical Specifications
              </h3>
              <div className="bg-[#2C2C2A] rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {product.specs.map((spec, index) => (
                      <tr key={spec.label} className={index % 2 === 0 ? "bg-[#2C2C2A]" : "bg-[#262626]"}>
                        <td className="px-6 py-4 text-left font-[family-name:var(--font-dm-sans)] text-sm text-[#F5F4F0]/60 uppercase tracking-wider">
                          {spec.label}
                        </td>
                        <td className="px-6 py-4 text-right font-[family-name:var(--font-dm-sans)] text-sm text-[#F5F4F0]">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {product.kovaHubCompatible && (
              <div className="py-8 border-t border-[#F5F4F0]/10">
                <div className="bg-[#2C2C2A] rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-[#1D9E75]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-dm-sans)] font-bold text-[#F5F4F0] mb-1">
                        KOVA Hub — Optional
                      </h4>
                      <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#F5F4F0]/70">
                        This product is compatible with the KOVA Hub app for enhanced data tracking. 
                        The app is always optional — all core functionality works without it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="py-8 border-t border-[#F5F4F0]/10">
              <div className="bg-[#1D9E75]/10 border border-[#1D9E75]/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5 text-[#1D9E75]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-[family-name:var(--font-dm-sans)] font-bold text-[#1D9E75]">
                    Lifetime Structural Guarantee
                  </span>
                </div>
                <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#F5F4F0]/70">
                  Every KOVA product is backed by our Lifetime Structural Guarantee. 
                  If the structural integrity of your product fails under normal use, 
                  we will repair or replace it — no time limit, no questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>

        <TrustStrip />
      </main>

      <Footer />
    </div>
  );
}