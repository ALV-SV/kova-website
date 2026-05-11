import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";

const advisoryBoard = [
  {
    name: "Dr. Sarah Chen",
    specialty: "Sports Biomechanics",
    institution: "Stanford University",
    description: "Leading researcher in lower extremity kinematics and injury prevention mechanisms.",
  },
  {
    name: "Dr. Marcus Williams",
    specialty: "Orthopedic Rehabilitation",
    institution: "Johns Hopkins Medicine",
    description: "Specialist in ACL reconstruction recovery and prophylactic bracing efficacy.",
  },
  {
    name: "Dr. Elena Rossi",
    specialty: "Exercise Physiology",
    institution: "Swiss Federal Institute of Sport",
    description: "Expert in thermoregulation and thermal strain effects on athletic performance.",
  },
  {
    name: "Prof. James Thornton",
    specialty: "Musculoskeletal Radiology",
    institution: "University of Oxford",
    description: "Pioneer in imaging-based injury prediction and structural integrity assessment.",
  },
  {
    name: "Dr. Yuki Tanaka",
    specialty: "Neuromechanics",
    institution: "Tokyo University of Sport Sciences",
    description: "Leading authority on proprioception and sensorimotor control in injury recovery.",
  },
];

const researchCategories = [
  {
    category: "Ankle",
    products: ["KOVA ANCHOR"],
    references: [
      "McGuine et al., American Journal of Sports Medicine, 2011 — 61% reduction in first-time ankle sprains",
      "Fong et al., British Journal of Sports Medicine, 2012 — systematic review of ankle bracing efficacy",
    ],
  },
  {
    category: "Knee",
    products: ["KOVA GUARD"],
    references: [
      "Pietrosimone et al., Journal of Athletic Training, 2008 — 53% reduction in MCL injury",
      "Pedicelli et al., Radiologic Technology, 2010 — biomechanical analysis of knee brace mechanisms",
    ],
  },
  {
    category: "Core",
    products: ["KOVA CORE"],
    references: [
      "Hill et al., Sports Medicine, 2017 — meta-analysis of IAP augmentation and disc shear reduction",
      "Cholewicki & McGill, Clinical Biomechanics, 1996 — IAP stability mechanism validation",
    ],
  },
  {
    category: "Thermal",
    products: ["KOVA BREEZE", "KOVA REST"],
    references: [
      "Born et al., Sports Medicine, 2013 — PCM cooling and DOMS reduction (d=0.45)",
      "Cheung et al., Journal of Athletic Training, 2003 — thermal regulation and performance correlation",
    ],
  },
  {
    category: "Gait/Insoles",
    products: ["KOVA STRIDE"],
    references: [
      "Donoghue et al., Gait & Posture, 2008 — gait asymmetry as injury predictor",
      "Witchalls et al., British Journal of Sports Medicine, 2012 — asymmetry threshold validation",
    ],
  },
];

export default function SciencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-[#04342C]">
        <section className="relative py-20 kova-weave">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl md:text-6xl font-bold text-[#F5F4F0] mb-6">
              The Science
            </h1>
            <p className="font-[family-name:var(--font-dm-sans)] text-xl text-[#F5F4F0]/80 max-w-3xl">
              Every KOVA product is developed through rigorous scientific methodology, 
              with every performance claim verified by independent peer-reviewed research.
            </p>
          </div>
        </section>

        <section className="py-20 border-t border-[#F5F4F0]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-[#F5F4F0] mb-6">
                KOVA Verified Standard
              </h2>
              <div className="bg-[#2C2C2A] rounded-lg p-8">
                <p className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/80 leading-relaxed mb-6">
                  The KOVA Verified standard is our commitment to scientific transparency and 
                  evidence-based product claims. Every performance claim we make meets these criteria:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1D9E75] flex items-center justify-center mt-0.5">
                      <span className="text-[#F5F4F0] text-xs font-bold">1</span>
                    </span>
                    <span className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/80">
                      <strong className="text-[#F5F4F0]">Specificity</strong> — Claims must identify the exact mechanism (e.g., "constrains inversion beyond 20°"), not vague benefits.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1D9E75] flex items-center justify-center mt-0.5">
                      <span className="text-[#F5F4F0] text-xs font-bold">2</span>
                    </span>
                    <span className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/80">
                      <strong className="text-[#F5F4F0]">Independence</strong> — Studies must be conducted by independent researchers, not internal R&D.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1D9E75] flex items-center justify-center mt-0.5">
                      <span className="text-[#F5F4F0] text-xs font-bold">3</span>
                    </span>
                    <span className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/80">
                      <strong className="text-[#F5F4F0]">Publication</strong> — Research must be published in peer-reviewed journals with transparent methodology.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1D9E75] flex items-center justify-center mt-0.5">
                      <span className="text-[#F5F4F0] text-xs font-bold">4</span>
                    </span>
                    <span className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/80">
                      <strong className="text-[#F5F4F0]">Quantification</strong> — Claims must include numerical data (percentages, effect sizes, confidence intervals).
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="advisory-board" className="py-20 border-t border-[#F5F4F0]/10 bg-[#2C2C2A]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-[#F5F4F0] mb-12 text-center">
              Sport Science Advisory Board
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advisoryBoard.map((member) => (
                <div key={member.name} className="bg-[#2C2C2A] rounded-lg p-6">
                  <h3 className="font-[family-name:var(--font-dm-serif)] text-xl font-bold text-[#F5F4F0] mb-1">
                    {member.name}
                  </h3>
                  <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#1D9E75] font-medium mb-1">
                    {member.specialty}
                  </p>
                  <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[#F5F4F0]/60 mb-4">
                    {member.institution}
                  </p>
                  <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#F5F4F0]/70">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className="py-20 border-t border-[#F5F4F0]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold text-[#F5F4F0] mb-12 text-center">
              Research by Category
            </h2>
            <div className="space-y-8">
              {researchCategories.map((item) => (
                <div key={item.category} className="bg-[#2C2C2A] rounded-lg p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="font-[family-name:var(--font-dm-serif)] text-2xl font-bold text-[#F5F4F0]">
                      {item.category}
                    </h3>
                    {item.products.map((product) => (
                      <span 
                        key={product} 
                        className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-[#1D9E75]/20 text-[#1D9E75] rounded font-[family-name:var(--font-dm-sans)]"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {item.references.map((ref, index) => (
                      <li key={index} className="font-[family-name:var(--font-dm-sans)] text-sm text-[#F5F4F0]/70 italic">
                        {ref}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TrustStrip />
      </main>

      <Footer />
    </div>
  );
}