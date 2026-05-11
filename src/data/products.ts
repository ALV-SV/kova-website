export type Colorway = "Obsidian" | "Stone" | "Vitality";

export type Product = {
  slug: string;
  fullName: string;
  subtitle: string;
  category: string;
  sports: string[];
  injuryTarget: string;
  keyInnovation: string;
  priceRange: { min: number; max: number };
  colorways: Colorway[];
  hasElectronics: boolean;
  kovaHubCompatible: boolean;
  scienceClaim: string;
  studyReference: string;
  specs: { label: string; value: string }[];
  sizes: string[];
  launchPhase: 1 | 2 | 3;
};

export const products: Product[] = [
  {
    slug: "kova-lens",
    fullName: "KOVA LENS",
    subtitle: "Infrared Temperature Monitoring System",
    category: "Eyewear",
    sports: ["Running", "Cycling", "Tennis", "Padel", "Basketball"],
    injuryTarget: "Thermal strain and hydration-related performance decline",
    keyInnovation: "Continuous infrared skin temperature monitoring with 30-second intervals",
    priceRange: { min: 380, max: 420 },
    colorways: ["Obsidian", "Stone", "Vitality"],
    hasElectronics: true,
    kovaHubCompatible: true,
    scienceClaim: "Infrared skin temperature monitoring every 30 seconds. Moran et al. (2019), IJSPP — unchecked hyperthermia elevates injury rate 12–18%.",
    studyReference: "Moran et al., International Journal of Sports Physiology and Performance, 2019",
    specs: [
      { label: "Sensor Type", value: "Infrared Thermopile Array" },
      { label: "Sampling Rate", value: "Every 30 seconds" },
      { label: "Battery Life", value: "12 hours continuous" },
      { label: "Water Resistance", value: "IP67" },
      { label: "Weight", value: "42g" },
      { label: "Connectivity", value: "Bluetooth 5.0 LE" },
    ],
    sizes: ["One Size"],
    launchPhase: 1,
  },
  {
    slug: "kova-breeze",
    fullName: "KOVA BREEZE",
    subtitle: "Active Cooling Compression System",
    category: "Recovery",
    sports: ["Running", "Cycling", "Swimming", "Gymnastics", "Powerlifting"],
    injuryTarget: "Post-exercise thermal strain and inflammatory response",
    keyInnovation: "Phase-change material microcapsules with active ventilation channels",
    priceRange: { min: 280, max: 320 },
    colorways: ["Obsidian", "Stone", "Vitality"],
    hasElectronics: false,
    kovaHubCompatible: false,
    scienceClaim: "PCM microcapsules maintain consistent skin-contact temperature passively. Born et al. (2013), Sports Medicine — compression reduces DOMS (effect size d=0.45).",
    studyReference: "Born et al., Sports Medicine, 2013",
    specs: [
      { label: "Material", value: "Nylon-Spandex Blend with PCM" },
      { label: "Temperature Range", value: "18-24°C active cooling" },
      { label: "Compression Level", value: "15-20 mmHg" },
      { label: "Wash Care", value: "Machine wash cold" },
      { label: "Weight", value: "180g" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    launchPhase: 1,
  },
  {
    slug: "kova-guard",
    fullName: "KOVA GUARD",
    subtitle: "Intelligent Knee Support System",
    category: "Joint Support",
    sports: ["Basketball", "Soccer", "Tennis", "Padel", "Parkour"],
    injuryTarget: "ACL/MCL non-contact injuries and terminal hyperextension",
    keyInnovation: "Articulating polycentric hinges with varus/valgus control stops",
    priceRange: { min: 340, max: 380 },
    colorways: ["Obsidian", "Stone", "Vitality"],
    hasElectronics: false,
    kovaHubCompatible: true,
    scienceClaim: "Articulating hinges block terminal hyperextension and valgus collapse — the non-contact ACL injury mechanism. Pietrosimone et al. (2008), Journal of Athletic Training — 53% reduction in MCL injury.",
    studyReference: "Pietrosimone et al., Journal of Athletic Training, 2008",
    specs: [
      { label: "Frame Material", value: "Carbon-Reinforced Polymer" },
      { label: "Hinge Type", value: "Polycentric Articulating" },
      { label: "Extension Limit", value: "0° (full extension block)" },
      { label: "Flexion Range", value: "0-135°" },
      { label: "Pad Material", value: "Memory Foam + Silicone Grip" },
      { label: "Strap System", value: "Dual-loop Velcro" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    launchPhase: 1,
  },
  {
    slug: "kova-anchor",
    fullName: "KOVA ANCHOR",
    subtitle: "Lateral Ankle Stabilization System",
    category: "Joint Support",
    sports: ["Running", "Basketball", "Tennis", "Padel", "Parkour", "Climbing"],
    injuryTarget: "Lateral ankle sprains from inversion beyond 20°",
    keyInnovation: "Semi-rigid lateral buttress with 20° inversion constraint threshold",
    priceRange: { min: 160, max: 190 },
    colorways: ["Obsidian", "Stone", "Vitality"],
    hasElectronics: false,
    kovaHubCompatible: false,
    scienceClaim: "Constrains inversion beyond 20° — the mechanism responsible for 85% of lateral ankle sprains. Based on McGuine et al. (2011), AJSM — 61% reduction in first-time ankle sprains in RCT of 1,460 athletes.",
    studyReference: "McGuine et al., American Journal of Sports Medicine, 2011",
    specs: [
      { label: "Frame Material", value: "Glass-Fiber Reinforced Nylon" },
      { label: "Inversion Limit", value: "20°" },
      { label: "Eversion Allowance", value: "Unrestricted" },
      { label: "Heel Cutout", value: "Yes — Achilles compatible" },
      { label: "Liner Material", value: "Moisture-Wicking Mesh" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    launchPhase: 1,
  },
  {
    slug: "kova-stride",
    fullName: "KOVA STRIDE",
    subtitle: "7-Zone Piezo Pressure Mapping Insole",
    category: "Footwear",
    sports: ["Running", "Cycling", "Soccer", "Tennis", "Padel"],
    injuryTarget: "Gait asymmetry, IT band syndrome, tibial stress injury",
    keyInnovation: "Piezoelectric pressure sensors in 7 zones with real-time asymmetry detection",
    priceRange: { min: 220, max: 260 },
    colorways: ["Obsidian", "Stone"],
    hasElectronics: true,
    kovaHubCompatible: true,
    scienceClaim: "7-zone piezo pressure mapping identifies gait asymmetry >15% — a reliable predictor of IT band syndrome and tibial stress injury. Donoghue et al. (2008), Gait & Posture.",
    studyReference: "Donoghue et al., Gait & Posture, 2008",
    specs: [
      { label: "Sensor Zones", value: "7 independent zones" },
      { label: "Sampling Rate", value: "100 Hz" },
      { label: "Asymmetry Threshold", value: ">15% differential" },
      { label: "Battery Life", value: "8 hours" },
      { label: "Insole Material", value: "EVA + Silica Gel" },
      { label: "Thickness", value: "4mm heel, 2mm forefoot" },
    ],
    sizes: ["US 5-6", "US 7-8", "US 9-10", "US 11-12", "US 13-14"],
    launchPhase: 2,
  },
  {
    slug: "kova-flux",
    fullName: "KOVA FLUX",
    subtitle: "Proprioceptive Shoulder Compression System",
    category: "Joint Support",
    sports: ["Swimming", "Tennis", "Padel", "Baseball", "Gymnastics"],
    injuryTarget: "Shoulder impingement and rotator cuff overuse",
    keyInnovation: "Graduated compression with proprioceptive feedback zones",
    priceRange: { min: 190, max: 220 },
    colorways: ["Obsidian", "Stone", "Vitality"],
    hasElectronics: false,
    kovaHubCompatible: false,
    scienceClaim: "Proprioceptive compression reduces impingement pain scores 22–35% in competitive swimmers within 6 weeks. Escamilla et al. (2009), Sports Medicine.",
    studyReference: "Escamilla et al., Sports Medicine, 2009",
    specs: [
      { label: "Compression Level", value: "12-18 mmHg graduated" },
      { label: "Material", value: "Nylon-Spandex Compression Knit" },
      { label: "Proprioceptive Zones", value: "4 targeted panels" },
      { label: "Arm Sleeve", value: "Full arm coverage" },
      { label: "Shoulder Pad", value: "Removable cushioned anchor" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    launchPhase: 2,
  },
  {
    slug: "kova-core",
    fullName: "KOVA CORE",
    subtitle: "Intra-Abdominal Pressure Support System",
    category: "Apparel",
    sports: ["Powerlifting", "Gymnastics", "Climbing", "Parkour", "Soccer"],
    injuryTarget: "Lumbar disc shear forces and core instability",
    keyInnovation: "Zoned compression that augments intra-abdominal pressure",
    priceRange: { min: 240, max: 275 },
    colorways: ["Obsidian", "Stone", "Vitality"],
    hasElectronics: false,
    kovaHubCompatible: false,
    scienceClaim: "Zoned compression assists intra-abdominal pressure, reducing disc shear forces 10–40% under maximal effort. Hill et al. (2017), Sports Medicine meta-analysis.",
    studyReference: "Hill et al., Sports Medicine, 2017",
    specs: [
      { label: "Compression Zones", value: "6 anatomically mapped zones" },
      { label: "IAP Assistance", value: "8-12 mmHg pressure augmentation" },
      { label: "Material", value: "High-Denier Compression Nylon" },
      { label: "Waist Height", value: "Mid-rise (5\" / 13cm)" },
      { label: "Closure", value: "Hook-and-loop adjustment" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    launchPhase: 1,
  },
  {
    slug: "kova-form",
    fullName: "KOVA FORM",
    subtitle: "Wrist Stabilization Brace",
    category: "Joint Support",
    sports: ["Gymnastics", "Climbing", "Tennis", "Padel", "Powerlifting"],
    injuryTarget: "Wrist hyperextension and TFCC injuries",
    keyInnovation: "Adjustable palmar bar with extension limit settings",
    priceRange: { min: 175, max: 200 },
    colorways: ["Obsidian", "Stone"],
    hasElectronics: false,
    kovaHubCompatible: false,
    scienceClaim: "Wrist braces with extension limitation reduce ulnar-side wrist pain by 31% in racquet sport athletes. Confirmed by Rettig et al. (2007), American Journal of Sports Medicine.",
    studyReference: "Rettig et al., American Journal of Sports Medicine, 2007",
    specs: [
      { label: "Frame Material", value: "Aluminum Stay + Plastic Shell" },
      { label: "Extension Limit", value: "Adjustable 15°/30°/45°" },
      { label: "Palmar Bar", value: "Moldable aluminum" },
      { label: "Thumb Spica", value: "Optional extension" },
      { label: "Liner", value: "Antimicrobial Mesh" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    launchPhase: 3,
  },
  {
    slug: "kova-trace",
    fullName: "KOVA TRACE",
    subtitle: "Vibration-Dampening Grip System",
    category: "Apparel",
    sports: ["Tennis", "Padel", "Squash", "Golf", "Baseball"],
    injuryTarget: "Forearm vibration transmission and lateral epicondylitis",
    keyInnovation: "Multi-layer gel damping system in grip area",
    priceRange: { min: 145, max: 175 },
    colorways: ["Obsidian", "Stone", "Vitality"],
    hasElectronics: false,
    kovaHubCompatible: false,
    scienceClaim: "Vibration-dampening gel layer reduces vibration transmission from racket to forearm by 40% (independent lab testing).",
    studyReference: "Independent Lab Testing, 2024",
    specs: [
      { label: "Damping Material", value: "Silicone-Gel Composite" },
      { label: "Vibration Reduction", value: "40% at 100-500Hz" },
      { label: "Material", value: "Synthetic Leather + Gel" },
      { label: "Grip Type", value: "Overgrip (wrap over existing)" },
      { label: "Length", value: "120cm x 2.5cm" },
    ],
    sizes: ["One Size (120cm)"],
    launchPhase: 2,
  },
  {
    slug: "kova-rest",
    fullName: "KOVA REST",
    subtitle: "Thermal Regulation Compression Wrap",
    category: "Recovery",
    sports: ["Running", "Cycling", "Swimming", "Soccer", "Basketball"],
    injuryTarget: "Muscle recovery and thermal regulation post-exercise",
    keyInnovation: "PCM integration with graduated compression zones",
    priceRange: { min: 95, max: 135 },
    colorways: ["Obsidian", "Stone", "Vitality"],
    hasElectronics: false,
    kovaHubCompatible: false,
    scienceClaim: "PCM microcapsules maintain consistent skin-contact temperature passively. Born et al. (2013), Sports Medicine — compression reduces DOMS (effect size d=0.45).",
    studyReference: "Born et al., Sports Medicine, 2013",
    specs: [
      { label: "PCM Content", value: "Phase-change at 28°C" },
      { label: "Compression", value: "8-12 mmHg gradient" },
      { label: "Size Options", value: "Knee, Thigh, Shoulder, Lower Back" },
      { label: "Material", value: "Nylon-Spandex + PCM Coating" },
      { label: "Reusability", value: "100+ wash cycles" },
    ],
    sizes: ["S/M", "L/XL"],
    launchPhase: 1,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsBySport(sport: string): Product[] {
  return products.filter((p) => p.sports.includes(sport));
}