// ============================================================
// BAHJAT ENTERPRISES - PRODUCT & CATEGORY DATA
// ============================================================
import { ELECTRICAL_PRODUCTS } from './electricalProducts.js';
import { TOOLS_PRODUCTS } from './toolsProducts.js';
import { HARDWARE_PRODUCTS } from './hardwareProducts.js';
import { FASTENER_PRODUCTS } from './fastenerProducts.js';
import { SAFETY_PRODUCTS } from './safetyProducts.js';
import { PLUMBING_PRODUCTS, PLUMBING_SUBCATEGORIES, PLUMBING_MAIN_CATEGORIES, PLUMBING_BRANDS } from './plumbingProducts.js';
import { SURGICAL_PRODUCTS, SURGICAL_SUBCATEGORIES, SURGICAL_BRANDS } from './surgicalProducts.js';
import { INSTRUMENTATION_PRODUCTS, INSTRUMENTATION_SUBCATEGORIES, INSTRUMENTATION_BRANDS } from './instrumentationProducts.js';
import { INSULATION_PRODUCTS, INSULATION_SUBCATEGORIES, INSULATION_BRANDS } from './insulationProducts.js';
import { LAB_PRODUCTS, LAB_SUBCATEGORIES, LAB_BRANDS } from './labProducts.js';
import { OIL_GAS_PRODUCTS, OIL_GAS_SUBCATEGORIES, OIL_GAS_BRANDS } from './oilGasProducts.js';
import { CONSTRUCTION_PRODUCTS, CONSTRUCTION_SUBCATEGORIES, CONSTRUCTION_BRANDS } from './constructionProducts.js';

export const CATEGORIES = [
  {
    "id": "electrical",
    "name": "Electrical",
    "description": "142 Products: MCBs, MCCBs, cables, switchgear, panels and power distribution",
    "icon": "⚡",
    "image": "/images/categories/electrical-lighting.png",
    "color": "from-zinc-800 to-zinc-950"
  },
  {
    "id": "tools",
    "name": "Tools (Hand & Power)",
    "description": "150 Products: Power drills, angle grinders, spanners, pliers, screwdrivers, saws and wrenches",
    "icon": "🛠️",
    "image": "/images/categories/hand-power-tools.png",
    "color": "from-neutral-700 to-neutral-900"
  },
  {
    "id": "hardware",
    "name": "Hardware",
    "description": "123 Products: Door locks, architectural hardware, hinges, door closers, latches and fittings",
    "icon": "🚪",
    "image": "/images/categories/hardware.png",
    "color": "from-slate-800 to-slate-950"
  },
  {
    "id": "fasteners",
    "name": "Fasteners",
    "description": "52 Products: High-tensile hex bolts, nuts, washers, threaded rods, anchors and industrial screws",
    "icon": "🔩",
    "image": "/images/categories/fasteners-hardware.png",
    "color": "from-zinc-800 to-zinc-950"
  },
  {
    "id": "plumbing",
    "name": "Plumbing",
    "description": "232 Products: Pipes, valves, water taps, tanks, pumps, drainage & fittings across 1st & 2nd priority catalogs",
    "icon": "🚿",
    "image": "/images/categories/cat_plumbing.jpg",
    "color": "from-stone-800 to-stone-950"
  },
  {
    "id": "safety",
    "name": "Safety",
    "description": "214 Products: Helmets, safety goggles, gloves, harness, protective gear and safety equipment",
    "icon": "🦺",
    "image": "/images/categories/cat_safety.jpg",
    "color": "from-slate-800 to-slate-950"
  },
  {
    "id": "surgical",
    "name": "Surgical",
    "description": "100 Medical & surgical products: diagnostic devices, wound care, orthopedic supports, PPE, infusion sets and hospital supplies",
    "icon": "🩺",
    "image": "/images/categories/cat_surgical.jpg",
    "color": "from-teal-800 to-teal-950"
  },
  {
    "id": "instrumentation",
    "name": "Instrumentation",
    "description": "202 Process instrumentation products: transmitters, gauges, flow meters, sensors, manifolds and control valves",
    "icon": "📟",
    "image": "/images/categories/cat_instrumentation.jpg",
    "color": "from-zinc-800 to-zinc-950"
  },
  {
    "id": "insulation",
    "name": "Insulation",
    "description": "42 Products: Engineering plastics, PTFE sheets & rods, Bakelite, Nylon, HDPE, PP, FRP, silicone & thermal insulation",
    "icon": "🧱",
    "image": "/images/categories/insulation-materials.png",
    "color": "from-stone-800 to-stone-950"
  },
  {
    "id": "lab-instruments",
    "name": "Lab Instruments",
    "description": "148 Products: Analytical balances, borosilicate glassware, centrifuges, micropipettes, diagnostic devices, reagents & lab equipment",
    "icon": "🔬",
    "image": "/images/categories/cat_lab_instruments.jpg",
    "color": "from-blue-800 to-blue-950"
  },
  {
    "id": "oil-gas-pipe-fittings",
    "name": "Oil & Gas, Pipe Fittings",
    "description": "97 Products: Weld neck flanges, high-pressure valves, olets, butt-weld fittings, carbon/stainless steel pipes & forged fittings",
    "icon": "🛢️",
    "image": "/images/categories/cat_oil_gas.jpg",
    "color": "from-neutral-800 to-neutral-950"
  },
  {
    "id": "construction-materials",
    "name": "Construction Materials",
    "description": "101 Products: Heavy site equipment, hydraulic cylinders, pumps & motors, proportional valves, industrial seals, couplings & infrastructure systems",
    "icon": "🏗️",
    "image": "/images/categories/building-materials.png",
    "color": "from-stone-800 to-stone-950"
  }
];

