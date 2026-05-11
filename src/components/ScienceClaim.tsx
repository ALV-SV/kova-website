import KovaVerifiedBadge from "./KovaVerifiedBadge";

interface ScienceClaimProps {
  claim: string;
  reference: string;
}

export default function ScienceClaim({ claim, reference }: ScienceClaimProps) {
  return (
    <div className="bg-[#04342C]/50 border border-[#1D9E75]/20 rounded-lg p-6">
      <KovaVerifiedBadge />
      <p className="mt-4 font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/90 leading-relaxed">
        {claim}
      </p>
      <p className="mt-3 text-sm text-[#F5F4F0]/50 font-[family-name:var(--font-dm-sans)] italic">
        {reference}
      </p>
    </div>
  );
}