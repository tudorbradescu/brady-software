# BRIEF — redesign bradysoftware.ro

> Claude Code citește acest fișier înainte de orice. Tot ce e aici e verificat de Tudor. Ce nu e scris aici nu se inventează (cifre, clienți, logo-uri, testimoniale, ani).

## 1. Scopul site-ului

Un singur scop: **un patron sau director de producție/distribuție din România intră pe site și programează un „Diagnostic de automatizare”** (telefon, WhatsApp sau formular).

Contextul imediat: pe **12 noiembrie 2026** sunt la evenimentul de business EBH ed. 2 (Hilton Sibiu). Oamenii vor scana un cod QR de pe cartea mea de vizită și vor ajunge pe `/diagnostic`. Au 20 de secunde pe telefon ca să decidă dacă sunt serios. Site-ul trebuie să arate ca al unui **inginer de încredere**, nu ca al unei agenții web.

## 2. Cine sunt (fapte reale — doar astea se folosesc)

- **Tudor Brădescu**, inginer electronist (UTCN, Facultatea de Electronică, Telecomunicații și Tehnologia Informației, secția engleză, 2013–2017). Din Sibiu.
- **~10 ani în software automotive** (Arobs, NTT Data, Continental): integrare software, CI/CD, testare automată, release în linia de producție, pentru borduri și head-up display-uri. Acum: **Porsche și Lamborghini** (prin Arobs, client Aumovio). Anterior: VAG, Fiat, Daimler. Numele Porsche și Lamborghini se pot folosi pe site.
- Am fost **Product Owner** (3 echipe), **Scrum Master**, coordonator de internship Arobs (2018–2020).
- Am făcut vânzări și negociere în afacerea familiei (producție garduri din beton și monumente funerare) — înțeleg o firmă de producție din interior, nu doar din cod.
- Hardware: roboți, home automation, plăci proiectate de mine (Atmega), braț robotic, termoformare. Nu sunt „doar programator”.
- **Brady Software SRL**, din 2023. Lucrez direct cu clientul, fără intermediari; aduc colaboratori când proiectul o cere.

## 3. Pe cine vreau să conving

Firme de **20–200 de angajați** din producție, industrie alimentară, distribuție, logistică, furnizori auto. Au un ERP, dar oamenii fac muncă manuală în jurul lui (Excel, retastat comenzi, verificări vizuale). Decidentul: patron, director general, director de producție/operațiuni. Nu e tehnic. Îl interesează: ore economisite, greșeli evitate, risc mic, cineva care răspunde la telefon.

## 4. Mesajul

**Poziționare:** Automatizări și AI pentru producție și distribuție. Construite de un inginer care a livrat software pentru industria auto premium.

Titluri — direcția (Claude poate rafina, dar păstrează ideea, fără clișee):
- „Software care face munca manuală din firma ta. Construit de un inginer din industria auto.”
- Subtitlu: comenzi care intră singure în ERP, etichete verificate automat pe bandă, documente procesate cu AI.

**Ofertă de intrare (CTA principal, peste tot):** *Diagnostic de automatizare* — vin la voi 2–3 ore (sau online), mă uit la procese și plecați cu o listă scrisă de 3–5 lucruri care se pot automatiza, cu estimare de timp și cost. **Gratuit, 2 ore, la sediul vostru în zona Sibiu și Cluj sau online.** Fără obligații.

## 5. Servicii (produse clare, nu „soluții digitale”)

1. **Comenzi automate în ERP** — comenzile de la retaileri (Lidl, Rewe, Metro) și clienți mari, din EDI sau email, intră singure în ERP, cu regulile firmei aplicate automat.
2. **Informația potrivită pe telefonul decidentului** — ce trebuie livrat azi, unde, cât; date din ERP pe care patronul le vede fără să sune pe nimeni.
3. **Inspecție vizuală pe linie** — cameră + software care recunoaște eticheta și semnalează lotul/codul greșit (în dezvoltare — se prezintă ca serviciu pe care îl construim, nu ca produs finit).
4. **Asistent AI pe documentele firmei** — proceduri, manuale, fișe tehnice: angajații întreabă, AI-ul răspunde din documentele voastre (am construit deja așa ceva pentru echipe de ingineri).
5. **Automatizări de proces și integrări** — legături între ERP, Excel, email, aplicații; rapoarte care se fac singure.
6. **Consultanță la alegerea softului** — ERP, HR: ajut firma să aleagă corect, fără să plătească pentru funcții de care nu are nevoie.
7. *Secundar, discret:* site-uri de prezentare (portofoliul vechi — o pagină separată, NU pe home).

