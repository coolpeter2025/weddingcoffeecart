/* global React */

const BRAND = {
  name: "The Delightful Bean",
  short: "Delightful Bean",
  monogram: "d",
  tagline: "Mobile espresso, crafted for your wedding day.",
  kicker: "Tampa Bay & the surrounding coast — by appointment",
  phone: "(813) 419-7438",
  phoneTel: "+18134197438",
  email: "info@delightfulbean.com",
  instagram: "@delightful.bean",
  instagramUrl: "https://www.instagram.com/delightful.bean",
  facebookUrl: "https://www.facebook.com/profile.php?id=61565827048649",
  studio: "Tampa, FL",
  founded: "Est. 2024",
  quoteUrl: "https://www.delightfulbean.com/quote",
};

// Drink categories — for menu page
const DRINKS = [
  {
    slug: "espresso-bar",
    name: "The Espresso Bar",
    short: "Single-origin shots pulled to order on a commercial La Marzocco.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop",
    items: ["Espresso", "Macchiato", "Cortado", "Cappuccino", "Latte", "Flat White", "Mocha", "Americano"],
  },
  {
    slug: "drip",
    name: "Pour-Over & Drip",
    short: "Hand-poured single origin coffees and small-batch drip service.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1400&auto=format&fit=crop",
    items: ["V60 Pour-Over", "Chemex Carafe", "Batch Brew", "Decaf Drip"],
  },
  {
    slug: "cold",
    name: "Cold Brew & Iced",
    short: "Twenty-hour cold brew on tap, plus iced lattes shaken with cane sugar.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1400&auto=format&fit=crop",
    items: ["Cold Brew on Tap", "Iced Latte", "Iced Vanilla Sweet Cream", "Espresso Tonic", "Iced Americano"],
  },
  {
    slug: "specialty",
    name: "Specialty",
    short: "Matcha whisked to order, masala chai, and turmeric golden milk.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=1400&auto=format&fit=crop",
    items: ["Ceremonial Matcha Latte", "Iced Matcha", "Masala Chai Latte", "Dirty Chai", "Golden Milk", "London Fog"],
  },
  {
    slug: "tea",
    name: "Tea Service",
    short: "Loose-leaf tea, brewed by the cup. Caffeine-free options always on hand.",
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1400&auto=format&fit=crop",
    items: ["Earl Grey", "English Breakfast", "Jasmine Green", "Chamomile", "Peppermint", "Rooibos"],
  },
  {
    slug: "cocoa",
    name: "Hot Chocolate",
    short: "European-style hot chocolate made with single-origin Valrhona.",
    image: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=1400&auto=format&fit=crop",
    items: ["Classic Hot Chocolate", "Spiced Mexican Hot Chocolate", "White Chocolate", "Mocha"],
  },
];

// Signature drinks — for editorial gallery on home
const SIGNATURES = [
  {
    name: "The Delightful",
    notes: "Honey · Vanilla Bean · Sea Salt · Espresso",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Magnolia Latte",
    notes: "Lavender · Cream · Orange Blossom",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Bay Breeze Cold Brew",
    notes: "Citrus Tonic · Cold Brew · Mint",
    image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1200&auto=format&fit=crop",
  },
];

// Packages (no prices)
const PACKAGES = [
  {
    name: "The Ceremony",
    duration: "2 Hours",
    forCount: "Up to 75 guests",
    summary: "An intimate offering for elopements, micro-weddings, and small ceremonies.",
    includes: [
      "Two trained baristas",
      "Espresso bar — hot drinks",
      "Drip coffee + tea service",
      "Custom-printed menu card",
      "Compostable cups & lids",
      "On-site setup & breakdown",
    ],
  },
  {
    name: "The Reception",
    duration: "4 Hours",
    forCount: "Up to 200 guests",
    summary: "Our most-booked package — espresso, cold brew, and a signature drink for your reception.",
    includes: [
      "Two trained baristas",
      "Full espresso menu — hot & iced",
      "Cold brew on tap",
      "One custom signature drink",
      "Drip coffee + tea + hot chocolate",
      "Branded cups & menu signage",
      "On-site setup, service & breakdown",
    ],
    featured: true,
  },
  {
    name: "All Day",
    duration: "6+ Hours",
    forCount: "200+ guests",
    summary: "Full-day coverage — morning ceremony service through late-night espresso for the dance floor.",
    includes: [
      "Two trained baristas",
      "Full espresso & specialty menu",
      "Cold brew on tap",
      "Two custom signature drinks",
      "Late-night service add-on included",
      "Fully branded cups, napkins & signage",
      "Dedicated event lead",
      "On-site setup, service & breakdown",
    ],
  },
];

