// Generează paginile statice în rădăcina repo-ului. Rulare: node _src/build.mjs
// Nu e pas de build pe Netlify: HTML-ul generat se comite.
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  layout, tblock, ctaFinal, icon, SITE, PHONE_HREF, PHONE_TXT, PHONE_INTL, WA_MSG, MAIL,
  dgOrders, dgPhone, dgPallet, dgConveyor, dgAuto, dgCoaching,
} from './parts.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CLIENT = 'un producător alimentar din Transilvania, furnizor pentru Lidl, Rewe și Metro';

const out = (path, html) => {
  const file = path.endsWith('.html') ? join(ROOT, path) : join(ROOT, path, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
};

/* ---------------- studii de caz ---------------- */

const cases = [
  {
    slug: 'comenzi-lidl-rewe-metro-erp',
    short: 'Comenzile de la Lidl, Rewe și Metro intră singure în ERP',
    title: 'Comenzile de la Lidl, Rewe și Metro intră singure în ERP',
    meta: 'Studiu de caz: integrare EDI și email cu ERP-ul Mentor pentru un producător alimentar. Comenzile nu mai sunt retastate, regulile rulează singure.',
    status: ['live', 'Livrat · în producție'],
    lead: 'Aproximativ 20 de comenzi pe zi, pe EDI și pe email, erau introduse de mână în ERP. Acum intră singure, cu regulile firmei aplicate de fiecare dată la fel.',
    tech: 'Python + FastAPI, PDF și XML, WinMentor REST API, Vue 3, Docker',
    fig: dgOrders,
    caption: 'Cum circulă o comandă de la retailer până în ERP.',
    body: `
<h2>Situația</h2>
<p>Firma primește în jur de 20 de comenzi pe zi de la Lidl, Rewe, Metro și alți clienți mari. Unele vin pe EDI, altele pe email. Toate erau introduse manual în ERP-ul Mentor.</p>
<p>Mesajele EDI nu veneau mereu corecte. Corecțiile se făceau după reguli scrise pe hârtie, iar o parte din reguli nu erau scrise nicăieri: le știau doar oamenii care făceau treaba de ani de zile.</p>
<h2>Ce am construit</h2>
<p>Un software care preia comenzile din EDI și din email, aplică automat regulile de corecție și creează comenzile direct în Mentor.</p>
<p>Partea grea nu a fost codul. A fost să adun regulile: cele de pe hârtie și cele din capul oamenilor. Le-am discutat una câte una cu cei care introduceau comenzile și le-am pus în cod.</p>
<p>Ce știau doi-trei oameni din experiență rulează acum la fel, la fiecare comandă.</p>
<h2>Rezultat</h2>
<ul>
  <li>Comenzile nu mai sunt retastate în ERP.</li>
  <li>Regulile nu mai depind de un singur om care „știe”. Dacă lipsește cineva, comenzile intră la fel.</li>
  <li>Erorile din EDI sunt corectate la fel de fiecare dată.</li>
</ul>
<h2>Tehnologie, pe scurt</h2>
<ul>
  <li><strong>Preluarea comenzilor:</strong> automat, din canalele EDI ale retailerilor și din email (PDF și XML).</li>
  <li><strong>Citirea lor:</strong> parsere în Python pentru PDF (pdfplumber) și XML, câte unul pentru formatul fiecărui retailer.</li>
  <li><strong>Regulile firmei:</strong> mapări de articole, coduri GLN de livrare, prețuri din ofertele clienților, scrise în cod și în fișiere de configurare pe care le puteți verifica.</li>
  <li><strong>Crearea comenzii:</strong> prin API-ul REST al WinMentor, direct în ERP.</li>
  <li><strong>Panou de control:</strong> aplicație web în Vue 3, cu istoricul comenzilor trimise și rapoarte.</li>
  <li><strong>Rulare:</strong> backend FastAPI în Docker Compose, pe serverul clientului.</li>
</ul>`,
  },
  {
    slug: 'livrari-pe-telefonul-patronului',
    short: 'Livrările zilei, pe telefonul patronului',
    title: 'Livrările zilei, pe telefonul patronului',
    meta: 'Studiu de caz: patronul vede pe telefon câți paleți se livrează azi și unde, fără să sune la birou și fără să aștepte un Excel.',
    status: ['live', 'Livrat recent'],
    lead: 'Patronul vede pe telefon, pentru fiecare zi, câți paleți trebuie livrați și unde. Fără să sune la birou și fără să ceară un Excel.',
    tech: 'Vue 3, FastAPI, date din WinMentor',
    fig: dgPhone,
    caption: 'Schemă de principiu. Valorile din telefon sunt un exemplu; datele clientului nu apar pe site.',
    body: `
<h2>Situația</h2>
<p>Ca să afle ce se livrează azi, patronul trebuia să sune la birou sau să aștepte un Excel. Informația exista deja în ERP, dar nu ajungea la el atunci când avea nevoie de ea.</p>
<h2>Ce am construit</h2>
<p>O pagină pe telefon cu livrările fiecărei zile: câți paleți și unde. Datele existau deja în ERP; acum ajung acolo unde patronul chiar se uită, fără ca cineva să le copieze sau să le trimită.</p>
<h2>Rezultat</h2>
<ul>
  <li>Patronul vede livrările zilei fără să sune pe nimeni.</li>
  <li>Biroul nu mai pregătește situații separate doar ca să răspundă la întrebarea „ce pleacă azi?”.</li>
</ul>
<h2>Tehnologie, pe scurt</h2>
<p>Același backend Python (FastAPI) care trimite comenzile în WinMentor calculează și paleții de livrat pe fiecare zi. Patronul îi vede într-o pagină web făcută în Vue 3, deschisă din browserul telefonului, fără aplicație de instalat.</p>`,
  },
  {
    slug: 'proiect-european-paletizare',
    short: 'Proiect european de inovare în paletizare, 1,5 milioane €',
    title: 'Proiect european de inovare în paletizare: 1,5 milioane €',
    meta: 'Brady Software este partener tehnic într-un proiect cu finanțare europeană de 1,5 milioane € pentru o soluție inovativă de paletizare, alături de un producător alimentar.',
    status: ['live', 'În desfășurare'],
    lead: 'Partener tehnic al aceluiași producător alimentar într-un proiect cu finanțare europeană de 1,5 milioane € (valoarea totală a proiectului) pentru o soluție inovativă de paletizare.',
    tech: 'Software și integrare pentru paletizare',
    fig: dgPallet,
    caption: 'Schiță de principiu. Detaliile proiectului rămân confidențiale până la finalizare.',
    body: `
<h2>Despre proiect</h2>
<p>Proiectul are finanțare europeană de 1,5 milioane € și urmărește o soluție inovativă de paletizare. Brady Software participă ca partener tehnic, alături de producătorul alimentar pentru care am automatizat deja comenzile și livrările.</p>
<h2>De ce contează pentru voi</h2>
<p>Un proiect de inovare cu finanțare europeană are cerințe stricte de documentare, termene și raportare. E genul de rigoare cu care am lucrat zece ani în industria auto.</p>
<p>Lucrez cu același client la comenzi, la livrări și acum la acest proiect.</p>
<h2>Stadiu</h2>
<p>Proiectul este în desfășurare. Detaliile tehnice ale soluției nu sunt publice în această etapă.</p>`,
  },
  {
    slug: 'inspectie-etichete-banda',
    short: 'Inspecție automată a etichetelor pe bandă',
    title: 'Inspecție automată a etichetelor pe bandă',
    meta: 'Serviciu în dezvoltare: cameră pe bandă și software care citește eticheta și semnalează lotul sau produsul greșit, înainte să ajungă la retailer.',
    status: ['dev', 'În dezvoltare · pilot'],
    lead: 'Un produs sau un lot greșit pe etichetă înseamnă retur și penalitate de la retailer. Construim un sistem care semnalează eticheta greșită direct pe bandă.',
    tech: 'Cameră industrială, software de recunoaștere a etichetei',
    fig: dgConveyor,
    caption: 'Schemă de principiu. Sistemul este în dezvoltare; nu există încă rezultate publicabile.',
    body: `
<h2>Problema</h2>
<p>Pe o linie de ambalare, eticheta poate ajunge greșită: alt produs, alt lot, altă dată. Dacă paletul ajunge așa la retailer, urmează retur și penalități.</p>
<p>Verificarea vizuală făcută de om, sută la sută, toată tura, e obositoare și scapă greșeli exact când e linia mai aglomerată.</p>
<h2>Abordarea</h2>
<p>O cameră deasupra benzii și un software care citește eticheta fiecărui produs și o compară cu ce ar trebui să fie pe linie în acel moment. Când nu se potrivește, sistemul semnalează produsul sau lotul greșit.</p>
<h2>Stadiu, spus onest</h2>
<p>Este un serviciu pe care îl construim acum, nu un produs finit. Nu am rezultate de raportat încă. Am mai făcut testare automată cu recunoaștere de imagine și calibrare cu cameră în industria auto; aici aplic aceeași experiență pe linii de ambalare.</p>
<p>Dacă aveți o linie unde eticheta greșită e o problemă reală, vorbim la diagnostic și vedem dacă se potrivește pentru un pilot.</p>`,
  },
  {
    slug: 'consultanta-soft-hr',
    short: 'Consultanță pentru alegerea softului de HR',
    title: 'Consultanță pentru alegerea softului de HR',
    meta: 'Consultanță la alegerea unui soft de HR pentru un producător alimentar: firma alege ce îi trebuie, fără să plătească pentru funcții pe care nu le folosește.',
    status: ['live', 'Finalizat'],
    lead: 'Același producător alimentar avea de ales un soft de HR. L-am ajutat să aleagă după nevoile lui, nu după prezentarea vânzătorului.',
    tech: 'Analiză de cerințe, comparație de oferte',
    fig: null,
    body: `
<h2>Ce am făcut</h2>
<p>Am lucrat cu firma la alegerea unui soft de HR. Rolul meu a fost de om tehnic de partea clientului: să traduc ofertele furnizorilor în limbajul firmei și să separ ce îi trebuie de ce doar arată bine într-o demonstrație.</p>
<h2>De ce ar conta pentru voi</h2>
<p>La un ERP sau la un soft de HR, greșeala scumpă nu e prețul licenței. E să plătiți ani de zile pentru module pe care nu le folosiți, sau să descoperiți după implementare că lipsește exact funcția de care aveați nevoie.</p>`,
  },
  {
    slug: 'industria-auto',
    short: 'Din industria auto: Porsche și Lamborghini',
    title: 'Din industria auto: software pentru Porsche și Lamborghini',
    meta: 'Aproximativ 10 ani de software automotive: programare ECU automată, testare cu recunoaștere de imagine, calibrare head-up display, CI/CD. Porsche, Lamborghini, anterior VAG, Fiat, Daimler.',
    status: ['live', 'Experiență, nu serviciu'],
    lead: 'Aproximativ zece ani am lucrat la software pentru instrumente de bord și head-up display-uri, în echipele Arobs, NTT Data și Continental. Acum pe proiecte Arobs pentru Porsche și Lamborghini; anterior pentru VAG, Fiat și Daimler.',
    tech: 'CI/CD, testare automată, recunoaștere de imagine, programare ECU, calibrare cu cameră și motoare',
    fig: dgAuto,
    caption: 'Lanțul de livrare la care am lucrat, simplificat.',
    body: `
<h2>Ce am făcut acolo</h2>
<ul>
  <li><strong>Stații automate de programare ECU</strong>, care lucrează peste noapte fără om lângă ele.</li>
  <li><strong>Testare automată cu recunoaștere de imagine</strong>: software care se uită la ce afișează bordul și verifică dacă e corect.</li>
  <li><strong>Calibrare automată a head-up display-urilor</strong>, cu cameră și motoare.</li>
  <li><strong>Pipeline-uri CI/CD</strong> pentru echipe multinaționale: integrare software, testare și release în linia de producție.</li>
</ul>
<p>Am fost Product Owner pentru trei echipe, Scrum Master și, între 2018 și 2020, coordonator al programului de internship Arobs.</p>
<h2>De ce scriu asta pe un site pentru firme de producție</h2>
<p>Nu vând servicii auto. Dar în industria auto un defect ajuns la client costă enorm, așa că te obișnuiești să testezi automat, să documentezi și să nu lași nimic să depindă de memoria cuiva.</p>
<p>Cu același obicei lucrez când automatizez comenzile unei fabrici sau verificarea etichetelor pe o bandă.</p>`,
  },
];

for (const [i, c] of cases.entries()) {
  const next = cases[(i + 1) % cases.length];
  const path = `/studii-de-caz/${c.slug}/`;
  const fig = c.fig ? `<figure class="fig">${c.fig(c.slug.slice(0, 4))}<figcaption>${c.caption}</figcaption></figure>` : '';
  const body = `
<header class="page-head">
  <div class="wrap">
    <p class="crumbs"><a href="/">Acasă</a> / <a href="/studii-de-caz/">Studii de caz</a></p>
    <h1>${c.title}</h1>
    <p class="lead">${c.lead}</p>
  </div>
</header>
<div class="wrap article">
  <aside class="article-aside" aria-label="Fișa proiectului">
    <dl>
      ${c.slug === 'industria-auto'
        ? '<dt>Context</dt><dd>Proiecte Arobs pentru Porsche și Lamborghini, la care lucrez ca inginer</dd>'
        : c.slug === 'inspectie-etichete-banda'
          ? '<dt>Pentru</dt><dd>Firme care etichetează pe linie. Pilot în pregătire</dd>'
          : `<dt>Client</dt><dd>${CLIENT.charAt(0).toUpperCase() + CLIENT.slice(1)}</dd>`}
      <dt>Stadiu</dt><dd><span class="status ${c.status[0]}">${c.status[1]}</span></dd>
      <dt>Tehnologie</dt><dd>${c.tech}</dd>
    </dl>
  </aside>
  <article class="prose">
    ${fig}
    ${c.body}
  </article>
</div>
<div class="wrap"><nav class="next-case" aria-label="Următorul studiu de caz"><span class="muted">Următorul studiu de caz</span><a href="/studii-de-caz/${next.slug}/">${next.short} →</a></nav></div>
${ctaFinal()}`;
  out(path, layout({ path, title: `${c.title} · Brady Software`, description: c.meta, current: 'studii', body, ogType: 'article' }));
}

/* ---------------- index studii de caz ---------------- */

const caseIndex = `
<header class="page-head">
  <div class="wrap">
    <p class="crumbs"><a href="/">Acasă</a> / Studii de caz</p>
    <h1>Studii de caz</h1>
    <p class="lead">Ce am construit pentru ${CLIENT}, ce construim acum și de unde vine experiența.</p>
  </div>
</header>
<div class="wrap" style="padding-block:48px 72px">
  <ol class="case-index">
    ${cases.map((c) => `<li><span class="status ${c.status[0]}">${c.status[1]}</span><h2><a href="/studii-de-caz/${c.slug}/">${c.short}</a></h2><p>${c.lead}</p></li>`).join('\n    ')}
  </ol>
</div>
${ctaFinal()}`;
out('/studii-de-caz/', layout({
  path: '/studii-de-caz/',
  title: 'Studii de caz: automatizări în producție și distribuție · Brady Software',
  description: 'Comenzi Lidl, Rewe și Metro automatizate în ERP, livrările zilei pe telefon, proiect UE de paletizare, inspecția etichetelor pe bandă și experiența din industria auto.',
  current: 'studii',
  body: caseIndex,
}));

/* ---------------- home ---------------- */

const caseRow = (c, flip) => `
<article class="case${flip ? ' flip' : ''}">
  <div class="case-body">
    <span class="status ${c.status[0]}">${c.status[1]}</span>
    <h3><a href="/studii-de-caz/${c.slug}/">${c.short}</a></h3>
    <p style="margin-top:16px">${c.lead}</p>
    <a class="more" href="/studii-de-caz/${c.slug}/">Citește studiul de caz<span class="sr"> „${c.short}”</span> →</a>
  </div>
  <figure class="fig case-fig">${c.fig('h' + c.slug.slice(0, 3))}<figcaption>${c.caption}</figcaption></figure>
</article>`;

const problems = [
  ['Comenzile de la Lidl, Rewe sau Metro vin pe platformă și pe email, iar cineva le tastează din nou în ERP.', 'Comenzile intră direct în ERP, cu regulile firmei aplicate automat.', 'Comenzi automate în ERP'],
  ['Ca să aflu ce se livrează azi, sun la birou sau aștept un Excel.', 'Datele din ERP ajung pe telefonul dumneavoastră: ce pleacă azi, unde și câți paleți.', 'Informație pe telefon'],
  ['O etichetă cu lotul greșit înseamnă retur și penalitate de la retailer.', 'Cameră pe bandă și software care citește eticheta și semnalează lotul greșit. Serviciu în dezvoltare.', 'Inspecție vizuală pe linie'],
  ['Procedurile și fișele tehnice stau în zeci de documente pe care nu le găsește nimeni.', 'Un asistent AI răspunde angajaților din documentele voastre. Am construit deja așa ceva pentru echipe de ingineri la Arobs.', 'Asistent AI pe documente'],
  ['Rapoartele se fac de mână: copiat din ERP în Excel, apoi trimis pe email.', 'Legături între ERP, Excel, email și aplicații. Raportul se face singur.', 'Integrări și rapoarte'],
  ['Trebuie să aleg un ERP sau un soft de HR, iar fiecare vânzător spune că al lui e cel mai bun.', 'Vă ajut să alegeți ce vă trebuie, fără să plătiți funcții pe care nu le folosiți.', 'Consultanță la alegerea softului'],
];

const jsonld = `<script type="application/ld+json">
${JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': SITE + '/#firma',
      name: 'Brady Software SRL',
      url: SITE + '/',
      image: SITE + '/og-image.jpg',
      logo: SITE + '/favicon.svg',
      description: 'Automatizări și AI pentru producție și distribuție: integrare ERP, comenzi EDI, inspecție vizuală, asistenți AI pe documente.',
      telephone: '+40727819906',
      email: MAIL,
      foundingDate: '2023',
      taxID: '47746610',
      address: { '@type': 'PostalAddress', addressLocality: 'Sibiu', addressRegion: 'Sibiu', addressCountry: 'RO' },
      areaServed: [{ '@type': 'City', name: 'Sibiu' }, { '@type': 'City', name: 'Cluj-Napoca' }, { '@type': 'Country', name: 'România' }],
      founder: { '@id': SITE + '/#tudor' },
      knowsAbout: ['automatizare procese', 'integrare ERP', 'comenzi EDI', 'inspecție vizuală', 'AI pentru producție'],
    },
    {
      '@type': 'Person',
      '@id': SITE + '/#tudor',
      name: 'Tudor Brădescu',
      jobTitle: 'Inginer electronist, fondator Brady Software',
      url: SITE + '/despre/',
      email: MAIL,
      telephone: '+40727819906',
      address: { '@type': 'PostalAddress', addressLocality: 'Sibiu', addressCountry: 'RO' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universitatea Tehnică din Cluj-Napoca' },
      worksFor: { '@id': SITE + '/#firma' },
    },
  ],
}, null, 1)}
</script>
`;

const home = `
<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <h1>Software care face munca manuală din firma voastră.</h1>
      <p class="lead">Construit de un inginer care a livrat zece ani software pentru linii de producție auto, inclusiv Porsche și Lamborghini. Comenzi care intră singure în ERP, etichete verificate automat pe bandă, documente procesate cu AI.</p>
      <div class="btn-row">
        <a class="btn btn-signal" href="/diagnostic/">Programează diagnosticul ${icon.arrow}</a>
        <a class="btn btn-line" href="${PHONE_HREF}">${icon.phone}Sună: ${PHONE_TXT}</a>
      </div>
    </div>
    ${tblock({ cta: 'none' })}
  </div>
</section>

<section class="proof" aria-label="Pe scurt">
  <div class="wrap">
    <ul>
      <li><b>Lidl · Rewe · Metro</b><span>comenzile unui producător alimentar intră automat în ERP</span></li>
      <li><b>Porsche și Lamborghini</b><span>software pentru instrumente de bord și head-up display-uri, prin Arobs</span></li>
      <li><b>Proiect UE de 1,5 M€</b><span>partener tehnic al producătorului, într-un proiect de inovare în paletizare</span></li>
    </ul>
  </div>
</section>

<section class="section" aria-labelledby="probleme-h" style="border-top:0">
  <div class="wrap">
    <div class="section-head">
      <h2 id="probleme-h">Unde se duc orele în firmă</h2>
      <p class="lead">Firme de 20–200 de angajați care au un ERP (programul de gestiune), dar unde munca se face tot pe lângă el: în Excel, pe hârtie, la telefon. Dacă recunoașteți una dintre situații, merită să vorbim.</p>
    </div>
    <ul class="problems">
      ${problems.map(([p, s, t]) => `<li><q>${p}</q><p>${s}</p><span class="tag">${t}</span></li>`).join('\n      ')}
    </ul>
  </div>
</section>

<section class="section" id="studii" aria-labelledby="studii-h">
  <div class="wrap">
    <div class="section-head">
      <h2 id="studii-h">Ce am construit și la ce lucrez acum</h2>
      <p class="lead">Toate trei pentru același client: ${CLIENT}. Numele firmei rămâne confidențial.</p>
    </div>
    <div class="cases">
      ${caseRow(cases[0], false)}
      ${caseRow(cases[1], true)}
      ${caseRow(cases[2], false)}
    </div>
    <p class="more-cases">Tot aici: <a href="/studii-de-caz/inspectie-etichete-banda/">inspecția etichetelor pe bandă</a> (în dezvoltare), <a href="/studii-de-caz/consultanta-soft-hr/">consultanță pentru alegerea softului de HR</a> și <a href="/studii-de-caz/industria-auto/">ce am făcut în industria auto</a>.</p>
  </div>
</section>

<section class="section" id="cum-lucrez" aria-labelledby="cum-h">
  <div class="wrap">
    <div class="section-head">
      <h2 id="cum-h">Cum lucrez</h2>
      <p class="lead">Pași mici, fiecare cu un rezultat pe care îl vedeți înainte să decideți următorul pas.</p>
    </div>
    <ol class="steps">
      <li><h3>Diagnostic</h3><p>2 ore, la voi sau online. Rămâneți cu lista scrisă de 3–5 automatizări posibile, cu timp și cost estimat. Gratuit.</p></li>
      <li><h3>Prototip</h3><p>Construiesc întâi o variantă mică, pe datele voastre reale. Vedeți că funcționează înainte de un angajament mare.</p></li>
      <li><h3>Implementare</h3><p>Sistemul intră în lucru lângă oamenii care îl folosesc. Verificăm regulile împreună cu ei.</p></li>
      <li><h3>Suport</h3><p>Când se schimbă ceva în ERP sau la un client, ajustez software-ul. Vorbiți cu omul care l-a scris.</p></li>
    </ol>
  </div>
</section>

<section class="section dark" aria-labelledby="cine-h">
  <div class="wrap who">
    <div>
      <h2 id="cine-h">Lucrați direct cu inginerul</h2>
      <p>Sunt Tudor Brădescu, inginer electronist, absolvent UTCN, din Sibiu. Am lucrat în jur de zece ani în software pentru industria auto, la Arobs, NTT Data și Continental: software testat automat și livrat direct pe linia de producție.</p>
      <p>Am vândut și am negociat și în afacerea familiei, care produce garduri din beton și monumente funerare. Știu cum arată o firmă de producție din interior.</p>
      <p>Prin Brady Software SRL lucrați direct cu mine, fără intermediari. Când proiectul o cere, aduc colaboratori.</p>
      <p><a href="/despre/">Povestea completă →</a></p>
    </div>
    <dl class="facts">
      <div><dt>~10 ani</dt><dd>software pentru industria auto</dd></div>
      <div><dt>3 echipe</dt><dd>conduse ca Product Owner</dd></div>
      <div><dt>3 grupuri</dt><dd>constructori auto: VW (inclusiv Porsche și Lamborghini), Fiat, Daimler</dd></div>
      <div><dt>2023</dt><dd>Brady Software SRL</dd></div>
    </dl>
  </div>
</section>
${ctaFinal()}`;

out('/', layout({
  path: '/',
  title: 'Automatizări și AI pentru producție și distribuție · Brady Software, Sibiu',
  description: 'Comenzi EDI care intră singure în ERP, inspecție vizuală pe bandă, AI pe documentele firmei. Inginer din industria auto, Sibiu și Cluj. Diagnostic de automatizare gratuit.',
  current: 'home',
  body: home,
  jsonld,
}));

/* ---------------- diagnostic ---------------- */

const dx = `
<section class="dx-hero">
  <div class="wrap dx-grid">
    <div>
      <p class="event-note" data-ebh hidden>Ne-am cunoscut la EBH Sibiu. Acesta e diagnosticul despre care am vorbit.</p>
      <h1>Două ore la voi în firmă. Rămâneți cu lista de automatizări posibile.</h1>
      <p class="lead">Gratuit, fără obligații. Mă uit la procese împreună cu voi și primiți 3–5 lucruri care se pot automatiza, fiecare cu timp și cost estimat.</p>
      <div class="quick">
        <a class="btn btn-signal" href="#formular">${icon.form}Programează diagnosticul</a>
        <a class="btn btn-line" href="${PHONE_HREF}">${icon.phone}Sună acum</a>
        <a class="btn btn-line" href="${WA_MSG}">${icon.chat}WhatsApp</a>
      </div>
      <ul class="proof-mini">
        <li>Comenzile Lidl, Rewe și Metro ale unui producător alimentar intră automat în ERP</li>
        <li>Software pentru Porsche și Lamborghini, prin Arobs</li>
        <li>Brady Software SRL, din 2023. Răspund eu la telefon și tot eu scriu software-ul</li>
      </ul>
    </div>
    ${tblock({ cta: 'none', title: 'Fișa diagnosticului' })}
  </div>
</section>

<section class="section" id="formular" aria-labelledby="form-h">
  <div class="wrap split">
    <div>
      <h2 id="form-h">Lăsați-mi numărul. Vă sun eu.</h2>
      <p class="lead" style="margin-top:16px">Vă sun în aceeași zi lucrătoare. Patru câmpuri, sub un minut. Dacă preferați, scrieți pe <a href="${WA_MSG}">WhatsApp</a> sau la <a href="mailto:${MAIL}">${MAIL}</a>.</p>
    </div>
    <form class="form" id="dx-form" action="https://formspree.io/f/maqdprgj" method="POST" novalidate>
      <input type="hidden" name="sursa" value="diagnostic-site">
      <input type="hidden" name="_subject" value="Cerere Diagnostic de automatizare">
      <div class="field">
        <label for="f-nume">Nume</label>
        <input id="f-nume" name="nume" type="text" autocomplete="name" required>
      </div>
      <div class="field">
        <label for="f-tel">Telefon</label>
        <input id="f-tel" name="telefon" type="tel" autocomplete="tel" inputmode="tel" required placeholder="07xx xxx xxx">
      </div>
      <div class="field">
        <label for="f-firma">Firmă <span class="hint">(opțional)</span></label>
        <input id="f-firma" name="firma" type="text" autocomplete="organization">
      </div>
      <div class="field">
        <label for="f-problema">Ce vă enervează cel mai mult în firmă? <span class="hint">(opțional)</span></label>
        <textarea id="f-problema" name="problema" rows="4" placeholder="De exemplu: comenzile tastate de două ori, rapoartele făcute de mână în Excel"></textarea>
      </div>
      <button class="btn btn-signal" type="submit">Trimite cererea ${icon.arrow}</button>
      <div class="form-status" id="dx-status" aria-live="polite" tabindex="-1"></div>
      <p class="small">Folosesc datele doar ca să vă contactez pentru diagnostic.</p>
    </form>
  </div>
</section>

<section class="section" aria-labelledby="exemple-h">
  <div class="wrap">
    <div class="section-head"><h2 id="exemple-h">Ce se poate automatiza, de exemplu</h2></div>
    <ul class="problems">
      <li><q>Comenzile de la Lidl, Rewe și Metro le tastează cineva din nou în ERP.</q><p>Acum intră singure, cu regulile firmei aplicate de fiecare dată la fel. <a href="/studii-de-caz/comenzi-lidl-rewe-metro-erp/">Cum am făcut</a></p><span class="tag">Livrat</span></li>
      <li><q>Ca să aflu ce pleacă azi, sun la birou.</q><p>Patronul vede pe telefon câți paleți se livrează azi și unde. <a href="/studii-de-caz/livrari-pe-telefonul-patronului/">Cum am făcut</a></p><span class="tag">Livrat</span></li>
      <li><q>Rapoartele se fac de mână, din ERP în Excel.</q><p>Legături între ERP, Excel și email, iar raportul se face singur.</p><span class="tag">Integrări</span></li>
    </ul>
  </div>
</section>

<section class="section" aria-labelledby="decurge-h">
  <div class="wrap">
    <div class="section-head"><h2 id="decurge-h">Cum decurge</h2></div>
    <ol class="steps steps-3">
      <li><h3>Stabilim ziua</h3><p>Lăsați-mi numărul sau sunați-mă. Vă întreb pe scurt ce vă consumă cel mai mult timp.</p></li>
      <li><h3>Vin la voi</h3><p>Îmi arătați cum circulă o comandă, un document sau un produs. Vorbesc cu oamenii care fac munca.</p></li>
      <li><h3>Primiți lista</h3><p>3–5 lucruri care se pot automatiza, cu timp și cost estimat. Decideți voi dacă mergem mai departe.</p></li>
    </ol>
  </div>
</section>

<section class="section" aria-labelledby="intrebari-h">
  <div class="wrap split">
    <h2 id="intrebari-h">Întrebări înainte să mă chemați</h2>
    <dl class="faq">
      <div><dt>Ce se întâmplă cu ce vedeți la noi?</dt><dd>Rămâne la voi. Pe site nu apare numele niciunui client, iar al vostru nu va apărea fără acordul vostru.</dd></div>
      <div><dt>Aveți nevoie de acces în ERP?</dt><dd>Nu, la diagnostic nu. Îmi arătați cum lucrați, iar eu iau notițe.</dd></div>
      <div><dt>Ce urmează după listă?</dt><dd>Lista e a voastră. Dacă vreți să mergem mai departe, începem cu un prototip mic, pe datele voastre. Dacă nu, ne oprim aici.</dd></div>
      <div><dt>Ce rămâne la voi dacă lucrăm împreună?</dt><dd>Software-ul rulează pe serverul vostru, iar regulile firmei stau în fișiere pe care le puteți citi.</dd></div>
    </dl>
  </div>
</section>

<section class="section dark" aria-labelledby="cine-dx">
  <div class="wrap split">
    <h2 id="cine-dx">Cine vine la voi</h2>
    <div>
      <p class="lead" style="max-width:52ch">Tudor Brădescu, inginer electronist din Sibiu. Zece ani de software pentru industria auto, acum pe proiecte Arobs pentru Porsche și Lamborghini.</p>
      <p>Pentru un producător alimentar din Transilvania am făcut ca toate comenzile de la Lidl, Rewe și Metro să intre singure în ERP. Prin Brady Software SRL lucrați direct cu mine.</p>
      <p><a href="/studii-de-caz/comenzi-lidl-rewe-metro-erp/">Vedeți cum am făcut →</a></p>
    </div>
  </div>
</section>`;

out('/diagnostic/', layout({
  path: '/diagnostic/',
  title: 'Diagnostic de automatizare gratuit · Brady Software, Sibiu și Cluj',
  description: 'Două ore la sediul vostru sau online. Primiți o listă scrisă cu 3–5 procese care se pot automatiza, cu timp și cost estimat. Gratuit, fără obligații.',
  current: 'diagnostic',
  body: dx,
}));

/* ---------------- despre ---------------- */

const despre = `
<header class="page-head">
  <div class="wrap">
    <p class="crumbs"><a href="/">Acasă</a> / Despre</p>
    <h1>Inginer electronist. Zece ani în auto. Acum, fabricile din România.</h1>
    <p class="lead">Sunt Tudor Brădescu, din Sibiu. Construiesc automatizări pentru firme de producție și distribuție, prin Brady Software SRL.</p>
  </div>
</header>
<div class="wrap article">
  <aside class="article-aside" aria-label="Pe scurt">
    <dl>
      <dt>Studii</dt><dd>Inginer electronist, UTCN, Facultatea de Electronică, Telecomunicații și Tehnologia Informației, secția engleză</dd>
      <dt>Industrie</dt><dd>~10 ani software automotive</dd>
      <dt>Firma</dt><dd>Brady Software SRL, din 2023</dd>
      <dt>Zonă</dt><dd>Sibiu / Cluj-Napoca, online în rest</dd>
    </dl>
  </aside>
  <article class="prose">
    <h2>Traseul</h2>
    <ol class="timeline">
      <li><span class="yr">2013–2017</span><span>UTCN, Electronică, Telecomunicații și Tehnologia Informației, secția engleză.</span></li>
      <li><span class="yr">~10 ani</span><span>Software automotive la Arobs, NTT Data și Continental: integrare software, CI/CD, testare automată, release în linia de producție, pentru instrumente de bord și head-up display-uri.</span></li>
      <li><span class="yr">2018–2020</span><span>Coordonator al programului de internship Arobs.</span></li>
      <li><span class="yr">pe parcurs</span><span>Product Owner pentru trei echipe, Scrum Master.</span></li>
      <li><span class="yr">2023</span><span>Înființez Brady Software SRL.</span></li>
      <li><span class="yr">acum</span><span>Proiecte auto pentru Porsche și Lamborghini (prin Arobs) și automatizări pentru firme românești.</span></li>
    </ol>

    <h2>De ce automatizări pentru firme de producție</h2>
    <p>În industria auto am învățat să nu las nimic să depindă de memoria cuiva. Totul se testează automat, se documentează și se poate repeta.</p>
    <p>În multe firme românești de producție și distribuție, lucrurile stau invers. ERP-ul există, dar oamenii lucrează pe lângă el: retastează comenzi, fac Excel-uri, verifică etichete cu ochiul. Regulile importante sunt în capul a doi-trei oameni.</p>
    <p>Asta e munca pe care o automatizez. Primul proiect de acest fel a fost pentru un producător alimentar din Transilvania: comenzile de la Lidl, Rewe și Metro intră acum singure în ERP.</p>

    <h2>Nu doar programator</h2>
    <p>Am făcut vânzări și negociere în afacerea familiei, care produce garduri din beton și monumente funerare. Știu cum se discută un preț, ce înseamnă o comandă urgentă și de ce un patron nu are timp de prezentări lungi.</p>
    <p>Lucrez și cu hardware: roboți, home automation, plăci electronice proiectate de mine pe Atmega, un braț robotic, o mașină de termoformare. De aceea o cameră pe o bandă sau un senzor într-o hală nu mă sperie.</p>

    <h2>Cum lucrăm</h2>
    <p>Direct cu mine, fără intermediari și fără manageri de cont. Când un proiect cere mai mulți oameni, aduc colaboratori și vă spun asta de la început.</p>
    <p>Pe lângă automatizări, am făcut și câteva <a href="/site-uri/">site-uri de prezentare</a>.</p>
  </article>
</div>
${ctaFinal()}`;

out('/despre/', layout({
  path: '/despre/',
  title: 'Despre Tudor Brădescu · inginer electronist, Brady Software',
  description: 'Tudor Brădescu: inginer electronist (UTCN), ~10 ani software automotive pentru Porsche, Lamborghini, VAG, Fiat, Daimler. Automatizări pentru firme de producție din Sibiu și Cluj.',
  current: 'despre',
  body: despre,
}));

/* ---------------- site-uri ---------------- */

const sites = [
  ['Garduri Beton Sibiu', 'https://gardbetonsibiu.ro', 'gardbetonsibiu', 'Site de prezentare pentru afacerea familiei: producție de garduri din beton în Sibiu.'],
  ['Monumente Funerare Cristian', 'https://monumentefunerarecristian.ro', 'monumentefunerarecristian', 'Tot pentru afacerea familiei: monumente funerare. Prezentarea produselor și datele de contact.'],
  ['Platformă de coaching fitness pentru Radu Mocuța', 'https://radumocutacoachingplatform.github.io/home/', 'radumocuta', 'Platformă web pentru clienții de coaching fitness ai lui Radu Mocuța: module de antrenament, check-in-uri, sesiuni live și un flux de noutăți. Radu are un panou de administrare pentru clienți și conținut. Construită cu Vue 3 și Supabase. Public se vede doar pagina de autentificare; schema de mai jos arată ce e în spatele ei.'],
];

const siteuri = `
<header class="page-head">
  <div class="wrap">
    <p class="crumbs"><a href="/">Acasă</a> / Site-uri de prezentare</p>
    <h1>Site-uri de prezentare</h1>
    <p class="lead">Nu e meseria mea principală, dar am făcut câteva. Două sunt pentru afacerea familiei mele, unul pentru un antrenor de fitness.</p>
  </div>
</header>
<div class="wrap" style="padding-top:48px;padding-bottom:72px">
  <div class="shots">
    ${sites.map(([name, url, img, desc]) => `<article class="shot">
      <a href="${url}" aria-label="${name} (site extern)"><img src="/assets/img/site-${img}.webp" width="1280" height="800" loading="lazy" decoding="async" alt="Captură a paginii principale ${name}"></a>
      <div>
        <h2 style="font-size:clamp(1.4rem,1.2rem + 1vw,1.9rem)">${name}</h2>
        <p class="muted" style="margin-top:12px">${desc}</p>
        <p><a class="mono" href="${url}">${url.replace('https://', '').replace(/\/$/, '')}</a></p>
        ${img === 'radumocuta' ? `<figure class="fig" style="margin-top:24px">${dgCoaching()}<figcaption>Schemă desenată după codul sursă al platformei. Nu e o captură de ecran.</figcaption></figure>` : ''}
      </div>
    </article>`).join('\n    ')}
  </div>
</div>
${ctaFinal()}`;

out('/site-uri/', layout({
  path: '/site-uri/',
  title: 'Site-uri de prezentare · Brady Software',
  description: 'Trei site-uri de prezentare făcute de Brady Software: Garduri Beton Sibiu, Monumente Funerare Cristian și o platformă de coaching fitness.',
  current: 'site-uri',
  body: siteuri,
}));

/* ---------------- 404 ---------------- */

out('/404.html', layout({
  path: '/404.html',
  title: 'Pagina nu există · Brady Software',
  description: 'Pagina căutată nu există. Mergeți la pagina principală sau programați un Diagnostic de automatizare.',
  current: '',
  body: `<header class="page-head"><div class="wrap"><h1>Pagina asta nu există.</h1><p class="lead">Poate adresa s-a schimbat. De aici puteți merge la <a href="/">pagina principală</a> sau direct la <a href="/diagnostic/">Diagnosticul de automatizare</a>.</p></div></header>`,
}).replace('<meta name="viewport"', '<meta name="robots" content="noindex">\n<meta name="viewport"'));

/* ---------------- sitemap ---------------- */

const urls = ['/', '/diagnostic/', '/studii-de-caz/', ...cases.map((c) => `/studii-de-caz/${c.slug}/`), '/despre/', '/site-uri/'];
writeFileSync(join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE}${u}</loc><lastmod>2026-11-03</lastmod></url>`).join('\n')}
</urlset>
`);

console.log('pagini:', urls.length + 1);