## 6. Studii de caz (inima site-ului)

Format pentru fiecare: **Situația → Ce am construit → Rezultat → Tehnologie (scurt)**. Fără cifre inventate: singurele cifre sigure sunt cele scrise aici; restul se formulează calitativ și onest.

**Clientul NU se numește.** Pe site apare mereu ca: „un producător alimentar din Transilvania, furnizor pentru Lidl, Rewe și Metro”. Nu se pune logo, nume, oraș exact sau poze care l-ar putea identifica. Numele retailerilor (Lidl, Rewe, Metro) se pot folosi.

**A. Comenzile de la Lidl, Rewe și Metro intră singure în ERP** (livrat, în producție)
- Situația: ~20 de comenzi pe zi, venite pe EDI și pe email, introduse manual în ERP-ul Mentor. Mesajele EDI veneau uneori greșite și trebuiau corectate după reguli scrise pe hârtie; alte reguli existau doar în capul oamenilor care făceau treaba.
- Ce am construit: software care preia comenzile din EDI și din email, aplică automat regulile de corecție (le-am adunat de pe hârtie și din capul oamenilor și le-am pus în cod) și creează comenzile direct în Mentor.
- Rezultat (calitativ): comenzile nu mai sunt retastate; regulile nu mai depind de un singur om care „știe”; erorile din EDI sunt corectate la fel de fiecare dată. Mesajul-cheie: *am transformat cunoștințele din capul oamenilor în reguli care rulează singure.*

**B. Livrările zilei pe telefonul patronului** (livrat recent)
- Patronul vede pe telefon, pentru fiecare zi, exact câți paleți trebuie livrați și unde. Fără telefoane la birou, fără Excel.
- Mesaj: datele există deja în ERP; le aduc acolo unde decidentul chiar se uită.

**C. Proiect european de inovare în paletizare — 1,5 milioane €** (în desfășurare)
- Partener tehnic, alături de același producător, într-un proiect cu finanțare europeană de 1,5 milioane € pentru o soluție inovativă de paletizare. Se poate spune public.

**D. Inspecție automată a etichetelor pe bandă** (concept în dezvoltare — se prezintă onest ca „în dezvoltare / pilot”, NU ca sistem livrat)
- Problema: produs sau lot greșit pe etichetă înseamnă retururi și penalități de la retaileri.
- Abordarea: cameră pe bandă + software care citește eticheta și semnalează lotul/produsul greșit. Fără poze, fără rezultate.

**E. Consultanță pentru alegerea softului de HR** (scurt, același client)

**F. Din industria auto** (credibilitate, nu servicii): borduri și head-up display-uri pentru Porsche și Lamborghini (via Arobs, pentru Aumovio) — stații automate de programare ECU peste noapte, testare automată cu recunoaștere de imagine, calibrare automată a head-up display-urilor cu cameră și motoare, pipeline-uri CI/CD pentru echipe multinaționale. Anterior: VAG, Fiat, Daimler.

**Fără secțiune de testimoniale** (decizie fermă).

## 7. Structura site-ului

