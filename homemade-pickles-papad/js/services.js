/**
 * Dadi's Swad - Homemade Pickles & Papads
 * Services.js - Dynamic Services Engine & Consultation Router
 * Supports query routing: service-details.html?service=<slug>
 */

(function () {
  'use strict';

  var servicesData = {
    'pickle-prep': {
      id: 'pickle-prep',
      slug: 'pickle-prep',
      tag: 'Signature Service 01',
      tagIcon: 'fa-solid fa-jar',
      title: 'Small-Batch Artisanal Pickle Preparation',
      shortTitle: 'Artisanal Pickle Preparation',
      breadcrumb: 'Small-Batch Artisanal Pickle Preparation',
      heroDesc: 'Bespoke small-batch preparation of authentic Indian pickles following traditional heirloom regional methods and solar fermentation in ceramic martabans.',
      image: 'assets/images/services/service-pickle-prep.jpg',
      imageAlt: 'Artisanal preparation of pickles with wooden ladles in traditional kitchen',
      scopeTag: 'Bespoke Culinary Scope',
      overviewTitle: 'Bespoke Small-Batch Pickle Crafting',
      overviewDesc: [
        'We offer bespoke small-batch preparation of authentic Indian pickles following traditional heirloom regional methods. Whether you need a North Indian mustard-heavy mango achar, a fiery Andhra Avakaya, or a Gujarati sweet-and-sour chundo, our master artisans craft each batch under authentic conditions.',
        'Produce is hand-selected from vetted regional farmers, sun-dried on hygienic muslin beds, and steeped in cold-pressed mustard, sesame, or groundnut oil. We ferment slowly in large earthen Bharani jars under direct sunlight, ensuring authentic probiotic richness and traditional taste without synthetic preservatives.'
      ],
      processTitle: 'How Your Custom Batch is Crafted',
      processDesc: 'From ancestral recipe consultation to solar aging and tamper-proof delivery.',
      processSteps: [
        { num: '1', title: 'Consultation', desc: 'Discuss your target regional profile, oil preference, salt content, and batch volume.' },
        { num: '2', title: 'Sample Tasting', desc: 'We dispatch a pilot test sampler jar to finalize spices and acidity before bulk curing.' },
        { num: '3', title: 'Solar Curing', desc: 'Produce is hand-cut, stone-pounded, and sun-aged in dedicated ceramic martabans.' },
        { num: '4', title: 'Hygienic Jarring', desc: 'Packed in steam-sterilized glass jars or food-grade bulk drums with custom labels.' },
        { num: '5', title: 'Safe Dispatch', desc: 'Cushioned shock-proof wooden/corrugated crating with insured pan-India transit.' }
      ],
      features: [
        { icon: 'fa-solid fa-lock', title: 'Exclusive Proprietary Recipes', desc: 'Your custom blended recipe remains confidential and exclusively reserved for your brand or restaurant establishment.' },
        { icon: 'fa-solid fa-sun', title: '100% Traditional Sun-Matured', desc: 'Never chemically accelerated or pasteurized with artificial acids. Naturally cured in glazed ceramic Bharani vessels.' },
        { icon: 'fa-solid fa-shield-halved', title: 'FSSAI Certified Commercial Lab', desc: 'Standardized microbial testing, batch tracking, zero food adulteration, and certified nutritional analysis.' },
        { icon: 'fa-solid fa-tags', title: 'White-Label Branding & Barcoding', desc: 'Delivered jarred with your restaurant logos, custom tamper seals, nutrition panels, and GS1 barcode integration.' }
      ],
      packages: [
        {
          badge: 'STARTER BATCH',
          title: 'Boutique Heritage',
          subtitle: 'For gourmet delis & family reunions',
          price: '₹7,500',
          period: '/ 25 kg minimum',
          features: [
            'Single regional recipe curation',
            'Choice of Kachi Ghani or Til oil',
            '250g or 500g glass jar bottling',
            'Custom printed batch labels',
            '14-day production cycle'
          ],
          cta: 'Select Starter Batch',
          primary: false
        },
        {
          badge: 'MOST POPULAR',
          title: 'Commercial Kitchen',
          subtitle: 'For premium restaurants & banquet halls',
          price: '₹22,000',
          period: '/ 100 kg batch',
          features: [
            'Up to 2 recipe formulations',
            'Custom sodium & spice heat level',
            'Choice of 1kg jars or 5kg drums',
            'Proprietary recipe exclusivity contract',
            'Priority scheduled recurring dispatch'
          ],
          cta: 'Select Commercial Batch',
          primary: true
        },
        {
          badge: 'ENTERPRISE CONTRACT',
          title: 'Private Label Retail',
          subtitle: 'For regional supermarket brands & chains',
          price: 'Custom',
          period: 'Volume Contract',
          features: [
            'Unlimited proprietary formulations',
            'Complete FSSAI regulatory filing',
            'Full retail carton & shrink packaging',
            'Bi-weekly quality audit reports',
            'Pan-India distributor drop shipping'
          ],
          cta: 'Request Enterprise Proposal',
          primary: false
        }
      ],
      faqs: [
        { q: 'What is the typical curing turnaround time for custom batches?', a: 'Because we honor traditional solar curing without chemical accelerators, small batches generally take 18 to 30 days depending on the produce variety, oil density, and prevailing sunlight intensity.' },
        { q: 'Can we specify our own ancestral family recipe proportions?', a: 'Absolutely. Over 40% of our private clients bring their grandmother\'s handwritten ingredient cards. Our master culinarians scale the proportions accurately while maintaining flavor integrity.' },
        { q: 'What packaging types are available for restaurant delivery?', a: 'We supply food-grade 5kg and 10kg HDPE canisters with airtight secondary seals for commercial kitchens, or retail-ready 250g, 400g, 500g, and 1kg hexagonal glass jars.' },
        { q: 'Is there a non-disclosure agreement (NDA) for custom recipes?', a: 'Yes. All custom recipe consultations and formulations include a legally binding mutual non-disclosure agreement to protect your proprietary spice formulas.' }
      ],
      related: ['papad-mfg', 'custom-flavor', 'packaging']
    },

    'papad-mfg': {
      id: 'papad-mfg',
      slug: 'papad-mfg',
      tag: 'Signature Service 02',
      tagIcon: 'fa-solid fa-cookie',
      title: 'Traditional Hand-Rolled Papad Manufacturing',
      shortTitle: 'Hand-Rolled Papad Manufacturing',
      breadcrumb: 'Traditional Hand-Rolled Papad Manufacturing',
      heroDesc: 'Wafer-thin, sun-dried papads and appalams crafted by women artisans using marble rolling pins and pure stone-ground lentil dough.',
      image: 'assets/images/services/service-papad-mfg.jpg',
      imageAlt: 'Rolling papads by hand on marble stone',
      scopeTag: 'Artisanal Craft Scope',
      overviewTitle: 'Traditional Hand-Rolled Papad Production',
      overviewDesc: [
        'Our women artisan collective hand-rolls wafer-thin papads and appalams using marble rolling pins. We specialize in authentic protein-rich urad dal dough, steamed rice flour khichiya, and black pepper crusted variations that puff up delightfully when flame-roasted or deep-fried.',
        'Every single papad is rolled individually to uniform thickness without mechanical presses, then dried naturally on elevated solar drying racks. This retains the authentic crunch, aromatic hing and jeera oils, and prevents bitterness or dough breakage during cooking.'
      ],
      processTitle: 'Five-Stage Handcrafting Process',
      processDesc: 'From pure pulse milling to elevated solar dehydration and moisture-tight sealing.',
      processSteps: [
        { num: '1', title: 'Pulse Selection', desc: 'High-protein unpolished urad dal and premium rice ground fresh in small stone mills.' },
        { num: '2', title: 'Dough Kneading', desc: 'Hand-kneaded with cold-pressed oil, hing water, black pepper, and organic cumin seeds.' },
        { num: '3', title: 'Marble Rolling', desc: 'Artisans hand-roll each disc on polished marble blocks to uniform micro-thin gauge.' },
        { num: '4', title: 'Solar Drying', desc: 'Evenly dehydrated on hygienic mesh racks under filtered sun and clean breezes.' },
        { num: '5', title: 'Moisture Control & Packing', desc: 'Precision digital moisture check and nitrogen-flushed packaging to retain crispness.' }
      ],
      features: [
        { icon: 'fa-solid fa-hands', title: '100% Hand-Rolled Precision', desc: 'Yields an ethereal flaky crunch and even puffing without hard unpopped dough pockets.' },
        { icon: 'fa-solid fa-seedling', title: 'Stone-Milled Whole Pulses', desc: 'Pure Bikaneri urad and fragrant jeera with zero artificial soda overload or bitter preservatives.' },
        { icon: 'fa-solid fa-wind', title: 'Elevated Solar Dehydration', desc: 'Dust-free, temperature-controlled sun mesh frames retain volatile spice oils and crispness.' },
        { icon: 'fa-solid fa-shapes', title: 'Custom Diameters & Thickness', desc: 'Available in 2.5" cocktail mini bites, 5" standard dining discs, and 8" royal banquet rounds.' }
      ],
      packages: [
        {
          badge: 'RESTAURANT BATCH',
          title: 'Dining & Banquets',
          subtitle: 'For restaurants, thali houses & caterers',
          price: '₹5,500',
          period: '/ 25 kg (~2,500 pcs)',
          features: [
            'Choice of Urad, Rice, or Masala papad',
            'Standard 5-inch dining diameter',
            '1kg moisture-barrier catering packs',
            'Guaranteed zero breakage transit packing',
            '7-day delivery turnaround'
          ],
          cta: 'Order Banquet Batch',
          primary: false
        },
        {
          badge: 'BEST VALUE',
          title: 'Retail Brand Run',
          subtitle: 'For FMCG distributors & retail brands',
          price: '₹18,500',
          period: '/ 100 kg (~10,000 pcs)',
          features: [
            'Up to 3 signature flavor profiles',
            'Custom 200g nitrogen-sealed zip packs',
            'Private label custom branding on pouch',
            'FSSAI nutritional compliance certified',
            'Scheduled monthly dispatch cycles'
          ],
          cta: 'Order Retail Pack Batch',
          primary: true
        },
        {
          badge: 'EXPORT CONTRACT',
          title: 'Global Export Consignment',
          subtitle: 'For international grocery importers',
          price: 'Custom',
          period: '500 kg+ Consignment',
          features: [
            'Phytosanitary & export documentation',
            'Multi-layer moisture foil vacuum master cartons',
            'Custom language labeling & barcoding',
            'Container-load volume discounts',
            'Port dispatch coordination'
          ],
          cta: 'Request Export Quotation',
          primary: false
        }
      ],
      faqs: [
        { q: 'Why choose hand-rolled papads over machine-pressed ones?', a: 'Machine pressing crushes the dough fibres and generates heat that dulls the natural hing and cumin aroma. Hand rolling preserves the dough lightness, resulting in papads that expand evenly and taste crisp without burning.' },
        { q: 'What is the shelf life of hand-rolled papads?', a: 'When sealed in our multi-layer moisture-proof barrier pouches, our sun-dried papads maintain perfect freshness, crunch, and aroma for 12 months in ambient storage.' },
        { q: 'Can you customize the spice heat and pepper coarseness?', a: 'Yes. We adjust the crushed black pepper granule size, asafoetida strength, and red chilli flakes to match your brand palate.' },
        { q: 'What is the minimum order quantity for custom branded pouches?', a: 'Our minimum for private-label nitrogen-flushed retail pouches is 100 kg (approximately 500 pouches of 200g each).' }
      ],
      related: ['pickle-prep', 'packaging', 'wholesale']
    },

    'custom-flavor': {
      id: 'custom-flavor',
      slug: 'custom-flavor',
      tag: 'Signature Service 03',
      tagIcon: 'fa-solid fa-mortar-pestle',
      title: 'Custom Flavour & Diet-Specific Blending',
      shortTitle: 'Custom Flavour & Diet Blending',
      breadcrumb: 'Custom Flavour & Diet-Specific Blending',
      heroDesc: 'Formulating bespoke spice blends, regional heirloom recipes, zero-oil variations, and diabetic-safe condiment lines.',
      image: 'assets/images/services/service-custom-flavor.jpg',
      imageAlt: 'Tasting spices and formulating custom flavour profiles',
      scopeTag: 'Culinary R&D Scope',
      overviewTitle: 'Bespoke Spice Formulation & Health Blends',
      overviewDesc: [
        'Have an ancestral family recipe or need a specialty condiment developed for modern dietary restrictions? Our spice masters blend custom formulations for health-conscious food brands, diabetic dining programs, and specialty culinary retailers.',
        'We formulate zero-oil sun-fermented lemon relishes, rock-salt low-sodium mango condiments, diabetic-friendly amla and methi infusions, and garlic-free Jain preparations. Every custom blend is created through interactive recipe trials with comprehensive shelf-life stability tests.'
      ],
      processTitle: 'Interactive Formulation Workflow',
      processDesc: 'From flavor mapping to blind tastings, lab analysis, and calibrated batch blending.',
      processSteps: [
        { num: '1', title: 'Diet & Palate Mapping', desc: 'Determine target heat, tanginess, oil content, salt ceilings, and dietary exemptions.' },
        { num: '2', title: 'Bench Formulation', desc: 'Our master blender prepares 3 distinct trial recipe variations.' },
        { num: '3', title: 'Sensory Evaluation', desc: 'Tasting sampler kit delivered to you for structured sensory feedback and fine-tuning.' },
        { num: '4', title: 'Stability & pH Testing', desc: 'Lab analysis verifying natural preservative equilibrium, pH balance, and microbial safety.' },
        { num: '5', title: 'Standardized SOP Batching', desc: 'Locked recipe codified into precise gram-level SOPs for scalable production.' }
      ],
      features: [
        { icon: 'fa-solid fa-leaf', title: 'Jain & Satvik Formulation', desc: 'Zero onion, zero garlic, pure rock salt, and dedicated non-cross-contaminated kitchenware.' },
        { icon: 'fa-solid fa-heart-pulse', title: 'Diabetic & Low Sodium', desc: 'Sun-matured with pure citrus juice, fenugreek seeds, and digestive spices without oil or sugar.' },
        { icon: 'fa-solid fa-pepper-hot', title: 'Regional Heat Profiling', desc: 'From aromatic Kashmir mirch to fiery Guntur Sannam or smoked Bhut Jolokia chillies.' },
        { icon: 'fa-solid fa-file-shield', title: 'Confidentiality Agreement', desc: 'Full intellectual property protection ensuring your proprietary recipe remains strictly yours.' }
      ],
      packages: [
        {
          badge: 'R&D PILOT',
          title: 'Recipe Formulation Lab',
          subtitle: 'For chefs & culinary entrepreneurs',
          price: '₹12,000',
          period: 'One-Time R&D',
          features: [
            '3 bespoke sample iterations',
            'Sensory review & tasting session',
            'Nutritional panel analysis & pH report',
            'Gram-level production formula SOP',
            'Full intellectual property ownership'
          ],
          cta: 'Book Formulation Lab',
          primary: false
        },
        {
          badge: 'COMMERCIAL RUN',
          title: 'Dietary Batch Production',
          subtitle: 'For wellness brands & organic retailers',
          price: '₹26,000',
          period: '/ 100 kg batch',
          features: [
            'Zero-oil or low-sodium specialization',
            'Complete production in sanitized facility',
            'Packed in retail glass jars or catering tubs',
            'Batch COA & FSSAI declaration support',
            '15-day manufacturing turnaround'
          ],
          cta: 'Commission Dietary Batch',
          primary: true
        },
        {
          badge: 'ANNUAL RETAINER',
          title: 'Culinary Brand Co-Creation',
          subtitle: 'For growing condiment brands & restaurant chains',
          price: 'Custom',
          period: 'Annual Partnership',
          features: [
            'Seasonal quarterly recipe updates',
            'Continuous ingredient cost optimization',
            'Exclusive manufacturing capacity allocation',
            'Dedicated food technologist account manager',
            'Priority scheduled order dispatch'
          ],
          cta: 'Discuss Annual Retainer',
          primary: false
        }
      ],
      faqs: [
        { q: 'Can you develop a zero-oil pickle that lasts without preservatives?', a: 'Yes! Our zero-oil lemon, ginger, and amla relishes use ancestral sun fermentation, rock salt curing, and natural citric acid to achieve 12+ months ambient stability with zero synthetic chemicals.' },
        { q: 'Do you offer Jain and Satvik recipe development?', a: 'Yes. We maintain a separate, sanitized preparatory station strictly dedicated to Jain preparations—free from root vegetables, onions, and garlic, prepared exclusively with rock salt and unrefined cold-pressed oils.' },
        { q: 'Who owns the recipe after formulation?', a: 'You do. Once the formulation lab project is completed, you receive the full recipe sheet, gram specifications, and intellectual property rights.' },
        { q: 'What is the turnaround time for sample delivery?', a: 'We typically deliver the 3 pilot tasting variations within 7 business days of our initial discovery consultation.' }
      ],
      related: ['pickle-prep', 'packaging', 'recipe-consult']
    },

    'packaging': {
      id: 'packaging',
      slug: 'packaging',
      tag: 'Signature Service 04',
      tagIcon: 'fa-solid fa-box-open',
      title: 'Hygienic Packaging & Private Labeling',
      shortTitle: 'Packaging & Private Labeling',
      breadcrumb: 'Hygienic Packaging & Private Labeling',
      heroDesc: 'Turnkey retail packaging, steam-sterilized glass jarring, induction foil seals, vacuum pouches, and custom brand labeling.',
      image: 'assets/images/services/service-packaging.jpg',
      imageAlt: 'Vacuum sealed food grade packaging and jars',
      scopeTag: 'Turnkey Retail Scope',
      overviewTitle: 'Private Label Jarring & Vacuum Packaging',
      overviewDesc: [
        'Transform our artisanal recipes into your own branded retail line. We provide end-to-end packaging and private labeling solutions with turnkey compliance, tamper-evident security foil seals, and custom waterproof labels.',
        'Choose from steam-sterilized hexagonal glass jars, vintage ceramic look canisters, or multi-layer nitrogen-flushed stand-up zip pouches for papads. All packaging meets rigorous FSSAI food contact material standards with batch coding and nutritional labeling.'
      ],
      processTitle: 'Five-Stage Packaging Operation',
      processDesc: 'From container sanitization to induction sealing, label application, and drop-test packaging.',
      processSteps: [
        { num: '1', title: 'Container Selection', desc: 'Hexagonal glass jars, ceramic jars, or nitrogen stand-up pouches tailored to your brand.' },
        { num: '2', title: 'Artwork & Compliance', desc: 'FSSAI mandatory declarations, nutritional table, barcode, and batch coding layout.' },
        { num: '3', title: 'Steam Sterilization', desc: 'Automated hot-water wash and dry-heat sterilizer tunnel to ensure zero microbial spores.' },
        { num: '4', title: 'Induction Sealing', desc: 'Hermetic induction heat foil seal applied to jar mouth ensuring 100% leak-proof transit.' },
        { num: '5', title: 'Shipper Box Packing', desc: 'Cushioned 5-ply corrugated shippers with cellular dividers tested for courier handling.' }
      ],
      features: [
        { icon: 'fa-solid fa-shield-halved', title: 'Leak-Proof Induction Seals', desc: 'Every jar is hermetically sealed with heat induction foil to prevent oil seepage during transit.' },
        { icon: 'fa-solid fa-bottle-droplet', title: 'Steam-Sterilized Glassware', desc: 'Food-grade flint glass containers washed and baked at 120°C for zero contamination.' },
        { icon: 'fa-solid fa-barcode', title: 'Turnkey Retail Compliance', desc: 'Complete packaging artwork alignment with FSSAI regulations, net quantity, and barcodes.' },
        { icon: 'fa-solid fa-recycle', title: 'Eco-Friendly Materials', desc: 'Plastic-free corrugated honey-comb partitions and recyclable paper label adhesives.' }
      ],
      packages: [
        {
          badge: 'SMALL BOUTIQUE',
          title: 'Boutique Retail Run',
          subtitle: 'For gourmet delis & popups',
          price: '₹9,500',
          period: '/ 250 Jars / Pouches',
          features: [
            'Hexagonal 250g or 400g glass jars',
            'High-resolution vinyl waterproof labels',
            'Tamper-evident heat induction seals',
            'Batch coding and date stamping',
            'Master shipping cartons included'
          ],
          cta: 'Order Boutique Packaging',
          primary: false
        },
        {
          badge: 'HIGH DEMAND',
          title: 'Commercial Retail Line',
          subtitle: 'For supermarkets & regional brand owners',
          price: '₹28,000',
          period: '/ 1,000 Jars / Pouches',
          features: [
            'Choice of jar sizes: 250g, 500g, 1kg',
            'Embossed metallic gold foil labels',
            'Nitrogen flush for papad pouches',
            'Complete FSSAI compliance verification',
            'Palletized dispatch with cargo wrap'
          ],
          cta: 'Order Retail Line Packaging',
          primary: true
        },
        {
          badge: 'FESTIVE HAMPERS',
          title: 'Luxury Corporate Gifting',
          subtitle: 'For festive Diwali, wedding & employee gifts',
          price: 'Custom',
          period: '500+ Gift Sets',
          features: [
            'Handmade rigid board magnetic gift boxes',
            'Custom laser engraved wooden lids',
            'Satin ribbon & personalized greeting card',
            'Direct door delivery to recipient list',
            'Dedicated corporate dispatch manager'
          ],
          cta: 'Explore Festive Hampers',
          primary: false
        }
      ],
      faqs: [
        { q: 'Can you apply our own brand artwork and labels?', a: 'Yes. You can supply print-ready PDF artwork or collaborate with our graphics desk. We manage label printing on waterproof, oil-resistant matte or gloss vinyl.' },
        { q: 'How do you prevent pickle oil leakage during shipping?', a: 'Every glass jar receives a high-frequency electromagnetic induction foil seal across the rim before capping. This creates an airtight hermetic barrier that withstands courier vibrations and pressure shifts.' },
        { q: 'Are nitrogen-flushed pouches available for papads?', a: 'Yes. Our automated pouch sealing lines flush inert nitrogen into multi-layer barrier pouches, preventing oxidation and keeping hand-rolled papads crispy for over 12 months.' },
        { q: 'What is the breakage replacement guarantee for glass jars?', a: 'We use heavy 5-ply cartons with dense molded paper pulp dividers. In the rare event of damage during transit, we replace any broken jar within 48 hours at zero cost.' }
      ],
      related: ['pickle-prep', 'papad-mfg', 'wholesale']
    },

    'wholesale': {
      id: 'wholesale',
      slug: 'wholesale',
      tag: 'Signature Service 05',
      tagIcon: 'fa-solid fa-truck-moving',
      title: 'Wholesale Supply for Caterers & Retailers',
      shortTitle: 'Wholesale Supply',
      breadcrumb: 'Wholesale Supply for Caterers & Retailers',
      heroDesc: 'High-volume authentic condiments and sun-dried papads supplied to restaurants, heritage hotels, caterers, and organic retailers.',
      image: 'assets/images/services/service-wholesale.jpg',
      imageAlt: 'Wholesale crates and bulk food containers for restaurants',
      scopeTag: 'Commercial Supply Scope',
      overviewTitle: 'Commercial Kitchen & Institutional Bulk Supply',
      overviewDesc: [
        'We supply high-volume authentic condiments and hand-rolled papads to premium restaurants, heritage hotels, Indian caterers, and organic food stores across metropolitan cities and tier-2 towns.',
        'Our bulk supply operations ensure reliable harvest-locked contract pricing, consistent spice and oil balances year-round, and dependable scheduled shipments in 5kg, 10kg, and 20kg food-grade commercial drums.'
      ],
      processTitle: 'Commercial Supply Cadence',
      processDesc: 'From account onboarding to harvest locking, scheduled batching, and freight dispatch.',
      processSteps: [
        { num: '1', title: 'Kitchen Assessment', desc: 'Evaluate monthly usage volume, regional flavor preferences, and delivery frequency.' },
        { num: '2', title: 'Harvest-Locked Contract', desc: 'Secure commodity pricing for 6 or 12 months to avoid off-season price spikes.' },
        { num: '3', title: 'Dedicated Batch Production', desc: 'Batches cured under controlled master conditions to guarantee consistency.' },
        { num: '4', title: 'Quality COA Release', desc: 'Batch microbial and moisture inspection report generated for food safety compliance.' },
        { num: '5', title: 'Scheduled Logistics', desc: 'Weekly or monthly freight dispatch directly to your central commissary or kitchen.' }
      ],
      features: [
        { icon: 'fa-solid fa-drum', title: '5kg, 10kg & 20kg Food Canisters', desc: 'Heavy-duty food-grade HDPE pails with airtight tear-strip security lids designed for kitchens.' },
        { icon: 'fa-solid fa-hand-holding-dollar', title: 'Harvest Price Protection', desc: 'Fixed wholesale rates locked against raw mango, lemon, mustard, and pulse price fluctuations.' },
        { icon: 'fa-solid fa-truck-fast', title: 'Pan-India Freight Logistics', desc: 'Reliable freight transport network delivering safely across metro corridors and tier-2 hubs.' },
        { icon: 'fa-solid fa-clock-rotate-left', title: 'Batch Consistency Guarantee', desc: 'Standardized oil ratios and solar curing curves ensure identical taste every single month.' }
      ],
      packages: [
        {
          badge: 'COMMERCIAL PAIL',
          title: 'Bistro & Cafe Supply',
          subtitle: 'For independent restaurants & cafes',
          price: '₹9,800',
          period: '/ 50 kg (~10 pails)',
          features: [
            'Choice of any 2 signature pickles',
            'Delivered in 5kg food-grade pails',
            '10 days freshness guarantee upon delivery',
            'Net-15 payment terms for registered businesses',
            'Standard pan-India road freight included'
          ],
          cta: 'Order Bistro Supply',
          primary: false
        },
        {
          badge: 'MOST POPULAR',
          title: 'Hotel & Banquet Supply',
          subtitle: 'For 3-star & 5-star kitchens, wedding caterers',
          price: '₹34,000',
          period: '/ 200 kg batch',
          features: [
            'Customized oil level & spice heat',
            'Combination of pickles & hand-rolled papads',
            'Dedicated commissary account manager',
            'Guaranteed 48-hour emergency buffer stock',
            'Scheduled weekly dispatch cadence'
          ],
          cta: 'Order Banquet Tier',
          primary: true
        },
        {
          badge: 'DISTRIBUTOR SLAB',
          title: 'Chain Commissary Contract',
          subtitle: 'For cloud kitchen networks & food chains',
          price: 'Custom',
          period: '500 kg+ Monthly',
          features: [
            'Direct wholesale factory pricing',
            'Exclusive customized recipe calibration',
            'Lab COA certificates with every shipment',
            'Direct delivery to multiple city commissary hubs',
            'Annual harvest price freeze guarantee'
          ],
          cta: 'Contact Commercial Desk',
          primary: false
        }
      ],
      faqs: [
        { q: 'What is the minimum wholesale order volume?', a: 'Our minimum commercial trial order is 25 kg (e.g., five 5kg canisters of pickle or 25 kg of hand-rolled papads). Ongoing contracts typically start at 50 kg per delivery.' },
        { q: 'How is product freshness guaranteed in large 10kg or 20kg pails?', a: 'Our food-grade pails feature tamper-evident airtight gaskets. As long as clean, dry ladles are used and the oil barrier remains intact, the pickles stay fresh for 12 months without refrigeration.' },
        { q: 'Do you offer credit payment terms for verified restaurant chains?', a: 'Yes. After an initial prepaid order, registered commercial entities can apply for Net-15 or Net-30 credit terms subject to standard credit verification.' },
        { q: 'Can we schedule recurring bi-weekly deliveries?', a: 'Yes. Over 70% of our hotel partners have standing bi-weekly orders synced with their banqueting and dining cycles.' }
      ],
      related: ['pickle-prep', 'papad-mfg', 'packaging']
    },

    'recipe-consult': {
      id: 'recipe-consult',
      slug: 'recipe-consult',
      tag: 'Signature Service 06',
      tagIcon: 'fa-solid fa-graduation-cap',
      title: 'Master Recipe & Process Consultation',
      shortTitle: 'Culinary Advisory & Consultation',
      breadcrumb: 'Master Recipe & Process Consultation',
      heroDesc: 'Traditional food science guidance, natural preservation optimization, solar drying protocol setup, and commercial scaling advisory.',
      image: 'assets/images/services/service-why-us.jpg',
      imageAlt: 'Traditional brass utensils and spice consultation workspace',
      scopeTag: 'Advisory & Scaling Scope',
      overviewTitle: 'Culinary Advisory & Heritage Process Engineering',
      overviewDesc: [
        'Looking to scale an heirloom family recipe without losing its authentic soul to commercial chemicals? Our master culinarians and food technologists offer consultative advisory on natural fermentation, oil barrier stabilization, and traditional sun drying.',
        'We help gourmet entrepreneurs, cloud kitchens, and culinary schools establish authentic small-batch production protocols that pass FSSAI hygiene standards while celebrating traditional culinary wisdom.'
      ],
      processTitle: 'Five-Step Consultation Blueprint',
      processDesc: 'From discovery audit to gram calibration, pilot batch runs, and commercial SOP delivery.',
      processSteps: [
        { num: '1', title: 'Recipe Discovery', desc: 'Thorough review of recipe history, target market, flavor profile, and preservation bottlenecks.' },
        { num: '2', title: 'Process Audit', desc: 'Moisture assessment, oil smoke-point checks, container hygiene, and solar setup evaluation.' },
        { num: '3', title: 'Scientific Standardization', desc: 'Converting domestic handfuls into gram-accurate formulas with calibrated acidity and pH.' },
        { num: '4', title: 'Hands-On Pilot Run', desc: 'Supervised preparation run in our certified kitchen with sensory taste panel testing.' },
        { num: '5', title: 'Production SOP Delivery', desc: 'Delivery of detailed Standard Operating Procedure documentation and compliance guidelines.' }
      ],
      features: [
        { icon: 'fa-solid fa-award', title: '40+ Years Heritage Knowledge', desc: 'Deep generational wisdom combined with modern food safety science and microbiology.' },
        { icon: 'fa-solid fa-flask-vial', title: 'Preservative-Free Science', desc: 'Mastering the equilibrium of salt, acid, and oil barrier without artificial benzoate or metabisulfite.' },
        { icon: 'fa-solid fa-arrow-up-right-dots', title: 'Commercial Scale-Up Plan', desc: 'Seamlessly translate small 2kg home recipes into consistent 100kg+ commercial batches.' },
        { icon: 'fa-solid fa-signature', title: 'Strict Confidentiality NDA', desc: 'Binding legal agreement guaranteeing your proprietary family secrets never leave our kitchen.' }
      ],
      packages: [
        {
          badge: '1-DAY AUDIT',
          title: 'Discovery Workshop',
          subtitle: 'For chefs & home culinary entrepreneurs',
          price: '₹15,000',
          period: 'Single-Day Intensive',
          features: [
            '4-hour hands-on formulation session',
            'Recipe moisture & acidity lab check',
            'Bottleneck diagnosis & resolution',
            'Written diagnostic recommendations',
            '14-day post-workshop email support'
          ],
          cta: 'Book Discovery Workshop',
          primary: false
        },
        {
          badge: 'RECOMMENDED',
          title: 'Scale-Up Accelerator',
          subtitle: 'For new food startups & expanding kitchens',
          price: '₹45,000',
          period: '6-Week Program',
          features: [
            'Full recipe standardization & gram SOPs',
            'Accelerated 30-day ambient shelf testing',
            'Packaging material selection advisory',
            'FSSAI labeling & compliance roadmap',
            'Supervised pilot production run'
          ],
          cta: 'Join Scale-Up Program',
          primary: true
        },
        {
          badge: 'TURNKEY CONTRACT',
          title: 'Commercial Facility Advisory',
          subtitle: 'For food manufacturing plants & commercial setups',
          price: 'Custom',
          period: 'Turnkey Project',
          features: [
            'Solar drying yard layout & design',
            'Cleanroom jar sterilization setup',
            'Staff artisan culinary training',
            'End-to-end HACCP & FSSAI audit prep',
            'Quarterly recurring quality reviews'
          ],
          cta: 'Discuss Turnkey Advisory',
          primary: false
        }
      ],
      faqs: [
        { q: 'Who is this consultation service intended for?', a: 'We advise cloud kitchens, gourmet entrepreneurs, regional food startups, restaurants, and individuals scaling traditional family recipes into marketable commercial products.' },
        { q: 'Do you help with FSSAI compliance and nutritional labeling?', a: 'Yes. Our food science consultants provide guidance on mandatory label disclosures, ingredient declarations, nutrition facts panel calculation, and FSSAI licensing.' },
        { q: 'How do you preserve recipe confidentiality?', a: 'Before discussing any proprietary ingredient ratios or ancestral notes, both parties execute a legally binding non-disclosure agreement (NDA).' },
        { q: 'Can consultation be conducted virtually?', a: 'Yes. Discovery sessions and initial recipe reviews can be conducted via video conference, followed by sample shipments for lab analysis and sensory evaluation.' }
      ],
      related: ['pickle-prep', 'custom-flavor', 'wholesale']
    }
  };

  // Expose servicesData globally
  window.servicesData = servicesData;

  document.addEventListener('DOMContentLoaded', function () {
    var isServiceDetailPage = document.getElementById('serviceDetailHero') !== null;
    if (isServiceDetailPage) {
      renderServiceDetailPage();
    }

    // Modal handler for service enquiry
    bindServiceEnquiryButtons();
  });

  function renderServiceDetailPage() {
    var params = new URLSearchParams(window.location.search);
    var slug = params.get('service') || 'pickle-prep';
    var service = servicesData[slug] || servicesData['pickle-prep'];

    // 1. Meta & Document Title
    document.title = service.title + " | Dadi's Swad Artisanal Services";

    // 2. Breadcrumbs & Hero
    var heroTag = document.getElementById('serviceHeroTag');
    if (heroTag) {
      heroTag.innerHTML = '<i class="' + service.tagIcon + '"></i> ' + service.tag;
    }

    var heroTitle = document.getElementById('serviceHeroTitle');
    if (heroTitle) {
      heroTitle.textContent = service.title;
    }

    var heroDesc = document.getElementById('serviceHeroDesc');
    if (heroDesc) {
      heroDesc.textContent = service.heroDesc;
    }

    var breadcrumbCurrent = document.getElementById('serviceBreadcrumbCurrent');
    if (breadcrumbCurrent) {
      breadcrumbCurrent.textContent = service.breadcrumb;
    }

    // 3. Service Overview Section
    var mainImg = document.getElementById('serviceMainImage');
    if (mainImg) {
      mainImg.src = service.image;
      mainImg.alt = service.imageAlt;
    }

    var scopeTag = document.getElementById('serviceScopeTag');
    if (scopeTag) {
      scopeTag.innerHTML = '<i class="fa-solid fa-list-check"></i> ' + service.scopeTag;
    }

    var overviewTitle = document.getElementById('serviceOverviewTitle');
    if (overviewTitle) {
      overviewTitle.textContent = service.overviewTitle;
    }

    var overviewDesc = document.getElementById('serviceOverviewDesc');
    if (overviewDesc && service.overviewDesc) {
      overviewDesc.innerHTML = service.overviewDesc.map(function (p) {
        return '<p class="section-desc" style="margin-bottom: 1.25rem;">' + p + '</p>';
      }).join('');
    }

    // 4. Five-Stage Process Section
    var processTitle = document.getElementById('serviceProcessTitle');
    if (processTitle) {
      processTitle.textContent = service.processTitle;
    }

    var processDesc = document.getElementById('serviceProcessDesc');
    if (processDesc) {
      processDesc.textContent = service.processDesc;
    }

    var processGrid = document.getElementById('serviceProcessGrid');
    if (processGrid && service.processSteps) {
      var badgeColors = ['var(--primary)', 'var(--secondary)', 'var(--accent)', 'var(--primary)', 'var(--secondary)'];
      processGrid.innerHTML = service.processSteps.map(function (step, idx) {
        var bg = badgeColors[idx % badgeColors.length];
        return '<div class="feature-card" style="padding: 1.75rem 1.25rem;">' +
          '<div style="width: 44px; height: 44px; border-radius: 50%; background: ' + bg + '; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 800; margin: 0 auto 1rem auto;">' + step.num + '</div>' +
          '<h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; text-align: center;">' + step.title + '</h4>' +
          '<p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0; text-align: center;">' + step.desc + '</p>' +
        '</div>';
      }).join('');
    }

    // 5. Features & Commercial Benefits Section
    var featuresGrid = document.getElementById('serviceFeaturesGrid');
    if (featuresGrid && service.features) {
      featuresGrid.innerHTML = service.features.map(function (feat) {
        return '<div class="feature-card">' +
          '<div class="feature-icon-wrapper"><i class="' + feat.icon + '"></i></div>' +
          '<h3 class="feature-title">' + feat.title + '</h3>' +
          '<p class="feature-desc">' + feat.desc + '</p>' +
        '</div>';
      }).join('');
    }

    // 6. Pricing Packages Section
    var pricingGrid = document.getElementById('servicePricingGrid');
    if (pricingGrid && service.packages) {
      pricingGrid.innerHTML = service.packages.map(function (pkg) {
        var cardClass = pkg.primary ? 'pricing-card featured' : 'pricing-card';
        var badgeHtml = pkg.badge ? '<span class="pricing-badge">' + pkg.badge + '</span>' : '';
        var btnClass = pkg.primary ? 'btn btn-primary' : 'btn btn-outline';
        var featuresList = pkg.features.map(function (f) {
          return '<li><i class="fa-solid fa-check"></i> ' + f + '</li>';
        }).join('');

        return '<div class="' + cardClass + '">' +
          badgeHtml +
          '<div class="pricing-header">' +
            '<h3 class="pricing-title">' + pkg.title + '</h3>' +
            '<p class="pricing-subtitle">' + pkg.subtitle + '</p>' +
            '<div class="pricing-price">' +
              '<span class="currency">' + pkg.price + '</span>' +
              '<span class="period">' + pkg.period + '</span>' +
            '</div>' +
          '</div>' +
          '<ul class="pricing-features">' + featuresList + '</ul>' +
          '<div class="pricing-cta">' +
            '<button type="button" class="' + btnClass + ' btn-open-service-modal" style="width: 100%;" data-service-name="' + service.title + '" data-package-name="' + pkg.title + '">' +
              '<i class="fa-solid fa-paper-plane"></i> ' + pkg.cta +
            '</button>' +
          '</div>' +
        '</div>';
      }).join('');
    }

    // 7. Dynamic FAQs Accordion
    var faqContainer = document.getElementById('serviceFaqAccordion');
    if (faqContainer && service.faqs) {
      faqContainer.innerHTML = service.faqs.map(function (faq, idx) {
        var activeClass = idx === 0 ? ' active' : '';
        return '<div class="accordion-item' + activeClass + '">' +
          '<button type="button" class="accordion-header" aria-expanded="' + (idx === 0 ? 'true' : 'false') + '">' +
            '<span>' + faq.q + '</span>' +
            '<i class="fa-solid fa-chevron-down accordion-icon"></i>' +
          '</button>' +
          '<div class="accordion-body">' +
            '<p>' + faq.a + '</p>' +
          '</div>' +
        '</div>';
      }).join('');

      // Re-bind accordion clicks
      faqContainer.querySelectorAll('.accordion-header').forEach(function (header) {
        header.addEventListener('click', function () {
          var item = header.parentElement;
          var wasActive = item.classList.contains('active');
          faqContainer.querySelectorAll('.accordion-item').forEach(function (other) {
            other.classList.remove('active');
            var btn = other.querySelector('.accordion-header');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          });
          if (!wasActive) {
            item.classList.add('active');
            header.setAttribute('aria-expanded', 'true');
          }
        });
      });
    }

    // 8. Related Services Section
    var relatedGrid = document.getElementById('relatedServicesGrid');
    if (relatedGrid && service.related) {
      relatedGrid.innerHTML = service.related.map(function (relSlug) {
        var rel = servicesData[relSlug];
        if (!rel) return '';
        return '<div class="feature-card service-preview-card" style="display: flex; flex-direction: column; overflow: hidden; border-radius: var(--radius-lg); padding: 0; background: var(--bg-surface); border: 1px solid var(--border-color);">' +
          '<a href="service-details.html?service=' + rel.slug + '#serviceOverview" class="service-image-link" style="height: 200px; display: block; border-radius: 0;">' +
            '<img src="' + rel.image + '" alt="' + rel.imageAlt + '" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">' +
          '</a>' +
          '<div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1;">' +
            '<span class="section-tag" style="font-size: 0.75rem; margin-bottom: 0.5rem; align-self: flex-start;"><i class="' + rel.tagIcon + '"></i> ' + rel.tag + '</span>' +
            '<h4 style="font-size: 1.15rem; margin-bottom: 0.75rem; line-height: 1.35;"><a href="service-details.html?service=' + rel.slug + '#serviceOverview" class="service-title-link">' + rel.title + '</a></h4>' +
            '<p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1.25rem; flex-grow: 1;">' + rel.heroDesc.substring(0, 110) + '...</p>' +
            '<a href="service-details.html?service=' + rel.slug + '#serviceOverview" class="btn btn-outline btn-sm" style="align-self: flex-start;">' +
              '<i class="fa-solid fa-arrow-right"></i> View Service Details' +
            '</a>' +
          '</div>' +
        '</div>';
      }).join('');
    }

    // 9. Quick Hero CTAs update
    var ctaRequestBatch = document.getElementById('ctaRequestCustomBatch');
    if (ctaRequestBatch) {
      ctaRequestBatch.setAttribute('data-service-name', service.title);
      ctaRequestBatch.setAttribute('data-package-name', 'Custom Bespoke Order');
    }
  }

  function bindServiceEnquiryButtons() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.btn-open-service-modal, #ctaRequestCustomBatch');
      if (!btn) return;
      e.preventDefault();

      var serviceName = btn.getAttribute('data-service-name') || 'Artisanal Food Service';
      var packageName = btn.getAttribute('data-package-name') || 'General Service Enquiry';

      var modal = document.getElementById('serviceEnquiryModal');
      if (!modal) {
        // Fallback to contact page if modal not present
        window.location.href = 'contact.html#order-enquiry';
        return;
      }

      var modalTitle = modal.querySelector('#serviceModalTitle');
      var inputService = modal.querySelector('#serviceEnquiryField');
      var inputPackage = modal.querySelector('#servicePackageField');

      if (modalTitle) modalTitle.textContent = 'Enquire for ' + serviceName;
      if (inputService) inputService.value = serviceName;
      if (inputPackage) inputPackage.value = packageName;

      if (typeof window.openModal === 'function') {
        window.openModal('serviceEnquiryModal');
      } else {
        modal.classList.add('active');
      }
    });
  }

})();

