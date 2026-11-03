// Bucăți comune: layout, antet, subsol, indicatorul (cartușul) Diagnostic, iconițe, diagrame.

export const SITE = 'https://bradysoftware.ro';
export const PHONE_HREF = 'tel:+40727819906';
export const PHONE_TXT = '0727 819 906';
export const PHONE_INTL = '+40 727 819 906';
export const WA = 'https://wa.me/40727819906';
export const WA_MSG = 'https://wa.me/40727819906?text=' + encodeURIComponent('Bună ziua, aș vrea un Diagnostic de automatizare.');
export const MAIL = 'tudor@bradysoftware.ro';

export const icon = {
  phone: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M6.6 3.5h-2a1.6 1.6 0 0 0-1.6 1.7c.6 8 6.3 13.7 14.3 14.3a1.6 1.6 0 0 0 1.7-1.6v-2l-3.6-1.6-1.9 1.9a11 11 0 0 1-5.6-5.6l1.9-1.9z"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M4 19.5l1.2-3.6A8 8 0 1 1 8.4 19z"/><path d="M9 9.5c.3 2.4 2.1 4.2 4.5 4.6l1-1.1 1.6.7" stroke-linecap="round"/></svg>`,
  form: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="3.5" width="16" height="17"/><path d="M8 8.5h8M8 12.5h8M8 16.5h5"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h15M13 6l6 6-6 6"/></svg>`,
};

const mark = `<svg viewBox="0 0 28 28" aria-hidden="true"><rect x="1" y="1" width="26" height="26" fill="none" stroke="#1C1E20" stroke-width="2"/><path d="M1 17h26M15 17v10" stroke="#1C1E20" stroke-width="2"/><rect x="16" y="18" width="10" height="8" fill="#F2B705"/><path d="M6 6h7a3 3 0 0 1 0 6H6z" fill="#1C1E20"/></svg>`;

export function header(current) {
  const a = (href, label, key, extra = '') =>
    `<a href="${href}"${current === key ? ' aria-current="page"' : ''}${extra}>${label}</a>`;
  return `<a class="skip" href="#continut">Sari la conținut</a>
<header class="site-head">
  <div class="wrap">
    <a class="brand" href="/" aria-label="Brady Software, pagina principală">${mark}<span>Brady Software<small>automatizări · Sibiu / Cluj</small></span></a>
    <nav class="nav" aria-label="Principal">
      ${a('/studii-de-caz/', 'Studii de caz', 'studii')}
      ${a('/#cum-lucrez', 'Cum lucrez', 'cum', ' class="hide-sm"')}
      ${a('/despre/', 'Despre', 'despre')}
      ${current === 'diagnostic'
        ? `<a class="btn btn-signal" href="${PHONE_HREF}">${icon.phone}Sună acum</a>`
        : `<a class="btn btn-signal" href="/diagnostic/">Diagnostic gratuit</a>`}
    </nav>
  </div>
</header>`;
}

export function footer() {
  return `<footer class="site-foot dark">
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot-big">
        <h2>Contact direct</h2>
        <a href="${PHONE_HREF}">${PHONE_INTL}</a>
        <a href="mailto:${MAIL}">${MAIL}</a>
      </div>
      <div>
        <h2>Unde</h2>
        <ul>
          <li><a href="${WA_MSG}">WhatsApp</a></li>
          <li>Sibiu / Cluj-Napoca</li>
          <li>La sediul vostru sau online</li>
        </ul>
      </div>
      <div>
        <h2>Pagini</h2>
        <ul>
          <li><a href="/diagnostic/">Diagnostic de automatizare</a></li>
          <li><a href="/studii-de-caz/">Studii de caz</a></li>
          <li><a href="/despre/">Despre mine</a></li>
          <li><a href="/site-uri/">Site-uri de prezentare</a></li>
        </ul>
      </div>
      <div>
        <h2>Firma</h2>
        <ul>
          <li>Brady Software SRL</li>
          <li>din 2023, județul Cluj</li>
        </ul>
      </div>
    </div>
    <p class="foot-legal"><span>Brady Software SRL</span><span>CUI 47746610</span><span>J12/1025/2023</span><span>județul Cluj</span><span>din 2023</span></p>
  </div>
</footer>`;
}

