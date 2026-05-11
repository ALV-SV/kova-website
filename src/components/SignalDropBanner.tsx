export default function SignalDropBanner() {
  return (
    <section className="bg-[#EF9F27] text-[#04342C] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl md:text-4xl font-bold mb-4">
          Limited Signal Drop
        </h2>
        <p className="font-[family-name:var(--font-dm-sans)] text-lg md:text-xl max-w-2xl mx-auto mb-8 text-[#04342C]/80">
          Annual 500-unit global drop. Waitlist only. No restock.
        </p>
        <p className="font-[family-name:var(--font-dm-sans)] text-sm mb-6 text-[#04342C]/70">
          The Signal colorway — our signature amber — available only in this limited release.
        </p>
        <button className="inline-block px-8 py-3 bg-[#04342C] text-[#F5F4F0] rounded font-[family-name:var(--font-dm-sans)] font-medium hover:bg-[#032820] transition-colors duration-200">
          Join the Waitlist
        </button>
      </div>
    </section>
  );
}