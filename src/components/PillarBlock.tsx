interface PillarBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function PillarBlock({ icon, title, description }: PillarBlockProps) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="mb-4 text-[#1D9E75]">
        {icon}
      </div>
      <h3 className="font-[family-name:var(--font-dm-serif)] text-2xl text-[#F5F4F0] mb-3">
        {title}
      </h3>
      <p className="font-[family-name:var(--font-dm-sans)] text-[#F5F4F0]/70 max-w-xs">
        {description}
      </p>
    </div>
  );
}