// Indicatorul: oferta Diagnostic ca un cartuș de desen tehnic (ISO 7200): celule cu eticheta în colț.
export function tblock({ cta = 'form', title = 'Diagnostic de automatizare' } = {}) {
  const foot = cta === 'none' ? '' : cta === 'contact'
    ? `<div class="tblock-foot"><div class="btn-row">
        <a class="btn btn-signal" href="/diagnostic/">${icon.form}Programează diagnosticul</a>
        <a class="btn btn-line" href="${PHONE_HREF}">${icon.phone}Sună</a>
        <a class="btn btn-line" href="${WA_MSG}">${icon.chat}WhatsApp</a>
      </div></div>`
    : `<div class="tblock-foot"><a class="btn btn-signal" href="/diagnostic/">Programează diagnosticul ${icon.arrow}</a></div>`;
  return `<section class="tblock" aria-label="Fișa diagnosticului de automatizare">
    <div class="tblock-title"><strong>${title}</strong></div>
    <dl>
      <div class="c-wide"><dt>Ce faceți</dt><dd>Îmi arătați cum circulă o comandă, un document sau un produs prin firmă.</dd></div>
      <div><dt>Durată</dt><dd class="tb-big">2 ore</dd></div>
      <div><dt>Cost</dt><dd class="tb-big">Gratuit</dd></div>
      <div class="c-wide"><dt>Unde</dt><dd>La sediul vostru, în zona Sibiu și Cluj, sau online</dd></div>
      <div class="c-wide"><dt>Primiți</dt><dd><strong>O listă scrisă cu 3–5 lucruri care se pot automatiza</strong>, fiecare cu estimare de timp și cost</dd></div>
      <div><dt>Obligații</dt><dd>Niciuna</dd></div>
      <div><dt>Întocmit de</dt><dd>Tudor Brădescu</dd></div>
    </dl>
    ${foot}
  </section>`;
}

export function ctaFinal() {
  return `<section class="section cta-final" aria-labelledby="cta-final-h">
  <div class="wrap grid">
    <div>
      <h2 id="cta-final-h">Două ore la voi în firmă. Rămâneți cu o listă scrisă.</h2>
      <p class="lead">Spuneți-mi ce vă consumă cel mai mult timp. Ne uităm împreună la proces și primiți 3–5 lucruri care se pot automatiza, cu timp și cost estimat. Dacă nu merită automatizat nimic, vă spun direct.</p>
    </div>
    ${tblock({ cta: 'contact' })}
  </div>
</section>`;
}

export function layout({ path, title, description, current, body, jsonld = '', scripts = '', ogType = 'website' }) {
  const url = SITE + path;
  return `<!doctype html>
<html lang="ro">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="google-site-verification" content="6ZUqol2t58WAzZCmuZWz_igj--zonNAEHLZI6_IPWWA">
<meta name="theme-color" content="#E8E9E6">
<link rel="canonical" href="${url}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/assets/fonts/archivo-ro.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/site.css">
<meta property="og:type" content="${ogType}">
<meta property="og:locale" content="ro_RO">
<meta property="og:site_name" content="Brady Software">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Brady Software: automatizări și AI pentru producție și distribuție. Diagnostic de automatizare gratuit.">
<meta name="twitter:card" content="summary_large_image">
${jsonld}</head>
<body>
${header(current)}
<main id="continut">
${body}
</main>
${footer()}
<script src="/assets/js/site.js" defer></script>
${scripts}</body>
</html>
`;
}

/* ---------------- diagrame ---------------- */

const defs = (id) => `<defs>
  <marker id="ah-${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="arrow"/></marker>
  <pattern id="hz-${id}" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="12" height="12" fill="#F2B705"/><rect width="6" height="12" fill="#1C1E20"/></pattern>
</defs>`;

