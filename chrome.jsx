/* global React, BRAND, LOCATIONS */
const { useState, useEffect } = React;

// ── Logomark ──────────────────────────────────────────────
function Logomark({ size = 36, onDark = false }) {
  const color = onDark ? "var(--bone)" : "var(--ink)";
  return (
    <span style={{display:"inline-flex",alignItems:"center",gap:14}}>
      <span style={{
        display:"inline-flex",alignItems:"center",justifyContent:"center",
        width:size,height:size,
        border:`1px solid ${color}`,borderRadius:"50%",
        fontFamily:"var(--font-display)",fontStyle:"italic",fontWeight:400,
        fontSize:size*0.5,color:color,letterSpacing:"-0.02em",
        lineHeight:1,paddingBottom:2
      }}>db</span>
      <span style={{display:"flex",flexDirection:"column",lineHeight:1,whiteSpace:"nowrap"}}>
        <span style={{fontFamily:"var(--font-display)",fontSize:18,fontWeight:400,color:color,letterSpacing:"0.01em"}}>
          The <span style={{fontStyle:"italic",fontWeight:300}}>Delightful</span> Bean
        </span>
        <span style={{fontSize:9.5,letterSpacing:"0.28em",textTransform:"uppercase",color: onDark ? "rgba(250,247,241,0.55)" : "var(--muted)",marginTop:5,fontWeight:500}}>
          Tampa Bay · Wedding Coffee
        </span>
      </span>
    </span>
  );
}

// ── Header ────────────────────────────────────────────────
function Header({ route, onNavigate }) {
  const links = [
    { id: "home",      label: "Home" },
    { id: "about",     label: "About" },
    { id: "drinks",    label: "Drinks" },
    { id: "packages",  label: "Packages" },
    { id: "gallery",   label: "Gallery" },
    { id: "locations", label: "Areas" },
  ];
  const isHome = route === "home";

  // top utility bar visible on every route
  return (
    <header style={{position:"sticky",top:0,zIndex:50,background:"var(--bone)",borderBottom:"1px solid var(--sand)"}}>
      <div style={{background:"var(--ink)",color:"var(--bone)"}}>
        <div className="container" style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 32px",fontSize:11,letterSpacing:"0.16em",textTransform:"uppercase",fontWeight:500}}>
          <span style={{color:"rgba(250,247,241,0.7)"}}>Now booking Spring &amp; Fall 2026 weddings</span>
          <span style={{display:"flex",gap:24,alignItems:"center"}}>
            <a href={`tel:${BRAND.phoneTel}`} style={{color:"var(--bone)"}}>{BRAND.phone}</a>
            <span style={{color:"rgba(250,247,241,0.4)"}}>·</span>
            <a href={`mailto:${BRAND.email}`} style={{color:"rgba(250,247,241,0.7)"}}>{BRAND.email}</a>
          </span>
        </div>
      </div>
      <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"22px 32px"}}>
        <button onClick={() => onNavigate("home")} style={{background:"none",border:0,padding:0,cursor:"pointer"}}>
          <Logomark size={40}/>
        </button>
        <nav style={{display:"flex",alignItems:"center",gap:32,flexShrink:0}}>
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => onNavigate(l.id)}
              className={`nav-link ${route === l.id || (l.id === "locations" && route.startsWith("city:")) ? "is-active" : ""}`}
            >{l.label}</button>
          ))}
          <button onClick={() => onNavigate("inquire")} className="btn btn-ink" style={{padding:"14px 26px",minHeight:0,fontSize:11}}>
            Inquire
          </button>
        </nav>
      </div>
    </header>
  );
}