// 4-step process
const PROCESS = [
  { n: "01", title: "Inquire",        d: "Share your date, venue, and guest count. We'll confirm availability within one business day." },
  { n: "02", title: "Design",         d: "We'll build your menu together — signature drinks, custom signage, branded cups, and dietary needs." },
  { n: "03", title: "Your Day",       d: "We arrive 90 minutes early, set up quietly, and pour from your first toast through the last dance." },
];

// Locations served — all city slugs (each gets its own page)
const LOCATIONS = [
  { slug: "tampa",          name: "Tampa",            county: "Hillsborough" },
  { slug: "south-tampa",    name: "South Tampa",      county: "Hillsborough" },
  { slug: "westchase",      name: "Westchase",        county: "Hillsborough" },
  { slug: "brandon",        name: "Brandon",          county: "Hillsborough" },
  { slug: "riverview",      name: "Riverview",        county: "Hillsborough" },
  { slug: "apollo-beach",   name: "Apollo Beach",     county: "Hillsborough" },
  { slug: "st-petersburg",  name: "St. Petersburg",   county: "Pinellas" },
  { slug: "clearwater",     name: "Clearwater",       county: "Pinellas" },
  { slug: "clearwater-beach", name: "Clearwater Beach", county: "Pinellas" },
  { slug: "palm-harbor",    name: "Palm Harbor",      county: "Pinellas" },
  { slug: "tarpon-springs", name: "Tarpon Springs",   county: "Pinellas" },
  { slug: "dunedin",        name: "Dunedin",          county: "Pinellas" },
  { slug: "safety-harbor",  name: "Safety Harbor",    county: "Pinellas" },
  { slug: "belleair",       name: "Belleair",         county: "Pinellas" },
  { slug: "sarasota",       name: "Sarasota",         county: "Sarasota" },
  { slug: "siesta-key",     name: "Siesta Key",       county: "Sarasota" },
  { slug: "longboat-key",   name: "Longboat Key",     county: "Manatee" },
  { slug: "bradenton",      name: "Bradenton",        county: "Manatee" },
  { slug: "anna-maria",     name: "Anna Maria Island", county: "Manatee" },
  { slug: "wesley-chapel",  name: "Wesley Chapel",    county: "Pasco" },
  { slug: "land-o-lakes",   name: "Land O' Lakes",    county: "Pasco" },
];

// City-specific copy snippets
const CITY_NOTES = {
  "tampa":            { venues: ["Armature Works", "The Tampa Garden Club", "The Vault", "Oxford Exchange", "Westshore Yacht Club"], blurb: "From historic Hyde Park ballrooms to Armature Works' industrial elegance, we know Tampa's wedding venues and exactly how to set up at each one." },
  "south-tampa":      { venues: ["The Tampa Garden Club", "Davis Islands Garden Club", "Palma Ceia Golf & Country Club"], blurb: "A favorite for garden weddings and golf-club receptions — we travel light and set up beautifully in tight spaces." },
  "westchase":        { venues: ["Westchase Country Club", "The Tampa Marriott Westshore"], blurb: "Suburban estate weddings and country club receptions across the west side of Hillsborough." },
  "brandon":          { venues: ["The Regent", "Buckhorn Springs"], blurb: "Backyard celebrations and ballroom receptions throughout the Brandon area." },
  "riverview":        { venues: ["Winthrop Barn Theatre", "The Cross Creek Ranch"], blurb: "Rustic barn venues and waterfront events along the Alafia River." },
  "apollo-beach":     { venues: ["Apollo Beach Yacht Club", "Andrea's Bayfront Estate"], blurb: "Sunset weddings on Tampa Bay's south shore — bring on the cold brew." },
  "st-petersburg":    { venues: ["The Vinoy Resort", "Museum of Fine Arts", "The James Museum", "NOVA 535"], blurb: "From Vinoy ballrooms to industrial-chic warehouse weddings, St. Pete is our second home." },
  "clearwater":       { venues: ["Sandpearl Resort", "Belleview Inn", "Ruth Eckerd Hall"], blurb: "Beach weddings, resort receptions, and historic Belleview Biltmore-era venues throughout Clearwater." },
  "clearwater-beach": { venues: ["Sandpearl Resort", "Hyatt Regency Clearwater Beach", "Opal Sands"], blurb: "Sand-ceremony specialists — we level our cart on the dune line so the espresso stays put." },
  "palm-harbor":      { venues: ["Innisbrook Resort", "Pine Ridge Country Club"], blurb: "Resort weddings and golf-club ceremonies along Pinellas's northern coast." },
  "tarpon-springs":   { venues: ["The Sponge Docks Pavilion", "Fred Howard Park"], blurb: "Greek-village weddings and beachfront ceremonies on the Anclote River." },
  "dunedin":          { venues: ["The Fenway Hotel", "Edgewater Park"], blurb: "Historic Fenway Hotel rooftop ceremonies and main-street weddings in downtown Dunedin." },
  "safety-harbor":    { venues: ["Safety Harbor Resort & Spa", "Whimzeyland"], blurb: "Spa-resort weddings on the bluff and downtown loft receptions." },
  "belleair":         { venues: ["Belleair Country Club", "Pelican Golf Club"], blurb: "Country-club weddings on the bluff overlooking the Intracoastal." },
  "sarasota":         { venues: ["The Ringling Museum", "Powel Crosley Estate", "Marie Selby Botanical Gardens"], blurb: "Garden weddings, museum receptions, and estate ceremonies throughout Sarasota and Lido Key." },
  "siesta-key":       { venues: ["Siesta Key Beach", "Hyatt Siesta Key Beach"], blurb: "Quartz-sand ceremonies and beachfront receptions on America's #1 beach." },
  "longboat-key":     { venues: ["The Resort at Longboat Key Club", "Longboat Harbour"], blurb: "Private resort weddings along the Gulf — bring on the cold brew." },
  "bradenton":        { venues: ["Palma Sola Botanical Park", "Renaissance on 9th"], blurb: "Botanical gardens, historic downtown lofts, and waterfront estates across Manatee County." },
  "anna-maria":       { venues: ["The Sandbar Restaurant", "Anna Maria City Pier"], blurb: "Toes-in-the-sand beach weddings and pier-front ceremonies. We travel with island-friendly equipment." },
  "wesley-chapel":    { venues: ["Saddlebrook Resort", "The Quail Hollow Country Club"], blurb: "Resort weddings and country-club receptions throughout Pasco County." },
  "land-o-lakes":     { venues: ["The Lake Padgett Estates", "Plantation Palms"], blurb: "Lakefront weddings and backyard celebrations in the rolling country north of Tampa." },
};