// A: Lidl / Rewe / Metro → reguli → Mentor
export function dgOrders(id = 'a') {
  return `<svg class="dg" viewBox="0 0 400 420" role="img" aria-labelledby="t-${id}">
  <title id="t-${id}">Schema fluxului: comenzile de la Lidl, Rewe și Metro vin pe EDI sau email, trec prin regulile de corecție ale firmei și sunt create direct în ERP-ul Mentor.</title>
  ${defs(id)}
  <rect class="box" x="1" y="1" width="118" height="52"/><text class="t-lg" x="60" y="25" text-anchor="middle">Lidl</text><text class="t-sm" x="60" y="42" text-anchor="middle">EDI · email</text>
  <rect class="box" x="141" y="1" width="118" height="52"/><text class="t-lg" x="200" y="25" text-anchor="middle">Rewe</text><text class="t-sm" x="200" y="42" text-anchor="middle">EDI · email</text>
  <rect class="box" x="281" y="1" width="118" height="52"/><text class="t-lg" x="340" y="25" text-anchor="middle">Metro</text><text class="t-sm" x="340" y="42" text-anchor="middle">EDI · email</text>
  <path class="flow live" d="M60 54V92H200M340 54V92H200M200 54V140"/>
  <text class="t-sm" x="206" y="118">~20 comenzi / zi</text>
  <path class="wire" d="M200 128V140" marker-end="url(#ah-${id})"/>
  <rect class="box-ink" x="20" y="142" width="360" height="132"/>
  <text class="t-lg t-inv" x="40" y="172">Software: reguli de corecție</text>
  <text class="t-inv" x="40" y="200">1  citește comanda</text>
  <text class="t-inv" x="40" y="222">2  aplică regulile firmei</text>
  <text class="t-inv" x="40" y="244">3  corectează erorile din EDI</text>
  <rect x="300" y="186" width="64" height="64" fill="none" stroke="#F2B705" stroke-width="1.5"/>
  <path d="M312 202h40M312 214h40M312 226h28M312 238h34" stroke="#F2B705" stroke-width="1.5"/>
  <path class="flow live" d="M200 275V330"/>
  <path class="wire" d="M200 318V330" marker-end="url(#ah-${id})"/>
  <rect class="box-2" x="90" y="332" width="220" height="56"/>
  <text class="t-lg" x="200" y="356" text-anchor="middle">ERP Mentor</text>
  <text class="t-sm" x="200" y="376" text-anchor="middle">comanda creată automat</text>
  <rect class="box-sig" x="230" y="396" width="169" height="22"/>
  <text x="314" y="412" text-anchor="middle" class="t-sm" style="fill:#1C1E20">fără retastare</text>
</svg>`;
}

