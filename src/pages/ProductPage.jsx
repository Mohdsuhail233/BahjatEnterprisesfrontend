import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { getProductById, getCategoryById, getRelatedProducts, WHATSAPP_NUMBER } from '../data';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='200' y='195' font-family='Arial' font-size='14' fill='%239ca3af' text-anchor='middle'%3EProduct Image%3C/text%3E%3Ctext x='200' y='215' font-family='Arial' font-size='12' fill='%23d1d5db' text-anchor='middle'%3EBahjat Enterprises%3C/text%3E%3C/svg%3E";

function getProductSpecifications(product, category) {
  if (product.specs && Object.keys(product.specs).length > 0) {
    return product.specs;
  }

  const id = (product.id || '').toLowerCase();
  const name = (product.name || '').toLowerCase();

  // Pipe Wrenches
  if (id.includes('pipe-wrench') || name.includes('pipe wrench')) {
    const size = name.includes('14') ? '14 Inch (350 mm)' : name.includes('18') ? '18 Inch (450 mm)' : '24 Inch (600 mm)';
    const cap = name.includes('14') ? '2 Inch (50 mm)' : name.includes('18') ? '2.5 Inch (65 mm)' : '3 Inch (80 mm)';
    return {
      "Product Type": "Heavy Duty Straight Pipe Wrench",
      "Nominal Size": size,
      "Pipe Capacity": cap,
      "Jaw Material": "Hardened Alloy Steel (Replaceable Hook & Heel)",
      "Body / Handle": "Ductile Iron Heavy Duty I-Beam",
      "Jaw Mechanism": "Full Floating Hook Jaw with Self-Cleaning Threads",
      "Adjustment Type": "Knurled Easy-Spin Adjustment Nut",
      "Standard Compliance": "Federal Spec GGG-W-651e, Type II, Class A",
      "Finish": "Durable Industrial Red Powder Coated Enamel",
      "Operation Type": "Manual Hand Tool",
      "Warranty": "Manufacturer Limited Lifetime Warranty"
    };
  }

  // Crimping Tools
  if (id.includes('crimping-tool') || name.includes('crimping')) {
    return {
      "Product Type": "Hydraulic / Ratchet Cable Crimping Tool",
      "Crimping Range": "10 mm² – 300 mm²",
      "Crimping Force": "12 Ton Maximum Output",
      "Crimping Profile": "Hexagonal Crimping Dies",
      "Head Rotation": "180° Swivel C-Head",
      "Body Material": "Drop-Forged High Carbon Alloy Steel",
      "Handle Grip": "Ergonomic Insulated Non-Slip Rubber",
      "Pressure Relief": "Manual & Auto Safety Pressure Release",
      "Application": "Copper & Aluminium Lug Termination"
    };
  }

  // Drills
  if (id.includes('drill') || name.includes('drill')) {
    const chuck = name.includes('10mm') ? '10 mm (3/8")' : '13 mm (1/2")';
    return {
      "Product Type": name.includes('pillar') ? "Bench Pillar Drill Press" : "Variable Speed Impact Drill",
      "Chuck Capacity": chuck,
      "Rated Input Power": name.includes('pillar') ? "350W / 550W Induction Motor" : "550W – 750W",
      "No-Load Speed": "0 – 2,800 RPM",
      "Impact Rate": "0 – 44,800 BPM",
      "Drilling Dia. (Concrete)": "13 mm – 16 mm",
      "Drilling Dia. (Steel)": "10 mm – 13 mm",
      "Drilling Dia. (Wood)": "25 mm – 30 mm",
      "Operating Voltage": "220V – 240V AC, 50/60 Hz",
      "Chuck Type": name.includes('turbogrip') ? "Keyless Auto-Lock" : "Heavy Duty Geared Chuck"
    };
  }

  // Grinders
  if (id.includes('grinder') || name.includes('grinder')) {
    const disc = name.includes('5') ? '125 mm (5 Inch)' : '100 mm (4 Inch)';
    return {
      "Product Type": "Heavy Duty Angle Grinder",
      "Disc Diameter": disc,
      "Rated Power Input": "720W – 850W",
      "No-Load Speed": "11,000 RPM",
      "Spindle Thread": "M10 / M14",
      "Switch Type": "Side Slide Switch with Lock-on",
      "Safety Features": "Anti-Rotation Protective Guard & Restart Protection",
      "Operating Voltage": "220V – 240V AC, 50 Hz",
      "Weight": "Approx. 1.8 kg"
    };
  }

  // Saws
  if (id.includes('circular-saw') || name.includes('circular saw')) {
    return {
      "Product Type": "Heavy Duty Circular Saw",
      "Blade Diameter": "184 mm (7-1/4 Inch)",
      "Bore Size": "20 mm",
      "Rated Power": "1500W High-Torque Motor",
      "No-Load Speed": "5,500 RPM",
      "Max Cutting Depth at 90°": "65 mm",
      "Max Cutting Depth at 45°": "45 mm",
      "Base Plate Material": "Heavy-Gauge Die-Cast Aluminum",
      "Operating Voltage": "230V AC, 50 Hz"
    };
  }

  if (id.includes('jigsaw') || name.includes('jigsaw')) {
    return {
      "Product Type": "Cordless Orbital Action Jigsaw",
      "Rated Voltage": "18V Lithium-Ion",
      "Stroke Rate": "0 – 3,200 SPM",
      "Stroke Length": "26 mm",
      "Bevel Capacity": "45° Left & Right",
      "Cutting Capacity (Wood)": "135 mm",
      "Cutting Capacity (Steel)": "10 mm",
      "Blade Clamp": "Tool-Less Quick Blade Ejection"
    };
  }

  // Tool Storage Box
  if (id.includes('tool-storage') || name.includes('storage') || name.includes('tool box')) {
    return {
      "Product Type": "Industrial Heavy Duty Tool Storage Box",
      "Nominal Size": "22 Inch (560 mm)",
      "Material": "High-Impact Structural Polypropylene",
      "Latches": "Heavy-Gauge Rust-Resistant Metal Buckles",
      "Ingress Protection": "IP54 Weather & Dust Sealed Gasket",
      "Tray": "Removable Full-Length Organizer Tray",
      "Load Capacity": "Up to 30 kg (Jobsite Rated)"
    };
  }

  // Circuit Breakers / MCB
  if (id.includes('circuit-breaker') || id.includes('mcb') || name.includes('breaker') || name.includes('mcb')) {
    return {
      "Product Type": "Miniature Circuit Breaker (MCB)",
      "Rated Current": "16A (Configurable 6A – 63A)",
      "Number of Poles": "1 Pole (SP) / 3 Pole / 4 Pole",
      "Tripping Curve": "Curve C (5–10 In)",
      "Breaking Capacity": "6 kA / 10 kA (IEC/EN 60898-1)",
      "Rated Operational Voltage": "240V / 415V AC, 50 Hz",
      "Mounting Type": "DIN Rail 35 mm",
      "Protection Class": "IP20 Enclosure Standard",
      "Standards Compliance": "IS/IEC 60898-1 & CE Certified"
    };
  }

  // Safety Helmets
  if (id.includes('safety-helmet') || name.includes('helmet')) {
    return {
      "Product Type": "Industrial Safety Helmet (Hard Hat)",
      "Shell Material": "High-Density Polyethylene (HDPE)",
      "Suspension": "4-Point Ratchet Headband Suspension",
      "Standards Compliance": "IS 2925 : 1984 & EN 397 Standard",
      "Chin Strap": "Adjustable 4-Point Quick Release Buckle",
      "Ventilation": "Top Aerodynamic Vents"
    };
  }

  // General Fallback
  return {
    "Product Type": product.name,
    "Part Number": product.id,
    "Category": category?.name || "Industrial Supplies",
    "Material / Construction": "Heavy-Duty Tested Alloy / Polymer",
    "Quality Standard": "ISO 9001 / IS Certified Manufacturing",
    "Supply Condition": "Brand New, Factory Packaged & Sealed",
    "Documentation": "GST Tax Invoice, MTC Available on Request",
    "Dispatch Timeline": "Ready Stock – Immediate Dispatch Within 24-48 Hours"
  };
}

