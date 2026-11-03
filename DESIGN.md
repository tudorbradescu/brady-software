# DESIGN — bradysoftware.ro (redesign 2026)

## Direcția: fișa tehnică

Site-ul arată ca documentația unui echipament industrial bine făcut: o fișă tehnică, un desen de execuție cu indicator (cartuș), un panou de comandă curat. Nu ca o agenție. Fundal deschis, pentru că pagina principală se citește pe telefon, în sala luminată de la Hilton Sibiu, nu noaptea pe un monitor.

**Elementul-semnătură:** *indicatorul* (cartușul din colțul unui desen tehnic, ISO 7200). Oferta de Diagnostic e mereu prezentată ca un indicator cu câmpuri etichetate: Ce primiți / Durată / Cost / Unde / Rezultat. Apare în hero-ul de pe `/`, sus pe `/diagnostic` și în CTA-ul final de pe fiecare pagină. Restul paginii stă liniștit în jurul lui.

**Mișcarea:** una singură, cu sens. Pe diagrama „comenzi → reguli → ERP” liniile de flux sunt punctate și se deplasează încet în sensul datelor. Cu `prefers-reduced-motion: reduce`, liniile stau pe loc.

## Tipografie

| Rol | Font | De ce |
|---|---|---|
| Titluri | **Archivo** (variabil, `wdth` 75–100, `wght` 400–800), titlurile la `wdth 78`, `wght 760` | Grotesk de origine tipografică argentiniană, desenat pentru tipar și afiș, cu axă de lățime. Varianta semicondensată grea seamănă cu literele de pe plăcuțele de identificare și indicatoarele industriale (familia DIN) fără să fie DIN. Titlurile românești sunt lungi; lățimea redusă le ține pe 2–3 rânduri pe un ecran de 390px. |
| Text | **Archivo**, `wdth 100`, `wght 400` | Aceeași familie la lățime normală: un singur fișier (48 KB, subset românesc cu ș/ț cu virgulă), coerență fără al doilea font de text. |
| Date | **IBM Plex Mono** 400/500 | Doar pentru date reale: câmpurile indicatorului, etichetele din diagrame (EDI, Mentor, LOT), numere de telefon, CUI, J12, sume. Plex a fost desenat pentru un context de inginerie (IBM), are cifre clare, 0 diferit de O. Nu e folosit pentru decor. |

Toate fonturile sunt găzduite local (`/assets/fonts`), `font-display: swap`, iar fișierul Archivo e preîncărcat.

Scara (fluidă, `clamp`): titlu hero 2.6→4.25rem · h2 1.9→2.8rem · h3 1.25→1.5rem · text 1.0625rem · mic 0.875rem. Tracking titluri −0.02em. Textul curent are maximum 66 de caractere pe rând.

## Paleta (tokeni CSS)

```css
:root {
  --paper:   #E8E9E6; /* gri de beton neutru, ca hârtia de calc; deliberat nu crem */
  --paper-2: #DCDEDA; /* zonă adâncită: indicator, formular */
  --ink:     #1C1E20; /* grafit */
  --ink-2:   #4A4D51; /* text secundar, 7.6:1 pe --paper */
  --rule:    #B4B3AC; /* linii de desen, chenare */
  --signal:  #F2B705; /* galben de siguranță: singurul accent */
  --on-signal: #1C1E20;
}
```

Reguli: galbenul nu apare niciodată ca text pe fundal deschis (contrast prea mic). E doar suprafață, cu text grafit pe el (contrast 10:1): butonul principal, marcajul din diagrame, banda de avertizare (dungi galben/grafit) care marchează eticheta RESPINSĂ. Secțiunile întunecate folosesc `--ink` ca fundal și `--paper` ca text.

## Grila

- Container maxim 1200px, margini laterale 20px pe mobil și 40px pe desktop.
- 12 coloane la ≥ 960px (gutter 24px), 1 coloană sub 720px.
- Secțiunile sunt separate de linii de 1px (`--rule`), ca pe o planșă. Fără carduri cu umbră; elevația se face doar prin chenar.
- Spațiere pe pași de 4px: 8 / 12 / 16 / 24 / 32 / 48 / 72 / 112.
- Raze: 2px (butoane și câmpuri). Nimic rotunjit.

## Trei referințe de stil

1. **Fișele tehnice Siemens / Texas Instruments** — ierarhie strictă, tabele de parametri, coduri în monospace, nicio decorație.
2. **Indicatorul de pe desenele tehnice (ISO 7200) și desenele de execuție** — chenar, câmpuri etichetate, linii subțiri, cote.
3. **Semnalistica industrială (ISO 7010, bandă de avertizare galben-negru) și sistemul de semne al lui Otl Aicher** — un singur accent, contrast mare, tipografie condensată, pictograme geometrice.

## Interzis (din BRIEF, secțiunea 8)

- Gradienți mov/albastru, glassmorphism, blob-uri, „glow”, fundal cu particule.
- Fonturi default: Inter, Roboto, Arial, Space Grotesk, Poppins.
- Iconițe emoji; grilă generică de 3 carduri identice cu iconiță + titlu + 2 rânduri.
- Poze de stoc, ilustrații 3D generice, roboți „AI” cu creier albastru. Nicio fotografie, niciun portret.
- Clișee: „transformăm ideile în experiențe digitale”, „soluții inovatoare”, „partenerul tău de încredere”, „duce afacerea la nivelul următor”, „în era digitală”.
- Cifre, logo-uri de clienți, testimoniale sau ani de experiență inventați. Contoare animate.
- Liniuțe lungi puse peste tot în text și propoziții în trei timpi tipice de AI.
- Plus, din disciplina proprie: fără etichete mici deasupra titlurilor, fără numerotare 01/02/03 decorativă (doar la pașii reali ai procesului), fără umbre, fără monospace folosit ca decor.