const TESTIMONIALS = [
  {
    quote: "The most thoughtful vendor we worked with. Our guests are still talking about the lavender latte two months later — and our wedding planner said The Delightful Bean was the calmest cart she's ever worked with on-site.",
    couple: "Olivia & James",
    venue: "Powel Crosley Estate · Sarasota",
    date: "March 2026",
  },
  {
    quote: "We did a sunrise ceremony on Clearwater Beach and The Delightful Bean was there before the sun was. They built a menu around our story — and the custom 'M&D' cups were such a beautiful touch.",
    couple: "Maya & Devon",
    venue: "Sandpearl Resort · Clearwater Beach",
    date: "November 2025",
  },
  {
    quote: "Honestly the best espresso I've ever had — and that includes Italy. Our guests lined up three deep for the cold brew at the reception.",
    couple: "Caroline & Theo",
    venue: "Armature Works · Tampa",
    date: "January 2026",
  },
];

// Gallery images — editorial wedding/coffee photos
const GALLERY = [
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop", alt: "Latte art rosetta", caption: "The Delightful · Honey & sea salt", aspect: "3/4" },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop", alt: "Wedding florals", caption: "Powel Crosley Estate · Sarasota", aspect: "4/3" },
  { src: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop", alt: "Espresso shot", caption: "Espresso bar setup", aspect: "1/1" },
  { src: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1200&auto=format&fit=crop", alt: "Coffee with flowers", caption: "Bay Breeze · cold brew tonic", aspect: "3/4" },
  { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop", alt: "Espresso cup", caption: "Late-night espresso service", aspect: "4/3" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop", alt: "Couple", caption: "Olivia & James · Sarasota", aspect: "3/4" },
  { src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1200&auto=format&fit=crop", alt: "Pour over", caption: "V60 pour-over service", aspect: "1/1" },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop", alt: "Wedding venue", caption: "Sandpearl · Clearwater Beach", aspect: "4/3" },
  { src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1200&auto=format&fit=crop", alt: "Cold brew", caption: "Cold brew on tap", aspect: "3/4" },
  { src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200&auto=format&fit=crop", alt: "Wedding rings", caption: "Caroline & Theo · Armature Works", aspect: "1/1" },
  { src: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=1200&auto=format&fit=crop", alt: "Matcha", caption: "Ceremonial matcha latte", aspect: "4/3" },
  { src: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1200&auto=format&fit=crop", alt: "Wedding ceremony", caption: "Belleair Country Club", aspect: "3/4" },
];

const PRESS = [
  "Tampa Bay Bride Magazine",
  "Style Me Pretty",
  "Florida Wedding Style",
  "The Knot · Vendor of Choice",
  "Junebug Weddings",
];

Object.assign(window, { BRAND, DRINKS, SIGNATURES, PACKAGES, PROCESS, LOCATIONS, CITY_NOTES, TESTIMONIALS, GALLERY, PRESS });
