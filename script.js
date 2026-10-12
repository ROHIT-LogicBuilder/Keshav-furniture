// ── PRODUCTS DATA ─────────────────────────
// const WA = "https://wa.me/+918384073759?text=";

const products = {
  Dressing: [
    {
      name: "Scandi Diamond Cabinet",
      category: "Dressing",
      price: 5000,
      old: null,
      badge: "new",
      badgeText: "New",
      desc: "A stylish unit featuring a large mirror, two tall side cabinets for bottles, and two big bottom cabinets for extra storage.",
      svgBg: "#f5f0eb",
      svgFg: "#c4b5a0",
      icon: "🗄️",
      img: "./product/dressing/dressing-img1.png",
      width: 45,
    },
    {
      name: "Textured Black Dresser",
      category: "Dressing",
      price: 5500,
      old: null,
      badge: null,
      badgeText: null,
      desc: "A sleek dark unit featuring a tall mirror, a glass display cabinet with a handy drawer, and multiple bottom compartments to keep your space organized.",
      svgBg: "#2d2d2d",
      svgFg: "#1a1a1a",
      icon: "🪞",
      img: "./product/dressing/dressing-img2.png",
      width: 45,
    },
    {
      name: "Classic Dressing",
      category: "Dressing",
      price: 4800,
      old: null,
      badge: "sale",
      badgeText: "Sale",
      desc: "A classic unit featuring a large central mirror, open display shelves, tall glass-paneled side cabinets, and two large bottom cabinets for extra storage.",
      svgBg: "#c4a87a",
      svgFg: "#8b6b3c",
      icon: "🚪",
      img: "./product/dressing/dressing-img3.png",
      width: 45,
      height:100
    },
    {
      name: "Modern Wardrobe",
      category: "Dressing",
      price: 4800,
      old: null,
      badge: "new",
      badgeText: "New",
      desc: "A modern dark wood unit featuring a tall central mirror, open shelves, glass-front side cabinets, and two spacious bottom cabinets for your bulky items.",
      svgBg: "#3d2b1f",
      svgFg: "#1f140d",
      icon: "🚪",
      img: "./product/dressing/dressing-img4.png",
      width: 43,
      height:100
    },
    {
      name: "Round Designer Mirror Set",
      category: "Dressing",
      price: 4500,
      old: null,
      badge: null,
      badgeText: null,
      desc: "An elegant unit featuring a stylish round mirror, two handy side cabinets, two pull-out drawers, and large bottom cabinets for your everyday essentials.",
      svgBg: "#e8ddd7",
      svgFg: "#c4b5a5",
      icon: "🪞",
      img: "./product/dressing/dressing-img5.png",
      width: 45,
      height:100
    },
  ],
  Bedroom: [
    {
      name: "Classic Teak Bed",
      category: "Bedroom",
      price: 35000,
      old: 40000,
      badge: null,
      badgeText: "Sale",
      desc: "A beautiful double bed crafted from rich teak wood. It features an elegantly carved headboard and spacious box storage to keep your bedroom clutter-free.",
      svgBg: "#e0c1a1",
      svgFg: "#8a6646",
      icon: "🛏️",
      img: "./product/bed/bed-img1.png",
      width: 100,
    },
    {
      name: "Royal Teak Bed",
      category: "Bedroom",
      price: 32000,
      old: null,
      badge: null,
      badgeText: null,
      desc: "A fancy double bed made of top-quality teak wood. It has an old-style royal look with beautiful designs and a big box inside for storage.",
      svgBg: "#7a5220",
      svgFg: "#f0daab",
      icon: "🛏️",
      img: "./product/bed/bed-img2.png",
      width: 100,
    },
    {
      name: "Premium Teak Box Bed",
      category: "Bedroom",
      price: 32000,
      old: null,
      badge: null,
      badgeText: null,
      desc: "A shiny teak wood double bed. It comes with a soft resting pad for your head, small side tables, and a big storage box under the mattress.",
      svgBg: "#c9a97a",
      svgFg: "#ae0000",
      icon: "🛏️",
      img: "./product/bed/bed-img3.png",
      width: 100,
    },
    {
      name: "Modern White Box Bed",
      category: "Bedroom",
      price: 25000,
      old: null,
      badge: null,
      badgeText: null,
      desc: "A stylish double bed made of strong MDF board. It comes with a full guarantee against termites (dimak). It is white with flower designs, has a soft headboard, and a hidden storage box.",
      svgBg: "#f0f0f0",
      svgFg: "#404040",
      icon: "🛏️",
      img: "./product/bed/bed-img4.png",
      width: 100,
    },
    {
      name: "Heritage Teak Box Bed",
      category: "Bedroom",
      price: 32000,
      old: null,
      badge: null,
      badgeText: null,
      desc: "A great-looking double bed made of solid teak wood. It has beautiful traditional designs cut into the wood and a very big storage box inside.",
      svgBg: "#9c683b",
      svgFg: "#5e3e23",
      icon: "🛏️",
      img: "./product/bed/bed-img5.png",
      width: 100,
    },
    {
      name: "Designer MDF Bed",
      category: "Bedroom",
      price: 20000,
      old: null,
      badge: null,
      badgeText: null,
      desc: "A modern double bed made of good quality MDF board. It is guaranteed safe from termites (dimak). It has a two-color design, flower patterns, and a large box for your storage needs.",
      svgBg: "#d3d3d3",
      svgFg: "#696969",
      icon: "🛏️",
      img: "./product/bed/bed-img6.png",
      width: 100,
    },
    {
      name: "Sunburst Teak Bed",
      category: "Bedroom",
      price: 35000,
      old: null,
      badge: null,
      badgeText: null,
      desc: "A beautiful teak wood double bed. The headboard has a design that looks like a shining sun. It shows the natural wood color and has a deep storage box inside.Modern panel bed with a distinctive sunburst carved headboard and raw industrial loft appeal.",
      svgBg: "#f4a460",
      svgFg: "#8b4513",
      icon: "🛏️",
      img: "./product/bed/bed-img7.png",
     
      height: 100,
    },
  ],
  Sofa: [
    {
      name: "5-Seater Sofa with glass table",
      category: "Sofa",
      price: 50000,
      old: null,
      badge: null,
      badgeText: null,
      desc: "High-density foam, premium velvet upholstery. Available in 8 colours.",
      svgBg: "#c9a9a9",
      svgFg: "#905050",
      icon: "🛋️",
      img: "./product/sofa/sofa-img1.jpg",
      height:100
    },
    {
      name: "5-Seater Sofa with normal table",
      category: "Sofa",
      price: 50000,
      old: null,
      badge: null,
      badgeText: null,
      desc: "High-density foam, premium velvet upholstery. Available in 8 colours.",
      svgBg: "#c9a9a9",
      svgFg: "#905050",
      icon: "🛋️",
      img: "./product/sofa/sofa-img2.jpg",
      height:100
    },
  ],
  Study: [
    {
      name: "Study and office table",
      category: "Study",
      price: 3500,
      old: null,
      badge: "new",
      badgeText: "New",
      desc: "Corner desk with cable management, USB charging port & adjustable shelf.",
      svgBg: "#a9c9c5",
      svgFg: "#406870",
      icon: "💻",
      img: "./product/table/table-img1.jpg",
    },
  ],
  Dining: [
    {
      name: "Rectangle Dining Table",
      category: "Dining",
      price: 40000,
      old: null,
      badge: null,
      badgeText: null,
      desc: "Walnut veneer rectangle table, seats 6. Perfect for compact dining spaces.",
      svgBg: "#c9c5a9",
      svgFg: "#706040",
      icon: "🍽️",
      img: "./product/dining/dining-img1.jpg",
    },
    {
      name: "Oval Dining Table",
      category: "Dining",
      price: 35000,
      old: null,
      badge: null,
      badgeText: null,
      desc: "Walnut veneer oval table, seats 6. Perfect for compact dining spaces.",
      svgBg: "#c9c5a9",
      svgFg: "#706040",
      icon: "🍽️",
      img: "./product/dining/dining-img2.jpg",
    },
  ],
};

