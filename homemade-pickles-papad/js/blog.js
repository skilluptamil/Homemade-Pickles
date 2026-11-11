/**
 * Dadi's Swad - Homemade Pickles & Papads
 * Blog.js - Live Search, Category Filters, Dynamic Article Rendering, Social Share & Newsletter
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* 1. Blog Search & Category Filter (blog.html) */
  var blogSearchInput = document.getElementById('blogSearchInput');
  var blogCategoryButtons = document.querySelectorAll('.blog-cat-btn');
  var blogCards = document.querySelectorAll('#blogGridList .blog-card');
  var blogEmptyNotice = document.getElementById('blogEmptyNotice');

  var currentBlogCategory = 'all';
  var currentBlogQuery = '';

  function filterBlogPosts() {
    if (blogCards.length === 0) return;
    var visibleCount = 0;

    blogCards.forEach(function (card) {
      var title = (card.querySelector('.blog-title') ? card.querySelector('.blog-title').textContent : '').toLowerCase();
      var desc = (card.querySelector('.blog-desc') ? card.querySelector('.blog-desc').textContent : '').toLowerCase();
      var category = (card.getAttribute('data-category') || '').toLowerCase();

      var matchesCat = (currentBlogCategory === 'all' || category === currentBlogCategory);
      var matchesQuery = (!currentBlogQuery || title.indexOf(currentBlogQuery) !== -1 || desc.indexOf(currentBlogQuery) !== -1);

      if (matchesCat && matchesQuery) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (blogEmptyNotice) {
      blogEmptyNotice.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  var urlParams = new URLSearchParams(window.location.search);

  if (blogSearchInput) {
    var qParam = urlParams.get('q');
    if (qParam) {
      blogSearchInput.value = qParam;
      currentBlogQuery = qParam.trim().toLowerCase();
    }

    blogSearchInput.addEventListener('input', function (e) {
      currentBlogQuery = e.target.value.trim().toLowerCase();
      filterBlogPosts();
    });
  }

  if (blogCategoryButtons.length > 0) {
    var catParam = urlParams.get('cat');
    if (catParam) {
      blogCategoryButtons.forEach(function (btn) {
        if ((btn.getAttribute('data-filter') || '').toLowerCase() === catParam.toLowerCase()) {
          blogCategoryButtons.forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          currentBlogCategory = catParam.toLowerCase();
        }
      });
    }

    if (urlParams.get('q') || catParam) {
      filterBlogPosts();
    }

    blogCategoryButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        blogCategoryButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        currentBlogCategory = (btn.getAttribute('data-filter') || 'all').toLowerCase();
        filterBlogPosts();
      });
    });
  }

  /* 2. Blog Articles Dataset (Same-Page Blog Reader + Blog Details Page) */
  var blogArticles = {
    'sun-cured-mango': {
      tag: '<i class="fa-solid fa-sun"></i> Editor\'s Choice • Solar Curing',
      title: 'The Secret Art of Traditional Sun-Cured Raw Mango Pickle',
      crumb: 'Sun-Cured Raw Mango Pickle',
      author: 'Parvati Devi',
      roleDate: 'Head Kitchen Custodian • May 14, 2026 • 6 min read',
      image: 'assets/images/blog/blog-details-main.jpg',
      imageAlt: 'Traditional cured raw mango pickle in ceramic martaban',
      categoryLabel: 'Editor\'s Choice',
      shortDesc: 'Why electric dehydrators can never replace 21 days of slow summer rooftop sunlight in ceramic barnis.',
      tags: ['#SunCuredMango', '#CeramicBarni', '#HeritageAchar'],
      promoTitle: 'Order Sun-Cured Avakaya',
      promoDesc: '21-day rooftop sun-cured green mangoes steeped in Kachi Ghani mustard oil.',
      promoBtn: 'Order 500g Jar (₹280)',
      promoHref: 'product-details.html',
      bodyHtml:
        '<p>Long before commercial dehydrators or rapid curing chambers existed, north Indian courtyards awaited the peak May afternoon heat. Fresh Ramkela mangoes harvested before the monsoon are washed in running well water, wiped with bleached muslin cloths, and rested upside down over woven charpois for hours until every trace of sap evaporates.</p>' +
        '<h3>Why Ceramic Barnis Beat Plastic & Metal Vats</h3>' +
        '<p>Glazed porcelain martabans absorb afternoon warmth slowly without overheating delicate mango skin. During breezy nights, dense ceramic walls insulate the spice emulsion, coaxing natural tart citric juices out of the fruit to mingle gently with crushed fenugreek and yellow mustard seeds.</p>' +
        '<blockquote>"Twenty-one sunrises on an open rooftop transform sharp raw sourness into rounded, velvet complexity no machine can imitate in twenty hours."</blockquote>' +
        '<h3>Wild Lacto-Fermentation Without Starter Cultures</h3>' +
        '<p>Covered solely with airy starched mull-cloth tied securely around the jar lip, solar UV sanitizes the rim while friendly lactic bacteria cultivate deeper tang inside. By week three, oil rises naturally as a golden mirror seal protecting freshness for two full years without a speck of preservative.</p>'
    },
    'mango-pickle': {
      tag: '<i class="fa-solid fa-pepper-hot"></i> Traditional Recipe Masterclass',
      title: 'Traditional Mango Pickle Preparation: The 40-Day Sun Method',
      crumb: '40-Day Mango Pickle Method',
      author: 'Parvati Devi',
      roleDate: 'Head Kitchen Custodian • May 14, 2026 • 6 min read',
      image: 'assets/images/blog/blog-details-step2.jpg',
      imageAlt: 'Hand-cut green mangoes tossed with roasted spices for 40-day curing',
      categoryLabel: 'Recipes',
      shortDesc: 'Step-by-step ancestral guide to washing, cutting, salting, and curing green Ramkela mangoes in pure cold-pressed oil.',
      tags: ['#MangoPickle', '#40DayMethod', '#ColdPressedOil'],
      promoTitle: 'Taste This Heritage Mango Pickle',
      promoDesc: 'Handcrafted using the exact 40-day sun cured method described in this article.',
      promoBtn: 'Order 500g Jar (₹280)',
      promoHref: 'product-details.html',
      bodyHtml:
        '<p>When summer arrives across northern and central India, the fragrance of pungent cold-pressed mustard oil, cracked fenugreek, and tart green mangoes fills ancestral courtyards. For over three millennia, households mastered patient, unhurried rooftop curing using strict washing, salting, and spice-roasting ratios.</p>' +
        '<h3>Step 1: Washing, Cutting & Rock Salt Dehydration</h3>' +
        '<p>Every raw Ramkela mango is washed clean, wiped Bone-dry, and sliced with a sharp iron sarota. Tossing cut pieces with unrefined mineral rock salt (Sendha Namak) and haldi over sunlit muslin cloths strips excess free water gradually without cooking the cellular crunch.</p>' +
        '<div class="mini-grid-2" style="margin: 1.75rem 0;">' +
          '<div><div class="blog-step-media"><img src="assets/images/blog/blog-details-step1.jpg" alt="Sun-drying salted raw green mango slices"></div><span class="blog-step-caption">Day 1: Sun-drying hand-cut green mango quarters after gentle rock salt brining.</span></div>' +
          '<div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; display: flex; flex-direction: column; justify-content: center;">' +
            '<h4 style="margin-bottom: 0.5rem;">Key Ancestral Spice Ratio</h4>' +
            '<p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0;">For 5kg firm mangoes: 500g Sendha Namak, 200g split rai, 150g coarsely crushed saunf, 100g roasted methi dana, 80g turmeric, and pure smoked Kachi Ghani mustard oil.</p>' +
          '</div>' +
        '</div>' +
        '<h3>Step 2: Folding Stone-Ground Spices & Kachi Ghani Oil</h3>' +
        '<p>Coarse-roasted spices cling evenly to dried mango fibers while cooled mustard oil locks out air spores completely. Every alternate morning for 40 days, the wooden ladle turns the batch from bottom to top under bright sun until aroma peaks.</p>' +
        '<blockquote>"Never skip complete cooling of smoked mustard oil before folding into the spices—hot oil scorches delicate aroma and turns fenugreek bitter."</blockquote>'
    },
    'lemon-pickle': {
      tag: '<i class="fa-solid fa-sun"></i> Zero-Oil Ayurvedic Fermentation',
      title: 'Homemade Lemon Pickle: The Zero-Oil Sun Fermentation Wonder',
      crumb: 'Zero-Oil Lemon Pickle',
      author: 'Parvati Devi',
      roleDate: 'Head Kitchen Custodian • Apr 28, 2026',
      image: 'assets/images/blog/detail-lemon.jpg',
      imageAlt: 'Traditional homemade sun-cured Indian lemon pickle seasoned in spices',
      categoryLabel: 'Recipes',
      shortDesc: 'How black salt, roasted ajwain, and pure sun rays transform tart Kagzi lemons into a medicinal, gut-friendly relish.',
      tags: ['#LemonPickle', '#ZeroOilAchar', '#DigestiveHealth'],
      promoTitle: 'Try Zero-Oil Nimbu Achar',
      promoDesc: '40-day sun fermented Kagzi lemons with black salt, roasted ajwain, and natural jaggery.',
      promoBtn: 'View Lemon Pickle (₹260)',
      promoHref: 'products.html?cat=pickles',
      bodyHtml:
        '<p>Unlike oil-sealed mango pickles, the quintessential North Indian <em>Nimbu Ka Achar</em> requires not a single drop of oil. All it demands is thin-skinned, juice-laden Kagzi lemons, mineral-rich black salt (kala namak), roasted carom seeds (ajwain), and forty unhurried days under bright afternoon sun.</p>' +
        '<h3>Choosing Thin-Skinned Kagzi Lemons</h3>' +
        '<p>Thick-rind commercial lemons produce pithy bitterness when pickled. Authentic homemade lemon pickle relies strictly on paper-thin yellow Kagzi lemons washed thoroughly and sun-dried until zero surface moisture remains—remember that even a single droplet of raw water inside a barni can invite spoilage.</p>' +
        '<h3>Natural Osmosis & Probiotic Maturation</h3>' +
        '<p>Once quartered, the lemons are layered inside dry glass or ceramic jars with rock salt, black salt, roasted cumin, and crushed peppercorns. Over 20 to 40 days of gentle afternoon shaking, the acidic citrus juice extracts moisture and dissolves the spices into a velvety ruby-amber brine teeming with healthy digestive enzymes.</p>' +
        '<blockquote>"In Indian households, a small wedge of five-year-aged nimbu achar is treated as pantry medicine—soothing nausea, sluggish appetite, and bloated stomachs."</blockquote>' +
        '<h3>Sweet, Tangy, or Fiery: Regional Twists</h3>' +
        '<p>While Rajasthani homes prefer adding crushed organic jaggery (gud) during the third week to craft <em>Khatta Meetha Nimbu</em>, Gujarati and Punjabi kitchens toss in split fenugreek, asafoetida, and vibrant Kashmiri chilli powder. Whichever profile you love, patient solar curing guarantees zero artificial vinegar and gentle digestibility for every age group.</p>'
    },
    'indian-papad': {
      tag: '<i class="fa-solid fa-cookie-bite"></i> Culinary Craft & Regional Heritage',
      title: 'Different Types of Indian Papad: From Amritsari Urad to Kerala Appalam',
      crumb: 'Types of Indian Papad',
      author: 'Sunita Sharma',
      roleDate: 'Master Papad Artisan • Apr 12, 2026',
      image: 'assets/images/blog/detail-papad.jpg',
      imageAlt: 'Assorted crisp roasted Indian papads served with traditional accompaniments',
      categoryLabel: 'Papad Craft',
      shortDesc: 'A deep cultural exploration of regional papad varieties, spices kneaded into the dough, and roasting vs frying advice.',
      tags: ['#IndianPapad', '#AppalamCraft', '#SunDriedCrisp'],
      promoTitle: 'Crunch Into Hand-Rolled Papads',
      promoDesc: 'Explore gluten-free Rice Khichiya, Amritsari Urad Masala, and golden Kerala Appalam.',
      promoBtn: 'Shop Hand-Rolled Papads',
      promoHref: 'products.html?cat=papads',
      bodyHtml:
        '<p>No Indian thali feels truly complete until a blistered, paper-thin papad crunches loudly beside steamed dal and rice. Yet across India\'s twenty-eight states, "papad" is far more than a single recipe—it is an extraordinary craft spanning lentils, steamed rice dough, sabudana pearls, and artisanal sun-drying.</p>' +
        '<h3>1. Amritsari Urad Dal & Kali Mirch Papad</h3>' +
        '<p>Famous across Punjab and Rajasthan, traditional urad dal papads are pounded from stone-milled black gram flour infused with crushed Tellicherry black peppercorns, cumin, and compounded asafoetida (hing). When dry-roasted over an open flame, those black pepper specks toast into an aromatic crunch with zero oil needed.</p>' +
        '<h3>2. Rajasthani & Gujarati Rice Khichiya Papad</h3>' +
        '<p>Unlike dry-kneaded lentil papads, Rice Khichiya is prepared by steaming seasoned rice flour slurry with fresh green chillies and roasted cumin until glossy. Steamed rounds are pressed thin on clean cotton sheets and sun-dried crisp, expanding dramatically when lightly toasted or steamed.</p>' +
        '<blockquote>"Hand-rolling papad on marble belan boards keeps air micro-pockets intact inside the dough—creating delicate blisters you can never replicate on hydraulic factory rollers."</blockquote>' +
        '<h3>3. South Indian Festive Appalam</h3>' +
        '<p>Served upon banana leaves during Kerala Onam Sadhyas and Tamil wedding feasts, true Appalam uses fine double-milled urad flour kneaded in pure gingelly (sesame) oil. Unlike spicy northern papads, appalam puffs gently into airy, mildly salted golden domes when slipped into hot sesame oil or dry-crisped over an iron tawa.</p>'
    },
    'food-preservation': {
      tag: '<i class="fa-solid fa-seedling"></i> Ancestral Preservation Science',
      title: 'Traditional Food Preservation: Ancient Science Without Synthetic Additives',
      crumb: 'Food Preservation Secrets',
      author: 'Ramesh Chandra',
      roleDate: 'Quality & Ingredients Head • Mar 24, 2026',
      image: 'assets/images/blog/detail-preservation.jpg',
      imageAlt: 'Vibrant whole Indian spices and natural pickling botanicals',
      categoryLabel: 'Preservation',
      shortDesc: 'Understanding how unrefined rock salt, cold-pressed mustard oil, and phenolic spice compounds create natural preservation barrier.',
      tags: ['#NaturalPreservation', '#ZeroChemicals', '#SendhaNamak'],
      promoTitle: '100% Additive-Free Guarantee',
      promoDesc: 'Taste pickles preserved purely through sun energy, cold-pressed oils, and rock salt.',
      promoBtn: 'Browse Pure Pickles',
      promoHref: 'products.html?cat=pickles',
      bodyHtml:
        '<p>Long before industrial refrigerators or synthetic sodium benzoate existed, grandmothers safely preserved summer fruits for up to three winters using four kitchen elements: water-activity reduction, mineral salt brining, oil exclusion, and antimicrobial botanicals.</p>' +
        '<h3>1. Osmotic Moisture Removal (Water Activity Control)</h3>' +
        '<p>Spoilage microbes require free moisture to multiply. By tossing freshly chopped raw mangoes or turnips with unrefined rock salt and drying them on sunlit cotton sheets for 6 to 8 hours, water activity drops below microbial survival thresholds while concentrating tart natural acids.</p>' +
        '<h3>2. The Natural Chemical Shield of Indian Spices</h3>' +
        '<p>Indian pickling masala blends were never chosen at random. Turmeric delivers curcumin (antifungal), yellow mustard releases allyl isothiocyanate, fenugreek adds bitter protective saponins, and true hing (asafoetida) neutralizes harmful fermentation bacteria while preventing stomach gas.</p>' +
        '<blockquote>"When rock salt, roasted spices, and Kachi Ghani mustard oil work in harmony inside a clay barni, synthetic preservatives become completely redundant."</blockquote>' +
        '<h3>3. Cold-Pressed Oil as an Anaerobic Barrier</h3>' +
        '<p>Pouring pure cold-pressed mustard or gingelly oil half an inch above the settled pickle layer seals out ambient oxygen entirely—creating an anaerobic chamber where friendly lactobacillus slowly tenderizes fibers and deepens flavor month after month.</p>'
    },
    'homemade-vs-store': {
      tag: '<i class="fa-solid fa-heart-pulse"></i> Nutrition & Consumer Awareness',
      title: 'Homemade Pickles vs Store-Bought: The Hidden Vinegar & Preservatives',
      crumb: 'Homemade vs Store-Bought',
      author: 'Parvati Devi',
      roleDate: 'Head Kitchen Custodian • Mar 08, 2026',
      image: 'assets/images/blog/detail-comparison.jpg',
      imageAlt: 'Authentic small-batch Indian pickles prepared with natural spices',
      categoryLabel: 'Health',
      shortDesc: 'Why commercial supermarket pickles cause acidity, and why grandmother\'s lacto-fermented achar supports healthy digestion.',
      tags: ['#CleanEating', '#NoVinegar', '#GutHealth'],
      promoTitle: 'Switch Back To Pure Homemade Taste',
      promoDesc: 'Zero Class II preservatives, zero acetic acid, and zero refined cottonseed oil.',
      promoBtn: 'Explore Honest Catalog',
      promoHref: 'products.html',
      bodyHtml:
        '<p>Have you ever eaten a spoonful of supermarket jar pickle and immediately felt throat irritation, harsh sourness, or lingering heartburn? That sharp bite rarely comes from real mangoes or lemons—it almost always comes from glacial synthetic acetic acid and refined industrial oils.</p>' +
        '<h3>Read the Back Label: Three Commercial Shortcuts</h3>' +
        '<p>Because sun-curing takes 30 to 40 days of courtyard space, mass-market manufacturers replace sunlight with cheap shortcuts: bleached refined cottonseed/palm oil, high-fructose syrups, synthetic red dyes, glacial acetic acid (INS 260), and Sodium Benzoate (INS 211) to stop fermentation instantaneously.</p>' +
        '<h3>Why Live Fermented Achar Helps Gut Immunity</h3>' +
        '<p>In contrast, homemade lacto-fermented achar matures organically. Beneficial lactic acid naturally lowers pH over weeks, preserving vibrant Vitamin C in amla and raw mangoes while delivering gentle natural probiotics alongside unrefined mustard oil fats.</p>' +
        '<blockquote>"Commercial pickles kill all fermentation so jars sit sterile in warehouses. Homemade pickles stay softly alive—improving digestion with just half a teaspoon beside your meal."</blockquote>' +
        '<h3>How To Spot Pure Homemade Pickle Immediately</h3>' +
        '<p>Check for rich amber-gold mustard oil sediment at the base, visible whole cracked fenugreek and fennel seeds, firm fruit edges rather than bleached mush, and a warm, nutty roasted aroma the moment you twist the lid.</p>'
    },
    'jar-sterilization': {
      tag: '<i class="fa-solid fa-spray-can-sparkles"></i> Kitchen Hygiene Guide',
      title: 'How to Sterilize Glass & Ceramic Barni Jars with Dry Steam',
      crumb: 'Sterilizing Pickle Jars',
      author: 'Sunita Sharma',
      roleDate: 'Kitchen Hygiene Lead • Apr 19, 2026',
      image: 'assets/images/blog/detail-jar-steam.jpg',
      imageAlt: 'Clean sterilized glass jars prepared for homemade pickle storage',
      categoryLabel: 'Pickling Tip',
      shortDesc: 'Prevent white surface mold and ensure 12+ months of safe shelf-life using grandma\'s hot water steam & hing-smoke method.',
      tags: ['#JarSterilization', '#KitchenHygiene', '#ShelfLife'],
      promoTitle: 'Freshly Bottled in Sterile Glass',
      promoDesc: 'Every Dadi\'s Swad batch is packed in heat-sterilized, leak-proof glass jars.',
      promoBtn: 'View Packaging Standards',
      promoHref: 'products.html#packagingSizes',
      bodyHtml:
        '<p>Even the finest hand-cut mangoes and Kachi Ghani mustard oil will spoil if placed inside a damp or imperfectly sanitized jar. Ninety percent of homemade pickle spoilage happens due to microscopic moisture clinging to threads inside jar lids.</p>' +
        '<h3>Step 1: Warm Soap Wash & Boiling Rinse</h3>' +
        '<p>Wash dry glass jars and glazed ceramic barnis using mild odorless liquid soap and hot water, rinsing thoroughly until no detergent scent remains. Invert onto a clean wire rack so trapped steam drains freely.</p>' +
        '<h3>Step 2: Full Afternoon Sunlight & Charcoal Hing Smoking (Dhungaar)</h3>' +
        '<p>After wiping with fresh cotton cloth, invert open jars upside-down over sunlit cotton sheets for at least 3 hours. Traditional kitchens then light a pinch of pure asafoetida (hing) with ghee over a small ember and invert the jar over the aromatic smoke for 15 seconds—infusing antimicrobial fragrance before filling!</p>' +
        '<blockquote>"Always use a dry, stainless steel or wooden spoon dedicated solely to the pickle jar—never dip a wet curry spoon inside."</blockquote>'
    },
    'roasting-papad': {
      tag: '<i class="fa-solid fa-fire"></i> Papad Roasting Guide',
      title: 'Microwave vs Open Flame Tawa Roasting: Achieving Zero-Oil Crunch',
      crumb: 'Roasting Papads Properly',
      author: 'Sunita Sharma',
      roleDate: 'Master Papad Artisan • Apr 05, 2026',
      image: 'assets/images/blog/detail-tawa-papad.jpg',
      imageAlt: 'Crisp dry roasted Indian papads ready to serve',
      categoryLabel: 'Papad Craft',
      shortDesc: 'Side-by-side comparison of open gas flame roasting, heavy cast-iron tawa pressing, and quick microwave puffing.',
      tags: ['#RoastingPapad', '#ZeroOilSnack', '#TawaCraft'],
      promoTitle: 'No Soda Bicarbonate Aftertaste',
      promoDesc: 'Taste crisp handmade urad & pepper papads crafted strictly with natural herbs.',
      promoBtn: 'Browse Papad Varieties',
      promoHref: 'products.html?cat=papads',
      bodyHtml:
        '<p>Whether you want to enjoy your papad with zero added oil or keep its delicate edges crisp without burnt spots, roasting technique makes every difference—especially between urad lentil papads and steamed rice khichiyas.</p>' +
        '<h3>1. Cast-Iron Tawa Cloth Pressing (Best Texture)</h3>' +
        '<p>Preheat a thick cast-iron tawa over medium flame. Lay the dry papad flat and gently press across its edges using a folded clean cotton kitchen towel for 5–6 seconds per side. The cloth diffuses heat uniformly, turning the entire disc blistered and evenly crunchy without charred black patches.</p>' +
        '<h3>2. Direct Flame Phulka Roasting (Maximum Smoky Aroma)</h3>' +
        '<p>Using long tongs, hold urad black pepper papad 2 inches above a low flame, turning quickly every 1.5 seconds in circular motions. Ideal for Amritsari Masala Papad before topping with finely diced onions, tomatoes, lemon juice, and chaat masala!</p>' +
        '<blockquote>"For Rice Khichiya papads, microwave puffing for 35 seconds with a light brush of mustard oil makes them double in crispness effortlessly."</blockquote>'
    },
    'amla-benefits': {
      tag: '<i class="fa-solid fa-heart-circle-check"></i> Ayurvedic Kitchen Wisdom',
      title: 'Why Indian Meals End with Amla Achar & Digestive Spices',
      crumb: 'Benefits of Amla Achar',
      author: 'Parvati Devi',
      roleDate: 'Head Kitchen Custodian • Mar 18, 2026',
      image: 'assets/images/blog/detail-amla.jpg',
      imageAlt: 'Spiced Indian gooseberry amla pickle cured in traditional spices',
      categoryLabel: 'Health',
      shortDesc: 'How vitamin-C dense Indian gooseberry cured with turmeric and split fenugreek stimulates digestive enzymes naturally.',
      tags: ['#AmlaAchar', '#Ayurveda', '#ImmunityBooster'],
      promoTitle: 'Winter Immunity In Every Jar',
      promoDesc: 'Try our small-batch Gooseberry (Amla) Pickle tempered with organic turmeric and methi.',
      promoBtn: 'Order Amla Pickle (₹290)',
      promoHref: 'products.html?cat=pickles',
      bodyHtml:
        '<p>Across classical Ayurveda, the six primary tastes (<em>Shad Rasa</em>) work together to complete satiety after a meal. While sweet, salty, and heavy savory courses fill the stomach, tart and astringent <em>Amla</em> (Indian Gooseberry) awakens salivary enzymes and prevents afternoon lethargy.</p>' +
        '<h3>Why Pickled Amla Retains High Vitamin C</h3>' +
        '<p>Fresh amla is remarkably heat-stable compared to citrus fruits. Gently steaming whole gooseberries for 8 minutes softens the stone separation without boiling away antioxidants, allowing black pepper, turmeric, and fenugreek to bind smoothly around the fruit segments.</p>' +
        '<blockquote>"One wholesome winter gooseberry cured with split methi and cold-pressed oil acts as a joyful tonic alongside dal-chawal."</blockquote>' +
        '<h3>Split Methi & Turmeric Synergy</h3>' +
        '<p>Split yellow fenugreek (methi dana) swells gently inside the pickle oil, mellowing astringent sourness while contributing soluble dietary fiber that balances post-meal blood sugar spikes naturally.</p>'
    }
  };

  var orderedStorySlugs = [
    'sun-cured-mango',
    'mango-pickle',
    'lemon-pickle',
    'indian-papad',
    'food-preservation',
    'homemade-vs-store',
    'jar-sterilization',
    'roasting-papad',
    'amla-benefits'
  ];

  function buildTagBadgesHtml(tags) {
    var tagHtml = '<span style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted);">Tags:</span>';
    tags.forEach(function (t, idx) {
      var cls = idx === 0 ? 'badge-primary' : (idx === 1 ? 'badge-secondary' : 'badge-accent');
      tagHtml += ' <span class="badge ' + cls + '">' + t + '</span>';
    });
    return tagHtml;
  }

  function smoothScrollToSection(el) {
    if (!el) return;
    var header = document.getElementById('siteHeader');
    var headerOffset = (header ? header.offsetHeight : 76) + 20;
    var rect = el.getBoundingClientRect();
    var targetY = Math.max(0, window.pageYOffset + rect.top - headerOffset);
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }

  /* 2A. Same-Page Inline Blog Reader (blog.html) */
  var readerSection = document.getElementById('blogReaderSection');
  var activeInlineSlug = null;

  function clearActiveStoryCards() {
    document.querySelectorAll('.is-active-story').forEach(function (card) {
      card.classList.remove('is-active-story');
    });
  }

  function openInlineStory(slug, shouldScroll) {
    if (!readerSection) return;
    var article = blogArticles[slug];
    if (!article) return;

    activeInlineSlug = slug;

    var tagEl = document.getElementById('blogReaderTag');
    var titleEl = document.getElementById('blogReaderTitle');
    var authorEl = document.getElementById('blogReaderAuthor');
    var metaEl = document.getElementById('blogReaderMeta');
    var imgEl = document.getElementById('blogReaderImage');
    var bodyEl = document.getElementById('blogReaderBody');
    var tagsWrap = document.getElementById('blogReaderTags');
    var ctaEl = document.getElementById('blogReaderCta');
    var prevBtn = document.getElementById('blogReaderPrevBtn');
    var nextBtn = document.getElementById('blogReaderNextBtn');

    if (tagEl) tagEl.innerHTML = article.tag;
    if (titleEl) titleEl.textContent = article.title;
    if (authorEl) authorEl.textContent = article.author;
    if (metaEl) metaEl.textContent = article.roleDate;
    if (imgEl) {
      imgEl.src = article.image;
      imgEl.alt = article.imageAlt;
    }
    if (bodyEl) bodyEl.innerHTML = article.bodyHtml;
    if (tagsWrap) tagsWrap.innerHTML = buildTagBadgesHtml(article.tags);
    if (ctaEl) {
      ctaEl.textContent = article.promoBtn;
      ctaEl.href = article.promoHref;
    }

    var currentIndex = orderedStorySlugs.indexOf(slug);
    var prevSlug = orderedStorySlugs[(currentIndex - 1 + orderedStorySlugs.length) % orderedStorySlugs.length];
    var nextSlug = orderedStorySlugs[(currentIndex + 1) % orderedStorySlugs.length];
    if (prevBtn) {
      prevBtn.setAttribute('data-target-slug', prevSlug);
      var prevLabel = prevBtn.querySelector('span');
      if (prevLabel) prevLabel.textContent = 'Previous Story';
    }
    if (nextBtn) {
      nextBtn.setAttribute('data-target-slug', nextSlug);
      var nextLabel = nextBtn.querySelector('span');
      if (nextLabel) nextLabel.textContent = 'Next Story';
    }

    clearActiveStoryCards();
    if (slug === 'sun-cured-mango') {
      var featuredCard = document.querySelector('#featuredArticle .featured-article-card');
      if (featuredCard) featuredCard.classList.add('is-active-story');
    } else {
      var matchingCard = document.querySelector('[data-post-slug="' + slug + '"]');
      if (matchingCard) matchingCard.classList.add('is-active-story');
    }

    readerSection.removeAttribute('hidden');

    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', '?post=' + encodeURIComponent(slug) + '#blogReaderSection');
    }

    if (shouldScroll) {
      window.requestAnimationFrame(function () {
        smoothScrollToSection(readerSection);
      });
    }
  }

  if (readerSection) {
    document.querySelectorAll('[data-blog-post]').forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        var slug = trigger.getAttribute('data-blog-post');
        if (!slug || !blogArticles[slug]) return;
        e.preventDefault();
        openInlineStory(slug, true);
      });
    });

    var closeReaderBtn = document.getElementById('blogReaderCloseBtn');
    if (closeReaderBtn) {
      closeReaderBtn.addEventListener('click', function () {
        readerSection.setAttribute('hidden', '');
        clearActiveStoryCards();
        activeInlineSlug = null;
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, '', 'blog.html');
        }
        smoothScrollToSection(document.getElementById('latestArticles') || document.getElementById('featuredArticle'));
      });
    }

    var prevStoryBtn = document.getElementById('blogReaderPrevBtn');
    var nextStoryBtn = document.getElementById('blogReaderNextBtn');
    [prevStoryBtn, nextStoryBtn].forEach(function (navBtn) {
      if (!navBtn) return;
      navBtn.addEventListener('click', function () {
        var nextSlug = navBtn.getAttribute('data-target-slug');
        if (nextSlug && blogArticles[nextSlug]) {
          openInlineStory(nextSlug, true);
        }
      });
    });

    var initialPostParam = urlParams.get('post');
    if (initialPostParam && blogArticles[initialPostParam]) {
      openInlineStory(initialPostParam, false);
      window.setTimeout(function () {
        smoothScrollToSection(readerSection);
      }, 100);
    }
  }

  /* 2B. Blog Details Page Dynamic Loader (blog-details.html?post=...) */
  var articleTitleEl = document.getElementById('blogDetailTitle');
  if (articleTitleEl) {
    var postSlug = urlParams.get('post') || 'mango-pickle';
    var article = blogArticles[postSlug] || blogArticles['mango-pickle'];
    if (!blogArticles[postSlug]) postSlug = 'mango-pickle';

    document.title = article.title + " | Dadi's Swad Culinary Journal";

    var tagEl = document.getElementById('blogDetailTag');
    var crumbEl = document.getElementById('blogDetailCrumb');
    var authorEl = document.getElementById('blogDetailAuthor');
    var metaEl = document.getElementById('blogDetailMeta');
    var imgEl = document.getElementById('blogDetailImage');
    var bodyEl = document.getElementById('blogArticleBody');
    var tagsWrap = document.getElementById('blogDetailTags');
    var promoTitle = document.getElementById('blogPromoTitle');
    var promoDesc = document.getElementById('blogPromoDesc');
    var promoBtn = document.getElementById('blogPromoBtn');

    if (tagEl) tagEl.innerHTML = article.tag;
    articleTitleEl.textContent = article.title;
    if (crumbEl) crumbEl.textContent = article.crumb;
    if (authorEl) authorEl.textContent = article.author;
    if (metaEl) metaEl.textContent = article.roleDate;
    if (imgEl) {
      imgEl.src = article.image;
      imgEl.alt = article.imageAlt;
    }
    if (bodyEl) bodyEl.innerHTML = article.bodyHtml;
    if (tagsWrap) tagsWrap.innerHTML = buildTagBadgesHtml(article.tags);
    if (promoTitle) promoTitle.textContent = article.promoTitle;
    if (promoDesc) promoDesc.textContent = article.promoDesc;
    if (promoBtn) {
      promoBtn.textContent = article.promoBtn;
      promoBtn.href = article.promoHref;
    }

    // Update Related Articles dynamically so none duplicate the current post!
    var relatedGrid = document.getElementById('relatedBlogGrid');
    if (relatedGrid) {
      var allSlugs = orderedStorySlugs;
      var otherSlugs = allSlugs.filter(function (s) { return s !== postSlug; }).slice(0, 3);
      var relatedImages = [
        'assets/images/blog/blog-related-1.jpg',
        'assets/images/blog/blog-related-2.jpg',
        'assets/images/blog/blog-related-3.jpg'
      ];
      var relHtml = '';
      otherSlugs.forEach(function (slug, index) {
        var rel = blogArticles[slug];
        relHtml +=
          '<article class="blog-card">' +
            '<div class="blog-media">' +
              '<span class="blog-badge">' + rel.categoryLabel + '</span>' +
              '<img src="' + relatedImages[index] + '" alt="' + rel.imageAlt + '" loading="lazy">' +
            '</div>' +
            '<div class="blog-content">' +
              '<h3 class="blog-title"><a href="blog-details.html?post=' + slug + '">' + rel.title + '</a></h3>' +
              '<p class="blog-desc">' + rel.shortDesc + '</p>' +
              '<a href="blog-details.html?post=' + slug + '" class="blog-link">Read Full Story <i class="fa-solid fa-arrow-right"></i></a>' +
            '</div>' +
          '</article>';
      });
      relatedGrid.innerHTML = relHtml;
    }
  }

  /* Sidebar Search on blog-details.html redirects cleanly to filtered blog.html */
  var sidebarSearchForm = document.getElementById('blogSidebarSearchForm');
  if (sidebarSearchForm) {
    sidebarSearchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var inp = sidebarSearchForm.querySelector('input');
      var q = inp ? inp.value.trim() : '';
      window.location.href = q ? ('blog.html?q=' + encodeURIComponent(q)) : 'blog.html';
    });
  }

  /* 3. Social Sharing Functionality (on blog-details.html) */
  var shareButtons = document.querySelectorAll('[data-share]');
  shareButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var platform = btn.getAttribute('data-share');
      var pageUrl = encodeURIComponent(window.location.href);
      var pageTitle = encodeURIComponent(document.title);

      var shareUrl = '';
      switch (platform) {
        case 'whatsapp':
          shareUrl = 'https://api.whatsapp.com/send?text=' + pageTitle + '%20' + pageUrl;
          break;
        case 'facebook':
          shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + pageUrl;
          break;
        case 'twitter':
          shareUrl = 'https://twitter.com/intent/tweet?url=' + pageUrl + '&text=' + pageTitle;
          break;
        case 'pinterest':
          shareUrl = 'https://pinterest.com/pin/create/button/?url=' + pageUrl + '&description=' + pageTitle;
          break;
        case 'copy':
          if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href).then(function () {
              if (window.showToast) {
                window.showToast('Link Copied!', 'Article link copied to your clipboard.', 'success');
              }
            });
          }
          return;
      }

      if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
      }
    });
  });

  /* 4. Newsletter Subscription */
  var newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var emailInput = newsletterForm.querySelector('input[type="email"]');
      if (!emailInput || !emailInput.value.trim()) {
        if (window.showToast) {
          window.showToast('Please Enter Email', 'A valid email address is required.', 'error');
        }
        return;
      }

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        if (window.showToast) {
          window.showToast('Invalid Email', 'Please enter a valid email address.', 'error');
        }
        return;
      }

      if (window.showToast) {
        window.showToast('Subscribed!', 'Thank you for subscribing to our recipes & traditional kitchen stories.', 'success');
      }
      emailInput.value = '';
    });
  }
});
