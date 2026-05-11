import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2A] text-[#F5F4F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-[family-name:var(--font-dm-serif)] text-2xl font-bold tracking-wide">
              KOVA
            </Link>
            <p className="mt-2 text-sm text-[#F5F4F0]/70 font-[family-name:var(--font-dm-sans)]">
              PROTECT THE FORM
            </p>
            <p className="mt-4 text-xs text-[#F5F4F0]/50 font-[family-name:var(--font-dm-sans)]">
              Performance gear engineered around injury prevention science.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F5F4F0]/80 mb-4 font-[family-name:var(--font-dm-sans)]">
              Shop
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop?category=Joint Support" className="text-sm text-[#F5F4F0]/70 hover:text-[#1D9E75] transition-colors font-[family-name:var(--font-dm-sans)]">
                  Joint Support
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Recovery" className="text-sm text-[#F5F4F0]/70 hover:text-[#1D9E75] transition-colors font-[family-name:var(--font-dm-sans)]">
                  Recovery
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Apparel" className="text-sm text-[#F5F4F0]/70 hover:text-[#1D9E75] transition-colors font-[family-name:var(--font-dm-sans)]">
                  Apparel
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Footwear" className="text-sm text-[#F5F4F0]/70 hover:text-[#1D9E75] transition-colors font-[family-name:var(--font-dm-sans)]">
                  Footwear
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Eyewear" className="text-sm text-[#F5F4F0]/70 hover:text-[#1D9E75] transition-colors font-[family-name:var(--font-dm-sans)]">
                  Eyewear
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F5F4F0]/80 mb-4 font-[family-name:var(--font-dm-sans)]">
              Science
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/science" className="text-sm text-[#F5F4F0]/70 hover:text-[#1D9E75] transition-colors font-[family-name:var(--font-dm-sans)]">
                  KOVA Verified
                </Link>
              </li>
              <li>
                <Link href="/science#advisory-board" className="text-sm text-[#F5F4F0]/70 hover:text-[#1D9E75] transition-colors font-[family-name:var(--font-dm-sans)]">
                  Advisory Board
                </Link>
              </li>
              <li>
                <Link href="/science#research" className="text-sm text-[#F5F4F0]/70 hover:text-[#1D9E75] transition-colors font-[family-name:var(--font-dm-sans)]">
                  Research
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F5F4F0]/80 mb-4 font-[family-name:var(--font-dm-sans)]">
              Brand
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-[#F5F4F0]/70 hover:text-[#1D9E75] transition-colors font-[family-name:var(--font-dm-sans)]">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about#pillars" className="text-sm text-[#F5F4F0]/70 hover:text-[#1D9E75] transition-colors font-[family-name:var(--font-dm-sans)]">
                  Three Pillars
                </Link>
              </li>
              <li>
                <Link href="/about#guarantee" className="text-sm text-[#F5F4F0]/70 hover:text-[#1D9E75] transition-colors font-[family-name:var(--font-dm-sans)]">
                  Lifetime Guarantee
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#F5F4F0]/10">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#F5F4F0]/50 font-[family-name:var(--font-dm-sans)]">
            <p>&copy; 2025–2026 KOVA. All products carry the KOVA Verified standard and Lifetime Structural Guarantee.</p>
            <p className="mt-2 md:mt-0">contact@kovabrand.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}