// function waMsg(name, price, img) {
//   return (
//     WA +
//     encodeURIComponent(
//       `Hi! I'm interested in the "${name}" ( ${price.toLocaleString()}). Please share more details.View image ${img}`,
//     )
//   );
// }

function waMsg(event, element) {
  // 1. Prevent any default click behaviors
  event.preventDefault();

  // 2. Extract the variables we safely hid inside the div's data attributes
  const name = element.getAttribute("data-name");
  const desc = element.getAttribute("data-desc");
  const price = Number(element.getAttribute("data-price"));
  let img = element.getAttribute("data-img");

  // 3. Convert the relative image path to a full URL (http://127.0.0.1:5500/...)
  if (img) {
    img = new URL(img, window.location.origin).href;
  }

  // 4. Print to the console to check if the link is correct
  console.log(name + " clicked!");
  console.log("Full Image Link: " + img);

  // 5. Build the WhatsApp URL
  const WA = "https://wa.me/+918384073759?text=";
  const url = WA + encodeURIComponent(
    `Hi! I'm interested in the "${name}".\n\nDescription: ${desc}\nPrice: ₹${price.toLocaleString()}\n\nPlease share more details.\n\nImage: ${img}`
  );

  // 6. Open WhatsApp in a new tab
  window.open(url, "_blank");
}

