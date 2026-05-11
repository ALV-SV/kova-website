"use client";

import { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import TrustStrip from "@/components/TrustStrip";
import { products } from "@/data/products";

const sports = ["Running", "Basketball", "Tennis", "Padel", "Climbing", "Swimming", "Cycling", "Soccer", "Gymnastics", "Powerlifting", "Parkour"];
const categories = ["Joint Support", "Apparel", "Eyewear", "Recovery", "Footwear"];

function ShopContent() {
  const searchParams = useSearchParams();
  
  const [selectedSport, setSelectedSport] = useState<string | null>(searchParams.get("sport") || null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(searchParams.get("category") || null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState<"featured" | "price-low" | "price-high">("featured");

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedSport) {
      filtered = filtered.filter(p => p.sports.includes(selectedSport));
    }

    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    filtered = filtered.filter(p => 
      p.priceRange.min >= priceRange[0] && p.priceRange.max <= priceRange[1]
    );

    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.priceRange.min - b.priceRange.min);
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.priceRange.min - a.priceRange.min);
    }

    return filtered;
  }, [selectedSport, selectedCategory, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedSport(null);
    setSelectedCategory(null);
    setPriceRange([0, 500]);
    setSortBy("featured");
  };

  return (
    <div className="flex-1 bg-[#04342C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl md:text-5xl font-bold text-[#F5F4F0] mb-4">
            Shop
          </h1>
          <p className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/70">
            Performance gear engineered around injury prevention science.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-[#2C2C2A] rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-[family-name:var(--font-dm-sans)] font-bold text-[#F5F4F0] uppercase tracking-wider text-sm">
                  Filters
                </h3>
                <button 
                  onClick={clearFilters}
                  className="text-xs text-[#1D9E75] hover:text-[#177A5F] font-[family-name:var(--font-dm-sans)]"
                >
                  Clear All
                </button>
              </div>

              <div className="mb-6">
                <h4 className="font-[family-name:var(--font-dm-sans)] text-sm font-bold text-[#F5F4F0]/80 uppercase tracking-wider mb-3">
                  Sport
                </h4>
                <div className="space-y-2">
                  {sports.map((sport) => (
                    <label key={sport} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="sport"
                        checked={selectedSport === sport}
                        onChange={() => setSelectedSport(selectedSport === sport ? null : sport)}
                        className="accent-[#1D9E75]"
                      />
                      <span className="text-sm text-[#F5F4F0]/70 font-[family-name:var(--font-dm-sans)]">
                        {sport}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-[family-name:var(--font-dm-sans)] text-sm font-bold text-[#F5F4F0]/80 uppercase tracking-wider mb-3">
                  Category
                </h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(selectedCategory === category ? null : category)}
                        className="accent-[#1D9E75]"
                      />
                      <span className="text-sm text-[#F5F4F0]/70 font-[family-name:var(--font-dm-sans)]">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-[family-name:var(--font-dm-sans)] text-sm font-bold text-[#F5F4F0]/80 uppercase tracking-wider mb-3">
                  Price Range
                </h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min={0}
                    max={500}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#1D9E75]"
                  />
                  <div className="flex justify-between text-sm font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/70">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/70">
                {filteredProducts.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "featured" | "price-low" | "price-high")}
                className="bg-[#2C2C2A] text-[#F5F4F0] border border-[#F5F4F0]/20 rounded px-4 py-2 font-[family-name:var(--font-dm-sans)] text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/70 text-lg">
                  No products match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-[#1D9E75] hover:text-[#177A5F] font-[family-name:var(--font-dm-sans)]"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <TrustStrip />
    </div>
  );
}

function LoadingState() {
  return (
    <div className="flex-1 bg-[#04342C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse">
          <div className="h-12 bg-[#2C2C2A] rounded w-48 mb-4"></div>
          <div className="h-6 bg-[#2C2C2A] rounded w-80 mb-12"></div>
          <div className="flex gap-8">
            <div className="w-64 h-96 bg-[#2C2C2A] rounded-lg"></div>
            <div className="flex-1 grid grid-cols-3 gap-6">
              <div className="aspect-square bg-[#2C2C2A] rounded-lg"></div>
              <div className="aspect-square bg-[#2C2C2A] rounded-lg"></div>
              <div className="aspect-square bg-[#2C2C2A] rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Suspense fallback={<LoadingState />}>
        <ShopContent />
      </Suspense>
      <Footer />
    </div>
  );
}