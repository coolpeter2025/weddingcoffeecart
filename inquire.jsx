/* global React, BRAND, PACKAGES, LOCATIONS, DRINKS, PageHeader */
const { useState: useStateB } = React;

function InquirePage({ onNavigate }) {
  const [step, setStep] = useStateB(1);
  const [data, setData] = useStateB({
    weddingDate: "",
    guests: "",
    venue: "",
    city: "",
    packageChoice: "",
    drinks: [],
    signature: "",
    firstName: "",
    lastName: "",
    partnerName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [confirmationNumber, setConfirmationNumber] = useStateB(null);

  const set = (k, v) => setData(d => ({ ...d, [k]: v }));
  const toggleDrink = (slug) => {
    setData(d => ({ ...d, drinks: d.drinks.includes(slug) ? d.drinks.filter(s => s !== slug) : [...d.drinks, slug] }));
  };

  const totalSteps = 4;
  const canAdvance = (() => {
    if (step === 1) return data.weddingDate && data.guests && data.city;
    if (step === 2) return data.packageChoice;
    if (step === 3) return data.drinks.length > 0;
    if (step === 4) return data.firstName && data.email && data.phone;
    return false;
  })();

  const submit = (e) => {
    e.preventDefault();
    if (!canAdvance) return;
    // Generate a fake confirmation number
    const num = "SB-" + Math.random().toString(36).slice(2,8).toUpperCase();
    setConfirmationNumber(num);
  };

  // Confirmation
  if (confirmationNumber) {
    return (
      <div data-screen-label="07 Inquire · Submitted">
        <section style={{background:"var(--bone)",padding:"120px 0 160px",minHeight:"70vh"}}>
          <div className="container-tight" style={{textAlign:"center"}}>
            <p className="eyebrow" style={{marginBottom:32,color:"var(--honey)"}}>Received with thanks</p>
            <h1 className="d-h1" style={{fontSize:72,marginBottom:32}}>
              Your inquiry is <span style={{fontStyle:"italic",fontWeight:300}}>in our hands.</span>
            </h1>
            <p className="lead-serif" style={{marginBottom:56}}>
              Thank you, {data.firstName}. We'll reply within one business day with availability for your {new Date(data.weddingDate).toLocaleDateString("en-US", {month:"long",day:"numeric",year:"numeric"})} wedding, plus a custom proposal for the {PACKAGES.find(p => p.name === data.packageChoice)?.name || "package"} you selected.
            </p>
            <div style={{display:"inline-flex",flexDirection:"column",gap:16,padding:"32px 48px",border:"1px solid var(--sand)",background:"var(--paper)",marginBottom:48}}>
              <p className="eyebrow eyebrow--muted">Confirmation</p>
              <p style={{fontFamily:"var(--font-display)",fontSize:32,letterSpacing:"0.04em",color:"var(--ink)"}}>{confirmationNumber}</p>
              <p className="body-sm">Reference this number in any reply or call.</p>
            </div>
            <div style={{display:"flex",gap:16,justifyContent:"center"}}>
              <button onClick={() => onNavigate("home")} className="btn btn-outline">Back to Home</button>
              <button onClick={() => onNavigate("gallery")} className="btn btn-ink">Browse the Gallery</button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div data-screen-label="07 Inquire">
      <PageHeader
        eyebrow="Begin your inquiry"
        title="Let's start"
        italic="with a date."
        intro="A few quick questions. We'll respond within one business day with availability and a custom proposal — no obligation, no pressure."
      />

      <section className="section section-paper" style={{paddingTop:64}}>
        <div className="container-narrow">
          {/* Step indicator */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:64}}>
            {[1,2,3,4].map(s => (
              <button
                key={s}
                onClick={() => s < step && setStep(s)}
                style={{
                  background:"none",border:0,padding:0,cursor: s < step ? "pointer" : "default",fontFamily:"inherit",textAlign:"left",
                  display:"flex",flexDirection:"column",gap:10,
                }}
              >
                <div style={{height:2,background: s <= step ? "var(--ink)" : "var(--sand)",transition:"background 0.3s"}}/>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline"}}>
                  <span style={{fontFamily:"var(--font-display)",fontStyle:"italic",fontWeight:300,fontSize:18,color: s <= step ? "var(--ink)" : "var(--muted-2)"}}>0{s}</span>
                  <span style={{fontSize:11,letterSpacing:"0.16em",textTransform:"uppercase",color: s <= step ? "var(--ink)" : "var(--muted-2)",fontWeight:500}}>
                    {["The Day","Package","Menu","About You"][s-1]}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <form onSubmit={submit}>
            {/* Step 1 — date, guests, venue */}
            {step === 1 && (
              <div style={{display:"flex",flexDirection:"column",gap:48}}>
                <div>
                  <h2 className="d-h3" style={{marginBottom:12}}>
                    Tell us about <span style={{fontStyle:"italic"}}>the day.</span>
                  </h2>
                  <p className="body-lg" style={{color:"var(--muted)"}}>The basics — we'll check availability against this date first.</p>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48}}>
                  <div className="field">
                    <label className="field-label">Wedding Date</label>
                    <input className="field-input" type="date" value={data.weddingDate} onChange={e => set("weddingDate", e.target.value)} required/>
                  </div>
                  <div className="field">
                    <label className="field-label">Estimated Guest Count</label>
                    <select className="field-select" value={data.guests} onChange={e => set("guests", e.target.value)} required>
                      <option value="">Select an estimate</option>
                      <option>Under 50 (intimate)</option>
                      <option>50–100</option>
                      <option>100–150</option>
                      <option>150–200</option>
                      <option>200–300</option>
                      <option>300+</option>
                    </select>
                  </div>
                  <div className="field">
                    <label className="field-label">City</label>
                    <select className="field-select" value={data.city} onChange={e => set("city", e.target.value)} required>
                      <option value="">Select your city</option>
                      {LOCATIONS.map(l => <option key={l.slug} value={l.name}>{l.name}, FL</option>)}
                      <option value="other">Not listed — tell us in notes</option>
                    </select>
                  </div>
                  <div className="field">
                    <label className="field-label">Venue (if confirmed)</label>
                    <input className="field-input" placeholder="The Vinoy, Sandpearl, etc." value={data.venue} onChange={e => set("venue", e.target.value)}/>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 — package */}
            {step === 2 && (
              <div style={{display:"flex",flexDirection:"column",gap:40}}>
                <div>
                  <h2 className="d-h3" style={{marginBottom:12}}>
                    Choose a <span style={{fontStyle:"italic"}}>starting point.</span>
                  </h2>
                  <p className="body-lg" style={{color:"var(--muted)"}}>You'll be able to customize anything later — this just helps us scope the proposal.</p>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
                  {PACKAGES.map(p => {
                    const active = data.packageChoice === p.name;
                    return (
                      <button
                        type="button"
                        key={p.name}
                        onClick={() => set("packageChoice", p.name)}
                        style={{
                          textAlign:"left",cursor:"pointer",fontFamily:"inherit",
                          background: active ? "var(--ink)" : "var(--paper)",
                          color: active ? "var(--bone)" : "var(--ink)",
                          border: active ? "1px solid var(--ink)" : "1px solid var(--sand)",
                          padding:"36px 28px",
                          transition:"all 0.2s",
                          display:"flex",flexDirection:"column",gap:16,
                        }}
                      >
                        <p style={{fontSize:11,letterSpacing:"0.22em",textTransform:"uppercase",fontWeight:500,color: active ? "var(--honey)" : "var(--muted)"}}>{p.duration} · {p.forCount}</p>
                        <h3 className="d-h4" style={{fontSize:30,color: active ? "var(--bone)" : "var(--ink)"}}>{p.name}</h3>
                        <p style={{fontFamily:"var(--font-display)",fontStyle:"italic",fontWeight:300,fontSize:16,lineHeight:1.5,color: active ? "rgba(250,247,241,0.85)" : "var(--muted)"}}>{p.summary}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3 — drink categories + signature */}
            {step === 3 && (
              <div style={{display:"flex",flexDirection:"column",gap:40}}>
                <div>
                  <h2 className="d-h3" style={{marginBottom:12}}>
                    What should we <span style={{fontStyle:"italic"}}>pour?</span>
                  </h2>
                  <p className="body-lg" style={{color:"var(--muted)"}}>Choose any combination — we'll build the full menu with you in the design phase.</p>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
                  {DRINKS.map(d => {
                    const active = data.drinks.includes(d.slug);
                    return (
                      <button
                        type="button"
                        key={d.slug}
                        onClick={() => toggleDrink(d.slug)}
                        style={{
                          textAlign:"left",cursor:"pointer",fontFamily:"inherit",
                          background: active ? "var(--cream)" : "transparent",
                          border: active ? "1px solid var(--ink)" : "1px solid var(--sand)",
                          padding:"28px 24px",
                          transition:"all 0.2s",
                          display:"flex",flexDirection:"column",gap:8,
                          position:"relative",
                        }}
                      >
                        <span style={{position:"absolute",top:20,right:20,width:18,height:18,border:"1px solid var(--ink)",borderRadius:"50%",background: active ? "var(--ink)" : "transparent",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--bone)",fontSize:10}}>{active ? "✓" : ""}</span>
                        <h3 style={{fontFamily:"var(--font-display)",fontSize:24,letterSpacing:"-0.01em",color:"var(--ink)"}}>{d.name}</h3>
                        <p className="body-sm" style={{color:"var(--muted)"}}>{d.short}</p>
                      </button>
                    );
                  })}
                </div>
                <div className="field">
                  <label className="field-label">A signature drink idea? (Optional)</label>
                  <textarea
                    className="field-textarea"
                    rows={3}
                    placeholder="Your first date city, a grandparent's recipe, the season of your engagement — anything we should know."
                    value={data.signature}
                    onChange={e => set("signature", e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Step 4 — contact */}
            {step === 4 && (
              <div style={{display:"flex",flexDirection:"column",gap:40}}>
                <div>
                  <h2 className="d-h3" style={{marginBottom:12}}>
                    A little <span style={{fontStyle:"italic"}}>about you.</span>
                  </h2>
                  <p className="body-lg" style={{color:"var(--muted)"}}>So we can send your proposal.</p>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48}}>
                  <div className="field">
                    <label className="field-label">First Name</label>
                    <input className="field-input" placeholder="Your name" value={data.firstName} onChange={e => set("firstName", e.target.value)} required/>
                  </div>
                  <div className="field">
                    <label className="field-label">Last Name</label>
                    <input className="field-input" placeholder="Surname" value={data.lastName} onChange={e => set("lastName", e.target.value)}/>
                  </div>
                  <div className="field">
                    <label className="field-label">Partner's First Name</label>
                    <input className="field-input" placeholder="Optional" value={data.partnerName} onChange={e => set("partnerName", e.target.value)}/>
                  </div>
                  <div className="field">
                    <label className="field-label">Phone</label>
                    <input className="field-input" type="tel" placeholder="(813) 555-0142" value={data.phone} onChange={e => set("phone", e.target.value)} required/>
                  </div>
                  <div className="field" style={{gridColumn:"span 2"}}>
                    <label className="field-label">Email</label>
                    <input className="field-input" type="email" placeholder="you@example.com" value={data.email} onChange={e => set("email", e.target.value)} required/>
                  </div>
                  <div className="field" style={{gridColumn:"span 2"}}>
                    <label className="field-label">Anything else we should know? (Optional)</label>
                    <textarea
                      className="field-textarea"
                      rows={4}
                      placeholder="Wedding planner, dietary needs, venue questions, timing concerns…"
                      value={data.notes}
                      onChange={e => set("notes", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Footer nav */}
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:80,paddingTop:32,borderTop:"1px solid var(--sand)"}}>
              <button
                type="button"
                onClick={() => step > 1 && setStep(step - 1)}
                disabled={step === 1}
                className="cta-arrow"
                style={{opacity: step === 1 ? 0.3 : 1,cursor: step === 1 ? "default" : "pointer",border:0,background:"none",padding:0}}
              >
                ← Back
              </button>
              <span className="body-sm" style={{color:"var(--muted)"}}>Step {step} of {totalSteps}</span>
              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={() => canAdvance && setStep(step + 1)}
                  disabled={!canAdvance}
                  className="btn btn-ink"
                  style={{opacity: canAdvance ? 1 : 0.3,cursor: canAdvance ? "pointer" : "default"}}
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-ink"
                  disabled={!canAdvance}
                  style={{opacity: canAdvance ? 1 : 0.3}}
                >
                  Send Inquiry
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      <section className="section-sm section-cream">
        <div className="container">
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:48,textAlign:"center"}}>
            <div>
              <p className="eyebrow eyebrow--muted" style={{marginBottom:10}}>By Phone</p>
              <p style={{fontFamily:"var(--font-display)",fontSize:28}}>
                <a href={`tel:${BRAND.phoneTel}`}>{BRAND.phone}</a>
              </p>
              <p className="body-sm" style={{marginTop:8}}>Mon–Fri · 9 to 5</p>
            </div>
            <div>
              <p className="eyebrow eyebrow--muted" style={{marginBottom:10}}>By Email</p>
              <p style={{fontFamily:"var(--font-display)",fontSize:24}}>
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              </p>
              <p className="body-sm" style={{marginTop:8}}>One-business-day replies</p>
            </div>
            <div>
              <p className="eyebrow eyebrow--muted" style={{marginBottom:10}}>Studio</p>
              <p style={{fontFamily:"var(--font-display)",fontSize:24}}>Tampa, Florida</p>
              <p className="body-sm" style={{marginTop:8}}>Tastings by appointment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { InquirePage });