function getAllProduct() {
  return Object.values(products).flat();
}

const getProductsByCategory = (category) => {
  return products[category] || [];
};

function renderProducts(filter = "All") {
  const grid = document.getElementById("productsGrid");
  const filtered =
    filter === "All" ? getAllProduct() : getProductsByCategory(filter);

  grid.innerHTML = filtered
    .map((p) => {
      return `
      <div class="product-card fade-up visible">
        <div class="product-img-wrap">
          <div class="product-bg" style="background:linear-gradient(145deg,${p.svgBg},${p.svgFg})">
            ${p.img ? `<img src="${p.img}" alt="${p.icon}" style="width:${p.width}%; height:${p.height || "auto"}%;" />` : `<span style="font-size:4.5rem;filter:drop-shadow(0 4px 12px rgba(0,0,0,.2))">${p.icon}</span>`}
          </div>
          ${p.badge ? `<span class="product-badge ${p.badge}">${p.badgeText}</span>` : ""}
          
          <!-- Quick WhatsApp Icon (Updated to div) -->
          <div 
             data-name="${p.name}" 
             data-desc="${p.desc}" 
             data-price="${p.price}" 
             data-img="${p.img}" 
             onclick="waMsg(event, this)" 
             class="whatsapp-quick" 
             title="Quick WhatsApp inquiry"
             style="cursor: pointer;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.82 11.82 0 0020.885 3.49"/></svg>
          </div>
        </div>
        <div class="product-body">
          <div class="product-category">${p.category}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-footer">
            <div class="product-price">
              ${p.old ? `<span class="old"> ${p.old.toLocaleString()}</span>` : ""}
               ${p.price.toLocaleString()}
            </div>
            
            <!-- Bottom Enquire Button (Updated to div) -->
            <div 
               data-name="${p.name}" 
               data-desc="${p.desc}" 
               data-price="${p.price}" 
               data-img="${p.img}" 
               onclick="waMsg(event, this)" 
               class="wa-btn"
               style="cursor: pointer;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.82 11.82 0 0020.885 3.49"/></svg>
              Enquire
            </div>
          </div>
        </div>
      </div>
      `;
    })
    .join("");
  applyLanguage();
}

