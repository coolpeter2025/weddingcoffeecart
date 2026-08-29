/* global React, BRAND, DRINKS, PACKAGES, LOCATIONS, CITY_NOTES, TESTIMONIALS, GALLERY, PROCESS, Hero, HomeIntro, DrinksIndex, SignatureDrinks, ProcessSteps, PullQuote, TestimonialsGrid, LocationsPreview, ClosingCTA */
const { useState: useStateP, useMemo: useMemoP } = React;

// ── HOME ──────────────────────────────────────────────────
function HomePage({ onNavigate }) {
  return (
    <div data-screen-label="01 Home">
      <Hero onNavigate={onNavigate}/>
      <HomeIntro/>
      <DrinksIndex onNavigate={onNavigate}/>
      <SignatureDrinks/>
      <PullQuote t={TESTIMONIALS[0]}/>
      <ProcessSteps/>
      <LocationsPreview onNavigate={onNavigate}/>
      <ClosingCTA onNavigate={onNavigate}/>
    </div>
  );
}

// ── Generic page hero ────────────────────────────────────
function PageHeader({ eyebrow, title, italic, intro }) {
  return (
    <section style={{background:"var(--bone)",padding:"100px 0 80px",borderBottom:"1px solid var(--sand)"}}>
      <div className="container-narrow" style={{textAlign:"center"}}>
        <p className="eyebrow" style={{marginBottom:32}}>{eyebrow}</p>
        <h1 className="d-h1" style={{fontSize:80,marginBottom:32}}>
          {title} {italic && <span style={{fontStyle:"italic",fontWeight:300}}>{italic}</span>}
        </h1>
        {intro && <p className="lead-serif" style={{maxWidth:680,margin:"0 auto"}}>{intro}</p>}
      </div>
    </section>
  );
}

