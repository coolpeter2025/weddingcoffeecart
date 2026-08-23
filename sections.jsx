/* global React, BRAND, DRINKS, SIGNATURES, PROCESS, TESTIMONIALS, PRESS, LOCATIONS, GALLERY */
const { useState: useState_s, useEffect: useEffect_s } = React;

// ── HERO ─────────────────────────────────────────────────
function Hero({ onNavigate }) {
  return (
    <section style={{background:"var(--bone)",position:"relative",overflow:"hidden"}}>
      <div className="container" style={{padding:"100px 32px 120px"}}>
        <div style={{display:"grid",gridTemplateColumns:"1.05fr 0.95fr",gap:80,alignItems:"end"}}>
          {/* Left — editorial type column */}
          <div>
            <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:36}}>
              <span style={{width:36,height:1,background:"var(--ink)"}}/>
              <span className="eyebrow" style={{color:"var(--ink)"}}>{BRAND.founded} · Tampa, Florida</span>
            </div>

            <h1 className="d-hero" style={{marginBottom:32}}>
              The wedding<br/>
              <span style={{fontStyle:"italic",fontWeight:300,color:"var(--espresso)"}}>coffee bar,</span><br/>
              re-imagined.
            </h1>

            <p className="lead-serif" style={{maxWidth:560,marginBottom:48}}>
              An espresso-trained team, a single-origin menu, and one hand-built oak cart — booked for the most thoughtfully designed weddings in Tampa Bay.
            </p>

            <div style={{display:"flex",gap:16,alignItems:"center",flexWrap:"wrap"}}>
              <button onClick={() => onNavigate("inquire")} className="btn btn-ink">Begin Your Inquiry</button>
              <button onClick={() => onNavigate("packages")} className="cta-arrow">View Packages →</button>
            </div>
          </div>

          {/* Right — image composition */}
          <div style={{position:"relative",height:680}}>
            <div style={{position:"absolute",inset:0,top:60,right:0,width:"82%",height:"100%"}}>
              <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop"
                   alt="Latte art" className="img-cover"/>
            </div>
            {/* Small float */}
            <div style={{position:"absolute",left:0,bottom:0,width:"42%",height:"45%",background:"var(--cream)"}}>
              <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=900&auto=format&fit=crop"
                   alt="Wedding florals" className="img-cover"/>
            </div>
            {/* Caption block over the gap */}
            <div style={{position:"absolute",left:"43%",bottom:24,width:"36%"}}>
              <p className="eyebrow" style={{marginBottom:6}}>Pictured</p>
              <p className="body-sm" style={{color:"var(--ink-soft)",lineHeight:1.5}}>The Delightful — espresso with honey, vanilla bean, and a pinch of sea salt.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee-style trust bar */}
      <div style={{borderTop:"1px solid var(--sand)",borderBottom:"1px solid var(--sand)",background:"var(--paper)"}}>
        <div className="container" style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 32px",fontSize:11,letterSpacing:"0.22em",textTransform:"uppercase",color:"var(--muted)",fontWeight:500}}>
          <span>Featured in</span>
          {PRESS.map((p,i) => (
            <span key={i} style={{fontFamily:"var(--font-display)",fontStyle:"italic",fontSize:18,letterSpacing:"0.02em",color:"var(--ink-soft)",textTransform:"none",fontWeight:400}}>{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── INTRO / about excerpt ────────────────────────────────
function HomeIntro() {
  return (
    <section style={{background:"var(--paper)",padding:"140px 0"}}>
      <div className="container-narrow" style={{textAlign:"center"}}>
        <p className="eyebrow" style={{marginBottom:36}}>A note from the studio</p>
        <h2 className="d-h2" style={{marginBottom:40}}>
          We started The Delightful Bean because every wedding deserves <span style={{fontStyle:"italic"}}>coffee worth pausing for</span>.
        </h2>
        <p className="body-lg" style={{maxWidth:680,margin:"0 auto",color:"var(--muted)"}}>
          Founded by two Tampa baristas after years on third-wave espresso bars, we believe the coffee at your wedding should taste as considered as the florals — and the cart should look the part. Hand-built oak, brass fittings, real ceramic for the head table, compostable for the dance floor.
        </p>
      </div>
    </section>
  );
}

// ── SERVICES (drinks index, list-style — editorial) ──────
function DrinksIndex({ onNavigate }) {
  const [hoverIdx, setHoverIdx] = useState_s(null);
  return (
    <section className="section section-bone">
      <div className="container">
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,marginBottom:80,alignItems:"end"}}>
          <div>
            <p className="eyebrow" style={{marginBottom:24}}>What we pour</p>
            <h2 className="d-h2" style={{maxWidth:540}}>
              A full third-wave menu, <span style={{fontStyle:"italic"}}>built for your day.</span>
            </h2>
          </div>
          <p className="body-lg" style={{color:"var(--muted)",maxWidth:480,justifySelf:"end"}}>
            From the espresso bar to late-night cold brew on tap. Every menu is custom — choose what you love, leave what you don't, and we'll add one or two signature drinks built around your story.
          </p>
        </div>

        {/* Editorial list */}
        <div>
          {DRINKS.map((d, i) => (
            <div
              key={d.slug}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
              onClick={() => onNavigate("drinks")}
              style={{
                display:"grid",gridTemplateColumns:"60px 1.3fr 1.3fr 1fr 32px",
                gap:32,alignItems:"center",
                padding:"36px 0",
                borderTop:"1px solid var(--sand)",
                borderBottom: i === DRINKS.length-1 ? "1px solid var(--sand)" : "0",
                cursor:"pointer",
                transition:"background 0.3s ease",
                background: hoverIdx === i ? "var(--cream)" : "transparent",
                marginLeft: hoverIdx === i ? -16 : 0,
                marginRight: hoverIdx === i ? -16 : 0,
                paddingLeft: hoverIdx === i ? 16 : 0,
                paddingRight: hoverIdx === i ? 16 : 0,
              }}
            >
              <span className="num-index" style={{color: hoverIdx === i ? "var(--espresso)" : "var(--honey)"}}>0{i+1}</span>
              <h3 className="d-h4" style={{fontSize:32}}>{d.name}</h3>
              <p className="body" style={{color:"var(--muted)"}}>{d.short}</p>
              <p className="body-sm" style={{color:"var(--ink-soft)",fontFamily:"var(--font-display)",fontStyle:"italic",fontSize:16,fontWeight:300}}>
                {d.items.slice(0,3).join(" · ")}…
              </p>
              <span style={{fontSize:24,color:"var(--ink)",transform: hoverIdx === i ? "translateX(6px)" : "none",transition:"transform 0.25s ease"}}>→</span>
            </div>
          ))}
        </div>

        <div style={{textAlign:"center",marginTop:64}}>
          <button onClick={() => onNavigate("drinks")} className="btn btn-outline">View the full menu</button>
        </div>
      </div>
    </section>
  );
}

// ── SIGNATURE DRINKS — 3-up editorial gallery ────────────
function SignatureDrinks() {
  return (
    <section className="section section-cream">
      <div className="container">
        <div style={{textAlign:"center",marginBottom:80,maxWidth:680,margin:"0 auto 80px"}}>
          <p className="eyebrow" style={{marginBottom:24}}>House Signatures</p>
          <h2 className="d-h2">
            Drinks built around <span style={{fontStyle:"italic"}}>a story.</span>
          </h2>
          <p className="body-lg" style={{color:"var(--muted)",marginTop:24}}>
            Every wedding gets one or two custom signature drinks. Here are three favorites we've poured this season.
          </p>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:48}}>
          {SIGNATURES.map((s, i) => (
            <figure key={s.name} style={{margin:0,display:"flex",flexDirection:"column",gap:24,marginTop: i === 1 ? 0 : 48}}>
              <div className="aspect-3x4" style={{overflow:"hidden",background:"var(--sand)"}}>
                <img src={s.image} alt={s.name} className="img-cover" loading="lazy"/>
              </div>
              <figcaption>
                <p className="eyebrow eyebrow--muted" style={{marginBottom:10}}>No. 0{i+1}</p>
                <h3 className="d-h4" style={{fontSize:30,marginBottom:8}}>{s.name}</h3>
                <p className="body-sm" style={{fontFamily:"var(--font-display)",fontStyle:"italic",fontSize:16,fontWeight:300,color:"var(--ink-soft)"}}>{s.notes}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── PROCESS ───────────────────────────────────────────────
function ProcessSteps() {
  return (
    <section className="section section-paper">
      <div className="container">
        <div style={{textAlign:"center",marginBottom:80}}>
          <p className="eyebrow" style={{marginBottom:24}}>How it works</p>
          <h2 className="d-h2" style={{maxWidth:780,margin:"0 auto"}}>
            Three steps, three conversations, <span style={{fontStyle:"italic"}}>one beautiful morning.</span>
          </h2>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:32}}>
          {PROCESS.map((s, i) => (
            <div key={s.n} style={{position:"relative",paddingTop:32,borderTop:"1px solid var(--linen)"}}>
              <p className="num-index" style={{fontSize:42,marginBottom:24}}>{s.n}</p>
              <h3 className="d-h4" style={{fontSize:24,marginBottom:14}}>{s.title}</h3>
              <p className="body-sm" style={{color:"var(--muted)",lineHeight:1.65}}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── PULL QUOTE / single testimonial ──────────────────────
function PullQuote({ t }) {
  return (
    <section className="section section-ink" style={{padding:"160px 0"}}>
      <div className="container-narrow" style={{textAlign:"center"}}>
        <p className="eyebrow" style={{color:"var(--honey)",marginBottom:48}}>From our couples</p>
        <p style={{fontFamily:"var(--font-display)",fontWeight:300,fontStyle:"italic",fontSize:42,lineHeight:1.3,color:"var(--bone)",letterSpacing:"-0.01em",marginBottom:56}}>
          "{t.quote}"
        </p>
        <div style={{display:"inline-flex",flexDirection:"column",alignItems:"center"}}>
          <div style={{width:32,height:1,background:"rgba(250,247,241,0.4)",marginBottom:20}}/>
          <p style={{fontFamily:"var(--font-display)",fontSize:22,color:"var(--bone)",marginBottom:6}}>{t.couple}</p>
          <p style={{fontSize:12,letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(250,247,241,0.55)",fontWeight:500}}>{t.venue}</p>
        </div>
      </div>
    </section>
  );
}

// ── Testimonials grid (3-up) ─────────────────────────────
function TestimonialsGrid() {
  return (
    <section className="section section-paper">
      <div className="container">
        <div style={{textAlign:"center",marginBottom:80}}>
          <p className="eyebrow" style={{marginBottom:24}}>Reviews</p>
          <h2 className="d-h2">
            Stories from <span style={{fontStyle:"italic"}}>our couples.</span>
          </h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:48}}>
          {TESTIMONIALS.map((t,i) => (
            <div key={i} style={{paddingTop:32,borderTop:"1px solid var(--linen)"}}>
              <p style={{fontFamily:"var(--font-display)",fontStyle:"italic",fontSize:22,lineHeight:1.45,color:"var(--ink-soft)",fontWeight:300,marginBottom:32}}>
                "{t.quote}"
              </p>
              <p style={{fontFamily:"var(--font-display)",fontSize:18,color:"var(--ink)",marginBottom:4}}>{t.couple}</p>
              <p style={{fontSize:11.5,letterSpacing:"0.16em",textTransform:"uppercase",color:"var(--muted)",fontWeight:500,marginBottom:4}}>{t.venue}</p>
              <p style={{fontSize:12,color:"var(--muted-2)"}}>{t.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── LOCATIONS preview (home) ─────────────────────────────
function LocationsPreview({ onNavigate }) {
  const featured = LOCATIONS.slice(0, 12);
  return (
    <section className="section section-bone">
      <div className="container">
        <div style={{display:"grid",gridTemplateColumns:"1fr 1.2fr",gap:80,marginBottom:64,alignItems:"end"}}>
          <div>
            <p className="eyebrow" style={{marginBottom:24}}>Where we travel</p>
            <h2 className="d-h2">
              Tampa Bay <span style={{fontStyle:"italic"}}>& the coast.</span>
            </h2>
          </div>
          <p className="body-lg" style={{color:"var(--muted)",maxWidth:520,justifySelf:"end"}}>
            We're based in Tampa and travel the Gulf Coast from Tarpon Springs to Anna Maria Island. No travel fees within our service area.
          </p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",borderTop:"1px solid var(--sand)"}}>
          {featured.map((l, i) => (
            <button
              key={l.slug}
              onClick={() => onNavigate(`city:${l.slug}`)}
              style={{
                textAlign:"left",background:"none",border:0,padding:"28px 0",cursor:"pointer",fontFamily:"inherit",
                borderBottom:"1px solid var(--sand)",
                borderRight: (i % 4 !== 3) ? "1px solid var(--sand)" : "0",
                paddingLeft: (i % 4 !== 0) ? 32 : 0,
                paddingRight: 16,
                transition:"background 0.2s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--cream)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <p style={{fontFamily:"var(--font-display)",fontSize:24,color:"var(--ink)",marginBottom:6,letterSpacing:"-0.01em"}}>{l.name}</p>
              <p style={{fontSize:11,letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--muted)",fontWeight:500}}>{l.county} County</p>
            </button>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:56}}>
          <button onClick={() => onNavigate("locations")} className="btn btn-outline">View all 21 service areas</button>
        </div>
      </div>
    </section>
  );
}

// ── CLOSING CTA ──────────────────────────────────────────
function ClosingCTA({ onNavigate }) {
  return (
    <section style={{background:"var(--cream)",padding:"160px 0",position:"relative",overflow:"hidden"}}>
      <div className="container" style={{position:"relative",zIndex:2}}>
        <div style={{display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:80,alignItems:"center"}}>
          <div>
            <p className="eyebrow" style={{marginBottom:32}}>Begin</p>
            <h2 className="d-h1" style={{marginBottom:32,fontSize:80}}>
              Let's make<br/>
              <span style={{fontStyle:"italic",fontWeight:300}}>your morning</span><br/>
              beautiful.
            </h2>
            <p className="body-lg" style={{color:"var(--muted)",maxWidth:480,marginBottom:48}}>
              Share your date and venue and we'll respond within one business day with availability and a custom proposal.
            </p>
            <div style={{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"}}>
              <button onClick={() => onNavigate("inquire")} className="btn btn-ink">Begin Your Inquiry</button>
              <a href={`tel:${BRAND.phoneTel}`} className="cta-arrow">{BRAND.phone}</a>
            </div>
          </div>
          <div style={{position:"relative",height:520}}>
            <div style={{position:"absolute",inset:0}}>
              <img src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1200&auto=format&fit=crop"
                   alt="Wedding setup" className="img-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  Hero, HomeIntro, DrinksIndex, SignatureDrinks, ProcessSteps,
  PullQuote, TestimonialsGrid, LocationsPreview, ClosingCTA
});