export default function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const product = getProductById(productId);

  const [is360Active, setIs360Active] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isRfqModalOpen, setIsRfqModalOpen] = useState(false);
  const [copiedPartNo, setCopiedPartNo] = useState(false);
  const [activeImage, setActiveImage] = useState(product?.image);

  useEffect(() => {
    setActiveImage(product?.image);
  }, [product?.id, product?.image]);

  const [rfqForm, setRfqForm] = useState({
    name: '',
    company: '',
    phone: '',
    quantity: '10 Units',
    city: '',
    urgency: 'Immediate Stock',
    notes: ''
  });
  const [rfqSuccess, setRfqSuccess] = useState(false);

  if (!product) return <Navigate to="/" />;

  const category = getCategoryById(product.category);
  const returnUrl = location.state?.from || (category ? `/category/${category.id}` : '/categories');
  const related = getRelatedProducts(product);
  const specs = getProductSpecifications(product, category);

  const getDynamicWhatsAppMsg = () => {
    const text = encodeURIComponent(
      `*COMMERCIAL RFQ - BAHJAT ENTERPRISES*\n\n` +
      `*Product:* ${product.name}\n` +
      `*Part No:* ${product.id}\n` +
      `*Category:* ${category?.name || 'Industrial Supplies'}\n\n` +
      `*Procurement Requirements:*\n` +
      `• Required Qty: ${rfqForm.quantity || 'Project Bulk'}\n` +
      (rfqForm.name ? `• Contact Person: ${rfqForm.name}\n` : '') +
      (rfqForm.company ? `• Company / Firm: ${rfqForm.company}\n` : '') +
      (rfqForm.phone ? `• Phone / WhatsApp: ${rfqForm.phone}\n` : '') +
      (rfqForm.city ? `• Delivery Location: ${rfqForm.city}\n` : '') +
      `• Urgency: ${rfqForm.urgency}\n` +
      (rfqForm.notes ? `• Special Notes: ${rfqForm.notes}\n` : '') +
      `\nPlease share formal quotation, best commercial rates & delivery lead time.`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  const whatsappMsg = encodeURIComponent(
    `Hi Bahjat Enterprises,\n\nI want to proceed with a quotation request for:\n\n` +
    `Product: ${product.name}\n` +
    `Part No: ${product.id}\n` +
    `Category: ${category?.name || ''}\n\n` +
    `Please share pricing, bulk availability and delivery timeline.`
  );

  const handleCopyPartNo = () => {
    navigator.clipboard?.writeText(product.id);
    setCopiedPartNo(true);
    setTimeout(() => setCopiedPartNo(false), 2000);
  };

  const pageTitle = `${product.name} | Bahjat Enterprises`;
  const pageDescription = `${product.name} supplied by Bahjat Enterprises. Category: ${category?.name || product.subCategory || 'Industrial'}. View specifications, request formal quotation, and order direct from Bahjat Enterprises.`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <SEO
        title={pageTitle}
        description={pageDescription}
        ogImage={product.image || 'https://bahjatenterprises.com/logo/logo.png'}
        ogType="product"
        keywords={`${product.name}, ${category?.name || ''}, industrial procurement, Bahjat Enterprises`}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "@id": `https://bahjatenterprises.com/product/${product.id}#breadcrumb`,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://bahjatenterprises.com/"
                },
                ...(category ? [{
                  "@type": "ListItem",
                  "position": 2,
                  "name": category.name,
                  "item": `https://bahjatenterprises.com/category/${category.id}`
                }] : []),
                {
                  "@type": "ListItem",
                  "position": category ? 3 : 2,
                  "name": product.name,
                  "item": `https://bahjatenterprises.com/product/${product.id}`
                }
              ]
            },
            {
              "@type": "Product",
              "@id": `https://bahjatenterprises.com/product/${product.id}#product`,
              "name": product.name,
              "image": product.image ? (product.image.startsWith('http') ? product.image : `https://bahjatenterprises.com${product.image}`) : undefined,
              "description": product.description || `${product.name} industrial supply`,
              "sku": product.id,
              "mpn": product.id,
              "brand": {
                "@type": "Brand",
                "name": "Bahjat Enterprises"
              }
            }
          ]
        }}
      />

      {/* Back button & Breadcrumb */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <button
          type="button"
          onClick={() => {
            if (location.state?.from) {
              navigate(location.state.from);
            } else if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate(returnUrl);
            }
          }}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/90 px-3 py-1.5 rounded-xl transition-all cursor-pointer active:scale-95 shadow-2xs"
          title="Back to catalog"
        >
          <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          <span>Back</span>
        </button>

        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-neutral-400 flex-wrap">
          <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          {category && (
            <>
              <Link to={returnUrl} className="hover:text-primary-600 transition-colors">
                {category.name}
              </Link>
              <span aria-hidden="true">/</span>
            </>
          )}
          <span className="text-neutral-700 font-medium truncate max-w-xs" aria-current="page">{product.name}</span>
        </nav>
      </div>

      {/* Main Reference Card: Engineering Tool Showcase Layout */}
      <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-6 sm:p-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Visual Showcase (Single Image + Action Toolbar) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between">
            {/* Main Visual Display Area */}
            <div className="relative min-h-[340px] sm:min-h-[380px] flex items-center justify-center p-4 bg-neutral-50/50 rounded-2xl border border-neutral-100 mb-4">
              {/* Left Vertical Action Toolbar */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
                {/* 360 View Button */}
                {(activeImage || product.image) && (
                  <button
                    type="button"
                    onClick={() => setIs360Active(!is360Active)}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all shadow-sm ${
                      is360Active
                        ? 'bg-amber-400 text-neutral-950 ring-2 ring-amber-300 scale-105'
                        : 'bg-white hover:bg-neutral-100 text-neutral-600 border border-neutral-200'
                    }`}
                    title="Toggle 360° rotation preview"
                  >
                    <span className="text-[11px] font-extrabold tracking-tighter">360°</span>
                  </button>
                )}

                {/* Fullscreen / Zoom Button */}
                {(activeImage || product.image) && (
                  <button
                    type="button"
                    onClick={() => setIsZoomOpen(true)}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-neutral-100 text-neutral-600 border border-neutral-200 flex items-center justify-center transition-all shadow-sm"
                    title="Inspect / Fullscreen"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </button>
                )}

                {/* Specification Sheet / CAD button */}
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('full-specifications');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-neutral-100 text-neutral-600 border border-neutral-200 flex items-center justify-center transition-all shadow-sm"
                  title="Technical Datasheet"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Central Single Product Image */}
              <div
                onClick={() => (activeImage || product.image) && setIsZoomOpen(true)}
                className={`w-full max-w-[300px] sm:max-w-[340px] aspect-square flex items-center justify-center relative ${(activeImage || product.image) ? 'cursor-zoom-in group' : ''}`}
              >
                {(activeImage || product.image) ? (
                  <img
                    src={activeImage || product.image}
                    alt={`${product.name} - Technical Specification Image`}
                    className={`max-h-full max-w-full object-contain transition-all duration-700 select-none ${
                      is360Active ? 'animate-[spin_8s_linear_infinite]' : 'group-hover:scale-105'
                    }`}
                    onError={(e) => { e.target.src = PLACEHOLDER; }}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-white border border-dashed border-neutral-300 shadow-2xs">
                    <div className="w-16 h-16 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-400 mb-3">
                      <svg className="w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                      {product.subCategory || 'Specification Sheet'}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium max-w-[210px] leading-relaxed">
                      Technical Spec Sheet & Mill Test Certificate on Request
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail Gallery (if product has multiple photos) */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex items-center justify-start gap-2 mb-3 overflow-x-auto py-1 px-1">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`w-12 h-12 rounded-xl border p-1 bg-white transition-all overflow-hidden flex-shrink-0 ${
                      (activeImage || product.image) === img
                        ? 'border-primary-600 ring-2 ring-primary-200 scale-105 shadow-sm'
                        : 'border-neutral-200 hover:border-neutral-400 opacity-70 hover:opacity-100'
                    }`}
                    title={`View photo ${idx + 1}`}
                  >
                    <img src={img} alt={`${product.name} specification photo ${idx + 1}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}

            {/* Bottom Controls Row: Build tool assembly */}
            <div className="flex items-center justify-start gap-3 pt-2">
              {/* Build Tool Assembly Button */}
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('full-specifications');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full transition-colors"
              >
                <svg className="w-4 h-4 text-neutral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                <span>Build tool assembly</span>
              </button>
            </div>
          </div>

          {/* Right Column: Model Info, Description, Save Link, Key Spec Table & Action Bar */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between pt-4 lg:pt-0">
            <div>
              {/* Header: Model Code / Title + Status Indicator */}
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                  {product.name}
                </h1>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-700 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Available
                </span>
              </div>

              {/* Sub-Category Pill */}
              {product.subCategory && (
                <div className="mb-2.5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 bg-amber-50 border border-amber-200/90 rounded-md px-2.5 py-0.5">
                    <span className="text-amber-700 font-normal">Sub-Category:</span>
                    <span>{product.subCategory}</span>
                  </span>
                </div>
              )}

              {/* Description Paragraph */}
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-3">
                {product.description ||
                  "Precision engineering has become a cornerstone of modern manufacturing, driving innovations across industries like automotive, heavy infrastructure and process piping."}
              </p>

              {/* Save to list link with bookmark icon */}
              <div className="mb-4">
                <button
                  type="button"
                  onClick={() => setIsSaved(!isSaved)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-800 hover:text-neutral-950 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-700 transition-colors"
                >
                  <svg
                    className={`w-3.5 h-3.5 ${isSaved ? 'fill-amber-500 text-amber-500' : 'text-neutral-600'}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>{isSaved ? 'Saved to list' : 'Save to list'}</span>
                </button>
              </div>

              {/* Key Specifications Table (Divided Rows) */}
              <div className="border-t border-neutral-200 divide-y divide-neutral-200/80 mb-6">
                <div className="py-2.5 sm:py-3 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-neutral-500 font-normal">Part No / SKU</span>
                  <span className="text-neutral-900 font-medium">{product.id}</span>
                </div>
                <div className="py-2.5 sm:py-3 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-neutral-500 font-normal">Category</span>
                  <span className="text-neutral-900 font-medium">{category?.name || product.subCategory || 'Industrial Supplies'}</span>
                </div>
                {Object.entries(specs)
                  .filter(([k]) => !['brand', 'part no / sku', 'product'].includes(k.toLowerCase()))
                  .slice(0, 4)
                  .map(([key, val]) => (
                    <div key={key} className="py-2.5 sm:py-3 flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-neutral-500 font-normal">{key}</span>
                      <span className="text-neutral-900 font-medium truncate max-w-[240px] text-right">{val}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="pt-3 flex items-center justify-end border-t border-neutral-100 sm:border-0">
              {/* WhatsApp Quick Enquire Button */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base transition-all shadow-sm active:scale-95"
                title="Direct WhatsApp Inquiry"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full Technical Specifications Section */}
      <div id="full-specifications" className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden mb-12">
        <div className="px-6 sm:px-8 pt-6 sm:pt-7 pb-4 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">Specifications</h2>
          <button
            onClick={handleCopyPartNo}
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-semibold bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-3 py-1 rounded-full transition-colors"
          >
            <span>Part No: {product.id}</span>
            {copiedPartNo ? (
              <span className="text-emerald-600 font-bold">✓ Copied</span>
            ) : (
              <svg className="w-3.5 h-3.5 text-neutral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            )}
          </button>
        </div>
        <div className="divide-y divide-neutral-100 border-t border-neutral-100">
          {Object.entries(specs)
            .filter(([k]) => !k.toLowerCase().includes('brand'))
            .map(([key, value]) => (
            <div
              key={key}
              className="py-3.5 px-6 sm:px-8 grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4 text-sm sm:text-[15px] hover:bg-neutral-50/50 transition-colors"
            >
              <span className="text-neutral-500 font-normal sm:font-medium">{key}</span>
              <span className="text-neutral-900 font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">Related Products</h2>
            {category && (
              <Link to={returnUrl} className="text-sm text-primary-600 font-semibold hover:text-primary-700">
                View All in {category.name} →
              </Link>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-7">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      {/* Proceed Request RFQ Modal - High-Converting B2B Procurement Desk */}
      {isRfqModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3 sm:p-4 backdrop-blur-md overflow-y-auto"
          onClick={() => { setIsRfqModalOpen(false); setRfqSuccess(false); }}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full relative shadow-2xl overflow-hidden border border-neutral-200 my-6 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Amber Accent Stripe */}
            <div className="h-1.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 w-full"></div>

            {/* Dark Industrial Premium Header */}
            <div className="bg-gradient-to-r from-zinc-950 via-neutral-900 to-zinc-900 text-white p-5 sm:p-6 relative">
              <button
                onClick={() => { setIsRfqModalOpen(false); setRfqSuccess(false); }}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <span>🛡️</span>
                <span>Official Procurement Desk</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Request Commercial Quotation
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                Direct authorized distributor rates, volume project tiers & GST invoice.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-7 max-h-[75vh] overflow-y-auto">
              {!rfqSuccess ? (
                <>
                  {/* Selected Product Banner */}
                  <div className="bg-neutral-50 rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 sm:gap-4 border border-neutral-200/80 mb-5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white border border-neutral-200 p-1.5 shrink-0 flex items-center justify-center">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={`${product.name} quotation request preview`}
                          className="max-h-full max-w-full object-contain"
                          onError={(e) => { e.target.src = PLACEHOLDER; }}
                        />
                      ) : (
                        <svg className="w-7 h-7 text-neutral-400 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        {product.subCategory && (
                          <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-md">
                            {product.subCategory}
                          </span>
                        )}
                        <span className="text-[11px] font-mono text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-md">
                          SKU: {product.id}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-neutral-900 truncate">
                        {product.name}
                      </h4>
                      <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Ready Stock • Pan-India & Export Dispatch
                      </p>
                    </div>
                  </div>

                  {/* Interactive RFQ Form */}
                  <div className="space-y-4 mb-6">
                    {/* Row 1: Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Contact Person Name <span className="text-amber-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={rfqForm.name}
                          onChange={(e) => setRfqForm({ ...rfqForm, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full bg-neutral-50 border border-neutral-300 focus:border-amber-400 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Company / Contractor Name
                        </label>
                        <input
                          type="text"
                          value={rfqForm.company}
                          onChange={(e) => setRfqForm({ ...rfqForm, company: e.target.value })}
                          placeholder="e.g. Skyline EPC Projects"
                          className="w-full bg-neutral-50 border border-neutral-300 focus:border-amber-400 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone / WhatsApp & Delivery City */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Phone / WhatsApp Number <span className="text-amber-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={rfqForm.phone}
                          onChange={(e) => setRfqForm({ ...rfqForm, phone: e.target.value })}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-neutral-50 border border-neutral-300 focus:border-amber-400 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Delivery City / Site Location
                        </label>
                        <input
                          type="text"
                          value={rfqForm.city}
                          onChange={(e) => setRfqForm({ ...rfqForm, city: e.target.value })}
                          placeholder="e.g. Mumbai, Gujarat, Dubai"
                          className="w-full bg-neutral-50 border border-neutral-300 focus:border-amber-400 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Required Quantity with Quick Chips */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-semibold text-neutral-700">
                          Estimated Quantity Required <span className="text-amber-500">*</span>
                        </label>
                        <span className="text-[11px] text-neutral-400">Customizable</span>
                      </div>
                      <input
                        type="text"
                        value={rfqForm.quantity}
                        onChange={(e) => setRfqForm({ ...rfqForm, quantity: e.target.value })}
                        placeholder="e.g. 25 Units / 5 Cartons"
                        className="w-full bg-neutral-50 border border-neutral-300 focus:border-amber-400 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none transition-all mb-2"
                      />
                      <div className="flex flex-wrap gap-1.5">
                        {['5 Units', '10 Units', '25 Units', '50 Units', '100+ Bulk'].map((chip) => (
                          <button
                            key={chip}
                            type="button"
                            onClick={() => setRfqForm({ ...rfqForm, quantity: chip })}
                            className={`text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all ${
                              rfqForm.quantity === chip
                                ? 'bg-amber-400 text-neutral-950 font-bold'
                                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600'
                            }`}
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Row 4: Project Timeline / Urgency */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Procurement Timeline
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Immediate Stock', 'Within 1-2 Wks', 'Project RFQ'].map((u) => (
                          <button
                            key={u}
                            type="button"
                            onClick={() => setRfqForm({ ...rfqForm, urgency: u })}
                            className={`py-2 px-2 text-center rounded-xl text-xs font-medium border transition-all ${
                              rfqForm.urgency === u
                                ? 'border-amber-400 bg-amber-50 text-amber-900 font-bold ring-1 ring-amber-300'
                                : 'border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-600'
                            }`}
                          >
                            {u}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Row 5: Notes / Specifications (Optional) */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Special Instructions / MTC Requirements (Optional)
                      </label>
                      <input
                        type="text"
                        value={rfqForm.notes}
                        onChange={(e) => setRfqForm({ ...rfqForm, notes: e.target.value })}
                        placeholder="e.g. Need Mill Test Certificate, specific sizing or custom packing..."
                        className="w-full bg-neutral-50 border border-neutral-300 focus:border-amber-400 focus:bg-white rounded-xl px-3.5 py-2 text-xs sm:text-sm text-neutral-900 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Trust & Assurance Strip */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3.5 bg-neutral-50 rounded-xl border border-neutral-200/80 mb-5 text-center">
                    <div>
                      <span className="block text-[11px] font-bold text-neutral-900">⚡ 15–30 Mins</span>
                      <span className="text-[10px] text-neutral-500">Fast Quotation</span>
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-neutral-900">📑 GST Invoice</span>
                      <span className="text-[10px] text-neutral-500">MTC Available</span>
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-neutral-900">🚚 Pan-India</span>
                      <span className="text-[10px] text-neutral-500">& GCC Shipping</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {/* WhatsApp Primary */}
                    <a
                      href={getDynamicWhatsAppMsg()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-md hover:shadow-lg text-sm sm:text-base active:scale-95"
                    >
                      <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <span>Send via WhatsApp</span>
                    </a>

                    {/* Submit Direct Online */}
                    <button
                      type="button"
                      onClick={() => setRfqSuccess(true)}
                      className="flex-1 border-2 border-neutral-900 bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-md text-sm sm:text-base active:scale-95"
                    >
                      Submit Online RFQ
                    </button>
                  </div>
                </>
              ) : (
                /* Success Confirmation State */
                <div className="py-8 px-4 text-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-2">
                    Reference #BE-RFQ-{(Date.now() % 1000000).toString()}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                    Procurement Request Received!
                  </h3>
                  <p className="text-neutral-600 text-sm max-w-md mx-auto mb-6">
                    Thank you, <span className="font-semibold text-neutral-800">{rfqForm.name || 'Valued Partner'}</span>. Our technical commercial desk has received your request for <span className="font-semibold text-neutral-800">{product.name}</span> ({rfqForm.quantity}) and will revert within 30 minutes.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                    <a
                      href={getDynamicWhatsAppMsg()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-6 rounded-xl transition-all text-sm shadow-md"
                    >
                      <span>Chat on WhatsApp Now</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => { setIsRfqModalOpen(false); setRfqSuccess(false); }}
                      className="border border-neutral-300 hover:bg-neutral-100 text-neutral-700 font-semibold py-3 px-6 rounded-xl transition-colors text-sm"
                    >
                      Done / Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

       {/* Full Size Image Lightbox Modal */}
       {isZoomOpen && (
         <div
           className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
           onClick={() => setIsZoomOpen(false)}
         >
           <div
             className="bg-white rounded-2xl max-w-3xl w-full p-6 relative flex flex-col items-center shadow-2xl"
             onClick={(e) => e.stopPropagation()}
           >
             <button
               onClick={() => setIsZoomOpen(false)}
               className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-800 p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors"
               aria-label="Close image preview"
             >
               ✕
             </button>
             <p className="text-base font-bold text-neutral-900 mb-4 self-start">{product.name}</p>
             <div className="max-h-[70vh] flex items-center justify-center overflow-hidden">
               <img
                 src={activeImage || product.image}
                 alt={`${product.name} high-resolution enlarged view`}
                 className="max-h-[65vh] w-auto object-contain"
                 onError={(e) => { e.target.src = PLACEHOLDER; }}
               />
             </div>
             <p className="text-xs text-neutral-400 mt-4">Part No: {product.id}</p>
           </div>
         </div>
       )}
     </div>
   );
 }