// ── ABOUT ─────────────────────────────────────────────────
function AboutPage({ onNavigate }) {
  return (
    <div data-screen-label="02 About">
      <PageHeader
        eyebrow="The studio"
        title="A two-person studio"
        italic="with one beautiful obsession."
        intro="The Delightful Bean is a family-owned coffee studio in Tampa Bay. We pour at every wedding we book — ourselves, never a contractor."
      />

      {/* Editorial story block */}
      <section className="section section-paper">
        <div className="container">
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center"}}>
            <div style={{height:680}}>
              <img src="/img_5023.jpg"
                   alt="Barista serving guests" className="img-cover"/>
            </div>
            <div>
              <p className="eyebrow" style={{marginBottom:24}}>Our story</p>
              <h2 className="d-h2" style={{marginBottom:32}}>
                Family-owned. <span style={{fontStyle:"italic"}}>Tampa-built.</span>
              </h2>
              <p className="body-lg" style={{color:"var(--muted)",marginBottom:24}}>
                The Delightful Bean is family-owned and operated — and we mean it. The cart was built around our kitchen table. The menu was tested on our own family. Every wedding we book, we pour ourselves — never a sub, never a stranger.
              </p>
              <p className="body-lg" style={{color:"var(--muted)",marginBottom:24}}>
                At the heart of every wedding is the beginning of a new family. We're a family ourselves — and there's no greater honor than being trusted to share in that moment. A warm cup pressed into the hands of two people who've just become each other's home.
              </p>
              <p className="body-lg" style={{color:"var(--muted)"}}>
                We're small on purpose. Being a family business means we take a limited number of weddings each year — that's how we keep our standards, and why we ask you to inquire early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we believe — 3 column manifesto */}
      <section className="section section-cream">
        <div className="container">
          <div style={{textAlign:"center",marginBottom:80}}>
            <p className="eyebrow" style={{marginBottom:24}}>What we believe</p>
            <h2 className="d-h2">
              Three rules <span style={{fontStyle:"italic"}}>we never break.</span>
            </h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:48}}>
            {[
              { n:"01", t:"Single origin, every cup.", d:"We work exclusively with Bold Bean Coffee Roasters in Tampa — and we never serve a blend we wouldn't drink ourselves." },
              { n:"02", t:"Every menu, custom.", d:"We don't hand the same menu to every couple. Yours is built from a conversation — what you love, what you grew up with, what tells your story — finished with one or two signature drinks made just for the day." },
              { n:"03", t:"We arrive ninety minutes early.", d:"Every time. We set up quietly while the room is still being styled, and we break down without disrupting your send-off." },
            ].map(item => (
              <div key={item.n} style={{paddingTop:32,borderTop:"1px solid var(--linen)"}}>
                <p className="num-index" style={{marginBottom:24}}>{item.n}</p>
                <h3 className="d-h4" style={{fontSize:26,marginBottom:16}}>{item.t}</h3>
                <p className="body" style={{color:"var(--muted)"}}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps/>
      <PullQuote t={TESTIMONIALS[1]}/>
      <ClosingCTA onNavigate={onNavigate}/>
    </div>
  );
}

// ── DRINKS / Menu ─────────────────────────────────────────
function DrinksPage({ onNavigate }) {
  return (
    <div data-screen-label="03 Drinks">
      <PageHeader
        eyebrow="The Menu"
        title="What we"
        italic="pour."
        intro="A full third-wave espresso menu, plus a few quiet specialties — tea, hot chocolate, signature drinks built for your wedding. Pick and choose what you'd like; we'll build the rest of the menu with you."
      />

      <section className="section section-paper">
        <div className="container" style={{display:"flex",flexDirection:"column",gap:120}}>
          {DRINKS.map((d, i) => (
            <div key={d.slug} style={{display:"grid",gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",gap:80,alignItems:"center"}}>
              <div style={{order: i % 2 === 0 ? 0 : 1,height:520}}>
                <img src={d.image} alt={d.name} className="img-cover" loading="lazy"/>
              </div>
              <div style={{order: i % 2 === 0 ? 1 : 0,paddingRight: i % 2 === 0 ? 32 : 0,paddingLeft: i % 2 === 0 ? 0 : 32}}>
                <p className="eyebrow eyebrow--muted" style={{marginBottom:16}}>No. 0{i+1}</p>
                <h2 className="d-h3" style={{marginBottom:24,fontSize:44}}>{d.name}</h2>
                <p className="lead-serif" style={{marginBottom:32,fontSize:22}}>{d.short}</p>
                <ul style={{listStyle:"none",padding:0,margin:0,display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px 32px",borderTop:"1px solid var(--sand)",paddingTop:24}}>
                  {d.items.map(item => (
                    <li key={item} style={{fontFamily:"var(--font-display)",fontSize:18,color:"var(--ink-soft)",letterSpacing:"-0.01em"}}>· {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-cream">
        <div className="container-narrow" style={{textAlign:"center"}}>
          <p className="eyebrow" style={{marginBottom:24}}>Signature drinks</p>
          <h2 className="d-h2" style={{marginBottom:32}}>Tell us your <span style={{fontStyle:"italic"}}>story.</span></h2>
          <p className="body-lg" style={{color:"var(--muted)",marginBottom:48}}>
            Every wedding includes one or two custom signature drinks built around your story — your first date city, a grandparent's recipe, the season of your engagement. We've made a lavender latte for a couple who got engaged in Provence, a Vietnamese egg coffee for a bride's late father, and a salted caramel cold brew for a high-school-sweetheart pair.
          </p>
          <button onClick={() => onNavigate("inquire")} className="btn btn-ink">Begin your menu</button>
        </div>
      </section>

      <ClosingCTA onNavigate={onNavigate}/>
    </div>
  );
}

// ── PACKAGES ──────────────────────────────────────────────
function PackagesPage({ onNavigate }) {
  return (
    <div data-screen-label="04 Packages">
      <PageHeader
        eyebrow="Wedding packages"
        title="Three ways"
        italic="to celebrate."
        intro="Every wedding is custom — but most clients start from one of these three offerings. All packages include setup, service, and breakdown. Pricing on request."
      />

      <section className="section section-paper">
        <div className="container">
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:32}}>
            {PACKAGES.map(p => (
              <div key={p.name} style={{
                background: p.featured ? "var(--ink)" : "var(--paper)",
                color: p.featured ? "var(--bone)" : "var(--ink)",
                border: p.featured ? "1px solid var(--ink)" : "1px solid var(--sand)",
                padding:"56px 40px",
                display:"flex",flexDirection:"column",
                minHeight: 640,
              }}>
                {p.featured && (
                  <p style={{fontSize:11,letterSpacing:"0.22em",textTransform:"uppercase",color:"var(--honey)",fontWeight:500,marginBottom:24}}>
                    Most Booked
                  </p>
                )}
                {!p.featured && <div style={{height: 35}}/>}
                <h3 className="d-h3" style={{color: p.featured ? "var(--bone)" : "var(--ink)",fontSize:42,marginBottom:16}}>
                  {p.name}
                </h3>
                <div style={{display:"flex",gap:20,marginBottom:24,fontSize:12,letterSpacing:"0.16em",textTransform:"uppercase",color: p.featured ? "rgba(250,247,241,0.6)" : "var(--muted)",fontWeight:500}}>
                  <span>{p.duration}</span>
                  <span>·</span>
                  <span>{p.forCount}</span>
                </div>
                <p style={{fontFamily:"var(--font-display)",fontStyle:"italic",fontSize:18,fontWeight:300,marginBottom:32,color: p.featured ? "rgba(250,247,241,0.85)" : "var(--ink-soft)",lineHeight:1.5}}>
                  {p.summary}
                </p>
                <div style={{borderTop: p.featured ? "1px solid rgba(250,247,241,0.15)" : "1px solid var(--sand)",paddingTop:24,marginBottom:32}}>
                  <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:12}}>
                    {p.includes.map(item => (
                      <li key={item} style={{display:"flex",gap:10,fontSize:14,color: p.featured ? "rgba(250,247,241,0.85)" : "var(--ink-soft)",lineHeight:1.5}}>
                        <span style={{color: p.featured ? "var(--honey)" : "var(--espresso)"}}>—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{marginTop:"auto"}}>
                  <p style={{fontSize:12,letterSpacing:"0.16em",textTransform:"uppercase",color: p.featured ? "rgba(250,247,241,0.5)" : "var(--muted)",fontWeight:500,marginBottom:16}}>Investment by request</p>
                  <button
                    onClick={() => onNavigate("inquire")}
                    className={p.featured ? "btn btn-outline-paper" : "btn btn-ink"}
                    style={{width:"100%"}}
                  >Inquire</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-sm section-bone">
        <div className="container">
          <div style={{display:"grid",gridTemplateColumns:"1fr 1.5fr",gap:80,alignItems:"start"}}>
            <div>
              <p className="eyebrow" style={{marginBottom:24}}>Add-ons</p>
              <h2 className="d-h3">
                A few <span style={{fontStyle:"italic"}}>extras.</span>
              </h2>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px 48px"}}>
              {[
                ["Custom-printed cups", "Your monogram or wedding crest on every cup. Designed in-house."],
                ["Branded menu signage", "Hand-lettered chalkboard or printed menu cards to match your stationery."],
                ["Late-night service", "An espresso bar that re-opens after dinner — for the dance floor and send-off."],
                ["Ceramic for the head table", "Real porcelain for your bridal party. Included on All Day packages."],
                ["Bridal suite delivery", "Coffees delivered hot to the bridal and groom suites before the ceremony."],
                ["Welcome morning service", "A second appearance for your rehearsal brunch or welcome morning."],
              ].map(([t,d]) => (
                <div key={t} style={{paddingTop:20,borderTop:"1px solid var(--sand)"}}>
                  <p style={{fontFamily:"var(--font-display)",fontSize:22,color:"var(--ink)",marginBottom:8}}>{t}</p>
                  <p className="body-sm" style={{color:"var(--muted)"}}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PullQuote t={TESTIMONIALS[2]}/>
      <ClosingCTA onNavigate={onNavigate}/>
    </div>
  );
}

// ── GALLERY ───────────────────────────────────────────────
function GalleryPage({ onNavigate }) {
  const [filter, setFilter] = useStateP("all");
  // Display all images in a masonry-style grid using CSS columns
  return (
    <div data-screen-label="05 Gallery">
      <PageHeader
        eyebrow="The Gallery"
        title="A year in"
        italic="weddings."
        intro="Forty weddings, three roasters, one oak cart. A selection of moments from our 2025 and 2026 seasons."
      />

      <section className="section section-paper">
        <div className="container">
          <div style={{columns: 3, columnGap: 24}}>
            {GALLERY.map((g,i) => (
              <figure key={i} style={{margin:"0 0 24px",breakInside:"avoid",display:"block"}}>
                <div style={{background:"var(--cream)",aspectRatio: g.aspect,overflow:"hidden"}}>
                  <img src={g.src} alt={g.alt} className="img-cover" loading="lazy"/>
                </div>
                <figcaption style={{marginTop:12,fontSize:11,letterSpacing:"0.16em",textTransform:"uppercase",color:"var(--muted)",fontWeight:500}}>
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsGrid/>
      <ClosingCTA onNavigate={onNavigate}/>
    </div>
  );
}

// ── LOCATIONS index ──────────────────────────────────────
function LocationsPage({ onNavigate }) {
  // group by county
  const byCounty = useMemoP(() => {
    const m = {};
    LOCATIONS.forEach(l => { m[l.county] = m[l.county] || []; m[l.county].push(l); });
    return m;
  }, []);
  const counties = ["Hillsborough","Pinellas","Manatee","Sarasota","Pasco"];

  return (
    <div data-screen-label="06 Service Areas">
      <PageHeader
        eyebrow="Service areas"
        title="Tampa Bay"
        italic="& the Gulf Coast."
        intro="We serve 21 communities across five Florida counties — from Tarpon Springs in the north to Anna Maria Island in the south. No travel fees inside our service area."
      />

      <section className="section section-paper">
        <div className="container">
          <div style={{display:"flex",flexDirection:"column",gap:80}}>
            {counties.filter(c => byCounty[c]).map(county => (
              <div key={county}>
                <div style={{display:"grid",gridTemplateColumns:"240px 1fr",gap:48,alignItems:"start",paddingBottom:32,borderBottom:"1px solid var(--sand)"}}>
                  <div>
                    <p className="eyebrow" style={{marginBottom:12}}>County</p>
                    <h2 className="d-h3" style={{fontSize:40}}>{county}</h2>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"32px 24px"}}>
                    {byCounty[county].map(l => (
                      <button
                        key={l.slug}
                        onClick={() => onNavigate(`city:${l.slug}`)}
                        style={{textAlign:"left",background:"none",border:0,padding:0,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",gap:6,alignItems:"flex-start"}}
                      >
                        <span style={{fontFamily:"var(--font-display)",fontSize:26,color:"var(--ink)",letterSpacing:"-0.01em",lineHeight:1.1}}>{l.name}</span>
                        <span style={{fontSize:11,letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--espresso)",borderBottom:"1px solid var(--linen)",paddingBottom:2,fontWeight:500}}>View →</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA onNavigate={onNavigate}/>
    </div>
  );
}

// ── CITY page ────────────────────────────────────────────
function CityPage({ slug, onNavigate }) {
  const location = LOCATIONS.find(l => l.slug === slug);
  const notes = CITY_NOTES[slug] || { venues: [], blurb: "" };
  if (!location) return null;

  return (
    <div data-screen-label={`City · ${location.name}`}>
      {/* Breadcrumb back */}
      <section style={{background:"var(--bone)",padding:"24px 0",borderBottom:"1px solid var(--sand)"}}>
        <div className="container" style={{display:"flex",alignItems:"center",gap:12,fontSize:11,letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--muted)",fontWeight:500}}>
          <button onClick={() => onNavigate("home")} style={{background:"none",border:0,padding:0,cursor:"pointer",color:"inherit",fontFamily:"inherit",fontSize:"inherit",letterSpacing:"inherit",textTransform:"inherit",fontWeight:"inherit"}}>Delightful Bean</button>
          <span>/</span>
          <button onClick={() => onNavigate("locations")} style={{background:"none",border:0,padding:0,cursor:"pointer",color:"inherit",fontFamily:"inherit",fontSize:"inherit",letterSpacing:"inherit",textTransform:"inherit",fontWeight:"inherit"}}>Service Areas</button>
          <span>/</span>
          <span style={{color:"var(--ink)"}}>{location.name}</span>
        </div>
      </section>

      {/* Hero */}
      <section style={{background:"var(--bone)",padding:"80px 0 100px"}}>
        <div className="container">
          <div style={{display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:80,alignItems:"end"}}>
            <div>
              <p className="eyebrow" style={{marginBottom:32}}>{location.county} County · Florida</p>
              <h1 className="d-hero" style={{fontSize:104,marginBottom:32}}>
                Wedding coffee in<br/>
                <span style={{fontStyle:"italic",fontWeight:300,color:"var(--espresso)"}}>{location.name}.</span>
              </h1>
              <p className="lead-serif" style={{maxWidth:580,marginBottom:40}}>
                {notes.blurb}
              </p>
              <div style={{display:"flex",gap:20,alignItems:"center"}}>
                <button onClick={() => onNavigate("inquire")} className="btn btn-ink">Check {location.name} Availability</button>
              </div>
            </div>
            <div style={{position:"relative",height:540}}>
              <img src={`/img_${slug === "tampa" ? "1287" : slug === "sarasota" ? "2189" : slug.includes("beach") ? "6714" : "9424"}.jpg`}
                   alt={location.name} className="img-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* Venues we know */}
      {notes.venues.length > 0 && (
        <section className="section section-paper">
          <div className="container">
            <div style={{display:"grid",gridTemplateColumns:"1fr 1.5fr",gap:80,alignItems:"start"}}>
              <div>
                <p className="eyebrow" style={{marginBottom:24}}>Local venues</p>
                <h2 className="d-h2">
                  We know <span style={{fontStyle:"italic"}}>{location.name}.</span>
                </h2>
                <p className="body-lg" style={{color:"var(--muted)",marginTop:24,maxWidth:380}}>
                  These are venues we've poured at — or have permits and load-in plans on file for. New venue? We'll handle the logistics.
                </p>
              </div>
              <div>
                <div style={{borderTop:"1px solid var(--sand)"}}>
                  {notes.venues.map((v,i) => (
                    <div key={v} style={{padding:"24px 0",borderBottom:"1px solid var(--sand)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                      <div style={{display:"flex",alignItems:"baseline",gap:20}}>
                        <span style={{fontFamily:"var(--font-display)",fontStyle:"italic",fontWeight:300,fontSize:18,color:"var(--honey)"}}>0{i+1}</span>
                        <span style={{fontFamily:"var(--font-display)",fontSize:28,color:"var(--ink)",letterSpacing:"-0.01em"}}>{v}</span>
                      </div>
                      <span style={{fontSize:11,letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--muted)",fontWeight:500}}>{location.name}, FL</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Local logistics */}
      <section className="section-sm section-cream">
        <div className="container">
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:48}}>
            {[
              { t:"No travel fees", d:`${location.name} is inside our standard service area. We arrive 90 minutes early and break down quietly.` },
              { t:"Permits & insurance", d:"Florida DBPR licensed mobile food vendor with $2M event liability. We file paperwork on your behalf when venues require it." },
              { t:"On-site setup", d:"Our cart needs 8×6 feet and one standard outlet. We bring water, ice, and a custom-fitted bar mat to protect your floor." },
            ].map(item => (
              <div key={item.t} style={{paddingTop:24,borderTop:"1px solid var(--linen)"}}>
                <h3 className="d-h4" style={{fontSize:22,marginBottom:12}}>{item.t}</h3>
                <p className="body-sm" style={{color:"var(--muted)"}}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby cities */}
      <section className="section-sm section-paper">
        <div className="container">
          <div style={{textAlign:"center",marginBottom:48}}>
            <p className="eyebrow" style={{marginBottom:20}}>Also serving nearby</p>
            <h2 className="d-h3">
              Other <span style={{fontStyle:"italic"}}>{location.county} County</span> weddings.
            </h2>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:12}}>
            {LOCATIONS.filter(l => l.county === location.county && l.slug !== slug).map(l => (
              <button key={l.slug} onClick={() => onNavigate(`city:${l.slug}`)} className="chip">{l.name}</button>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA onNavigate={onNavigate}/>
    </div>
  );
}

Object.assign(window, { HomePage, AboutPage, DrinksPage, PackagesPage, GalleryPage, LocationsPage, CityPage, PageHeader });