// B: ERP → server → telefonul patronului (valori ilustrative, fără date reale)
export function dgPhone(id = 'b') {
  const rows = [['Client A', 3], ['Client B', 1], ['Client C', 4], ['Client D', 2]].map(([name, n], i) => {
    const y = 132 + i * 34;
    const glyphs = Array.from({ length: n }, (_, k) => `<rect x="${376 - k * 13}" y="${y - 10}" width="10" height="9" fill="#1C1E20"/><path d="M${376 - k * 13} ${y + 1}h10" stroke="#4A4D51" stroke-width="1.5"/>`).join('');
    return `<text x="226" y="${y}">${name}</text>${glyphs}<path class="thin" d="M226 ${y + 12}H386"/>`;
  }).join('');
  return `<svg class="dg" viewBox="0 0 400 330" role="img" aria-labelledby="t-${id}">
  <title id="t-${id}">Schemă: comenzile și livrările sunt deja în ERP-ul Mentor; serverul le grupează pe zile și calculează paleții pentru fiecare livrare; patronul vede rezultatul pe telefon, zi cu zi. Valorile din telefon sunt ilustrative.</title>
  ${defs(id)}
  <rect class="box-2" x="1" y="40" width="168" height="64"/>
  <text class="t-lg" x="85" y="67" text-anchor="middle">ERP Mentor</text>
  <text class="t-sm" x="85" y="89" text-anchor="middle">comenzi · livrări</text>
  <path class="flow" d="M85 105V150"/>
  <path class="wire" d="M85 140V152" marker-end="url(#ah-${id})"/>
  <rect class="box-ink" x="1" y="154" width="168" height="100"/>
  <text class="t-lg t-inv" x="15" y="181">Server</text>
  <text class="t-inv" x="15" y="208">1 grupează pe zi</text>
  <text class="t-inv" x="15" y="231">2 paleți / livrare</text>
  <path class="flow" d="M170 204H200"/>
  <path class="wire" d="M196 204H212" marker-end="url(#ah-${id})"/>
  <text class="t-sm" x="1" y="290">fără telefoane la birou</text>
  <text class="t-sm" x="1" y="310">fără Excel pe email</text>
  <rect class="box" x="214" y="1" width="184" height="328" rx="20"/>
  <path class="box-ink" d="M214 21a20 20 0 0 1 20-20h144a20 20 0 0 1 20 20v23H214z"/>
  <text class="t-inv" x="228" y="28">Livrări</text>
  <rect class="box" x="226" y="56" width="53" height="24"/><text x="252.5" y="72" text-anchor="middle" style="font-size:12px">ieri</text>
  <rect class="box-sig" x="279" y="56" width="53" height="24"/><text x="305.5" y="72" text-anchor="middle" style="font-size:12px;font-weight:600">azi</text>
  <rect class="box" x="332" y="56" width="53" height="24"/><text x="358.5" y="72" text-anchor="middle" style="font-size:12px">mâine</text>
  <text class="t-sm" x="226" y="104">destinație</text><text class="t-sm" x="386" y="104" text-anchor="end">paleți</text>
  <path class="wire" d="M226 110H386"/>
  ${rows}
  <rect x="226" y="257" width="10" height="9" fill="#1C1E20"/><path d="M226 268h10" stroke="#4A4D51" stroke-width="1.5"/>
  <text class="t-sm" x="244" y="267">= 1 palet</text>
  <rect class="box-2" x="226" y="278" width="160" height="24"/>
  <text x="306" y="294" text-anchor="middle" style="font-size:12px">exemplu ilustrativ</text>
  <rect x="280" y="314" width="52" height="4" fill="#1C1E20"/>
</svg>`;
}
// C: paletizare, desen cu cote
export function dgPallet(id = 'c') {
  const boxes = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
    const off = r % 2 ? 33 : 0;
    if (r % 2 && c === 3) continue;
    boxes.push(`<rect class="${r === 3 && c === 1 ? 'box-sig' : 'box'}" x="${60 + off + c * 66}" y="${208 - r * 44}" width="64" height="42"/>`);
  }
  return `<svg class="dg" viewBox="0 0 400 320" role="img" aria-labelledby="t-${id}">
  <title id="t-${id}">Desen schematic al unui palet cu baxuri așezate în straturi, cu cote, pentru proiectul european de inovare în paletizare.</title>
  ${defs(id)}
  ${boxes.join('')}
  <rect class="box-ink" x="56" y="252" width="272" height="10"/>
  <rect class="box-ink" x="64" y="262" width="22" height="14"/><rect class="box-ink" x="181" y="262" width="22" height="14"/><rect class="box-ink" x="298" y="262" width="22" height="14"/>
  <rect class="box-ink" x="56" y="276" width="272" height="8"/>
  <path class="wire" d="M56 300H328" marker-start="url(#ah-${id})" marker-end="url(#ah-${id})"/>
  <path class="thin" d="M56 288v18M328 288v18"/>
  <text class="t-sm" x="192" y="316" text-anchor="middle">palet EUR · 1200 mm</text>
  <text class="t-lg" x="60" y="34">Proiect UE · 1,5 M€</text>
  <text class="t-sm" x="60" y="54">inovare în paletizare · în desfășurare</text>
</svg>`;
}