const hindiTranslations = {
  "Keshav — Handcrafted Furniture": "केशव — हस्तनिर्मित फर्नीचर",
  Furniture: "फर्नीचर",
  Collections: "संग्रह",
  Products: "उत्पाद",
  About: "हमारे बारे में",
  Showroom: "शोरूम",
  "💬 WhatsApp Us": "💬 WhatsApp पर संपर्क करें",
  "💬 WhatsApp": "💬WhatsApp",
  "Handcrafted in Bihar": "बिहार में हस्तनिर्मित",
  "Furniture that": "फर्नीचर जो",
  "tells your": "आपकी कहानी",
  story: "सुनाए",
  "Solid wood craftsmanship, timeless designs — built to last generations and priced for real families.":
    "ठोस लकड़ी की कारीगरी और सदाबहार डिज़ाइन — पीढ़ियों तक चलने वाले, हर परिवार के बजट के अनुकूल।",
  "Browse Collection ↓": "संग्रह देखें ↓",
  "💬 Chat with Us": "💬 हमसे बात करें",
  "Pieces Crafted": "तैयार किए गए उत्पाद",
  Experience: "वर्षों का अनुभव",
  "Happy Homes": "खुशहाल घर",
  Delivery: "डिलीवरी",
  "City-wide": "पूरे शहर में",
  "Bed": "बेड",
  "Dressing Tables": "ड्रेसिंग टेबल",
  "Dining Suites": "डाइनिंग सेट",
  "Sofas & Lounges": "सोफ़ा और लाउंज",
  Wardrobes: "अलमारी",
  "Study Tables": "स्टडी टेबल",
  "TV Units": "टीवी यूनिट",
  "Outdoor Furniture": "आउटडोर फर्नीचर",
  "Browse By Room": "कमरे के अनुसार देखें",
  Our: "हमारा",
  "View All →": "सभी देखें →",
  "Dining Tables": "डाइनिंग टेबल",
  "Study & Office": "स्टडी और ऑफिस",
  "Featured Pieces": "चुनिंदा उत्पाद",
  Bestsellers: "सबसे लोकप्रिय",
  All: "सभी",
  Bedroom: "बेडरूम",
  Dressing: "ड्रेसिंग",
  Dining: "डाइनिंग",
  Sofas: "सोफ़ा",
  Study: "स्टडी",
  "Why Choose Us": "हमें क्यों चुनें",
  "Built for": "बनाया गया",
  lasting: "लंबे समय तक टिकने वाली",
  beauty: "खूबसूरती के लिए",
  "Every joint, finish, and curve is considered. We don't cut corners — because the pieces we make will outlast trends, fashions, and maybe even us.":
    "हम हर जोड़, फिनिश और आकार पर ध्यान देते हैं। हम गुणवत्ता से समझौता नहीं करते — हमारे उत्पाद बदलते फैशन से भी लंबे समय तक टिकते हैं।",
  "Solid Wood": "ठोस लकड़ी",
  "Sheesham, teak, and high-quality MDF — crafted to suit every style and budget. Every piece is built with care and durability in mind.":
    "शीशम, सागौन और उच्च गुणवत्ता वाला MDF — हर पसंद और बजट के लिए। हर उत्पाद को मजबूती और सावधानी से बनाया जाता है।",
  "Custom Finishes": "मनचाही फिनिश",
  "Choose from 30+ stain colours, hand-rubbed lacquers, and painted options.":
    "30 से अधिक रंगों, हाथ से पॉलिश किए गए लैकर और पेंट विकल्पों में से चुनें।",
  "Safe and secure delivery across Bihar. Place your order and relax — we’ll handle the transport.":
    "बिहार भर में सुरक्षित डिलीवरी। ऑर्डर करें और निश्चिंत रहें — सामान पहुँचाने की ज़िम्मेदारी हमारी।",
  "Made to Order": "ऑर्डर पर तैयार",
  "Custom sizes & configurations available. Tell us your space, we'll design for it.":
    "मनचाहे आकार और डिज़ाइन उपलब्ध हैं। अपनी जगह के बारे में बताएं, हम उसी के अनुसार डिज़ाइन करेंगे।",
  "WhatsApp Support": "WhatsApp सहायता",
  "Chat directly with our designers for advice, pricing, and live updates.":
    "सलाह, कीमत और ताज़ा जानकारी के लिए हमारे डिज़ाइनरों से सीधे बात करें।",
  "Visit Us": "हमसे मिलने आएं",
  "Come see the": "कारीगरी को",
  craftsmanship: "अपनी आँखों से",
  "in person": "देखें",
  "Touch the wood grain, sit in the chairs, and smell the lacquer. Our showroom is open 7 days a week — no appointment needed.":
    "लकड़ी की बनावट को महसूस करें, कुर्सियों पर बैठें और पॉलिश की खुशबू लें। हमारा शोरूम सप्ताह के सातों दिन खुला है — पहले से समय लेने की ज़रूरत नहीं।",
  Address: "पता",
  "Hasanpur, Bihar 824217, India": "हसनपुर, बिहार 824217, भारत",
  "Opening Hours": "खुलने का समय",
  "Mon – Sat: 10am – 8pm | Sun: 12pm – 6pm":
    "सोम – शनि: सुबह 10 – रात 8 बजे | रवि: दोपहर 12 – शाम 6 बजे",
  "Phone / WhatsApp": "फ़ोन / WhatsApp",
  "Chat on WhatsApp": "WhatsApp पर बात करें",
  "Handcrafted furniture for homes that value beauty, quality, and lasting value. Based in Bihar.":
    "खूबसूरती, गुणवत्ता और टिकाऊपन पसंद करने वाले घरों के लिए हस्तनिर्मित फर्नीचर। बिहार में स्थित।",
  Company: "कंपनी",
  Contact: "संपर्क",
  "About Us": "हमारे बारे में",
  "Our Showroom": "हमारा शोरूम",
  "Custom Orders": "कस्टम ऑर्डर",
  "📍 Showroom Location": "📍 शोरूम का पता",
  "© 2025 KESHAV Furniture. All rights reserved.":
    "© 2025 KESHAV फर्नीचर। सर्वाधिकार सुरक्षित।",
  "Made with ♥ for quality homes": "बेहतरीन घरों के लिए ♥ से बनाया गया",
  "Chat with us on WhatsApp!": "WhatsApp पर हमसे बात करें!",
  "WhatsApp Us": "WhatsApp पर संपर्क करें",
  "Quick WhatsApp inquiry": "WhatsApp पर तुरंत पूछताछ करें",
  New: "नया",
  Sale: "छूट",
  Enquire: "पूछताछ करें",
  "Scandi Diamond Cabinet": "स्कैंडी डायमंड कैबिनेट",
  "A stylish unit featuring a large mirror, two tall side cabinets for bottles, and two big bottom cabinets for extra storage.":
    "बड़े शीशे, बोतलों के लिए दो लंबे साइड कैबिनेट और अतिरिक्त सामान के लिए नीचे के दो बड़े कैबिनेट वाला स्टाइलिश सेट।",
  "Textured Black Dresser": "टेक्सचर्ड ब्लैक ड्रेसर",
  "A sleek dark unit featuring a tall mirror, a glass display cabinet with a handy drawer, and multiple bottom compartments to keep your space organized.":
    "लंबे शीशे, सुविधाजनक दराज़ वाले ग्लास डिस्प्ले कैबिनेट और सामान व्यवस्थित रखने के लिए नीचे कई खानों वाला आकर्षक डार्क सेट।",
  "Classic Dressing": "क्लासिक ड्रेसिंग टेबल",
  "A classic unit featuring a large central mirror, open display shelves, tall glass-paneled side cabinets, and two large bottom cabinets for extra storage.":
    "बड़े बीच के शीशे, खुली डिस्प्ले शेल्फ़, काँच वाले लंबे साइड कैबिनेट और अतिरिक्त सामान के लिए नीचे दो बड़े कैबिनेट वाला क्लासिक सेट।",
  "Modern Wardrobe": "मॉडर्न अलमारी",
  "A modern dark wood unit featuring a tall central mirror, open shelves, glass-front side cabinets, and two spacious bottom cabinets for your bulky items.":
    "लंबे बीच के शीशे, खुली शेल्फ़, काँच वाले साइड कैबिनेट और बड़े सामान के लिए नीचे दो विशाल कैबिनेट वाला आधुनिक डार्क वुड सेट।",
  "Round Designer Mirror Set": "गोल डिज़ाइनर मिरर सेट",
  "An elegant unit featuring a stylish round mirror, two handy side cabinets, two pull-out drawers, and large bottom cabinets for your everyday essentials.":
    "स्टाइलिश गोल शीशे, दो सुविधाजनक साइड कैबिनेट, दो पुल-आउट दराज़ और रोज़मर्रा के सामान के लिए नीचे बड़े कैबिनेट वाला आकर्षक सेट।",
  "Classic Teak Bed": "क्लासिक सागौन का पलंग",
  "A beautiful double bed crafted from rich teak wood. It features an elegantly carved headboard and spacious box storage to keep your bedroom clutter-free.":
    "समृद्ध सागौन की लकड़ी से बना सुंदर डबल बेड। इसमें खूबसूरती से तराशा गया हेडबोर्ड और सामान रखने के लिए बड़ा बॉक्स है।",
  "Royal Teak Bed": "रॉयल सागौन का पलंग",
  "A fancy double bed made of top-quality teak wood. It has an old-style royal look with beautiful designs and a big box inside for storage.":
    "उच्च गुणवत्ता वाले सागौन से बना शानदार डबल बेड। खूबसूरत डिज़ाइन, शाही पारंपरिक रूप और सामान रखने के लिए अंदर बड़ा बॉक्स।",
  "Premium Teak Box Bed": "प्रीमियम सागौन बॉक्स बेड",
  "A shiny teak wood double bed. It comes with a soft resting pad for your head, small side tables, and a big storage box under the mattress.":
    "चमकदार सागौन की लकड़ी का डबल बेड। इसमें सिर के लिए मुलायम पैड, छोटी साइड टेबल और गद्दे के नीचे बड़ा स्टोरेज बॉक्स है।",
  "Modern White Box Bed": "मॉडर्न सफ़ेद बॉक्स बेड",
  "A stylish double bed made of strong MDF board. It comes with a full guarantee against termites (dimak). It is white with flower designs, has a soft headboard, and a hidden storage box.":
    "मजबूत MDF बोर्ड से बना स्टाइलिश डबल बेड। दीमक से पूरी सुरक्षा की गारंटी के साथ। सफ़ेद रंग, फूलों के डिज़ाइन, मुलायम हेडबोर्ड और छिपा हुआ स्टोरेज बॉक्स।",
  "Heritage Teak Box Bed": "हेरिटेज सागौन बॉक्स बेड",
  "A great-looking double bed made of solid teak wood. It has beautiful traditional designs cut into the wood and a very big storage box inside.":
    "ठोस सागौन की लकड़ी से बना आकर्षक डबल बेड। लकड़ी पर खूबसूरत पारंपरिक नक्काशी और अंदर बहुत बड़ा स्टोरेज बॉक्स।",
  "Designer MDF Bed": "डिज़ाइनर MDF बेड",
  "A modern double bed made of good quality MDF board. It is guaranteed safe from termites (dimak). It has a two-color design, flower patterns, and a large box for your storage needs.":
    "अच्छी गुणवत्ता वाले MDF बोर्ड से बना आधुनिक डबल बेड। दीमक से सुरक्षा की गारंटी, दो रंगों का डिज़ाइन, फूलों के पैटर्न और सामान रखने के लिए बड़ा बॉक्स।",
  "Sunburst Teak Bed": "सनबर्स्ट सागौन बेड",
  "A beautiful teak wood double bed. The headboard has a design that looks like a shining sun. It shows the natural wood color and has a deep storage box inside.Modern panel bed with a distinctive sunburst carved headboard and raw industrial loft appeal.":
    "सागौन की लकड़ी का सुंदर डबल बेड। हेडबोर्ड पर चमकते सूरज जैसा डिज़ाइन, लकड़ी का प्राकृतिक रंग और अंदर गहरा स्टोरेज बॉक्स। खास सनबर्स्ट नक्काशी वाला आधुनिक पैनल बेड।",
  "5-Seater Sofa with glass table": "ग्लास टेबल वाला 5-सीटर सोफ़ा",
  "5-Seater Sofa with normal table": "साधारण टेबल वाला 5-सीटर सोफ़ा",
  "High-density foam, premium velvet upholstery. Available in 8 colours.":
    "हाई-डेंसिटी फोम और प्रीमियम वेलवेट कवर। 8 रंगों में उपलब्ध।",
  "Study and office table": "स्टडी और ऑफिस टेबल",
  "Corner desk with cable management, USB charging port & adjustable shelf.":
    "केबल मैनेजमेंट, USB चार्जिंग पोर्ट और एडजस्टेबल शेल्फ़ वाली कॉर्नर डेस्क।",
  "Rectangle Dining Table": "आयताकार डाइनिंग टेबल",
  "Walnut veneer rectangle table, seats 6. Perfect for compact dining spaces.":
    "अखरोट की लकड़ी की फिनिश वाली आयताकार टेबल, 6 लोगों के लिए। छोटी डाइनिंग जगहों के लिए बेहतरीन।",
  "Oval Dining Table": "अंडाकार डाइनिंग टेबल",
  "Walnut veneer oval table, seats 6. Perfect for compact dining spaces.":
    "अखरोट की लकड़ी की फिनिश वाली अंडाकार टेबल, 6 लोगों के लिए। छोटी डाइनिंग जगहों के लिए बेहतरीन।",
};