// ── Footer ────────────────────────────────────────────────
function Footer({ onNavigate }) {
  return (
    <footer style={{background:"var(--ink)",color:"var(--bone)"}}>
      <div className="container" style={{padding:"96px 32px 32px"}}>
        {/* Big editorial mark */}
        <div style={{display:"grid",gridTemplateColumns:"1.4fr 1fr 1fr 1fr",gap:48,paddingBottom:80,borderBottom:"1px solid rgba(250,247,241,0.12)"}}>
          <div>
            <div style={{marginBottom:24}}>
              <Logomark size={40} onDark/>
            </div>
            <p style={{fontFamily:"var(--font-display)",fontStyle:"italic",fontWeight:300,fontSize:24,lineHeight:1.4,color:"rgba(250,247,241,0.85)",maxWidth:380,marginBottom:24}}>
              "We don't bring a coffee cart to your wedding. We bring an espresso bar."
            </p>
            <p style={{fontSize:13,color:"rgba(250,247,241,0.55)",letterSpacing:"0.04em"}}>
              {BRAND.founded} &nbsp;·&nbsp; Tampa, Florida
            </p>
          </div>

          <div>
            <p className="eyebrow" style={{color:"rgba(250,247,241,0.45)",marginBottom:20}}>Visit</p>
            <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:12}}>
              {[
                ["home","Home"],
                ["about","About"],
                ["drinks","Drinks"],
                ["packages","Packages"],
                ["gallery","Gallery"],
                ["locations","Service Areas"],
                ["inquire","Inquire"],
              ].map(([id,l]) => (
                <li key={id}><button onClick={() => onNavigate(id)} style={{background:"none",border:0,padding:0,color:"rgba(250,247,241,0.85)",fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>{l}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow" style={{color:"rgba(250,247,241,0.45)",marginBottom:20}}>Where we go</p>
            <ul style={{listStyle:"none",padding:0,margin:0,display:"grid",gridTemplateColumns:"1fr",gap:10,fontSize:13.5,color:"rgba(250,247,241,0.85)"}}>
              {window.LOCATIONS.slice(0,8).map(l => (
                <li key={l.slug}><button onClick={() => onNavigate(`city:${l.slug}`)} style={{background:"none",border:0,padding:0,color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:13.5}}>{l.name}</button></li>
              ))}
              <li><button onClick={() => onNavigate("locations")} style={{background:"none",border:0,padding:0,color:"var(--honey)",cursor:"pointer",fontFamily:"inherit",fontSize:13.5,letterSpacing:"0.04em"}}>View all 21 service areas →</button></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow" style={{color:"rgba(250,247,241,0.45)",marginBottom:20}}>Get in touch</p>
            <p style={{fontFamily:"var(--font-display)",fontSize:26,lineHeight:1.15,color:"var(--bone)",marginBottom:16,whiteSpace:"nowrap"}}>
              <a href={`tel:${BRAND.phoneTel}`} style={{color:"var(--bone)"}}>{BRAND.phone}</a>
            </p>
            <p style={{fontSize:14,color:"rgba(250,247,241,0.85)",marginBottom:8}}>
              <a href={`mailto:${BRAND.email}`} style={{color:"inherit",borderBottom:"1px solid rgba(250,247,241,0.3)",paddingBottom:2}}>{BRAND.email}</a>
            </p>
            <div style={{display:"flex",gap:16,marginBottom:24,marginTop:16}}>
              <a href={BRAND.instagramUrl} target="_blank" rel="noopener" aria-label="Instagram" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:38,height:38,border:"1px solid rgba(250,247,241,0.25)",borderRadius:"50%",color:"rgba(250,247,241,0.85)",transition:"all 0.2s ease"}}
                 onMouseEnter={e => { e.currentTarget.style.background = "var(--bone)"; e.currentTarget.style.color = "var(--ink)"; e.currentTarget.style.borderColor = "var(--bone)"; }}
                 onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(250,247,241,0.85)"; e.currentTarget.style.borderColor = "rgba(250,247,241,0.25)"; }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
              </a>
              <a href={BRAND.facebookUrl} target="_blank" rel="noopener" aria-label="Facebook" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:38,height:38,border:"1px solid rgba(250,247,241,0.25)",borderRadius:"50%",color:"rgba(250,247,241,0.85)",transition:"all 0.2s ease"}}
                 onMouseEnter={e => { e.currentTarget.style.background = "var(--bone)"; e.currentTarget.style.color = "var(--ink)"; e.currentTarget.style.borderColor = "var(--bone)"; }}
                 onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(250,247,241,0.85)"; e.currentTarget.style.borderColor = "rgba(250,247,241,0.25)"; }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.24-1.46 1.49-1.46H17V4.45c-.27-.04-1.23-.12-2.34-.12-2.32 0-3.91 1.42-3.91 4.02v2.15H8.25v3h2.5V21h2.75z"/></svg>
              </a>
            </div>
            <button onClick={() => onNavigate("inquire")} className="btn btn-outline-paper">Begin Your Inquiry</button>
          </div>
        </div>

        <div style={{paddingTop:32,display:"flex",justifyContent:"space-between",fontSize:11.5,letterSpacing:"0.06em",color:"rgba(250,247,241,0.4)"}}>
          <span>© 2026 The Delightful Bean — Tampa Bay, Florida</span>
          <span>Insured · Licensed Mobile Food Vendor · Florida DBPR</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Logomark, Header, Footer });
