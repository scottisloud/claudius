'use client';

export default function S2Wrapped2025() {
  return (
    <>
      <style jsx global>{`
        /* Override global styles for this page */
        body {
          background: radial-gradient(1200px 650px at 20% -10%, #1b2350 0%, #0b1020 60%) !important;
        }

        .s2-container {
          --bg: #0b1020;
          --panel: #121833;
          --panel2: #0f1530;
          --text: #e8ebff;
          --muted: #9aa3c7;
          --a: #6cf2c2;
          --b: #8aa2ff;
          --c: #ffb703;
          --d: #ff6b6b;
          --r: 18px;
          --rs: 12px;
          --shadow: 0 20px 55px rgba(0,0,0,.38);
          color: var(--text);
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 20px 70px;
        }

        .s2-container * {
          box-sizing: border-box;
        }

        .s2-container a {
          color: var(--a);
          text-decoration: none;
        }

        .s2-container a:hover {
          text-decoration: underline;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.25fr .75fr;
          gap: 22px;
          align-items: center;
          background: linear-gradient(135deg, #182061, #0f1530);
          border-radius: var(--r);
          box-shadow: var(--shadow);
          padding: 34px;
        }

        @media(max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
          }
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.12);
          padding: 8px 12px;
          border-radius: 999px;
          color: var(--a);
          font-weight: 700;
        }

        .s2-container h1 {
          font-size: clamp(36px, 5vw, 56px);
          margin: 14px 0 10px;
          letter-spacing: -.02em;
        }

        .s2-container h2 {
          font-size: clamp(22px, 3.2vw, 34px);
          margin: 0 0 12px;
          letter-spacing: -.02em;
        }

        .s2-container h3 {
          margin: 0 0 10px;
        }

        .lead {
          font-size: 18px;
          color: var(--muted);
          max-width: 58ch;
          line-height: 1.45;
        }

        .s2-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 20px;
          margin-top: 22px;
        }

        .card {
          grid-column: span 4;
          background: linear-gradient(180deg, var(--panel), var(--panel2));
          border-radius: var(--r);
          padding: 22px;
          box-shadow: var(--shadow);
        }

        .card.wide {
          grid-column: span 8;
        }

        .card.full {
          grid-column: span 12;
        }

        @media(max-width: 900px) {
          .card, .card.wide {
            grid-column: span 12;
          }
        }

        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 14px;
        }

        .chip {
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 999px;
          padding: 8px 12px;
          font-weight: 700;
          color: var(--text);
        }

        .hero-metrics {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .metric {
          background: rgba(0,0,0,.25);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: var(--rs);
          padding: 16px;
        }

        .metric .n {
          font-size: 32px;
          font-weight: 900;
          color: var(--a);
        }

        .metric .l {
          color: var(--muted);
          font-weight: 700;
        }

        .small {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.45;
        }

        .person {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 14px;
          align-items: center;
          margin-top: 10px;
        }

        .avatar {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          background: linear-gradient(135deg, var(--a), var(--b));
          display: grid;
          place-items: center;
          color: #0b1020;
          font-weight: 900;
        }

        .person p {
          margin: 6px 0 0;
          color: var(--muted);
        }

        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        @media(max-width: 900px) {
          .split {
            grid-template-columns: 1fr;
          }
        }

        .linklist {
          margin: 10px 0 0;
          padding-left: 18px;
        }

        .linklist li {
          margin: 10px 0;
        }

        .meta {
          display: block;
          color: var(--muted);
          font-size: 12px;
          margin-top: 3px;
        }

        .chartbox {
          background: rgba(0,0,0,.18);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: var(--rs);
          padding: 14px;
          overflow: hidden;
        }

        .kpis {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .kpi {
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 14px;
          padding: 14px;
          text-align: center;
        }

        .kpi .k {
          font-weight: 900;
          color: var(--b);
          font-size: 16px;
        }

        .kpi .v {
          font-weight: 900;
          color: var(--text);
          font-size: 28px;
          margin-top: 6px;
        }

        .kpi .l {
          color: var(--muted);
          font-size: 12px;
          margin-top: 2px;
        }

        hr.sep {
          border: none;
          border-top: 1px solid rgba(255,255,255,.12);
          margin: 16px 0;
        }

        .s2-footer {
          margin-top: 38px;
          text-align: center;
          color: var(--muted);
        }
      `}</style>

      <div className="s2-container">
        <header className="hero">
          <div>
            <span className="badge">🎉 2025 Wrapped (based on provided exports)</span>
            <h1>Solutions Scheduler & Stats</h1>
            <p className="lead">A fun, high-signal wrap-up of the work (and the traffic) behind Solutions Scheduler and Solutions Stats in 2025. Yes, it includes charts. Yes, the bots get credit.</p>
            <div className="chips">
              <span className="chip">Solutions Scheduler</span>
              <span className="chip">Solutions Stats</span>
              <span className="chip">Jira parent: SA-172</span>
            </div>
            <p className="small" style={{marginTop: '14px'}}>Included contributors: Scott Lougheed, Amanda Crawley, Jack Platten, Chloe Na.</p>
          </div>

          <div className="hero-metrics">
            <div className="metric"><div className="n">13</div><div className="l">Merge Requests</div></div>
            <div className="metric"><div className="n">5</div><div className="l">Commits</div></div>
            <div className="metric"><div className="n">5</div><div className="l">SA-172 child issues</div></div>
            <div className="metric"><div className="n">37</div><div className="l">Weekly analytics PDFs</div></div>
          </div>
        </header>

        <section className="s2-grid">
          <div className="card">
            <h2>🧑‍🚀 The Core Crew</h2>

            <div className="person"><div className="avatar">SL</div><div><strong>Scott Lougheed</strong><p>Structural engineer of Scheduler: booking flow V2, MySpace consolidation, and URI wrangling.</p></div></div>
            <div className="person"><div className="avatar">AC</div><div><strong>Amanda Crawley</strong><p>Clarity champion: reviews, UX polish, and edge-case radar.</p></div></div>
            <div className="person"><div className="avatar">JP</div><div><strong>Jack Platten</strong><p>Ship it, but safely: guardrails, fixes, and steady improvements.</p></div></div>
            <div className="person"><div className="avatar">CN</div><div><strong>Chloe Na</strong><p>Signal finder: product-minded reviews and direction-setting feedback.</p></div></div>

            <hr className="sep"/>
            <h3>🔤 Top themes (from MR titles)</h3>
            <div className="chips"><span className='chip'>add × 4</span><span className='chip'>event × 2</span><span className='chip'>uri × 2</span><span className='chip'>logic × 2</span><span className='chip'>slack × 2</span><span className='chip'>api × 2</span><span className='chip'>endpoint × 2</span><span className='chip'>card × 2</span></div>
          </div>

          <div className="card wide">
            <h2>📦 Merge Requests — who shipped what</h2>
            <div className="split">
              <div className="chartbox">
                <h3 style={{margin: '0 0 10px'}}>By author</h3>
                <svg viewBox="0 0 340 220" width="100%" height="100%" role="img" aria-label="donut chart">
                  <circle cx="170.0" cy="110.0" r="86.0" fill="none" stroke="rgba(255,255,255,.10)" strokeWidth="18"/>
                  <circle cx="170.0" cy="110.0" r="86.0" fill="none" stroke="#6cf2c2" strokeWidth="18" strokeLinecap="round" strokeDasharray="374.09 166.26" strokeDashoffset="0.00" transform="rotate(-90 170.0 110.0)"/>
                  <circle cx="170.0" cy="110.0" r="86.0" fill="none" stroke="#8aa2ff" strokeWidth="18" strokeLinecap="round" strokeDasharray="41.57 498.79" strokeDashoffset="-374.09" transform="rotate(-90 170.0 110.0)"/>
                  <circle cx="170.0" cy="110.0" r="86.0" fill="none" stroke="#ffb703" strokeWidth="18" strokeLinecap="round" strokeDasharray="41.57 498.79" strokeDashoffset="-415.66" transform="rotate(-90 170.0 110.0)"/>
                  <circle cx="170.0" cy="110.0" r="86.0" fill="none" stroke="#ff6b6b" strokeWidth="18" strokeLinecap="round" strokeDasharray="83.13 457.22" strokeDashoffset="-457.22" transform="rotate(-90 170.0 110.0)"/>
                  <text x="170.0" y="106.0" textAnchor="middle" fill="#e8ebff" fontSize="34" fontWeight="900">13</text>
                  <text x="170.0" y="132.0" textAnchor="middle" fill="#9aa3c7" fontSize="12" fontWeight="700">Merges</text>
                  <rect x="12" y="136" width="12" height="12" rx="3" fill="#6cf2c2"/>
                  <text x="30" y="147" fill="#9aa3c7" fontSize="12">Scott Lougheed — 9</text>
                  <rect x="12" y="154" width="12" height="12" rx="3" fill="#8aa2ff"/>
                  <text x="30" y="165" fill="#9aa3c7" fontSize="12">Amanda Crawley — 1</text>
                  <rect x="12" y="172" width="12" height="12" rx="3" fill="#ffb703"/>
                  <text x="30" y="183" fill="#9aa3c7" fontSize="12">Jack Platten — 1</text>
                  <rect x="12" y="190" width="12" height="12" rx="3" fill="#ff6b6b"/>
                  <text x="30" y="201" fill="#9aa3c7" fontSize="12">Chloe Na — 2</text>
                </svg>
              </div>
              <div className="chartbox">
                <h3 style={{margin: '0 0 10px'}}>By month</h3>
                <svg viewBox="0 0 560 220" width="100%" height="100%" role="img" aria-label="bar chart">
                  <line x1="28" y1="192" x2="532" y2="192" stroke="rgba(255,255,255,.18)" strokeWidth="2"/>
                  <defs><linearGradient id="g0" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#8aa2ff"/><stop offset="1" stopColor="#6cf2c2"/></linearGradient></defs>
                  <rect x="28.0" y="28.0" width="115.5" height="164.0" rx="10" fill="url(#g0)" opacity="0.95"/>
                  <text x="85.75" y="20.0" textAnchor="middle" fill="#9aa3c7" fontSize="12" fontWeight="700">4</text>
                  <text x="85.75" y="210" textAnchor="middle" fill="#9aa3c7" fontSize="12">09</text>
                  <defs><linearGradient id="g1" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#8aa2ff"/><stop offset="1" stopColor="#6cf2c2"/></linearGradient></defs>
                  <rect x="157.5" y="28.0" width="115.5" height="164.0" rx="10" fill="url(#g1)" opacity="0.95"/>
                  <text x="215.25" y="20.0" textAnchor="middle" fill="#9aa3c7" fontSize="12" fontWeight="700">4</text>
                  <text x="215.25" y="210" textAnchor="middle" fill="#9aa3c7" fontSize="12">10</text>
                  <defs><linearGradient id="g2" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#8aa2ff"/><stop offset="1" stopColor="#6cf2c2"/></linearGradient></defs>
                  <rect x="287.0" y="69.0" width="115.5" height="123.0" rx="10" fill="url(#g2)" opacity="0.95"/>
                  <text x="344.75" y="61.0" textAnchor="middle" fill="#9aa3c7" fontSize="12" fontWeight="700">3</text>
                  <text x="344.75" y="210" textAnchor="middle" fill="#9aa3c7" fontSize="12">11</text>
                  <defs><linearGradient id="g3" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#8aa2ff"/><stop offset="1" stopColor="#6cf2c2"/></linearGradient></defs>
                  <rect x="416.5" y="110.0" width="115.5" height="82.0" rx="10" fill="url(#g3)" opacity="0.95"/>
                  <text x="474.25" y="102.0" textAnchor="middle" fill="#9aa3c7" fontSize="12" fontWeight="700">2</text>
                  <text x="474.25" y="210" textAnchor="middle" fill="#9aa3c7" fontSize="12">12</text>
                </svg>
              </div>
            </div>
            <p className="small" style={{marginTop: '10px'}}>MR activity in the provided export clusters in Sep–Dec 2025.</p>
          </div>
        </section>

        <section className="s2-grid">
          <div className="card wide">
            <h2>📈 Website signals — Internal1P dashboard</h2>
            <p className="small">Extracted from the provided weekly "Solutions Scheduler Internal1P Dashboard" PDFs. The dashboard layout was consistent from late September onward, so the trend below uses those months.</p>
            <div className="chartbox">
              <h3 style={{margin: '0 0 10px'}}>Scheduler unique users (monthly snapshots)</h3>
              <svg viewBox="0 0 560 220" width="100%" height="100%" role="img" aria-label="line chart">
                <line x1="34" y1="34.0" x2="526" y2="34.0" stroke="rgba(255,255,255,.10)" />
                <line x1="34" y1="110.0" x2="526" y2="110.0" stroke="rgba(255,255,255,.10)" />
                <line x1="34" y1="186.0" x2="526" y2="186.0" stroke="rgba(255,255,255,.10)" />
                <defs><linearGradient id="lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8aa2ff" stopOpacity="0.45"/><stop offset="1" stopColor="#6cf2c2" stopOpacity="0.05"/></linearGradient></defs>
                <path d="M 34.0 94.8 L 198.0 34.0 L 362.0 94.8 L 526.0 186.0 L 526.0 186 L 34.0 186 Z" fill="url(#lg)" stroke="none"/>
                <path d="M 34.0 94.8 L 198.0 34.0 L 362.0 94.8 L 526.0 186.0" fill="none" stroke="#6cf2c2" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="34.0" cy="94.8" r="6" fill="#0b1020" stroke="#8aa2ff" strokeWidth="3"/>
                <text x="34.0" y="82.8" textAnchor="middle" fill="#9aa3c7" fontSize="12" fontWeight="700">44</text>
                <circle cx="198.0" cy="34.0" r="6" fill="#0b1020" stroke="#8aa2ff" strokeWidth="3"/>
                <text x="198.0" y="22.0" textAnchor="middle" fill="#9aa3c7" fontSize="12" fontWeight="700">48</text>
                <circle cx="362.0" cy="94.8" r="6" fill="#0b1020" stroke="#8aa2ff" strokeWidth="3"/>
                <text x="362.0" y="82.8" textAnchor="middle" fill="#9aa3c7" fontSize="12" fontWeight="700">44</text>
                <circle cx="526.0" cy="186.0" r="6" fill="#0b1020" stroke="#8aa2ff" strokeWidth="3"/>
                <text x="526.0" y="174.0" textAnchor="middle" fill="#9aa3c7" fontSize="12" fontWeight="700">38</text>
                <text x="34.0" y="210" textAnchor="middle" fill="#9aa3c7" fontSize="12">Sep</text>
                <text x="198.0" y="210" textAnchor="middle" fill="#9aa3c7" fontSize="12">Oct</text>
                <text x="362.0" y="210" textAnchor="middle" fill="#9aa3c7" fontSize="12">Nov</text>
                <text x="526.0" y="210" textAnchor="middle" fill="#9aa3c7" fontSize="12">Dec</text>
                <text x="34" y="24" fill="#9aa3c7" fontSize="12">48</text>
                <text x="34" y="204" fill="#9aa3c7" fontSize="12">38</text>
              </svg>
            </div>

            <div className="s2-grid" style={{marginTop: '16px', gap: '14px'}}>
              <div className="card" style={{gridColumn: 'span 12', background: 'rgba(0,0,0,.18)', boxShadow: 'none', border: '1px solid rgba(255,255,255,.12)'}}>
                <div className="split">
                  <div>
                    <h3 style={{margin: '0 0 8px'}}>Latest week spotlight (2025-12-15)</h3>
                    <div className="chips">
                      <span className="chip">Unique users: <strong>38</strong></span>
                      <span className="chip">Scheduler link events: <strong>116</strong></span>
                    </div>
                    <p className="small" style={{marginTop: '10px'}}>Response-code breakdown captured from the same weekly PDF export.</p>
                  </div>
                  <div className="kpis">
                    <div className='kpi'><div className='k'>200</div><div className='v'>332</div><div className='l'>responses</div></div>
                    <div className='kpi'><div className='k'>302</div><div className='v'>28</div><div className='l'>responses</div></div>
                    <div className='kpi'><div className='k'>500</div><div className='v'>1</div><div className='l'>responses</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2>🧾 Jira (SA-172)</h2>
            <ul className='linklist'>
              <li><strong>SA-179</strong> — S2: Find, Fix, or Flush Unfinished Features<span className='meta'>Doing · Unassigned</span></li>
              <li><strong>SA-173</strong> — S2 Backlog<span className='meta'>New · Unassigned</span></li>
              <li><strong>SA-163</strong> — S2 Implement new process for SMB SEs and AEs<span className='meta'>New · Unassigned</span></li>
              <li><strong>SA-162</strong> — S2: Solutions Architect Scheduling Simplification<span className='meta'>Doing · Scott Lougheed</span></li>
              <li><strong>SA-159</strong> — S2 Omniproject<span className='meta'>Done · Unassigned</span></li>
            </ul>
            <p className="small" style={{marginTop: '12px'}}>All issues shown are direct children with parent <strong>SA-172</strong>.</p>
          </div>
        </section>

        <section className="s2-grid">
          <div className="card wide">
            <h2>🧩 Recently merged (greatest hits)</h2>
            <div className="split">
              <div>
                <h3>Merge Requests</h3>
                <ul className='linklist'>
                  <li><a href="https://gitlab.1password.io/dev/internal-tools/internal1p/-/merge_requests/1919" target="_blank" rel="noreferrer">Solutions Scheduler: preliminary new SA booking flow</a><span className="meta">2025-12-18 · Scott Lougheed</span></li>
                  <li><a href="https://gitlab.1password.io/dev/internal-tools/internal1p/-/merge_requests/1885" target="_blank" rel="noreferrer">Solutions Scheduler: Consolidate MySpace and Solutioneers pages</a><span className="meta">2025-12-03 · Scott Lougheed</span></li>
                  <li><a href="https://gitlab.1password.io/dev/internal-tools/internal1p/-/merge_requests/1882" target="_blank" rel="noreferrer">solutions scheduler: fixing mis-specified event type URI</a><span className="meta">2025-11-25 · Scott Lougheed</span></li>
                  <li><a href="https://gitlab.1password.io/dev/internal-tools/internal1p/-/merge_requests/1875" target="_blank" rel="noreferrer">Solutions Scheduler: Hotfix correct DB migration wonkery</a><span className="meta">2025-11-21 · Scott Lougheed</span></li>
                  <li><a href="https://gitlab.1password.io/dev/internal-tools/internal1p/-/merge_requests/1865" target="_blank" rel="noreferrer">Solutions Scheduler: Update EDC Event URI</a><span className="meta">2025-11-20 · Scott Lougheed</span></li>
                  <li><a href="https://gitlab.1password.io/dev/internal-tools/internal1p/-/merge_requests/1848" target="_blank" rel="noreferrer">Solutions Stats: change query parameter logic to look for presence of key, not specific value</a><span className="meta">2025-10-21 · Scott Lougheed</span></li>
                  <li><a href="https://gitlab.1password.io/dev/internal-tools/internal1p/-/merge_requests/1842" target="_blank" rel="noreferrer">Solutions: Fix date subtraction logic SA-8</a><span className="meta">2025-10-17 · Jack Platten</span></li>
                  <li><a href="https://gitlab.1password.io/dev/internal-tools/internal1p/-/merge_requests/1833" target="_blank" rel="noreferrer">Solutions Stats: Fix slack API endpoint response</a><span className="meta">2025-10-08 · Scott Lougheed</span></li>
                </ul>
              </div>
              <div>
                <h3>Commits</h3>
                <ul className='linklist'>
                  <li><a href="https://gitlab.1password.io/dev/internal-tools/internal1p/-/commit/ac0b418db5455002149d96d078ce2d3c1938c2c7" target="_blank" rel="noreferrer">Solutions Scheduler: preliminary new SA booking flow (dev/internal-tools/internal1p!1919)</a><span className="meta">2025-12-18 · Scott Lougheed</span></li>
                  <li><a href="https://gitlab.1password.io/dev/internal-tools/internal1p/-/commit/e1f5c001930824ea2d11a6cdfed34c8f9accabb0" target="_blank" rel="noreferrer">Solutions Scheduler: Consolidate MySpace and Solutioneers pages (dev/internal-tools/internal1p!1885)</a><span className="meta">2025-12-03 · Scott Lougheed</span></li>
                  <li><a href="https://gitlab.1password.io/dev/internal-tools/internal1p/-/commit/4483793a67762eda13c918fa7988c316dc941fa8" target="_blank" rel="noreferrer">solutions scheduler: fixing mis-specified event type URI (dev/internal-tools/internal1p!1882)</a><span className="meta">2025-11-25 · Scott Lougheed</span></li>
                  <li><a href="https://gitlab.1password.io/dev/internal-tools/internal1p/-/commit/d53a1c7ac28667d14bcdc1728b8da8cd38aab474" target="_blank" rel="noreferrer">Solutions Scheduler: Hotfix correct DB migration wonkery (dev/internal-tools/internal1p!1875)</a><span className="meta">2025-11-20 · Scott Lougheed</span></li>
                  <li><a href="https://gitlab.1password.io/dev/internal-tools/internal1p/-/commit/b31da01a76c2ddec85ae911b1dc776fa47160723" target="_blank" rel="noreferrer">Solutions Scheduler: Update EDC Event URI (dev/internal-tools/internal1p!1865)</a><span className="meta">2025-11-20 · Scott Lougheed</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2>🏆 2025 Awards</h2>
            <ul>
              <li><strong>Most Impactful Change:</strong> New SA booking flow (V2)</li>
              <li><strong>Quietly Saved Us:</strong> Stats Slack endpoint fixes</li>
              <li><strong>Most Re-touched Concept:</strong> Event type URIs</li>
              <li><strong>Best Supporting Character:</strong> Automation</li>
            </ul>
            <p className="small">Because the bots deserve their own trophy shelf.</p>
          </div>
        </section>

        <footer className="s2-footer">
          <p><strong>Same tools. Better experience. Way more shipped.</strong></p>
          <p className="small">Solutions Scheduler & Stats · 2025 Wrapped</p>
        </footer>
      </div>
    </>
  );
}