- `/` — Home: hero cu poziționare + CTA; bandă de dovezi (Porsche & Lamborghini · comenzi Lidl/Rewe/Metro automatizate · proiect UE 1,5 M€); problemele pe care le rezolv (în limbajul patronului); studiile de caz A, B, C; cum lucrez (Diagnostic → Prototip → Implementare → Suport); cine sunt (fără poză: un bloc tipografic scurt cu traseul profesional și cifre reale: ~10 ani, 3 echipe conduse, 3 OEM-uri); CTA final.
- `/diagnostic` — **landing page pentru codul QR de la eveniment**. Mobil întâi. Ce primești, cum decurge, cine sunt în 3 rânduri, formular scurt (nume, firmă, telefon, ce vă enervează cel mai mult) + buton WhatsApp + telefon click-to-call. Trebuie să se încarce instant pe 4G.
- `/studii-de-caz/…` — o pagină pentru fiecare studiu de caz.
- `/despre` — povestea: inginer electronist → 10 ani auto → automatizări pentru firme românești.
- `/site-uri` — pagină secundară, link discret din footer și din /despre (NU în meniul principal, NU pe home). Doar cele 3 proiecte reale, cu capturi făcute cu Playwright de pe site-urile live: Garduri Beton Sibiu (https://gardbetonsibiu.ro) și Monumente Funerare Cristian (https://monumentefunerarecristian.ro) — ale afacerii familiei, spus onest — plus platforma de coaching fitness pentru Radu Mocuța (https://radumocutacoachingplatform.github.io/home/). Demo-urile `tudorbradescu.github.io/portfolio-*` și new-lifestyle-salon NU apar deloc.
- Contact în footer pe toate paginile: tudor@bradysoftware.ro · +40 727 819 906 · WhatsApp · Sibiu / Cluj-Napoca · Brady Software SRL · CUI 47746610 · J12/1025/2023 · județul Cluj · din 2023 (contează la încredere în B2B).

Limba: română. (Engleză/germană — mai târziu, nu acum.)

## 8. Direcția vizuală — „inginerie de precizie”, nu „agenție AI”

Gândește: fișă tehnică industrială, desen tehnic, panou de control dintr-o fabrică bine ținută. Calm, precis, sigur pe el.

- Tipografie cu caracter, de exemplu un grotesk industrial pentru titluri + un mono pentru detalii tehnice (coduri de lot, cifre). Alege conștient și scrie de ce.
- Paletă restrânsă: neutre calde sau grafit + **un singur** accent (ex. galben de siguranță industrial sau portocaliu de semnalizare). Contrast AA peste tot.
- Vizualuri: **diagrame SVG desenate de mână în cod** ale fluxurilor reale (ex. Lidl/Rewe/Metro → software → ERP; bandă → cameră → OK/RESPINS). **Fără portret și fără poze cu Tudor** (decizie fermă). Identitatea vizuală vine din tipografie și din diagramele SVG. Fără fotografii pe site (nu există poze utilizabile și nu se folosesc poze de stoc).
- Mișcare puțină și cu sens (o diagramă care „curge”), respectă `prefers-reduced-motion`.

### Interzis (AI slop)
- Gradienți mov/albastru, glassmorphism, blob-uri, „glow”, fundal cu particule.
- Fonturi default: Inter, Roboto, Arial, Space Grotesk, Poppins.
- Iconițe emoji; grilă generică de 3 carduri identice cu iconiță + titlu + 2 rânduri.
- Poze de stoc, ilustrații 3D generice, roboți „AI” cu creier albastru.
- Clișee: „transformăm ideile în experiențe digitale”, „soluții inovatoare”, „partenerul tău de încredere”, „duce afacerea la nivelul următor”, „în era digitală”.
- Cifre, logo-uri de clienți, testimoniale sau ani de experiență inventați. Contoare animate „0+”.
- Liniuțe lungi (—) puse peste tot în text și propoziții în trei timpi tipice de AI.

## 9. Tehnic

- Site static (HTML/CSS/JS fără framework sau cu un generator static simplu), fără dependențe grele. Hosting actual: **Netlify** (bradysoftware.ro → 75.2.60.5), deploy din repo-ul GitHub. Nu se adaugă pas de build decât dacă e absolut necesar; dacă se adaugă, se configurează `netlify.toml`. Push pe `main` = publicare live, deci se lucrează doar pe branch-ul `redesign`.
- Formular: păstrează **Formspree** existent (`https://formspree.io/f/maqdprgj`), cu un câmp ascuns `sursa` (ex. `diagnostic-ebh`) ca să știu de unde vine cererea. Mesaj de succes și de eroare vizibile, fără reload. Plus WhatsApp `https://wa.me/40727819906` și `tel:+40727819906`.
- SEO local: titluri și meta description per pagină, Open Graph cu imagine nouă, schema.org `LocalBusiness` + `Person`, `sitemap.xml`, `robots.txt`. Cuvinte cheie: automatizare procese Sibiu, integrare ERP, comenzi EDI, inspecție vizuală, AI pentru producție.
- Performanță: imagini WebP/AVIF cu dimensiuni corecte, fonturi self-hosted cu `font-display: swap`, fără JS inutil.
- Accesibilitate: HTML semantic, contrast AA, focus vizibil, `alt` la imagini, navigare din tastatură.
- Fără analytics și fără cookie banner în această versiune. Păstrează meta tag-ul Google Search Console (`google-site-verification` = `6ZUqol2t58WAzZCmuZWz_igj--zonNAEHLZI6_IPWWA`). Codul QR de la eveniment va duce la `/diagnostic?utm_source=ebh` — pagina trebuie să meargă cu parametri în URL.
- Elimină dependențele vechi: Font Awesome, GSAP, Google Fonts cu Inter/Space Grotesk, imaginile Unsplash, sistemul de traducere `data-i18n`.