// D: bandă → cameră → OK / RESPINS
export function dgConveyor(id = 'd') {
  const item = (x, bad) => `<rect class="box" x="${x}" y="196" width="46" height="40"/><rect x="${x + 8}" y="204" width="30" height="16" fill="${bad ? `url(#hz-${id})` : '#DCDEDA'}" stroke="#1C1E20"/>`;
  return `<svg class="dg" viewBox="0 0 400 330" role="img" aria-labelledby="t-${id}">
  <title id="t-${id}">Schemă de principiu: produsele trec pe bandă pe sub o cameră; software-ul citește eticheta și separă produsele cu eticheta corectă (OK) de cele cu lot sau produs greșit (RESPINS). Sistem în dezvoltare.</title>
  ${defs(id)}
  <rect class="box-2" x="120" y="1" width="160" height="50"/>
  <text class="t-lg" x="200" y="24" text-anchor="middle">Software</text>
  <text class="t-sm" x="200" y="41" text-anchor="middle">citește produs + lot</text>
  <path class="wire" d="M200 52V92"/>
  <rect class="box-ink" x="176" y="92" width="48" height="30"/>
  <circle cx="200" cy="107" r="8" fill="none" stroke="#F2B705" stroke-width="2"/>
  <text class="t-sm" x="236" y="112">cameră</text>
  <path class="thin" d="M190 122L140 192M210 122L260 192" stroke-dasharray="3 3"/>
  ${item(30, false)}${item(128, false)}${item(226, true)}
  <rect class="box" x="10" y="238" width="310" height="16" rx="8"/>
  <circle cx="22" cy="246" r="5" class="box"/><circle cx="308" cy="246" r="5" class="box"/>
  <path class="flow" d="M30 270H312"/>
  <path class="wire" d="M300 270H316" marker-end="url(#ah-${id})"/>
  <text class="t-sm" x="30" y="292">sensul benzii · eticheta = produs + lot</text>
  <rect class="box" x="330" y="168" width="68" height="40"/>
  <text x="364" y="193" text-anchor="middle" style="font-weight:500">OK</text>
  <rect x="330" y="226" width="68" height="40" fill="url(#hz-${id})" stroke="#1C1E20" stroke-width="1.5"/>
  <rect x="336" y="236" width="56" height="20" fill="#E8E9E6"/>
  <text x="364" y="251" text-anchor="middle" style="font-size:11px;font-weight:500">RESPINS</text>
  <path class="wire" d="M320 246H326M326 188V246" />
  <rect class="box-sig" x="1" y="308" width="140" height="20"/>
  <text x="71" y="322" text-anchor="middle" class="t-sm" style="fill:#1C1E20">în dezvoltare</text>
</svg>`;
}

// F: lanțul din industria auto
export function dgAuto(id = 'f') {
  const steps = [
    ['Cod de la echipe', 'mai multe țări'],
    ['Pipeline CI/CD', 'build + integrare'],
    ['Testare automată', 'recunoaștere imagine'],
    ['Programare ECU', 'peste noapte'],
    ['Calibrare HUD', 'cameră + motoare'],
    ['Linia de producție', 'release'],
  ];
  const h = 44, gap = 16;
  const out = steps.map(([a, b], i) => {
    const y = 1 + i * (h + gap);
    const cls = i === steps.length - 1 ? 'box-ink' : 'box';
    const inv = i === steps.length - 1 ? ' t-inv' : '';
    const line = i < steps.length - 1 ? `<path class="flow" d="M200 ${y + h + 1}V${y + h + gap - 1}"/>` : '';
    return `<rect class="${cls}" x="10" y="${y}" width="380" height="${h}"/><text class="t-lg${inv}" x="26" y="${y + 27}">${a}</text><text class="t-sm${inv}" x="374" y="${y + 27}" text-anchor="end"${inv ? ' style="fill:#C4C3BD"' : ''}>${b}</text>${line}`;
  }).join('');
  return `<svg class="dg" viewBox="0 0 400 ${steps.length * (h + gap) - gap + 2}" role="img" aria-labelledby="t-${id}">
  <title id="t-${id}">Lanțul de livrare a software-ului auto la care am lucrat: cod de la echipe din mai multe țări, pipeline CI/CD, testare automată cu recunoaștere de imagine, programare ECU peste noapte, calibrare head-up display cu cameră și motoare, release în linia de producție.</title>
  ${out}
</svg>`;
}

// Platforma de coaching: structură, desenată după codul sursă public
export function dgCoaching(id = 'rm') {
  const col = (x, title, items, ink) => `<rect class="${ink ? 'box-ink' : 'box'}" x="${x}" y="1" width="180" height="34"/><text class="t-lg${ink ? ' t-inv' : ''}" x="${x + 14}" y="24">${title}</text>` +
    items.map((t, i) => `<rect class="box-2" x="${x}" y="${47 + i * 38}" width="180" height="30"/><text x="${x + 14}" y="${67 + i * 38}">${t}</text>`).join('');
  return `<svg class="dg" viewBox="0 0 400 290" role="img" aria-labelledby="t-${id}">
  <title id="t-${id}">Schema platformei de coaching: clienții au module, check-in, flux de noutăți și sesiuni live; antrenorul are un panou de administrare pentru clienți, check-in-uri, module și sesiuni live; datele stau în Supabase.</title>
  ${col(1, 'Client', ['Module', 'Check-in', 'Noutăți', 'Sesiuni live'])}
  ${col(219, 'Antrenor', ['Clienți', 'Check-in-uri', 'Module', 'Sesiuni live'], true)}
  <path class="flow" d="M91 200V236M309 200V236"/>
  <rect class="box-sig" x="1" y="238" width="398" height="50"/>
  <text class="t-lg" x="200" y="260" text-anchor="middle">Supabase</text>
  <text x="200" y="279" text-anchor="middle" style="font-size:12px">conturi, date, autentificare</text>
</svg>`;
}
