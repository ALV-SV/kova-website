import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const colorwayClasses: Record<string, string> = {
    Obsidian: "bg-[#04342C]",
    Stone: "bg-[#F5F4F0]",
    Vitality: "bg-[#1D9E75]",
  };

  return (
    <div className="group bg-[#2C2C2A] rounded-lg overflow-hidden transition-all duration-300 hover:border-2 hover:border-[#1D9E75] hover:shadow-lg">
      <div className="aspect-square relative kova-weave flex items-center justify-center bg-[#1D2420]">
        <div className="text-center p-6">
          <div 
            className="w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-4"
            style={{ backgroundColor: product.colorways[0] === "Obsidian" ? "#04342C" : product.colorways[0] === "Stone" ? "#F5F4F0" : "#1D9E75" }}
          >
            <span className="font-[family-name:var(--font-dm-serif)] text-lg text-center text-[#F5F4F0]" style={{ color: product.colorways[0] === "Stone" ? "#04342C" : "#F5F4F0" }}>
              {product.fullName}
            </span>
          </div>
          <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#F5F4F0]/60">{product.subtitle}</p>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-[family-name:var(--font-dm-serif)] text-xl text-[#F5F4F0] mb-1">
          {product.fullName}
        </h3>

        <div className="flex flex-wrap gap-1 mb-3">
          {product.sports.slice(0, 3).map((sport) => (
            <span 
              key={sport} 
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#04342C]/50 text-[#F5F4F0]/80 rounded font-[family-name:var(--font-dm-sans)]"
            >
              {sport}
            </span>
          ))}
        </div>

        <p className="text-[#F5F4F0]/70 text-sm font-[family-name:var(--font-dm-sans)] mb-3 line-clamp-2">
          {product.scienceClaim.split("—")[0]}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span className="font-[family-name:var(--font-dm-sans)] text-lg font-medium text-[#F5F4F0]">
            ${product.priceRange.min}–${product.priceRange.max}
          </span>
          <div className="flex gap-1">
            {product.colorways.map((colorway) => (
              <span
                key={colorway}
                className={`w-3 h-3 rounded-full ${colorwayClasses[colorway]}`}
                title={colorway}
              />
            ))}
          </div>
        </div>

        <Link 
          href={`/shop/${product.slug}`}
          className="block w-full text-center py-2 px-4 bg-[#1D9E75] text-[#F5F4F0] rounded font-[family-name:var(--font-dm-sans)] font-medium hover:bg-[#177A5F] transition-colors duration-200"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}