// Featured products shown on each category page
export const FEATURED_PRODUCTS = {
  electrical: ELECTRICAL_PRODUCTS,
  tools: TOOLS_PRODUCTS,
  hardware: HARDWARE_PRODUCTS,
  fasteners: FASTENER_PRODUCTS,
  plumbing: PLUMBING_PRODUCTS,
  safety: SAFETY_PRODUCTS,
  surgical: SURGICAL_PRODUCTS,
  instrumentation: INSTRUMENTATION_PRODUCTS,
  insulation: INSULATION_PRODUCTS,
  'lab-instruments': LAB_PRODUCTS,
  'oil-gas-pipe-fittings': OIL_GAS_PRODUCTS,
  'construction-materials': CONSTRUCTION_PRODUCTS,
};

// Build PRODUCTS array from FEATURED_PRODUCTS
export const PRODUCTS = Object.entries(FEATURED_PRODUCTS).flatMap(
  ([categoryId, products]) => products.map((p) => ({ ...p, category: p.category || categoryId }))
);

export const getCategoryProductCount = (categoryId) => {
  let target = categoryId;
  if (target === 'oil-gas' || target === 'pipe-fittings') {
    target = 'oil-gas-pipe-fittings';
  }
  return (FEATURED_PRODUCTS[target] || []).length;
};

export const getProductsByCategory = (categoryId) => {
  // Support aliases
  let target = categoryId;
  if (target === 'oil-gas' || target === 'pipe-fittings') {
    target = 'oil-gas-pipe-fittings';
  }
  return PRODUCTS.filter((p) => p.category === target);
};

export const getProductById = (id) =>
  PRODUCTS.find((p) => p.id === id);

export const getCategoryById = (id) => {
  let target = id;
  if (target === 'oil-gas' || target === 'pipe-fittings') {
    target = 'oil-gas-pipe-fittings';
  }
  return CATEGORIES.find((c) => c.id === target);
};

export const searchProducts = (query) => {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q) ||
      (p.tags && p.tags.some((t) => t.includes(q)))
  );
};

export const getRelatedProducts = (product, limit = 4) =>
  PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);

export const WHATSAPP_NUMBER = '919599828365'; // Replace with actual number
export const COMPANY_NAME = 'Bahjat Enterprises';
export const COMPANY_TAGLINE = 'Your Trusted Industrial & Electrical Solutions Partner';