let isHindi = false;
let activeProductFilter = "All";
const originalText = new WeakMap();
const originalAttributes = new WeakMap();

function applyLanguage() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let textNode;
  while ((textNode = walker.nextNode())) {
    if (!originalText.has(textNode)) {
      originalText.set(textNode, textNode.nodeValue);
    }
    const englishText = originalText.get(textNode);
    const key = englishText.trim().replace(/\s+/g, " ");
    textNode.nodeValue = isHindi && hindiTranslations[key]
      ? englishText.replace(englishText.trim(), hindiTranslations[key])
      : englishText;
  }

  document.querySelectorAll("[title], [aria-label], [placeholder]").forEach((element) => {
    ["title", "aria-label", "placeholder"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      let savedAttributes = originalAttributes.get(element);
      if (!savedAttributes) {
        savedAttributes = {};
        originalAttributes.set(element, savedAttributes);
      }
      if (!(attribute in savedAttributes)) {
        savedAttributes[attribute] = element.getAttribute(attribute);
      }
      const englishValue = savedAttributes[attribute];
      element.setAttribute(
        attribute,
        isHindi ? hindiTranslations[englishValue] || englishValue : englishValue,
      );
    });
  });

  document.documentElement.lang = isHindi ? "hi" : "en";
  document.title = isHindi
    ? hindiTranslations["Keshav — Handcrafted Furniture"]
    : "Keshav — Handcrafted Furniture";
  const languageButton = document.getElementById("languageToggle");
  languageButton.textContent = isHindi ? "English" : "हिन्दी";
  languageButton.setAttribute(
    "aria-label",
    isHindi ? "अंग्रेज़ी में बदलें" : "Switch language to Hindi",
  );
}

function toggleLanguage() {
  isHindi = !isHindi;
  renderProducts(activeProductFilter);
}

function filterProducts(cat, btn) {
  // Update active button
  if (btn) {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  }
  activeProductFilter = cat;
  renderProducts(cat);
  document
    .getElementById("products")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

// Init
renderProducts("All");

// ── NAV SCROLL ───────────────────────────
window.addEventListener("scroll", () => {
  document
    .getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 40);
});

// ── MOBILE MENU ──────────────────────────
function openMenu() {
  document.getElementById("mobileMenu").classList.toggle("open");
  document.getElementById("hamburger").innerHTML = document
    .getElementById("mobileMenu")
    .classList.contains("open")
    ? "X"
    : "<span></span><span></span><span></span>";
}
// function closeMenu() {
//     console.log("strt close")
//   document.getElementById("mobileMenu").classList.remove("open");
//   let check=document.getElementById("hamburger").innerHTML
//   console.log(check)
// }

// ── INTERSECTION OBSERVER ─────────────────
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".fade-up").forEach((el) => io.observe(el));
