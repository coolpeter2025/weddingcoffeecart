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
    slug: "espresso",
    name: "Espresso",
    short: "Two-shot espresso drinks, pulled to order — every one available hot or iced.",
    image: "/img_4926.jpg",
    items: ["Espresso", "Americano", "Latte", "Cappuccino", "Mocha"],
  },
  {
    slug: "syrups",
    name: "Syrups",
    short: "House flavor syrups — add one to any espresso drink.",
    image: "/img_9656.jpg",
    items: ["French Vanilla", "Caramel", "White Chocolate", "Peppermint", "Lavender", "Simple Syrup", "Hazelnut", "Pistachio"],
  },
  {
    slug: "milks",
    name: "Milks",
    short: "Choose the milk for any drink on the menu.",
    image: "/img_1287.jpg",
    items: ["Whole", "Oat"],
  },
  {
    slug: "tea",
    name: "Tea",
    short: "Hot tea, brewed by the cup.",
    image: "/img_7328.jpg",
    items: ["Black", "Peach", "Peppermint", "Passion"],
  },
];

// Signature drinks — for editorial gallery on home
const SIGNATURES = [
  {
    name: "Pumpkin Patch Bliss",
    notes: "Two shots of espresso, your choice of milk & pumpkin syrup, served over ice.",
    image: "/img_9652.jpg",
  },
  {
    name: "Golden Caramel Cloud",
    notes: "Two shots of espresso, your choice of steamed milk & caramel syrup, topped with light foam.",
    image: "/img_9656.jpg",
  },
  {
    name: "Vanilla Velvet",
    notes: "Two shots of espresso, your choice of steamed milk & vanilla syrup.",
    image: "/img_2189.jpg",
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
    summary: "Our most-booked package — espresso and a signature drink for your reception.",
    includes: [
      "Two trained baristas",
      "Full espresso menu — hot & iced",
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
  { src: "/img_2189.jpg", alt: "Personalized coffee cart", caption: "Monica & Alexander · personalized bar", aspect: "3/4" },
  { src: "/img_1287.jpg", alt: "Coffee cart by the water", caption: "Waterfront cart service", aspect: "3/4" },
  { src: "/img_9652.jpg", alt: "Espresso machine and syrups", caption: "Pulled to order", aspect: "1/1" },
  { src: "/img_6902.jpg", alt: "Coffee bar at dusk", caption: "Blue hour on the bar", aspect: "3/4" },
  { src: "/img_7328.jpg", alt: "Coffee cart under a pavilion", caption: "Under the pavilion lights", aspect: "3/4" },
  { src: "/img_9424.jpg", alt: "Outdoor coffee cart", caption: "Open-air celebration", aspect: "1/1" },
  { src: "/img_6714.jpg", alt: "Waterfront wedding venue", caption: "Ceremony by the water", aspect: "3/4" },
  { src: "/img_4926.jpg", alt: "Espresso machine close-up", caption: "The espresso bar", aspect: "1/1" },
  { src: "/img_8432.jpg", alt: "Coffee cart under oak trees", caption: "Golden hour under the oaks", aspect: "3/4" },
  { src: "/img_9656.jpg", alt: "House syrup selection", caption: "House syrup selection", aspect: "3/4" },
  { src: "/img_5023.jpg", alt: "Baristas serving guests", caption: "Two baristas on site", aspect: "3/4" },
];

const PRESS = [
  "Tampa Bay Bride Magazine",
  "Style Me Pretty",
  "Florida Wedding Style",
  "The Knot · Vendor of Choice",
  "Junebug Weddings",
];

Object.assign(window, { BRAND, DRINKS, SIGNATURES, PACKAGES, PROCESS, LOCATIONS, CITY_NOTES, TESTIMONIALS, GALLERY, PRESS });