// 29 Electrical Sub-Categories from Electrical Product Category List.xlsx
export const ELECTRICAL_SUBCATEGORIES = [
  "Appliance & Accessories",
  "Batteries & Power Backup",
  "Cable Management",
  "Conduits & Fittings",
  "Decorative Fittings",
  "Distribution & Control Panels",
  "Door Bell & Security",
  "Earthing Materials",
  "Electrical Consumable",
  "Electrical Hardware",
  "Electrical Safety",
  "Electrical Tools & Accessories",
  "Fan & Accessories",
  "Generator & Motor Accessories",
  "Home Electrical Accessories",
  "Industrial Control Items",
  "Industrial Electrical Items",
  "Lighting",
  "Lighting Components",
  "Lightining Accessories",
  "Meters & Indicators",
  "Networking & Communications",
  "Smart Home Product",
  "Solar Items",
  "Switches & Accessories",
  "Switchgear & Protection",
  "Water Pump Accessories",
  "Wires & Cables",
  "Wiring Accessories"
];

// 42 Electrical Brands from Electrical Product Brand List.xlsx
export const ELECTRICAL_BRANDS = [
  "ABB",
  "Allen Bradely",
  "ANCHOR",
  "Atomberg",
  "Bajaj",
  "Cisco",
  "CP Plus",
  "Crabtree",
  "Crompton",
  "Dahua Technology",
  "D-Link",
  "Finolex",
  "GM Modular",
  "Godrej",
  "Goldmedal Electrical",
  "Hager",
  "Havells",
  "Hellermann Tyton",
  "Hikvision",
  "Honeywell",
  "Ideal",
  "KEI Industries",
  "L&T",
  "Legrand",
  "MikroTik",
  "NETGEAR",
  "Orient Electric",
  "Panasonic",
  "Panduit",
  "Philips",
  "Polycab",
  "Raychem",
  "Roma",
  "RR Kabel",
  "Schneider Electric",
  "Siemens",
  "Syska",
  "Tenda",
  "TP-Link",
  "Ubiquiti",
  "Universal Cables",
  "Wipro"
];

// 3 Tools Categories from Tools Product Category List.xlsx
export const TOOLS_SUBCATEGORIES = [
  "Hand Tools",
  "Measuring Tools",
  "Power Tools"
];

// 20 Tools Brands from Tools Product Brand List.xlsx
export const TOOLS_BRANDS = [
  "Anest Iwata",
  "Bosch",
  "Caparo",
  "DeVilbiss",
  "Dewalt",
  "Fluke",
  "Hilti",
  "Ingco",
  "Insize",
  "JK Files",
  "Knipex",
  "LPS",
  "Makita",
  "Mitutoyo",
  "Olfa",
  "SATA",
  "Stanley",
  "Super Ego",
  "Taparia",
  "Tramontina"
];

// 11 Hardware Categories from Hardwre Product Category List.xlsx
export const HARDWARE_SUBCATEGORIES = [
  "Adhesives & Sealants",
  "Cutting & Abrasives",
  "Door & Furniture Fittings",
  "Electrical Equipment",
  "General Consumables",
  "Hardware Safety",
  "House Safety",
  "Kitchen & Bathroom Accessories",
  "Locks & Door Hardware",
  "Office & Home Fitting Accessories",
  "Miscellaneous"
];

// 28 Hardware Brands from Hardwre Product Brand List.xlsx
export const HARDWARE_BRANDS = [
  "3 M",
  "Abro",
  "Asian",
  "CERA",
  "Clean & Clear",
  "DeWalt",
  "Dorsel",
  "Fevikwik",
  "Fischer",
  "GKW",
  "Godrej",
  "Greenlee",
  "Hafele",
  "Indigo Paints",
  "Ingersoll Rand",
  "Insize",
  "Jindal",
  "Milton",
  "Norton",
  "Ozone",
  "Sintex",
  "Super Ego",
  "Taparia",
  "Tatawirow",
  "Total",
  "WD 40",
  "Weber",
  "Yale"
];

