// Dynamic category menu structure for the minimal multi-column mega menu
export const CATEGORY_MENU_DATA = {
  electrical: {
    id: 'electrical',
    name: 'Electrical',
    totalItems: '144 Products',
    col1Title: 'Electrical Supplies',
    col1Links: [
      "Wires & Cables",
      "Switchgear & Protection",
      "Distribution & Control Panels",
      "Conduits & Fittings",
      "Lighting",
      "Earthing Materials",
      "Cable Management",
      "Wiring Accessories",
      "Home Electrical Accessories",
      "Lighting Components",
      "Decorative Fittings"
    ],
    col2Title: 'Power & Controls',
    col2Links: [
      "Industrial Control Items",
      "Industrial Electrical Items",
      "Meters & Indicators",
      "Batteries & Power Backup",
      "Solar Items",
      "Networking & Communications",
      "Smart Home Product",
      "Electrical Safety",
      "Electrical Tools & Accessories",
      "Appliance & Accessories",
      "Water Pump Accessories",
      "Fan & Accessories",
      "Generator & Motor Accessories"
    ],
    brandsTitle: 'Shop By Brand',
    brands: [
      "Schneider Electric",
      "ABB",
      "Siemens",
      "Havells",
      "Polycab",
      "L&T",
      "Legrand",
      "Finolex",
      "Philips",
      "D-Link"
    ],
    commercialTitle: 'Commercial Desk',
    priorityLinks: [
      { label: "1st Priority Stock (Yellow)", href: "/category/electrical" },
      { label: "2nd Priority Stock (Green)", href: "/category/electrical" },
      { label: "Standard Catalog (White)", href: "/category/electrical" },
      { label: "View All 144 Electrical Items", href: "/category/electrical" },
      { label: "Bulk Project RFQ", href: "/rfq" }
    ]
  },

  tools: {
    id: 'tools',
    name: 'Tools (Hand & Power)',
    totalItems: 'Hand, Measuring & Power Tools',
    col1Title: 'Tool Categories & Power',
    col1Links: [
      "Hand Tools",
      "Measuring Tools",
      "Power Tools",
      "Angle Grinders",
      "Cordless Drills & Drivers",
      "Rotary Hammers & Demolition",
      "Circular Saws & Jigsaws",
      "Pneumatic Spray Guns"
    ],
    col2Title: 'Hand Tools & Metrology',
    col2Links: [
      "Digital Vernier Calipers",
      "Digital Multimeters & Testers",
      "Outside Micrometers",
      "Combination Pliers & Cutters",
      "Machinist Steel Files",
      "Snap-Off Utility Cutters",
      "Heavy Duty Pipe Wrenches",
      "Spanners & Socket Sets",
      "Tool Storage Boxes & Chests"
    ],
    brandsTitle: 'Authorized Brands (20)',
    brands: [
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
    ],
    commercialTitle: 'Tool Room Desk',
    priorityLinks: [
      { label: "Hand Tools Catalog", href: "/category/tools?sub=Hand+Tools" },
      { label: "Measuring & Metrology", href: "/category/tools?sub=Measuring+Tools" },
      { label: "Industrial Power Tools", href: "/category/tools?sub=Power+Tools" },
      { label: "View All Tool Items", href: "/category/tools" },
      { label: "Industrial Site RFQ", href: "/rfq" }
    ]
  },

  hardware: {
    id: 'hardware',
    name: 'Hardware',
    totalItems: '123 Products',
    col1Title: 'Architectural & Fittings',
    col1Links: [
      "Adhesives & Sealants",
      "Door & Furniture Fittings",
      "Locks & Door Hardware",
      "Kitchen & Bathroom Accessories",
      "Office & Home Fitting Accessories",
      "Mortise Lock",
      "Tower Bolt",
      "Butt Hinges",
      "Cabinet Handle"
    ],
    col2Title: 'Industrial, Safety & Abrasives',
    col2Links: [
      "Cutting & Abrasives",
      "Hardware Safety",
      "General Consumables",
      "Electrical Equipment",
      "Miscellaneous",
      "Anti Rust Spray WD 40",
      "Silicone Sealant",
      "Wire Rope Sling",
      "Aluminium Ladders"
    ],
    brandsTitle: 'Authorized Brands (28)',
    brands: [
      "Godrej",
      "Hafele",
      "Ozone",
      "Yale",
      "3 M",
      "Fischer",
      "Total",
      "Norton",
      "DeWalt",
      "Asian",
      "Fevikwik",
      "WD 40"
    ],
    commercialTitle: 'Projects & Commercial',
    priorityLinks: [
      { label: "Locks & Architectural Hardware", href: "/category/hardware?sub=Locks+%26+Door+Hardware" },
      { label: "Door & Furniture Fittings", href: "/category/hardware?sub=Door+%26+Furniture+Fittings" },
      { label: "Adhesives & Industrial Sealants", href: "/category/hardware?sub=Adhesives+%26+Sealants" },
      { label: "Cutting & Abrasives", href: "/category/hardware?sub=Cutting+%26+Abrasives" },
      { label: "View All 123 Hardware Items", href: "/category/hardware" },
      { label: "Commercial Project RFQ", href: "/rfq" }
    ]
  },

  fasteners: {
    id: 'fasteners',
    name: 'Fasteners',
    totalItems: '52 Products',
    col1Title: 'Industrial Bolts & Screws',
    col1Links: [
      "High Tensile Hex Bolts (8.8 / 10.9)",
      "Stainless Steel Screws (SS 304 / 316)",
      "Socket Head Cap Screws (Allen Bolts)",
      "Countersunk & Button Head Screws",
      "Self Drilling & Tapping Screws",
      "Carriage & Flange Bolts",
      "Stud Bolts & Continuous Thread Rods",
      "Eye Bolts & Lifting Lugs"
    ],
    col2Title: 'Nuts, Washers & Anchors',
    col2Links: [
      "Hex Nuts, Nyloc Nuts & Flange Nuts",
      "Spring Washers & Flat Plain Washers",
      "Wedge Anchors & Through Bolts",
      "Drop-in Expansion Anchors & Rawlplugs",
      "Chemical Anchor Studs & Capsules",
      "Spring Channel Nuts & Strut Clamps",
      "Rivet Nuts & Blind Pop Rivets",
      "Foundation J & L Anchor Bolts"
    ],
    brandsTitle: 'Authorized Brands',
    brands: [
      "Unbrako",
      "TVS Fasteners",
      "Fischer"
    ],
    commercialTitle: 'MTC & Mill Stock',
    priorityLinks: [
      { label: "Bolts & Studs", href: "/category/fasteners?sub=Bolts+%26+Studs" },
      { label: "Industrial Screws", href: "/category/fasteners?sub=Industrial+Screws" },
      { label: "Nuts & Washers", href: "/category/fasteners?sub=Nuts" },
      { label: "View All 52 Fasteners", href: "/category/fasteners" },
      { label: "Bulk Pallet Pricing RFQ", href: "/rfq" }
    ]
  },

  plumbing: {
    id: 'plumbing',
    name: 'Plumbing',
    totalItems: '232 Products',
    col1Title: 'Pipes & Industrial Valves',
    col1Links: [
      "Valves & Flow Control",
      "Pipes & Tubing",
      "Ball Valves",
      "Check Valves (NRV)",
      "Flush Valves",
      "Angle Valves",
      "Stop Valves",
      "Float Valves",
      "Safety & Relief Valves",
      "Solenoid Valves"
    ],
    col2Title: 'Fittings & Fluid Equipment',
    col2Links: [
      "Pipe Fittings & Couplings",
      "Taps, Mixers & Showers",
      "Drainage & Sewerage",
      "Water Storage Tanks",
      "Pumps & Pumping Equipment",
      "Water Filtration & RO Systems",
      "Chemicals, Sealants & Gaskets",
      "Pipe Supports & Hardware",
      "Bathroom & Sanitaryware"
    ],
    brandsTitle: 'Authorized Brands',
    brands: [
      "Astral Limited",
      "Ashirvad Pipes",
      "Supreme Industries",
      "Prince Pipes and Fittings",
      "Finolex Industries",
      "Jaquar",
      "Grohe",
      "Cera Sanitaryware",
      "Parryware",
      "Hindware",
      "Pidilite Industries",
      "Grundfos"
    ],
    commercialTitle: 'Priority & Commercial',
    priorityLinks: [
      { label: "1st Priority Catalog (90 Items)", href: "/category/plumbing?priority=1" },
      { label: "2nd & 3rd Priority Catalog (142 Items)", href: "/category/plumbing?priority=2" },
      { label: "View All 232 Plumbing Items", href: "/category/plumbing" },
      { label: "Commercial Project RFQ", href: "/rfq" }
    ]
  },

  safety: {
    id: 'safety',
    name: 'Safety',
    totalItems: '217 Industrial Safety Products',
    col1Title: 'Personal Protective Equipment',
    col1Links: [
      "Hand Protection",
      "Head Protection",
      "Eye Protection",
      "Face Protection",
      "Respiratory Protection",
      "Hearing Protection",
      "Foot Protection",
      "Body Protection",
      "Thermal Protection"
    ],
    col2Title: 'Industrial & Site Safety',
    col2Links: [
      "Welding Safety",
      "Height & Fall Protection",
      "Fire Safety",
      "Road & Traffic Safety",
      "Electrical Safety",
      "Lockout & Tagout (LOTO)",
      "Spill Control",
      "Emergency Equipment",
      "Safety Signs & Signage"
    ],
    brandsTitle: 'Authorized Brands (34)',
    brands: [
      "3M",
      "Karam",
      "Honeywell",
      "Ansell",
      "Dräger",
      "Allen Cooper",
      "Mallcom",
      "MSA Safety",
      "Portwest",
      "Udyogi",
      "Uvex",
      "Venus"
    ],
    commercialTitle: 'HSE Compliance Desk',
    priorityLinks: [
      { label: "Welding Safety Range", href: "/category/safety?sub=Welding+Safety" },
      { label: "Height & Fall Protection", href: "/category/safety?sub=Height+%26+Fall+Protection" },
      { label: "Hand & Cut Protection", href: "/category/safety?sub=Hand+Protection" },
      { label: "Fire Safety Equipment", href: "/category/safety?sub=Fire+Safety" },
      { label: "View All 217 Safety Items", href: "/category/safety" },
      { label: "Corporate PPE Project RFQ", href: "/rfq" }
    ]
  },

  surgical: {
    id: 'surgical',
    name: 'Surgical',
    totalItems: '77 Medical Products',
    col1Title: 'Dressings & Orthopedic',
    col1Links: [
      "Wound Care & Dressings",
      "Orthopedic Supports",
      "Bandages & Plasters",
      "Crepe Bandage",
      "Knee & Anklet Support",
      "Arm Sling & LS Belt",
      "Wrist Splints",
      "Surgical Cotton & Gauze"
    ],
    col2Title: 'Diagnostics & Disposables',
    col2Links: [
      "Diagnostic Equipment & Consumables",
      "Surgical Disposables & Infusion",
      "Surgical Gloves & PPE",
      "IV Fluids & Saline Solutions",
      "Respiratory Care & Nebulizers",
      "Antiseptics & Hygiene",
      "Personal Hygiene & Baby Care",
      "Blood Set & IV Set"
    ],
    brandsTitle: 'Authorized Brands',
    brands: [
      "3M",
      "BD (Becton Dickinson)",
      "Tynor",
      "Romsons",
      "Smith+Nephew",
      "Ethicon / Johnson & Johnson",
      "HMD (Hindustan Syringes)",
      "Ansell",
      "Baxter",
      "Desco",
      "Halyard / Kimberly-Clark",
      "B. Braun"
    ],
    commercialTitle: 'Hospital & Clinic Desk',
    priorityLinks: [
      { label: "Wound Care & Dressings", href: "/category/surgical?sub=Wound+Care+%26+Dressings" },
      { label: "Orthopedic Supports Range", href: "/category/surgical?sub=Orthopedic+Supports" },
      { label: "Surgical Disposables & Infusion", href: "/category/surgical?sub=Surgical+Disposables+%26+Infusion" },
      { label: "Diagnostic Equipment & Monitors", href: "/category/surgical?sub=Diagnostic+Equipment+%26+Consumables" },
      { label: "View All 77 Surgical Products", href: "/category/surgical" },
      { label: "Hospital Institutional Tender RFQ", href: "/rfq" }
    ]
  },

  instrumentation: {
    id: 'instrumentation',
    name: 'Instrumentation',
    totalItems: '104 Process Products',
    col1Title: 'Pressure, Flow & Temperature',
    col1Links: [
      "Pressure Gauges & Indicators",
      "Pressure Transmitters & Switches",
      "Flow Meters & Flow Sensors",
      "Temperature Instruments & Sensors",
      "Level Instruments & Switches",
      "RTD Pt100 & Thermocouples",
      "Digital Pressure Gauges",
      "Electromagnetic Flow Meters"
    ],
    col2Title: 'Valves, Fittings & Control',
    col2Links: [
      "Instrument Valves & Manifolds",
      "Control Valves & Actuators",
      "Instrument Fittings & Tubing",
      "Controllers, PLCs & Automation",
      "Pneumatic & Air Supplies",
      "Analyzers & Calibration",
      "Needle Valves & Manifolds",
      "Bulkhead Compression Unions"
    ],
    brandsTitle: 'Authorized Brands',
    brands: [
      "Swagelok",
      "Parker",
      "Rosemount",
      "WIKA",
      "Endress+Hauser (E+H)",
      "Yokogawa",
      "VEGA",
      "Rotork",
      "Samson",
      "Siemens",
      "SMC",
      "Emerson"
    ],
    commercialTitle: 'Calibration & Project Desk',
    priorityLinks: [
      { label: "Pressure Transmitters & Switches", href: "/category/instrumentation?sub=Pressure+Transmitters+%26+Switches" },
      { label: "Instrument Valves & Manifolds", href: "/category/instrumentation?sub=Instrument+Valves+%26+Manifolds" },
      { label: "Flow Meters & Flow Sensors", href: "/category/instrumentation?sub=Flow+Meters+%26+Flow+Sensors" },
      { label: "Instrument Fittings & Tubing", href: "/category/instrumentation?sub=Instrument+Fittings+%26+Tubing" },
      { label: "View All 104 Instrumentation Products", href: "/category/instrumentation" },
      { label: "Process Automation Tender RFQ", href: "/rfq" }
    ]
  },

  insulation: {
    id: 'insulation',
    name: 'Insulation',
    totalItems: '42 Products',
    col1Title: 'Engineering Plastics & PTFE',
    col1Links: [
      "Engineering Plastics & Polymers",
      "Electrical & Phenolic Insulation",
      "PTFE & Fluoropolymers",
      "Cast Nylon Sheets & Rods",
      "Delrin & PEEK Rods",
      "Bakelite & Hylam Sheets",
      "Glass Epoxy & FRP Rods",
      "PTFE Sheets, Rods & Sleeves"
    ],
    col2Title: 'Sheets, Curtains & Thermal',
    col2Links: [
      "Transparent & Optical Polymers",
      "PVC & Industrial Strip Curtains",
      "Elastomers & High-Temp Materials",
      "Thermal & Building Insulation",
      "Acrylic Sheets & Tubes",
      "Polycarbonate Sheets & Rods",
      "Silicone & Polyurethane Sheets",
      "Fiberglass & Roof Thermal Insulation"
    ],
    brandsTitle: 'Authorized Brands (11)',
    brands: [
      "Armacell – ArmaFlex",
      "ISOVER",
      "K-Flex",
      "Knauf Insulation",
      "Lloyd Insulations",
      "Neo Thermal",
      "Owens Corning",
      "ROCKWOOL",
      "Saint-Gobain",
      "Supreme Industries",
      "Twiga"
    ],
    commercialTitle: 'Industrial Insulation & Plastics',
    priorityLinks: [
      { label: "Engineering Plastics & Polymers", href: "/category/insulation?sub=Engineering+Plastics+%26+Polymers" },
      { label: "Electrical & Phenolic Insulation", href: "/category/insulation?sub=Electrical+%26+Phenolic+Insulation" },
      { label: "PTFE & Fluoropolymers", href: "/category/insulation?sub=PTFE+%26+Fluoropolymers" },
      { label: "PVC & Industrial Strip Curtains", href: "/category/insulation?sub=PVC+%26+Industrial+Strip+Curtains" },
      { label: "Thermal & Building Insulation", href: "/category/insulation?sub=Thermal+%26+Building+Insulation" },
      { label: "View All 42 Insulation Products", href: "/category/insulation" },
      { label: "Direct Factory Consignment RFQ", href: "/rfq" }
    ]
  },

  "lab-instruments": {
    id: 'lab-instruments',
    name: 'Lab Instruments',
    totalItems: '79 Products',
    col1Title: 'Analytical & Glassware',
    col1Links: [
      "Analytical & Precision Instruments",
      "Laboratory Glassware & Plasticware",
      "Life Science & Liquid Handling",
      "Analytical Balances & Precision Scales",
      "Borosilicate Beakers & Volumetric Flasks",
      "Burettes & Graduated Cylinders",
      "Micropipettes & Pipette Tips",
      "Spectrophotometer Optical Cuvettes"
    ],
    col2Title: 'Equipment & Diagnostics',
    col2Links: [
      "General Laboratory Equipment",
      "Clinical & Diagnostic Devices",
      "Medical & Laboratory Consumables",
      "Laboratory Chemicals & Reagents",
      "Centrifuges & Laboratory Homogenizers",
      "Bunsen Burners & Electric Hot Plates",
      "ECG & EEG Diagnostic Machines",
      "Sphygmomanometers & Stethoscopes"
    ],
    brandsTitle: 'Authorized Brands (35+)',
    brands: [
      "Mettler Toledo",
      "Sartorius",
      "Borosil",
      "Glassco",
      "DWK Life Sciences / DURAN",
      "Eppendorf",
      "Merck / Sigma-Aldrich",
      "REMI",
      "Shimadzu",
      "Hanna Instruments",
      "Transasia Bio-Medicals",
      "Tarsons"
    ],
    commercialTitle: 'Institutional & Research Lab Desk',
    priorityLinks: [
      { label: "Analytical & Precision Instruments", href: "/category/lab-instruments?sub=Analytical+%26+Precision+Instruments" },
      { label: "Laboratory Glassware & Plasticware", href: "/category/lab-instruments?sub=Laboratory+Glassware+%26+Plasticware" },
      { label: "General Laboratory Equipment", href: "/category/lab-instruments?sub=General+Laboratory+Equipment" },
      { label: "Clinical & Diagnostic Devices", href: "/category/lab-instruments?sub=Clinical+%26+Diagnostic+Devices" },
      { label: "Life Science & Liquid Handling", href: "/category/lab-instruments?sub=Life+Science+%26+Liquid+Handling" },
      { label: "View All 79 Lab Products", href: "/category/lab-instruments" },
      { label: "Institutional & Research Lab RFQ", href: "/rfq" }
    ]
  },

  "oil-gas-pipe-fittings": {
    id: 'oil-gas-pipe-fittings',
    name: 'Oil & Gas, Pipe Fittings',
    totalItems: '63 Products',
    col1Title: 'Flanges, Valves & Olets',
    col1Links: [
      "Branch Outlet Fittings",
      "Flanges & Spacers",
      "Valves & Flow Control",
      "Weldolets, Elbolets & Sockolets",
      "Weld Neck Flanges (Class 150-2500)",
      "Blind & Slip-On Flanges (RF/RTJ)",
      "Heavy Duty High-Pressure Ball Valves",
      "API Gate & Check Valves"
    ],
    col2Title: 'Butt-Weld, Pipes & Fittings',
    col2Links: [
      "Butt-Weld Fittings",
      "Threaded Fittings & Nipples",
      "Forged Fittings & Couplings",
      "Pipes & Line Materials",
      "High-Pressure & Mechanical Connections",
      "Seamless Carbon Steel & SS Line Pipes",
      "Concentric & Eccentric Reducers",
      "Swage Nipples & Threaded Couplings"
    ],
    brandsTitle: 'Authorized Brands (30+)',
    brands: [
      "Bonney Forge",
      "Swagelok",
      "Parker",
      "Marcel Piping",
      "Tube Turn India",
      "AMFORGE Pipefitting Industries",
      "Anvil International",
      "Smith Cooper International",
      "Dynamic Forge & Fittings",
      "Viraj Profiles",
      "Metline Industries",
      "Kalikund Steel"
    ],
    commercialTitle: 'Refinery & Pipeline Desk',
    priorityLinks: [
      { label: "Branch Outlet Fittings (Olets)", href: "/category/oil-gas-pipe-fittings?sub=Branch+Outlet+Fittings" },
      { label: "Flanges & Spacers (ASME B16.5)", href: "/category/oil-gas-pipe-fittings?sub=Flanges+%26+Spacers" },
      { label: "Butt-Weld Fittings (ASME B16.9)", href: "/category/oil-gas-pipe-fittings?sub=Butt-Weld+Fittings" },
      { label: "High-Pressure Valves & Flow Control", href: "/category/oil-gas-pipe-fittings?sub=Valves+%26+Flow+Control" },
      { label: "Pipes & Line Materials (API 5L / ASTM)", href: "/category/oil-gas-pipe-fittings?sub=Pipes+%26+Line+Materials" },
      { label: "View All 63 Oil & Gas Products", href: "/category/oil-gas-pipe-fittings" },
      { label: "Refinery & Pipeline RFQ", href: "/rfq" }
    ]
  },

  "construction-materials": {
    id: 'construction-materials',
    name: 'Construction Materials',
    totalItems: '101 Products',
    col1Title: 'Hydraulics, Pumps & Actuators',
    col1Links: [
      "Hydraulic Cylinders (Single / Double / Telescopic)",
      "Hydraulic Pumps (Gear, Piston & Vane)",
      "Directional, Proportional & Servo Valves",
      "Hydraulic Power Packs & Power Units (HPU)",
      "Hydraulic Accumulators & Manifold Blocks",
      "Pressure Relief, Check & Throttle Valves",
      "Rotary Actuators & Heavy Duty Cylinders",
      "Hydraulic Fluid Filters & Breathers"
    ],
    col2Title: 'Seals, Fittings & Site Machinery',
    col2Links: [
      "Industrial Seals, O-Rings & Chevron Packing",
      "High Pressure Hydraulic Hoses & Couplings",
      "Quick Release Couplings (QRC) & Flange Clamps",
      "Scaffolding Systems & Heavy Shuttering Formwork",
      "Heavy Duty Cantilever & Industrial Pallet Racks",
      "Excavator & Earthmover Hydraulic Components",
      "Transit Concrete Mixers & Vibratory Rollers",
      "Aerial Work Platforms (Scissor & Boom Lifts)"
    ],
    brandsTitle: 'Authorized Brands (12+)',
    brands: [
      "Bosch Rexroth",
      "Parker Hannifin",
      "Danfoss Power Solutions",
      "Eaton / Vickers",
      "Caterpillar",
      "JCB",
      "Hydac",
      "Trelleborg Sealing Solutions",
      "Godrej Storage Solutions",
      "Yuken",
      "Volvo Construction Equipment",
      "Bahjat Heavy Infrastructure"
    ],
    commercialTitle: 'Hydraulics & Site Desk',
    priorityLinks: [
      { label: "Hydraulic Cylinders & Actuators", href: "/category/construction-materials?sub=Hydraulic+Cylinders+%26+Actuators" },
      { label: "Hydraulic Pumps & Motors", href: "/category/construction-materials?sub=Hydraulic+Pumps+%26+Motors" },
      { label: "Hydraulic & Proportional Valves", href: "/category/construction-materials?sub=Hydraulic+%26+Proportional+Valves" },
      { label: "Industrial Seals & Rings (Trelleborg)", href: "/category/construction-materials?sub=Industrial+Seals+%26+Rings" },
      { label: "Heavy Machinery & Site Equipment", href: "/category/construction-materials?sub=Heavy+Machinery+%26+Site+Equipment" },
      { label: "View All 101 Construction Materials", href: "/category/construction-materials" },
      { label: "Heavy Infrastructure & Hydraulics RFQ", href: "/rfq" }
    ]
  }
};
