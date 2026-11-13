/**
 * Dadi's Swad - Homemade Pickles & Papads
 * Products.js - Complete 14-Product Dataset, Dynamic Detail Routing, Search & Filtering
 */

var productsData = {
  "mango-pickle": {
    "slug": "mango-pickle",
    "title": "Traditional Mango Pickle (Avakaya Achar)",
    "shortName": "Mango Pickle (Aam Ka Achar)",
    "category": "Traditional Pickles",
    "badge": {
      "text": "Bestseller",
      "class": "badge-primary"
    },
    "tag": "Signature Pickle",
    "breadcrumb": "Traditional Mango Pickle",
    "reviews": "(142 Verified Reviews)",
    "price": "₹280",
    "defaultWeight": "500g Jar",
    "shortDesc": "Raw green mangoes marinated in cold-pressed mustard oil, fenugreek, and crushed chillies.",
    "description": "Hand-cut raw Ramkela green mangoes sun-dried with mineral rock salt and slowly infused with wooden-churned cold-pressed yellow mustard oil, split fenugreek, and fragrant Guntur chillies. Left to ferment naturally inside porcelain martabans under Varanasi's golden sun for 30 days.",
    "specs": {
      "spice": "Medium-High Zest",
      "spiceColor": "var(--spice-red)",
      "spiceIcon": "fa-pepper-hot",
      "shelfLife": "12 Months (Store in cool dry place)",
      "baseOil": "100% Cold-Pressed Mustard Oil",
      "additives": "Zero Vinegar / Preservatives"
    },
    "image": "assets/images/products/pickle-mango.jpg",
    "thumbnails": [
      {
        "img": "assets/images/products/pickle-mango.jpg",
        "alt": "Traditional Mango Pickle Jar"
      },
      {
        "img": "assets/images/products/product-detail-angle1.jpg",
        "alt": "Artisanal Mango Pickle Angle"
      },
      {
        "img": "assets/images/products/product-detail-2.jpg",
        "alt": "Texture and Oil View"
      },
      {
        "img": "assets/images/products/product-detail-3.jpg",
        "alt": "Ceramic Barni Curing View"
      }
    ],
    "sizes": [
      {
        "value": "250g",
        "price": "₹160",
        "label": "250g Glass Jar (₹160)"
      },
      {
        "value": "500g",
        "price": "₹280",
        "label": "500g Glass Jar (₹280 - Most Popular)",
        "checked": true
      },
      {
        "value": "1kg",
        "price": "₹520",
        "label": "1kg Family Tub (₹520)"
      }
    ],
    "ingredients": [
      {
        "name": "Hand-Cut Green Mangoes",
        "percent": "62%"
      },
      {
        "name": "Cold-Pressed Mustard Oil (Kachi Ghani)",
        "percent": "18%"
      },
      {
        "name": "Natural Rock Salt (Sendha Namak)",
        "percent": "11%"
      },
      {
        "name": "Split Yellow & Black Mustard Seeds",
        "percent": "3.5%"
      },
      {
        "name": "Guntur Sun-Dried Red Chilli Powder",
        "percent": "3%"
      },
      {
        "name": "Fenugreek (Methi), Turmeric & Hing",
        "percent": "2.5%"
      }
    ],
    "nutrition": [
      {
        "name": "Energy",
        "val": "194 kcal"
      },
      {
        "name": "Dietary Fiber",
        "val": "4.2 g"
      },
      {
        "name": "Good Fats (MUFA/PUFA from Mustard Oil)",
        "val": "16.8 g"
      },
      {
        "name": "Carbohydrates",
        "val": "7.5 g"
      },
      {
        "name": "Vitamin C",
        "val": "28 mg"
      },
      {
        "name": "Added Synthetic Chemicals",
        "val": "0.0% (None)",
        "highlight": true
      }
    ],
    "related": [
      "lemon-pickle",
      "garlic-pickle",
      "masala-papad"
    ]
  },
  "lemon-pickle": {
    "slug": "lemon-pickle",
    "title": "Sun-Cured Lemon Pickle (Nimbu Achar)",
    "shortName": "Sun-Cured Lemon Pickle",
    "category": "Citrus Pickles",
    "badge": {
      "text": "Zero Oil",
      "class": "badge-secondary"
    },
    "tag": "Traditional Citrus Pickle",
    "breadcrumb": "Sun-Cured Lemon Pickle",
    "reviews": "(118 Verified Reviews)",
    "price": "₹260",
    "defaultWeight": "500g Jar",
    "shortDesc": "Thin-skinned Kagzi lemons sun-matured for 40 days with black salt, ajwain, and jaggery.",
    "description": "Hand-picked thin-skinned Kagzi lemons cut into quarters, massaged with pink rock salt, toasted ajwain, and pure sugarcane jaggery. Solar-fermented on terrace rooftops for 40 days until the peel turns velvety soft, creating a digestive and gut-nourishing elixir.",
    "specs": {
      "spice": "Tangy Sweet & Sour",
      "spiceColor": "var(--secondary)",
      "spiceIcon": "fa-lemon",
      "shelfLife": "24 Months (Ages naturally like wine)",
      "baseOil": "Zero Oil (100% Oil-Free Solar Cure)",
      "additives": "Zero Vinegar / Preservatives"
    },
    "image": "assets/images/products/pickle-lemon.jpg",
    "thumbnails": [
      {
        "img": "assets/images/products/pickle-lemon.jpg",
        "alt": "Sun-Cured Lemon Pickle Jar"
      },
      {
        "img": "assets/images/products/detail-rel-lemon.jpg",
        "alt": "Lemon Pickle Close-up View"
      },
      {
        "img": "assets/images/blog/detail-lemon.jpg",
        "alt": "Glass Bowl Fermentation"
      },
      {
        "img": "assets/images/home/signature-lemon.jpg",
        "alt": "Traditional Earthen Barni View"
      }
    ],
    "sizes": [
      {
        "value": "250g",
        "price": "₹150",
        "label": "250g Glass Jar (₹150)"
      },
      {
        "value": "500g",
        "price": "₹260",
        "label": "500g Glass Jar (₹260 - Most Popular)",
        "checked": true
      },
      {
        "value": "1kg",
        "price": "₹490",
        "label": "1kg Family Tub (₹490)"
      }
    ],
    "ingredients": [
      {
        "name": "Fresh Kagzi Lemons",
        "percent": "70%"
      },
      {
        "name": "Pink Himalayan Rock Salt",
        "percent": "12%"
      },
      {
        "name": "Organic Sugarcane Jaggery",
        "percent": "10%"
      },
      {
        "name": "Roasted Ajwain & Kala Jeera",
        "percent": "5%"
      },
      {
        "name": "Kashmiri Degi Mirch & Ginger Extract",
        "percent": "3%"
      }
    ],
    "nutrition": [
      {
        "name": "Energy",
        "val": "132 kcal"
      },
      {
        "name": "Dietary Fiber",
        "val": "3.8 g"
      },
      {
        "name": "Total Fat (Zero Oil)",
        "val": "0.2 g"
      },
      {
        "name": "Carbohydrates",
        "val": "29.4 g"
      },
      {
        "name": "Natural Vitamin C",
        "val": "44 mg"
      },
      {
        "name": "Added Synthetic Chemicals",
        "val": "0.0% (None)",
        "highlight": true
      }
    ],
    "related": [
      "mango-pickle",
      "amla-pickle",
      "rice-papad"
    ]
  },
  "garlic-pickle": {
    "slug": "garlic-pickle",
    "title": "Lahsun Garlic Pod Pickle (Lahsun Achar)",
    "shortName": "Garlic Pickle (Lahsun Achar)",
    "category": "Root & Pod Pickles",
    "badge": {
      "text": "Fiery Rich",
      "class": "badge-spice"
    },
    "tag": "Pure Desi Garlic",
    "breadcrumb": "Lahsun Garlic Pod Pickle",
    "reviews": "(136 Verified Reviews)",
    "price": "₹295",
    "defaultWeight": "400g Jar",
    "shortDesc": "Whole peeled desi garlic cloves slow-tempered in sesame oil, hing, and Kashmiri mirch.",
    "description": "Whole native desi garlic cloves painstakingly hand-peeled and slow-tempered in stone-pressed gingelly sesame oil with asafoetida (hing), dry mango powder, and crushed Kashmiri red chillies. Imparts deep warming spice with unmatched digestive zest.",
    "specs": {
      "spice": "Fiery Spicy",
      "spiceColor": "var(--spice-red)",
      "spiceIcon": "fa-pepper-hot",
      "shelfLife": "12 Months (Store in cool dry place)",
      "baseOil": "100% Gingelly Sesame Oil",
      "additives": "Zero Vinegar / Preservatives"
    },
    "image": "assets/images/products/pickle-garlic.jpg",
    "thumbnails": [
      {
        "img": "assets/images/products/pickle-garlic.jpg",
        "alt": "Lahsun Garlic Pod Pickle Jar"
      },
      {
        "img": "assets/images/products/detail-rel-garlic.jpg",
        "alt": "Spicy Garlic Pods in Rich Masala"
      },
      {
        "img": "assets/images/home/signature-garlic.jpg",
        "alt": "Sesame Oil Infusion Angle"
      },
      {
        "img": "assets/images/home/why-choose.jpg",
        "alt": "Natural Whole Spices View"
      }
    ],
    "sizes": [
      {
        "value": "250g",
        "price": "₹175",
        "label": "250g Glass Jar (₹175)"
      },
      {
        "value": "400g",
        "price": "₹295",
        "label": "400g Glass Jar (₹295 - Most Popular)",
        "checked": true
      },
      {
        "value": "1kg",
        "price": "₹560",
        "label": "1kg Family Tub (₹560)"
      }
    ],
    "ingredients": [
      {
        "name": "Whole Desi Garlic Pods",
        "percent": "60%"
      },
      {
        "name": "Cold-Pressed Sesame Oil",
        "percent": "20%"
      },
      {
        "name": "Sendha Namak & Kala Namak",
        "percent": "8%"
      },
      {
        "name": "Crushed Kashmiri Mirch",
        "percent": "6%"
      },
      {
        "name": "Roasted Coriander, Amchur & Hing",
        "percent": "6%"
      }
    ],
    "nutrition": [
      {
        "name": "Energy",
        "val": "220 kcal"
      },
      {
        "name": "Active Allicin Compound",
        "val": "Preserved (High)"
      },
      {
        "name": "Healthy Fats (Sesame Oil)",
        "val": "18.2 g"
      },
      {
        "name": "Protein",
        "val": "4.8 g"
      },
      {
        "name": "Carbohydrates",
        "val": "9.1 g"
      },
      {
        "name": "Added Synthetic Chemicals",
        "val": "0.0% (None)",
        "highlight": true
      }
    ],
    "related": [
      "mango-pickle",
      "masala-papad",
      "garlic-papad"
    ]
  },
  "mixed-veg-pickle": {
    "slug": "mixed-veg-pickle",
    "title": "Mixed Vegetable Pickle (Pachranga Achar)",
    "shortName": "Mixed Vegetable Pickle",
    "category": "Mixed Pickles",
    "badge": {
      "text": "5 Vegetables",
      "class": "badge-accent"
    },
    "tag": "Winter Harvest Special",
    "breadcrumb": "Mixed Vegetable Pickle",
    "reviews": "(94 Verified Reviews)",
    "price": "₹275",
    "defaultWeight": "500g Jar",
    "shortDesc": "Crunchy seasonal cauliflower, carrots, turnip, ginger, and green chillies in mustard oil.",
    "description": "A colorful, crunchy symphony of seasonal winter carrots, crisp cauliflower florets, white turnip, fresh ginger slivers, and green chillies. Lightly solar-cured in mustard oil with split rai seeds, fennel, and unrefined rock salt for unforgettable home-cooked crunch.",
    "specs": {
      "spice": "Mild Spice",
      "spiceColor": "var(--primary)",
      "spiceIcon": "fa-pepper-hot",
      "shelfLife": "9 Months (Refrigerate after opening)",
      "baseOil": "Kachi Ghani Mustard Oil",
      "additives": "Zero Vinegar / Preservatives"
    },
    "image": "assets/images/products/pickle-mixed.jpg",
    "thumbnails": [
      {
        "img": "assets/images/products/pickle-mixed.jpg",
        "alt": "Mixed Vegetable Pickle Jar"
      },
      {
        "img": "assets/images/home/home2-pickle-mixed.jpg",
        "alt": "Pachranga Vegetables Close-up"
      },
      {
        "img": "assets/images/home/story-heritage.jpg",
        "alt": "Fresh Vegetable Prep View"
      },
      {
        "img": "assets/images/home/process-drying.jpg",
        "alt": "Courtyard Sun-Drying View"
      }
    ],
    "sizes": [
      {
        "value": "250g",
        "price": "₹155",
        "label": "250g Glass Jar (₹155)"
      },
      {
        "value": "500g",
        "price": "₹275",
        "label": "500g Glass Jar (₹275 - Most Popular)",
        "checked": true
      },
      {
        "value": "1kg",
        "price": "₹510",
        "label": "1kg Family Tub (₹510)"
      }
    ],
    "ingredients": [
      {
        "name": "Fresh Winter Vegetables (Carrot, Cauliflower, Turnip, Ginger, Chilli)",
        "percent": "65%"
      },
      {
        "name": "Cold-Pressed Mustard Oil",
        "percent": "17%"
      },
      {
        "name": "Mineral Rock Salt",
        "percent": "8%"
      },
      {
        "name": "Split Mustard & Fennel Seeds",
        "percent": "6%"
      },
      {
        "name": "Turmeric, Hing & Kashmiri Mirch",
        "percent": "4%"
      }
    ],
    "nutrition": [
      {
        "name": "Energy",
        "val": "165 kcal"
      },
      {
        "name": "Dietary Fiber",
        "val": "5.1 g"
      },
      {
        "name": "Good Fats (Mustard MUFA)",
        "val": "14.5 g"
      },
      {
        "name": "Carbohydrates",
        "val": "6.8 g"
      },
      {
        "name": "Vitamins A & C",
        "val": "32 mg"
      },
      {
        "name": "Added Synthetic Chemicals",
        "val": "0.0% (None)",
        "highlight": true
      }
    ],
    "related": [
      "mango-pickle",
      "lemon-pickle",
      "urad-papad"
    ]
  },
  "amla-pickle": {
    "slug": "amla-pickle",
    "title": "Traditional Gooseberry Pickle (Amla Achar)",
    "shortName": "Gooseberry (Amla) Pickle",
    "category": "Ayurvedic Pickles",
    "badge": {
      "text": "Ayurvedic",
      "class": "badge-accent"
    },
    "tag": "Immunity Booster",
    "breadcrumb": "Gooseberry (Amla) Pickle",
    "reviews": "(107 Verified Reviews)",
    "price": "₹290",
    "defaultWeight": "500g Jar",
    "shortDesc": "Whole steamed gooseberries spiced with yellow mustard seeds, turmeric, and fenugreek.",
    "description": "Whole wild forest amla (Indian gooseberry) steamed gently to retain maximum Vitamin C, segmented by hand, and marinated in cold-pressed mustard oil with split yellow mustard, turmeric, and roasted fenugreek. Renowned across generations as an Ayurvedic digestive tonic.",
    "specs": {
      "spice": "Tangy Zest",
      "spiceColor": "var(--accent)",
      "spiceIcon": "fa-shield-heart",
      "shelfLife": "12 Months (Store in cool dry place)",
      "baseOil": "Pure Cold-Pressed Mustard Oil",
      "additives": "Zero Vinegar / Preservatives"
    },
    "image": "assets/images/products/pickle-amla.jpg",
    "thumbnails": [
      {
        "img": "assets/images/products/pickle-amla.jpg",
        "alt": "Gooseberry Amla Pickle Jar"
      },
      {
        "img": "assets/images/blog/detail-amla.jpg",
        "alt": "Steamed Golden Amla Segments"
      },
      {
        "img": "assets/images/about/intro-story.jpg",
        "alt": "Herbal Kitchen Preparation"
      },
      {
        "img": "assets/images/about/history-timeline.jpg",
        "alt": "Traditional Spices Mortar View"
      }
    ],
    "sizes": [
      {
        "value": "250g",
        "price": "₹170",
        "label": "250g Glass Jar (₹170)"
      },
      {
        "value": "500g",
        "price": "₹290",
        "label": "500g Glass Jar (₹290 - Most Popular)",
        "checked": true
      },
      {
        "value": "1kg",
        "price": "₹540",
        "label": "1kg Family Tub (₹540)"
      }
    ],
    "ingredients": [
      {
        "name": "Steamed Wild Amla (Gooseberry)",
        "percent": "68%"
      },
      {
        "name": "Kachi Ghani Mustard Oil",
        "percent": "16%"
      },
      {
        "name": "Natural Rock Salt (Sendha Namak)",
        "percent": "8%"
      },
      {
        "name": "Split Yellow Mustard Seeds & Methi",
        "percent": "5%"
      },
      {
        "name": "Turmeric & Green Chilli Bits",
        "percent": "3%"
      }
    ],
    "nutrition": [
      {
        "name": "Energy",
        "val": "148 kcal"
      },
      {
        "name": "Natural Vitamin C",
        "val": "180 mg"
      },
      {
        "name": "Dietary Fiber",
        "val": "6.5 g"
      },
      {
        "name": "Good Fats",
        "val": "12.4 g"
      },
      {
        "name": "Polyphenols & Bioflavonoids",
        "val": "Very High"
      },
      {
        "name": "Added Synthetic Chemicals",
        "val": "0.0% (None)",
        "highlight": true
      }
    ],
    "related": [
      "lemon-pickle",
      "mixed-veg-pickle",
      "rice-papad"
    ]
  },
  "tomato-pickle": {
    "slug": "tomato-pickle",
    "title": "Heirloom Tomato Pickle (Tomato Thokku)",
    "shortName": "Tomato Pickle (Tomato Thokku)",
    "category": "South Style Thokku",
    "badge": {
      "text": "South Style",
      "class": "badge-primary"
    },
    "tag": "Heritage Thokku Recipe",
    "breadcrumb": "Tomato Pickle (Tomato Thokku)",
    "reviews": "(89 Verified Reviews)",
    "price": "₹265",
    "defaultWeight": "400g Jar",
    "shortDesc": "Slow-reduced farm ripe country tomatoes simmered in gingelly oil with tamarind and curry leaves.",
    "description": "Plump country tomatoes slow-simmered on low flame with aged tamarind pulp, freshly roasted fenugreek powder, and generous unrefined sesame oil until reduced into a glossy, intensely savory thokku. Pairs divinely with idlis, dosas, parathas, and hot steamed rice.",
    "specs": {
      "spice": "Rich Savory",
      "spiceColor": "var(--primary)",
      "spiceIcon": "fa-pepper-hot",
      "shelfLife": "6 Months (Refrigerate after opening)",
      "baseOil": "100% Pure Gingelly (Sesame) Oil",
      "additives": "Zero Preservatives / Artificial Flavor"
    },
    "image": "assets/images/products/pickle-tomato.jpg",
    "thumbnails": [
      {
        "img": "assets/images/products/pickle-tomato.jpg",
        "alt": "Tomato Pickle Thokku Jar"
      },
      {
        "img": "assets/images/home/process-spices.jpg",
        "alt": "Slow-Tempered Tomato Puree"
      },
      {
        "img": "assets/images/home/process-sourcing.jpg",
        "alt": "Farm Fresh Tomatoes View"
      },
      {
        "img": "assets/images/home/process-curing.jpg",
        "alt": "Simmered Reduction in Cast Iron"
      }
    ],
    "sizes": [
      {
        "value": "250g",
        "price": "₹160",
        "label": "250g Glass Jar (₹160)"
      },
      {
        "value": "400g",
        "price": "₹265",
        "label": "400g Glass Jar (₹265 - Most Popular)",
        "checked": true
      },
      {
        "value": "1kg",
        "price": "₹500",
        "label": "1kg Family Tub (₹500)"
      }
    ],
    "ingredients": [
      {
        "name": "Ripe Country Tomatoes",
        "percent": "72%"
      },
      {
        "name": "Pure Sesame (Gingelly) Oil",
        "percent": "15%"
      },
      {
        "name": "Old Tamarind Pulp",
        "percent": "5%"
      },
      {
        "name": "Sendha Namak & Kashmiri Mirch",
        "percent": "5%"
      },
      {
        "name": "Mustard Seeds, Hing & Curry Leaves",
        "percent": "3%"
      }
    ],
    "nutrition": [
      {
        "name": "Energy",
        "val": "180 kcal"
      },
      {
        "name": "Lycopene Content",
        "val": "Very High"
      },
      {
        "name": "Dietary Fiber",
        "val": "3.4 g"
      },
      {
        "name": "Good Fats (Sesame Oil)",
        "val": "14.8 g"
      },
      {
        "name": "Carbohydrates",
        "val": "8.2 g"
      },
      {
        "name": "Added Synthetic Chemicals",
        "val": "0.0% (None)",
        "highlight": true
      }
    ],
    "related": [
      "garlic-pickle",
      "appalam",
      "masala-papad"
    ]
  },
  "chilli-pickle": {
    "slug": "chilli-pickle",
    "title": "Stuffed Red Chilli Pickle (Bharwa Lal Mirch)",
    "shortName": "Stuffed Chilli Pickle (Bharwa Mirch)",
    "category": "Specialty Pickles",
    "badge": {
      "text": "Banarasi",
      "class": "badge-spice"
    },
    "tag": "Banarasi Special",
    "breadcrumb": "Stuffed Chilli Pickle",
    "reviews": "(129 Verified Reviews)",
    "price": "₹310",
    "defaultWeight": "400g Jar",
    "shortDesc": "Plump red Varanasi chillies generously hand-stuffed with amchur, fennel, and cold-pressed oil.",
    "description": "Iconic long Banarasi red chillies sun-dried, carefully cored, and hand-packed with a traditional spice mix of dry mango powder (amchur), roasted fennel (saunf), crushed coriander seeds, kalonji, and warm cold-pressed mustard oil. Sun-cured in glazed earthen jars.",
    "specs": {
      "spice": "Fiery Hot",
      "spiceColor": "var(--spice-red)",
      "spiceIcon": "fa-pepper-hot",
      "shelfLife": "12 Months (Store in cool dry place)",
      "baseOil": "Kachi Ghani Mustard Oil",
      "additives": "Zero Vinegar / Preservatives"
    },
    "image": "assets/images/products/pickle-chilli.jpg",
    "thumbnails": [
      {
        "img": "assets/images/products/pickle-chilli.jpg",
        "alt": "Stuffed Red Chilli Pickle Jar"
      },
      {
        "img": "assets/images/home/home2-pickle-chilli.jpg",
        "alt": "Bharwa Lal Mirch Close-up"
      },
      {
        "img": "assets/images/home/process-drying.jpg",
        "alt": "Terrace Sun-Drying Chillies"
      },
      {
        "img": "assets/images/products/quality-ingredients.jpg",
        "alt": "Fresh Ground Stuffing Masala"
      }
    ],
    "sizes": [
      {
        "value": "250g",
        "price": "₹180",
        "label": "250g Glass Jar (₹180)"
      },
      {
        "value": "400g",
        "price": "₹310",
        "label": "400g Glass Jar (₹310 - Most Popular)",
        "checked": true
      },
      {
        "value": "1kg",
        "price": "₹580",
        "label": "1kg Family Tub (₹580)"
      }
    ],
    "ingredients": [
      {
        "name": "Selected Varanasi Red Chillies",
        "percent": "55%"
      },
      {
        "name": "Hand-Pounded Masala (Amchur, Saunf, Mustard)",
        "percent": "25%"
      },
      {
        "name": "Cold-Pressed Mustard Oil",
        "percent": "12%"
      },
      {
        "name": "Rock Salt, Turmeric & Kalonji",
        "percent": "8%"
      }
    ],
    "nutrition": [
      {
        "name": "Energy",
        "val": "210 kcal"
      },
      {
        "name": "Vitamin A & C",
        "val": "45 mg"
      },
      {
        "name": "Dietary Fiber",
        "val": "5.8 g"
      },
      {
        "name": "Good Fats",
        "val": "15.6 g"
      },
      {
        "name": "Capsaicin Thermogenic Level",
        "val": "High"
      },
      {
        "name": "Added Synthetic Chemicals",
        "val": "0.0% (None)",
        "highlight": true
      }
    ],
    "related": [
      "mango-pickle",
      "pepper-papad",
      "garlic-papad"
    ]
  },
  "rice-papad": {
    "slug": "rice-papad",
    "title": "Traditional Rice Papad (Khichiya Papad)",
    "shortName": "Traditional Rice Papad (Khichiya)",
    "category": "Crispy Papads",
    "badge": {
      "text": "Gluten Free",
      "class": "badge-secondary"
    },
    "tag": "Rajasthani Khichiya",
    "breadcrumb": "Traditional Rice Papad",
    "reviews": "(82 Verified Reviews)",
    "price": "₹160",
    "defaultWeight": "250g Pack (20 pcs)",
    "shortDesc": "Steamed rice flour dough kneaded with crushed cumin and green chillies, hand-flattened and sun-crisped.",
    "description": "Finely ground aged rice flour steam-cooked with green chillies, roasted cumin seeds, and papad khar, then hand-flattened into delicate translucent round wafers and dried under natural morning sunshine. Puffs up miraculously light and crisp on flame roasting or quick frying.",
    "specs": {
      "spice": "Mild Cumin & Green Chilli",
      "spiceColor": "var(--secondary)",
      "spiceIcon": "fa-wheat-awn-circle-exclamation",
      "shelfLife": "12 Months (Airtight container)",
      "baseOil": "Sun-Dried (Zero Fry / Microwaveable)",
      "additives": "Zero Sodium Benzoate / Preservatives"
    },
    "image": "assets/images/products/papad-rice.jpg",
    "thumbnails": [
      {
        "img": "assets/images/products/papad-rice.jpg",
        "alt": "Traditional Rice Papad Stack"
      },
      {
        "img": "assets/images/blog/detail-tawa-papad.jpg",
        "alt": "Flame Roasted Crispy Rice Papad"
      },
      {
        "img": "assets/images/home/collection-papad.jpg",
        "alt": "Bamboo Racks Sun Drying"
      },
      {
        "img": "assets/images/bulk-gifting/wholesale-papad-cases.jpg",
        "alt": "Hygienic Box Packaging"
      }
    ],
    "sizes": [
      {
        "value": "250g",
        "price": "₹160",
        "label": "250g Pack (20 pcs - ₹160)",
        "checked": true
      },
      {
        "value": "500g",
        "price": "₹290",
        "label": "500g Value Pack (45 pcs - ₹290)"
      },
      {
        "value": "1kg",
        "price": "₹540",
        "label": "1kg Family Pack (90 pcs - ₹540)"
      }
    ],
    "ingredients": [
      {
        "name": "Finely Sifted Rice Flour",
        "percent": "88%"
      },
      {
        "name": "Whole Cumin Seeds (Jeera)",
        "percent": "4%"
      },
      {
        "name": "Fresh Green Chilli Extract",
        "percent": "3%"
      },
      {
        "name": "Traditional Papad Khar (Alkaline Salt)",
        "percent": "2.5%"
      },
      {
        "name": "Sendha Namak (Mineral Rock Salt)",
        "percent": "2.5%"
      }
    ],
    "nutrition": [
      {
        "name": "Energy (per 100g dry)",
        "val": "320 kcal"
      },
      {
        "name": "Carbohydrates",
        "val": "72 g"
      },
      {
        "name": "Protein",
        "val": "6.2 g"
      },
      {
        "name": "Fat (Oil-Free)",
        "val": "0.6 g"
      },
      {
        "name": "Gluten Free Certified",
        "val": "100% Yes"
      },
      {
        "name": "Added Synthetic Chemicals",
        "val": "0.0% (None)",
        "highlight": true
      }
    ],
    "related": [
      "mango-pickle",
      "urad-papad",
      "lemon-pickle"
    ]
  },
  "urad-papad": {
    "slug": "urad-papad",
    "title": "Authentic Urad Dal Papad (Hand-Rolled)",
    "shortName": "Authentic Urad Dal Papad",
    "category": "High Protein Papads",
    "badge": {
      "text": "High Protein",
      "class": "badge-primary"
    },
    "tag": "Hand-Pounded Classic",
    "breadcrumb": "Authentic Urad Dal Papad",
    "reviews": "(98 Verified Reviews)",
    "price": "₹170",
    "defaultWeight": "250g Pack (25 pcs)",
    "shortDesc": "Pure split black gram flour pounded with black pepper, asafoetida, and rock salt.",
    "description": "Stone-ground de-husked urad pulse flour kneaded with crushed Tellicherry black peppercorns, roasted hing, and rock salt. Rolled paper-thin by skilled village artisans using wooden belans and sun-crisped to brittle perfection.",
    "specs": {
      "spice": "Peppery & Hing Infused",
      "spiceColor": "var(--primary)",
      "spiceIcon": "fa-pepper-hot",
      "shelfLife": "12 Months (Airtight container)",
      "baseOil": "Hand-Rolled with Pure Sesame Oil",
      "additives": "Zero Soda Bicarbonate / Preservatives"
    },
    "image": "assets/images/products/papad-urad.jpg",
    "thumbnails": [
      {
        "img": "assets/images/products/papad-urad.jpg",
        "alt": "Authentic Urad Dal Papad Stack"
      },
      {
        "img": "assets/images/blog/blog-3.jpg",
        "alt": "Traditional Papad Rolling Angle"
      },
      {
        "img": "assets/images/home/collection-papad.jpg",
        "alt": "Sun-Drying on Clean Bamboo Mats"
      },
      {
        "img": "assets/images/bulk-gifting/wholesale-papad-cases.jpg",
        "alt": "Carton Packaging"
      }
    ],
    "sizes": [
      {
        "value": "250g",
        "price": "₹170",
        "label": "250g Pack (25 pcs - ₹170)",
        "checked": true
      },
      {
        "value": "500g",
        "price": "₹310",
        "label": "500g Value Pack (55 pcs - ₹310)"
      },
      {
        "value": "1kg",
        "price": "₹580",
        "label": "1kg Pantry Pack (110 pcs - ₹580)"
      }
    ],
    "ingredients": [
      {
        "name": "Stone-Ground Urad Dal Flour",
        "percent": "86%"
      },
      {
        "name": "Crushed Black Peppercorns",
        "percent": "5%"
      },
      {
        "name": "Sendha Namak & Papad Khar",
        "percent": "4%"
      },
      {
        "name": "Cold-Pressed Sesame Oil (for rolling)",
        "percent": "3%"
      },
      {
        "name": "Compounded Asafoetida (Hing)",
        "percent": "2%"
      }
    ],
    "nutrition": [
      {
        "name": "Energy",
        "val": "345 kcal"
      },
      {
        "name": "Plant Protein",
        "val": "24.2 g"
      },
      {
        "name": "Dietary Fiber",
        "val": "8.8 g"
      },
      {
        "name": "Carbohydrates",
        "val": "58 g"
      },
      {
        "name": "Total Fat",
        "val": "1.2 g"
      },
      {
        "name": "Added Synthetic Chemicals",
        "val": "0.0% (None)",
        "highlight": true
      }
    ],
    "related": [
      "masala-papad",
      "mango-pickle",
      "garlic-pickle"
    ]
  },
  "masala-papad": {
    "slug": "masala-papad",
    "title": "Special Masala Papad (Amritsari Style)",
    "shortName": "Special Masala Papad",
    "category": "Punjabi Style Papads",
    "badge": {
      "text": "Punjabi Style",
      "class": "badge-spice"
    },
    "tag": "Amritsari Recipe",
    "breadcrumb": "Special Masala Papad",
    "reviews": "(115 Verified Reviews)",
    "price": "₹175",
    "defaultWeight": "250g Pack (25 pcs)",
    "shortDesc": "Crushed black peppercorns, roasted jeera, and red chilli flakes kneaded into crispy dough.",
    "description": "Our boldest, punchiest papad created from protein-rich urad and moong dal flours, heavily kneaded with cracked Tellicherry black peppercorns, whole cumin seeds, coarse coriander seeds, and Kashmiri chilli flakes. The gold standard for restaurant-style roasted masala papad with diced onion and tomatoes.",
    "specs": {
      "spice": "Medium-High Spicy",
      "spiceColor": "var(--spice-red)",
      "spiceIcon": "fa-pepper-hot",
      "shelfLife": "12 Months (Airtight container)",
      "baseOil": "Sun-Dried (No Added Fat)",
      "additives": "Zero Artificial Color / Preservatives"
    },
    "image": "assets/images/products/papad-masala.jpg",
    "thumbnails": [
      {
        "img": "assets/images/products/papad-masala.jpg",
        "alt": "Special Masala Papad Stack"
      },
      {
        "img": "assets/images/products/detail-rel-masala-papad.jpg",
        "alt": "Toasted Cumin & Pepper Texture"
      },
      {
        "img": "assets/images/blog/detail-papad.jpg",
        "alt": "Roasted Masala Papad with Herbs"
      },
      {
        "img": "assets/images/home/home2-papad-masala.jpg",
        "alt": "Crunchy Papad Display"
      }
    ],
    "sizes": [
      {
        "value": "250g",
        "price": "₹175",
        "label": "250g Pack (25 pcs - ₹175)",
        "checked": true
      },
      {
        "value": "500g",
        "price": "₹320",
        "label": "500g Value Pack (55 pcs - ₹320)"
      },
      {
        "value": "1kg",
        "price": "₹590",
        "label": "1kg Bulk Pack (110 pcs - ₹590)"
      }
    ],
    "ingredients": [
      {
        "name": "Urad Dal & Moong Dal Flour",
        "percent": "82%"
      },
      {
        "name": "Toasted Whole Jeera (Cumin)",
        "percent": "6%"
      },
      {
        "name": "Coarse Black Peppercorns & Mirch Flakes",
        "percent": "5%"
      },
      {
        "name": "Mineral Salt & Hing",
        "percent": "4%"
      },
      {
        "name": "Sesame Oil",
        "percent": "3%"
      }
    ],
    "nutrition": [
      {
        "name": "Energy",
        "val": "350 kcal"
      },
      {
        "name": "Plant Protein",
        "val": "23.5 g"
      },
      {
        "name": "Dietary Fiber",
        "val": "7.9 g"
      },
      {
        "name": "Carbohydrates",
        "val": "59 g"
      },
      {
        "name": "Natural Iron",
        "val": "4.8 mg"
      },
      {
        "name": "Added Synthetic Chemicals",
        "val": "0.0% (None)",
        "highlight": true
      }
    ],
    "related": [
      "mango-pickle",
      "garlic-pickle",
      "pepper-papad"
    ]
  },
  "pepper-papad": {
    "slug": "pepper-papad",
    "title": "Black Pepper Papad (Tellicherry Kali Mirch)",
    "shortName": "Black Pepper Papad (Kali Mirch)",
    "category": "Tellicherry Pepper Papads",
    "badge": {
      "text": "Malabar Pepper",
      "class": "badge-accent"
    },
    "tag": "Pure Spice Crunch",
    "breadcrumb": "Black Pepper Papad",
    "reviews": "(78 Verified Reviews)",
    "price": "₹185",
    "defaultWeight": "250g Pack (25 pcs)",
    "shortDesc": "Heavily crusted with crushed Tellicherry black peppercorns for a sharp digestive crunch.",
    "description": "Crafted specifically for pepper connoisseurs. Native Malabar black peppercorns freshly cracked and generously worked into stone-milled pulse dough. Roasts on open fire into a fragrant, snappy papad that cleanses the palate and aids digestive health.",
    "specs": {
      "spice": "Sharp Peppery Heat",
      "spiceColor": "var(--spice-red)",
      "spiceIcon": "fa-pepper-hot",
      "shelfLife": "12 Months (Airtight container)",
      "baseOil": "Sun-Dried (No Added Preservatives)",
      "additives": "Zero Preservatives / Artificial Flavor"
    },
    "image": "assets/images/products/papad-pepper.jpg",
    "thumbnails": [
      {
        "img": "assets/images/products/papad-pepper.jpg",
        "alt": "Black Pepper Papad Stack"
      },
      {
        "img": "assets/images/blog/detail-tawa-papad.jpg",
        "alt": "Crackling Peppery Surface"
      },
      {
        "img": "assets/images/home/collection-papad.jpg",
        "alt": "Sun-Cured Batch"
      },
      {
        "img": "assets/images/products/packaging-sizes.jpg",
        "alt": "Airtight Sealed Packaging"
      }
    ],
    "sizes": [
      {
        "value": "250g",
        "price": "₹185",
        "label": "250g Pack (25 pcs - ₹185)",
        "checked": true
      },
      {
        "value": "500g",
        "price": "₹340",
        "label": "500g Value Pack (55 pcs - ₹340)"
      },
      {
        "value": "1kg",
        "price": "₹620",
        "label": "1kg Bulk Pack (110 pcs - ₹620)"
      }
    ],
    "ingredients": [
      {
        "name": "De-Husked Urad Pulse Flour",
        "percent": "80%"
      },
      {
        "name": "Cracked Malabar Black Peppercorns",
        "percent": "10%"
      },
      {
        "name": "Sendha Namak & Papad Khar",
        "percent": "5%"
      },
      {
        "name": "Sesame Oil & Hing",
        "percent": "5%"
      }
    ],
    "nutrition": [
      {
        "name": "Energy",
        "val": "340 kcal"
      },
      {
        "name": "Active Piperine Compound",
        "val": "High Natural"
      },
      {
        "name": "Plant Protein",
        "val": "22.8 g"
      },
      {
        "name": "Dietary Fiber",
        "val": "9.2 g"
      },
      {
        "name": "Carbohydrates",
        "val": "57 g"
      },
      {
        "name": "Added Synthetic Chemicals",
        "val": "0.0% (None)",
        "highlight": true
      }
    ],
    "related": [
      "masala-papad",
      "lemon-pickle",
      "appalam"
    ]
  },
  "garlic-papad": {
    "slug": "garlic-papad",
    "title": "Garlic Papad (Aromatic Lahsun Papad)",
    "shortName": "Garlic Papad (Lahsun Papad)",
    "category": "Roasted Garlic Papads",
    "badge": {
      "text": "Roasted Garlic",
      "class": "badge-secondary"
    },
    "tag": "Aromatic Delicacy",
    "breadcrumb": "Garlic Papad",
    "reviews": "(86 Verified Reviews)",
    "price": "₹180",
    "defaultWeight": "250g Pack (25 pcs)",
    "shortDesc": "Infused with natural roasted garlic paste and hing, delivering appetizing aroma upon roasting.",
    "description": "Fresh country garlic bulbs pounded into an unctuous paste and folded directly into spiced urad and moong dough before rolling. When placed on flame, it fills the room with an irresistible aroma that makes daily meals an anticipated celebration.",
    "specs": {
      "spice": "Aromatic Garlic & Cumin",
      "spiceColor": "var(--secondary)",
      "spiceIcon": "fa-clove",
      "shelfLife": "12 Months (Airtight container)",
      "baseOil": "Sun-Dried (No Added Fat)",
      "additives": "Zero Artificial Preservatives"
    },
    "image": "assets/images/products/papad-garlic.jpg",
    "thumbnails": [
      {
        "img": "assets/images/products/papad-garlic.jpg",
        "alt": "Garlic Papad Stack"
      },
      {
        "img": "assets/images/blog/detail-papad.jpg",
        "alt": "Crisped Garlic Papad Surface"
      },
      {
        "img": "assets/images/home/collection-papad.jpg",
        "alt": "Solar Curing Racks"
      },
      {
        "img": "assets/images/bulk-gifting/wholesale-papad-cases.jpg",
        "alt": "Retail Ready Packs"
      }
    ],
    "sizes": [
      {
        "value": "250g",
        "price": "₹180",
        "label": "250g Pack (25 pcs - ₹180)",
        "checked": true
      },
      {
        "value": "500g",
        "price": "₹330",
        "label": "500g Value Pack (55 pcs - ₹330)"
      },
      {
        "value": "1kg",
        "price": "₹610",
        "label": "1kg Bulk Pack (110 pcs - ₹610)"
      }
    ],
    "ingredients": [
      {
        "name": "Stone-Milled Urad & Moong Flour",
        "percent": "81%"
      },
      {
        "name": "Fresh Ground Native Garlic Paste",
        "percent": "9%"
      },
      {
        "name": "Rock Salt, Cumin & Asafoetida",
        "percent": "6%"
      },
      {
        "name": "Gingelly Sesame Oil",
        "percent": "4%"
      }
    ],
    "nutrition": [
      {
        "name": "Energy",
        "val": "342 kcal"
      },
      {
        "name": "Plant Protein",
        "val": "23.0 g"
      },
      {
        "name": "Dietary Fiber",
        "val": "8.0 g"
      },
      {
        "name": "Carbohydrates",
        "val": "58.5 g"
      },
      {
        "name": "Total Fat",
        "val": "1.4 g"
      },
      {
        "name": "Added Synthetic Chemicals",
        "val": "0.0% (None)",
        "highlight": true
      }
    ],
    "related": [
      "garlic-pickle",
      "masala-papad",
      "tomato-pickle"
    ]
  },
  "appalam": {
    "slug": "appalam",
    "title": "Homemade Golden Appalam (South Indian Feasts)",
    "shortName": "Homemade Golden Appalam",
    "category": "South Indian Feasts",
    "badge": {
      "text": "South Indian",
      "class": "badge-primary"
    },
    "tag": "Traditional Feast Recipe",
    "breadcrumb": "Homemade Golden Appalam",
    "reviews": "(146 Verified Reviews)",
    "price": "₹150",
    "defaultWeight": "200g Pack (30 pcs)",
    "shortDesc": "Traditional South Indian wedding feast appalam that puffs light and crisp when deep-fried.",
    "description": "The crown jewel of traditional South Indian banana-leaf wedding feasts. Prepared from triple-sifted urad dal flour, pure sesame oil, and alkaline appala salt, kneaded vigorously until dough turns satin-smooth. Fried in seconds into ultra-light, feather-weight golden crisps.",
    "specs": {
      "spice": "Delicate & Mild",
      "spiceColor": "var(--primary)",
      "spiceIcon": "fa-sun",
      "shelfLife": "10 Months (Airtight container)",
      "baseOil": "Kneaded with Pure Sesame Oil",
      "additives": "Zero Artificial Color / Preservatives"
    },
    "image": "assets/images/products/papad-appalam.jpg",
    "thumbnails": [
      {
        "img": "assets/images/products/papad-appalam.jpg",
        "alt": "Golden Homemade Appalam Stack"
      },
      {
        "img": "assets/images/home/home2-papad-appalam.jpg",
        "alt": "Puffed Feather-light Appalam"
      },
      {
        "img": "assets/images/blog/blog-3.jpg",
        "alt": "Artisanal Rolling Process"
      },
      {
        "img": "assets/images/products/featured-collection.jpg",
        "alt": "Traditional Banquet Spread"
      }
    ],
    "sizes": [
      {
        "value": "200g",
        "price": "₹150",
        "label": "200g Pack (30 pcs - ₹150)",
        "checked": true
      },
      {
        "value": "400g",
        "price": "₹280",
        "label": "400g Value Pack (65 pcs - ₹280)"
      },
      {
        "value": "1kg",
        "price": "₹520",
        "label": "1kg Feast Box (160 pcs - ₹520)"
      }
    ],
    "ingredients": [
      {
        "name": "De-Husked Urad Pulse Flour",
        "percent": "87%"
      },
      {
        "name": "Pure Sesame Oil",
        "percent": "5%"
      },
      {
        "name": "Traditional Appala Khar & Salt",
        "percent": "5%"
      },
      {
        "name": "Filtered Well Water",
        "percent": "3%"
      }
    ],
    "nutrition": [
      {
        "name": "Energy",
        "val": "335 kcal"
      },
      {
        "name": "Protein",
        "val": "21.5 g"
      },
      {
        "name": "Carbohydrates",
        "val": "60 g"
      },
      {
        "name": "Fat",
        "val": "1.0 g"
      },
      {
        "name": "Sodium",
        "val": "1,180 mg"
      },
      {
        "name": "Added Synthetic Chemicals",
        "val": "0.0% (None)",
        "highlight": true
      }
    ],
    "related": [
      "tomato-pickle",
      "mango-pickle",
      "spice-mix"
    ]
  },
  "spice-mix": {
    "slug": "spice-mix",
    "title": "Signature Pickle Masala Blend (Stone-Ground)",
    "shortName": "Signature Pickle Masala Blend",
    "category": "Hand-Roasted Spices",
    "badge": {
      "text": "Hand Roasted",
      "class": "badge-accent"
    },
    "tag": "Stone-Ground Masala",
    "breadcrumb": "Signature Pickle Masala Blend",
    "reviews": "(63 Verified Reviews)",
    "price": "₹145",
    "defaultWeight": "200g Pouch",
    "shortDesc": "Stone-pounded blend of split mustard, roasted fenugreek, fennel, kalonji, and Guntur chillies.",
    "description": "Our ancestral kitchen's guarded master masala formulation. Whole split yellow and black mustard seeds gently toasted with fenugreek seeds, fragrant saunf (fennel), nigella seeds (kalonji), dried mango powder, and Guntur red chillies. Use for quick home pickles, curries, or achari stir-fries.",
    "specs": {
      "spice": "Aromatic Piquant",
      "spiceColor": "var(--accent)",
      "spiceIcon": "fa-mortar-pestle",
      "shelfLife": "12 Months (Airtight dry glass jar)",
      "baseOil": "Slow Dry-Roasted (Zero Oil Added)",
      "additives": "Zero Anti-Caking Agents / Preservatives"
    },
    "image": "assets/images/products/spicemix-sambar.jpg",
    "thumbnails": [
      {
        "img": "assets/images/products/spicemix-sambar.jpg",
        "alt": "Signature Pickle Masala Spice Blend"
      },
      {
        "img": "assets/images/products/quality-ingredients.jpg",
        "alt": "Toasted Whole Spices Blend"
      },
      {
        "img": "assets/images/home/process-spices.jpg",
        "alt": "Stone Mortar Grinding"
      },
      {
        "img": "assets/images/home/process-sourcing.jpg",
        "alt": "Whole Mustard and Spices"
      }
    ],
    "sizes": [
      {
        "value": "200g",
        "price": "₹145",
        "label": "200g Pouch (₹145)",
        "checked": true
      },
      {
        "value": "400g",
        "price": "₹270",
        "label": "400g Pouch (₹270)"
      },
      {
        "value": "1kg",
        "price": "₹590",
        "label": "1kg Bulk Canister (₹590)"
      }
    ],
    "ingredients": [
      {
        "name": "Split Yellow & Black Rai (Mustard)",
        "percent": "35%"
      },
      {
        "name": "Roasted Methi (Fenugreek Seeds)",
        "percent": "20%"
      },
      {
        "name": "Roasted Saunf (Fennel Seeds)",
        "percent": "18%"
      },
      {
        "name": "Guntur Sun-Dried Red Chilli",
        "percent": "12%"
      },
      {
        "name": "Kalonji (Nigella) & Amchur",
        "percent": "10%"
      },
      {
        "name": "Pure Compounded Hing",
        "percent": "5%"
      }
    ],
    "nutrition": [
      {
        "name": "Energy",
        "val": "280 kcal"
      },
      {
        "name": "Dietary Fiber",
        "val": "14.5 g"
      },
      {
        "name": "Natural Essential Oils",
        "val": "High Active"
      },
      {
        "name": "Protein",
        "val": "12.0 g"
      },
      {
        "name": "Carbohydrates",
        "val": "38 g"
      },
      {
        "name": "Added Synthetic Chemicals",
        "val": "0.0% (None)",
        "highlight": true
      }
    ],
    "related": [
      "mango-pickle",
      "appalam",
      "garlic-pickle"
    ]
  }
};

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* 1. Live Product Search & Category Filtering on Catalog Page */
  var searchInput = document.getElementById('productSearchInput');
  var categoryTabs = document.querySelectorAll('.category-tabs .tab-btn');
  var productCards = document.querySelectorAll('.product-grid .product-card');
  var emptyNotice = document.getElementById('productEmptyNotice');

  var currentCategory = 'all';
  var currentSearchQuery = '';

  function filterProducts() {
    var visibleCount = 0;

    productCards.forEach(function (card) {
      // Don't filter cards inside related products section
      if (card.closest('#relatedProducts')) return;

      var title = (card.querySelector('.product-title') ? card.querySelector('.product-title').textContent : '').toLowerCase();
      var desc = (card.querySelector('.product-desc') ? card.querySelector('.product-desc').textContent : '').toLowerCase();
      var cardCategory = (card.getAttribute('data-category') || '').toLowerCase();

      var matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);
      var matchesSearch = (!currentSearchQuery || title.includes(currentSearchQuery) || desc.includes(currentSearchQuery));

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (emptyNotice) {
      emptyNotice.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      filterProducts();
    });
  }

  if (categoryTabs.length > 0) {
    function applyCategory(catName, shouldScroll) {
      var targetCat = (catName || 'all').toLowerCase();
      currentCategory = targetCat;
      var matchedTab = false;
      categoryTabs.forEach(function (tab) {
        if ((tab.getAttribute('data-filter') || '').toLowerCase() === targetCat) {
          tab.classList.add('active');
          matchedTab = true;
        } else {
          tab.classList.remove('active');
        }
      });
      if (!matchedTab) {
        currentCategory = 'all';
        categoryTabs.forEach(function (tab) {
          if ((tab.getAttribute('data-filter') || '').toLowerCase() === 'all') {
            tab.classList.add('active');
          }
        });
      }
      filterProducts();

      if (shouldScroll) {
        var catalogSec = document.getElementById('productCatalog');
        if (catalogSec) {
          catalogSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }

    // Check URL parameters on load
    var urlParams = new URLSearchParams(window.location.search);
    var catParam = urlParams.get('cat');
    if (catParam) {
      applyCategory(catParam, window.location.hash === '#productCatalog' || true);
    }

    // Tab click handlers
    categoryTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var filterVal = tab.getAttribute('data-filter') || 'all';
        applyCategory(filterVal, false);
      });
    });

    // Intercept clicks on footer & header category links pointing to products.html while already on products.html
    document.querySelectorAll('a[href*="products.html"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = link.getAttribute('href') || '';
        if (href.includes('cat=')) {
          var match = href.match(/cat=([a-zA-Z0-9_-]+)/);
          if (match && match[1]) {
            e.preventDefault();
            applyCategory(match[1], true);
            if (window.history && window.history.pushState) {
              window.history.pushState(null, '', 'products.html?cat=' + match[1] + '#productCatalog');
            }
          }
        } else if (href === 'products.html' || href === 'products.html#productCatalog' || link.classList.contains('footer-heading-link')) {
          e.preventDefault();
          applyCategory('all', true);
          if (window.history && window.history.pushState) {
            window.history.pushState(null, '', 'products.html#productCatalog');
          }
        }
      });
    });
  }

  /* 2. Quick Product Enquiry Modal Autofill */
  function bindEnquiryButtons() {
    var enquireButtons = document.querySelectorAll('.btn-enquire-product');
    enquireButtons.forEach(function (btn) {
      // Avoid duplicate bindings
      if (btn.dataset.boundEnquiry === 'true') return;
      btn.dataset.boundEnquiry = 'true';

      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var productName = btn.getAttribute('data-product-name') || 'Signature Homemade Pickle';
        var productPrice = btn.getAttribute('data-product-price') || '₹280';

        var modal = document.getElementById('productEnquiryModal');
        if (modal) {
          var modalProductName = modal.querySelector('#modalProductName');
          var inputProduct = modal.querySelector('#enquiryProductField');
          if (modalProductName) modalProductName.textContent = productName;
          if (inputProduct) inputProduct.value = productName;
          if (typeof window.openModal === 'function') {
            window.openModal('productEnquiryModal');
          } else {
            modal.classList.add('active');
          }
        }
      });
    });
  }
  bindEnquiryButtons();

  /* 3. Product Details Page: Dynamic Content Renderer */
  var mainImage = document.getElementById('mainProductImage');
  var displayPrice = document.getElementById('productDynamicPrice');

  if (mainImage && displayPrice) {
    renderProductDetailsPage();

    // Smooth scroll for footer link if already on product-details.html
    document.querySelectorAll('a[href*="product-details.html"]').forEach(function (link) {
      var href = link.getAttribute('href') || '';
      if (href.includes('#productOverview')) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          var overview = document.getElementById('productOverview');
          if (overview) {
            overview.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      }
    });
  }

  function renderProductDetailsPage() {
    var params = new URLSearchParams(window.location.search);
    var slug = params.get('product') || 'mango-pickle';
    var product = productsData[slug] || productsData['mango-pickle'];

    // 1. Page Title & Meta
    document.title = product.title + " | Dadi's Swad Homemade Pickles & Papads";

    // 2. Hero Section & Breadcrumbs
    var heroTag = document.getElementById('productDetailTag');
    if (heroTag) heroTag.innerHTML = '<i class="fa-solid fa-jar"></i> ' + product.tag;

    var heroTitle = document.getElementById('productDetailHeroTitle');
    if (heroTitle) heroTitle.textContent = product.title;

    var breadcrumb = document.getElementById('productDetailBreadcrumb');
    if (breadcrumb) breadcrumb.textContent = product.breadcrumb;

    // 3. Main Media & Badge
    mainImage.src = product.image;
    mainImage.alt = product.title;

    var mainBadge = document.getElementById('productMainBadge');
    if (mainBadge) {
      mainBadge.className = 'badge ' + (product.badge.class || 'badge-primary');
      mainBadge.textContent = product.badge.text;
    }

    // 4. Thumbnails Grid
    var thumbContainer = document.getElementById('productThumbGrid');
    if (thumbContainer && product.thumbnails && product.thumbnails.length > 0) {
      thumbContainer.innerHTML = '';
      product.thumbnails.forEach(function (thumb, index) {
        var thumbDiv = document.createElement('div');
        thumbDiv.className = 'gallery-thumb' + (index === 0 ? ' active' : '');
        thumbDiv.setAttribute('data-full-img', thumb.img);
        thumbDiv.style.cssText = 'height: 90px; border-radius: var(--radius-md); overflow: hidden; border: 2px solid ' + (index === 0 ? 'var(--primary)' : 'transparent') + '; cursor: pointer; transition: all 0.2s ease;';

        var img = document.createElement('img');
        img.src = thumb.img;
        img.alt = thumb.alt || (product.title + ' View ' + (index + 1));
        img.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';

        thumbDiv.appendChild(img);
        thumbDiv.addEventListener('click', function () {
          thumbContainer.querySelectorAll('.gallery-thumb').forEach(function (t) {
            t.classList.remove('active');
            t.style.borderColor = 'transparent';
          });
          thumbDiv.classList.add('active');
          thumbDiv.style.borderColor = 'var(--primary)';
          mainImage.src = thumb.img;
          mainImage.alt = thumb.alt || product.title;
        });

        thumbContainer.appendChild(thumbDiv);
      });
    }

    // 5. Title, Reviews & Dynamic Price
    var reviewSpan = document.getElementById('productReviewCount');
    if (reviewSpan) reviewSpan.textContent = product.reviews;

    var headTitle = document.getElementById('productHeadingTitle');
    if (headTitle) headTitle.textContent = product.title;

    var longDesc = document.getElementById('productLongDesc');
    if (longDesc) longDesc.textContent = product.description;

    displayPrice.innerHTML = product.price + ' <span class="demo-tag">(Demo Price)</span>';

    // 6. Specifications Matrix
    var specSpice = document.getElementById('specSpiceLevel');
    if (specSpice) {
      specSpice.style.color = product.specs.spiceColor || 'var(--spice-red)';
      specSpice.innerHTML = '<i class="fa-solid ' + (product.specs.spiceIcon || 'fa-pepper-hot') + '"></i> ' + product.specs.spice;
    }

    var specShelf = document.getElementById('specShelfLife');
    if (specShelf) {
      specShelf.innerHTML = '<i class="fa-regular fa-calendar-check"></i> ' + product.specs.shelfLife;
    }

    var specOil = document.getElementById('specBaseOil');
    if (specOil) {
      specOil.innerHTML = '<i class="fa-solid fa-bottle-droplet"></i> ' + product.specs.baseOil;
    }

    var specAdd = document.getElementById('specAdditives');
    if (specAdd) {
      specAdd.innerHTML = '<i class="fa-solid fa-shield-heart"></i> ' + product.specs.additives;
    }

    // 7. Size & Packaging Options
    var sizeContainer = document.getElementById('productSizeOptions');
    var pdPackSelect = document.getElementById('pdPack');

    if (sizeContainer && product.sizes && product.sizes.length > 0) {
      sizeContainer.innerHTML = '';
      if (pdPackSelect) pdPackSelect.innerHTML = '';

      product.sizes.forEach(function (sizeOpt, sIdx) {
        var isDefault = sizeOpt.checked || sIdx === 0;

        // Populate dropdown in bottom form
        if (pdPackSelect) {
          var opt = document.createElement('option');
          opt.value = sizeOpt.label;
          opt.textContent = sizeOpt.label;
          if (isDefault) opt.selected = true;
          pdPackSelect.appendChild(opt);
        }

        // Build radio selector
        var label = document.createElement('label');
        label.style.cursor = 'pointer';

        var radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'packageSize';
        radio.value = sizeOpt.value;
        radio.setAttribute('data-price', sizeOpt.price);
        radio.setAttribute('data-label', sizeOpt.label);
        radio.style.display = 'none';
        if (isDefault) radio.checked = true;

        var span = document.createElement('span');
        span.className = 'btn ' + (isDefault ? 'btn-primary' : 'btn-outline') + ' btn-sm';
        span.style.borderRadius = 'var(--radius-md)';
        span.textContent = sizeOpt.label;

        radio.addEventListener('change', function () {
          // Update button styling
          sizeContainer.querySelectorAll('span').forEach(function (btnSpan) {
            btnSpan.className = 'btn btn-outline btn-sm';
            btnSpan.style.borderRadius = 'var(--radius-md)';
          });
          span.className = 'btn btn-primary btn-sm';
          span.style.borderRadius = 'var(--radius-md)';

          // Update price display
          displayPrice.innerHTML = sizeOpt.price + ' <span class="demo-tag">(Demo Price)</span>';

          // Sync dropdown
          if (pdPackSelect) {
            pdPackSelect.value = sizeOpt.label;
          }
        });

        label.appendChild(radio);
        label.appendChild(span);
        sizeContainer.appendChild(label);
      });
    }

    // 8. Raw Ingredients List
    var ingList = document.getElementById('productIngredientsList');
    if (ingList && product.ingredients && product.ingredients.length > 0) {
      ingList.innerHTML = '';
      product.ingredients.forEach(function (item, idx) {
        var li = document.createElement('li');
        li.style.cssText = 'display: flex; justify-content: space-between; ' +
          (idx < product.ingredients.length - 1 ? 'border-bottom: 1px dashed var(--border-color); padding-bottom: 0.5rem;' : '') +
          ' gap: 1rem;';
        li.innerHTML = '<strong>' + item.name + '</strong> <span>' + item.percent + '</span>';
        ingList.appendChild(li);
      });
    }

    // 9. Nutritional Values List
    var nutList = document.getElementById('productNutritionList');
    if (nutList && product.nutrition && product.nutrition.length > 0) {
      nutList.innerHTML = '';
      product.nutrition.forEach(function (item, idx) {
        var li = document.createElement('li');
        li.style.cssText = 'display: flex; justify-content: space-between; ' +
          (idx < product.nutrition.length - 1 ? 'border-bottom: 1px dashed var(--border-color); padding-bottom: 0.5rem;' : '') +
          ' gap: 1rem;';
        if (item.highlight) {
          li.innerHTML = '<span>' + item.name + '</span> <strong style="color: var(--accent);">' + item.val + '</strong>';
        } else {
          li.innerHTML = '<span>' + item.name + '</span> <strong>' + item.val + '</strong>';
        }
        nutList.appendChild(li);
      });
    }

    // 10. Related Products Section
    var relContainer = document.getElementById('relatedProductsGrid');
    if (relContainer && product.related && product.related.length > 0) {
      relContainer.innerHTML = '';
      product.related.forEach(function (relSlug) {
        var rel = productsData[relSlug];
        if (!rel) return;

        var card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML =
          '<div class="product-media">' +
            '<span class="product-badge-overlay"><span class="badge ' + (rel.badge.class || 'badge-primary') + '">' + rel.badge.text + '</span></span>' +
            '<a href="product-details.html?product=' + rel.slug + '" style="display: block; width: 100%; height: 100%;">' +
              '<img src="' + rel.image + '" alt="' + rel.title + '" loading="lazy">' +
            '</a>' +
          '</div>' +
          '<div class="product-content">' +
            '<span class="product-category">' + rel.category + '</span>' +
            '<h3 class="product-title"><a href="product-details.html?product=' + rel.slug + '">' + rel.shortName + '</a></h3>' +
            '<p class="product-desc">' + rel.shortDesc + '</p>' +
            '<div class="product-meta">' +
              '<span class="product-weight"><i class="fa-solid fa-weight-hanging"></i> ' + rel.defaultWeight + '</span>' +
              '<span class="product-price">' + rel.price + ' <span class="demo-tag">(Demo)</span></span>' +
            '</div>' +
            '<div class="product-actions">' +
              '<a href="product-details.html?product=' + rel.slug + '" class="btn btn-outline btn-sm">View Details</a>' +
              '<button type="button" class="btn btn-primary btn-sm btn-enquire-product" data-product-name="' + rel.title + '" data-product-price="' + rel.price + '">Enquire</button>' +
            '</div>' +
          '</div>';

        relContainer.appendChild(card);
      });
      bindEnquiryButtons();
    }

    // 11. Bottom Quick Order Form Area
    var enqTitle = document.getElementById('enquirySectionTitle');
    if (enqTitle) enqTitle.textContent = 'Enquire for ' + product.shortName;

    var btnSubmitEnq = document.getElementById('btnSubmitEnquiry');
    if (btnSubmitEnq) {
      btnSubmitEnq.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit ' + product.shortName + ' Order Enquiry';
    }

    // 12. Modal Input Prefill
    var modalInput = document.getElementById('enquiryProductField');
    if (modalInput) modalInput.value = product.title;

    var modalTitle = document.getElementById('modalProductName');
    if (modalTitle) modalTitle.textContent = product.title;
  }
});