// 7 Fasteners Subcategories from Fastner Product List.xlsx
export const FASTENERS_SUBCATEGORIES = [
  "Bolts & Studs",
  "Industrial Screws",
  "Nuts",
  "Washers",
  "Nails & Rivets",
  "Anchors & Wall Plugs",
  "Hooks & Rigging Hardware"
];

// Fasteners Authorized Brands from Fastner Product Brand List.xlsx
export const FASTENERS_BRANDS = [
  "Unbrako",
  "TVS Fasteners",
  "Fischer"
];

// 33 Safety Subcategories from Safety Product Category List.xlsx
export const SAFETY_SUBCATEGORIES = [
  "Body Protection",
  "Chemical Safety",
  "Electrical Safety",
  "Emergency & Rescue",
  "Emergency Equipment",
  "Eye Protection",
  "Face Protection",
  "Fall Protection",
  "Fire Safety",
  "First Aid & Medical",
  "Foot Protection",
  "Gas & Environmental Safety",
  "Gas Detection",
  "Hand Protection",
  "Head Protection",
  "Height & Fall Protection",
  "High-Visibility Clothing",
  "Industrial Safety",
  "Industrial Safety Accessories",
  "Lifting Safety",
  "Machine Safety",
  "Marine & Water Safety",
  "Miscellaneous Safety",
  "PPE Accessories",
  "Respiratory Protection",
  "Retrieval System",
  "Road Safety",
  "Road & Traffic Safety",
  "Safety Accessories",
  "Safety Signs & Signage",
  "Site Safety",
  "Spill Control",
  "Storage & Emergency",
  "Thermal Protection",
  "Welding Safety",
  "Workplace Ergonomics",
  "Workplace Safety"
];

// 34 Safety Authorized Brands from Safety Product Brand List.xlsx
export const SAFETY_BRANDS = [
  "3M",
  "Allen Cooper",
  "Ansell",
  "Bosch",
  "Bullard",
  "Caterpillar",
  "Delta Plus",
  "Dräger",
  "Ergodyne",
  "Hillson",
  "Honeywell",
  "JSP",
  "Karam",
  "Kimberly-Clark Professional",
  "Lakeland",
  "Liberty Warrior",
  "Mallcom",
  "MSA Safety",
  "Nilkamal",
  "North by Honeywell",
  "Portwest",
  "Protek",
  "Pyramex",
  "Radians",
  "Red Wing",
  "Ringers Gloves",
  "Safari Pro",
  "Safepro",
  "Stanley",
  "Sundström",
  "Sure Safety",
  "Tiger",
  "Tough",
  "Udyogi",
  "Unicare",
  "Uvex",
  "Vaultex",
  "Venus",
  "Zebra"
];

// Plumbing, Surgical, Instrumentation, Insulation, Lab Instruments, Oil/Gas & Construction Exports
export { 
  PLUMBING_PRODUCTS, PLUMBING_SUBCATEGORIES, PLUMBING_MAIN_CATEGORIES, PLUMBING_BRANDS, 
  SURGICAL_PRODUCTS, SURGICAL_SUBCATEGORIES, SURGICAL_BRANDS, 
  INSTRUMENTATION_PRODUCTS, INSTRUMENTATION_SUBCATEGORIES, INSTRUMENTATION_BRANDS,
  INSULATION_PRODUCTS, INSULATION_SUBCATEGORIES, INSULATION_BRANDS,
  LAB_PRODUCTS, LAB_SUBCATEGORIES, LAB_BRANDS,
  OIL_GAS_PRODUCTS, OIL_GAS_SUBCATEGORIES, OIL_GAS_BRANDS,
  CONSTRUCTION_PRODUCTS, CONSTRUCTION_SUBCATEGORIES, CONSTRUCTION_BRANDS
};

// Major Products and Brands Dealt In (International Markets)
export { MAJOR_PRODUCT_GROUPS, MAJOR_BRANDS_DEALT_IN } from './dealingsData.js';

