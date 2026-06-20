/* ============================================================
   Bilingual SVG diagrams. DIAGRAMS[id] => SVG markup string.
   Colors are fixed hex to match the theme and stay legible on
   the light diagram surface. Arabic <text> uses direction="rtl".
   ============================================================ */

const C = {
  ink: "#14202E", sub: "#5A6B7B", line: "#9FB2C0",
  teal: "#0F8A92", tealD: "#0A5C63", tealL: "#BFE6E8",
  amber: "#E59A2B", amberL: "#FBE6C4",
  coral: "#DC5151", green: "#1F9D6B", indigo: "#5B6CE0",
  blue: "#3D7DD6", blueL: "#CFE0F5", paper: "#F4F8FA"
};

const DIAGRAMS = {};

/* helper: bilingual caption rows reused inside SVGs */
function arT(x, y, text, opts = {}) {
  const { size = 13, fill = C.sub, weight = 400, anchor = "middle" } = opts;
  return `<text x="${x}" y="${y}" direction="rtl" font-family="Tajawal, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${text}</text>`;
}
function enT(x, y, text, opts = {}) {
  const { size = 13, fill = C.ink, weight = 600, anchor = "middle" } = opts;
  return `<text x="${x}" y="${y}" font-family="'Space Grotesk', sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${text}</text>`;
}

/* ---------- L1: States of matter particle arrangement ---------- */
DIAGRAMS.states = `
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg" role="img">
  ${[["Solid","صلب",30,C.teal,"ordered"],["Liquid","سائل",250,C.blue,"loose"],["Gas","غاز",470,C.amber,"spread"]].map(([en,ar,x,col,kind])=>{
    let dots="";
    if(kind==="ordered"){for(let r=0;r<5;r++)for(let c=0;c<5;c++){dots+=`<circle cx="${x+30+c*28}" cy="${90+r*28}" r="9" fill="${col}"/>`;}}
    if(kind==="loose"){const pts=[[20,160],[55,150],[92,165],[128,150],[40,125],[80,128],[120,130],[30,95],[70,100],[110,98],[150,118],[150,150]];pts.forEach(p=>dots+=`<circle cx="${x+p[0]}" cy="${p[1]}" r="9" fill="${col}"/>`);}
    if(kind==="spread"){const pts=[[30,70],[120,55],[70,110],[150,120],[40,160],[110,150],[150,75],[80,45]];pts.forEach(p=>dots+=`<circle cx="${x+p[0]}" cy="${p[1]}" r="9" fill="${col}"/>`);}
    return `<rect x="${x}" y="40" width="160" height="150" rx="10" fill="${C.paper}" stroke="${C.line}"/>${dots}
      ${enT(x+80,28,en,{size:16,fill:col,weight:700})}${arT(x+80,210,ar,{size:14,weight:700,fill:col})}`;
  }).join("")}
  ${enT(110,235,"fixed shape & volume",{size:11,fill:C.sub,weight:500})}
  ${enT(330,235,"fixed volume, fluid shape",{size:11,fill:C.sub,weight:500})}
  ${enT(550,235,"no fixed shape or volume",{size:11,fill:C.sub,weight:500})}
  ${arT(110,256,"شكل وحجم ثابتان",{size:11})}
  ${arT(330,256,"حجم ثابت وشكل متغير",{size:11})}
  ${arT(550,256,"لا شكل ولا حجم ثابت",{size:11})}
</svg>`;

/* ---------- L1: Temperature & particle motion ---------- */
DIAGRAMS.tempmotion = `
<svg viewBox="0 0 660 280" xmlns="http://www.w3.org/2000/svg" role="img">
  ${[["Lower temperature","درجة حرارة أقل",40,C.blue,8],["Higher temperature","درجة حرارة أعلى",360,C.coral,22]].map(([en,ar,x,col,arrow])=>{
    let dots="";const pts=[[60,80],[130,70],[100,130],[170,120],[80,170],[150,160],[200,95],[40,120]];
    pts.forEach(p=>{dots+=`<circle cx="${x+p[0]}" cy="${p[1]}" r="9" fill="${col}"/>`;dots+=`<line x1="${x+p[0]+10}" y1="${p[1]}" x2="${x+p[0]+10+arrow}" y2="${p[1]}" stroke="${col}" stroke-width="2.5"/><polygon points="${x+p[0]+10+arrow},${p[1]-4} ${x+p[0]+16+arrow},${p[1]} ${x+p[0]+10+arrow},${p[1]+4}" fill="${col}"/>`;});
    return `<rect x="${x}" y="50" width="240" height="150" rx="12" fill="${C.paper}" stroke="${C.line}"/>${dots}
      ${enT(x+120,36,en,{size:15,fill:col,weight:700})}${arT(x+120,224,ar,{size:14,weight:700,fill:col})}`;
  }).join("")}
  ${enT(160,250,"lower average kinetic energy",{size:11,fill:C.sub,weight:500})}
  ${enT(480,250,"higher average kinetic energy",{size:11,fill:C.sub,weight:500})}
  ${arT(160,270,"متوسط طاقة حركية أقل",{size:11})}
  ${arT(480,270,"متوسط طاقة حركية أعلى",{size:11})}
</svg>`;

/* ---------- L2: Phase change cycle ---------- */
DIAGRAMS.phasecycle = `
<svg viewBox="0 0 660 320" xmlns="http://www.w3.org/2000/svg" role="img">
  <rect x="40" y="120" width="130" height="80" rx="10" fill="${C.tealL}" stroke="${C.teal}"/>
  <rect x="265" y="120" width="130" height="80" rx="10" fill="${C.blueL}" stroke="${C.blue}"/>
  <rect x="490" y="120" width="130" height="80" rx="10" fill="${C.amberL}" stroke="${C.amber}"/>
  ${enT(105,155,"SOLID",{size:15,fill:C.tealD,weight:700})}${arT(105,180,"صلب",{size:14,weight:700,fill:C.tealD})}
  ${enT(330,155,"LIQUID",{size:15,fill:C.blue,weight:700})}${arT(330,180,"سائل",{size:14,weight:700,fill:C.blue})}
  ${enT(555,155,"GAS",{size:15,fill:C.amber,weight:700})}${arT(555,180,"غاز",{size:14,weight:700,fill:C.amber})}
  <line x1="170" y1="145" x2="265" y2="145" stroke="${C.green}" stroke-width="2.5"/><polygon points="265,145 257,141 257,149" fill="${C.green}"/>
  <line x1="265" y1="175" x2="170" y2="175" stroke="${C.coral}" stroke-width="2.5"/><polygon points="170,175 178,171 178,179" fill="${C.coral}"/>
  <line x1="395" y1="145" x2="490" y2="145" stroke="${C.green}" stroke-width="2.5"/><polygon points="490,145 482,141 482,149" fill="${C.green}"/>
  <line x1="490" y1="175" x2="395" y2="175" stroke="${C.coral}" stroke-width="2.5"/><polygon points="395,175 403,171 403,179" fill="${C.coral}"/>
  ${enT(217,132,"melting",{size:11,fill:C.green,weight:600})}${arT(217,200,"الانصهار",{size:11,fill:C.coral})}
  ${enT(442,132,"vaporization",{size:11,fill:C.green,weight:600})}${arT(442,200,"التكاثف",{size:11,fill:C.coral})}
  ${enT(217,213,"freezing",{size:11,fill:C.coral,weight:600})}${enT(442,213,"condensation",{size:11,fill:C.coral,weight:600})}
  <path d="M105 120 Q330 30 555 120" fill="none" stroke="${C.indigo}" stroke-width="2.5" stroke-dasharray="5 4"/><polygon points="555,120 548,114 552,123" fill="${C.indigo}"/>
  ${enT(330,52,"sublimation / التسامي",{size:12,fill:C.indigo,weight:700})}
  ${enT(330,288,"green = energy absorbed   •   red = energy released",{size:11,fill:C.sub,weight:500})}
  ${arT(330,308,"أخضر = طاقة ممتصة   •   أحمر = طاقة منطلقة",{size:11})}
</svg>`;

/* ---------- L2: Heating curve ---------- */
DIAGRAMS.heatcurve = `
<svg viewBox="0 0 660 340" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="70" y1="40" x2="70" y2="270" stroke="${C.ink}" stroke-width="2"/>
  <line x1="70" y1="270" x2="610" y2="270" stroke="${C.ink}" stroke-width="2"/>
  <polyline points="70,250 150,210 290,210 370,120 540,120 610,80" fill="none" stroke="${C.coral}" stroke-width="3.5"/>
  <circle cx="150" cy="210" r="4" fill="${C.coral}"/><circle cx="290" cy="210" r="4" fill="${C.coral}"/>
  <circle cx="370" cy="120" r="4" fill="${C.coral}"/><circle cx="540" cy="120" r="4" fill="${C.coral}"/>
  <line x1="70" y1="210" x2="290" y2="210" stroke="${C.teal}" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="70" y1="120" x2="540" y2="120" stroke="${C.teal}" stroke-width="1" stroke-dasharray="4 3"/>
  ${enT(55,214,"0°C",{size:11,fill:C.teal,anchor:"end"})}${enT(55,124,"100°C",{size:11,fill:C.teal,anchor:"end"})}
  ${enT(220,200,"melting / الانصهار",{size:11,fill:C.teal,weight:700})}
  ${enT(455,110,"boiling / الغليان",{size:11,fill:C.teal,weight:700})}
  ${enT(340,300,"Time / الزمن",{size:13,fill:C.ink,weight:700})}
  <text x="28" y="160" font-family="'Space Grotesk',sans-serif" font-size="13" font-weight="700" fill="${C.ink}" transform="rotate(-90 28 160)" text-anchor="middle">Temperature / الحرارة</text>
  ${enT(340,326,"sloped = temp rises   •   flat = state changes, temp constant",{size:11,fill:C.sub,weight:500})}
</svg>`;

/* ---------- L2: Cooling curve ---------- */
DIAGRAMS.coolcurve = `
<svg viewBox="0 0 660 340" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="70" y1="40" x2="70" y2="270" stroke="${C.ink}" stroke-width="2"/>
  <line x1="70" y1="270" x2="610" y2="270" stroke="${C.ink}" stroke-width="2"/>
  <polyline points="70,80 150,120 320,120 400,210 540,210 610,250" fill="none" stroke="${C.blue}" stroke-width="3.5"/>
  <line x1="70" y1="120" x2="320" y2="120" stroke="${C.teal}" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="70" y1="210" x2="540" y2="210" stroke="${C.teal}" stroke-width="1" stroke-dasharray="4 3"/>
  ${enT(55,124,"100°C",{size:11,fill:C.teal,anchor:"end"})}${enT(55,214,"0°C",{size:11,fill:C.teal,anchor:"end"})}
  ${enT(235,110,"condensation / التكاثف",{size:11,fill:C.teal,weight:700})}
  ${enT(470,200,"freezing / التجمد",{size:11,fill:C.teal,weight:700})}
  ${enT(340,300,"Time / الزمن",{size:13,fill:C.ink,weight:700})}
  <text x="28" y="160" font-family="'Space Grotesk',sans-serif" font-size="13" font-weight="700" fill="${C.ink}" transform="rotate(-90 28 160)" text-anchor="middle">Temperature / الحرارة</text>
  ${enT(340,326,"heat is removed; flat parts = state changes at constant temp",{size:11,fill:C.sub,weight:500})}
</svg>`;

/* ---------- L2: Evaporation vs boiling ---------- */
DIAGRAMS.evapboil = `
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg" role="img">
  <path d="M60 110 L70 230 L210 230 L220 110" fill="none" stroke="${C.line}" stroke-width="2.5"/>
  <rect x="64" y="160" width="152" height="70" fill="${C.blueL}"/>
  ${[[90,158],[140,156],[190,159]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="6" fill="${C.blue}"/><line x1="${p[0]}" y1="${p[1]-6}" x2="${p[0]}" y2="${p[1]-26}" stroke="${C.blue}" stroke-width="2"/><polygon points="${p[0]-3},${p[1]-26} ${p[0]+3},${p[1]-26} ${p[0]},${p[1]-32}" fill="${C.blue}"/>`).join("")}
  ${enT(140,95,"Evaporation",{size:15,fill:C.blue,weight:700})}
  <path d="M430 110 L440 230 L580 230 L590 110" fill="none" stroke="${C.line}" stroke-width="2.5"/>
  <rect x="434" y="150" width="152" height="80" fill="${C.amberL}"/>
  ${[[470,200],[500,180],[530,205],[560,185],[490,215],[545,215]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="7" fill="none" stroke="${C.amber}" stroke-width="2"/>`).join("")}
  ${[[480,150],[520,148],[560,151]].map(p=>`<line x1="${p[0]}" y1="${p[1]}" x2="${p[0]}" y2="${p[1]-22}" stroke="${C.amber}" stroke-width="2"/><polygon points="${p[0]-3},${p[1]-22} ${p[0]+3},${p[1]-22} ${p[0]},${p[1]-28}" fill="${C.amber}"/>`).join("")}
  ${enT(510,95,"Boiling",{size:15,fill:C.amber,weight:700})}
  ${enT(140,258,"surface only, can be below 100°C",{size:11,fill:C.sub,weight:500})}${arT(140,278,"عند السطح وقد يحدث قبل الغليان",{size:11})}
  ${enT(510,258,"throughout the liquid at boiling point",{size:11,fill:C.sub,weight:500})}${arT(510,278,"في كل السائل عند درجة الغليان",{size:11})}
</svg>`;

/* ---------- L3: Buoyancy ---------- */
DIAGRAMS.buoyancy = `
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg" role="img">
  <rect x="120" y="80" width="420" height="180" rx="8" fill="${C.blueL}" stroke="${C.blue}"/>
  <line x1="120" y1="110" x2="540" y2="110" stroke="${C.blue}" stroke-width="1.5" stroke-dasharray="6 4"/>
  <rect x="290" y="95" width="80" height="80" rx="6" fill="${C.tealD}"/>
  <line x1="330" y1="95" x2="330" y2="35" stroke="${C.green}" stroke-width="4"/><polygon points="330,30 322,46 338,46" fill="${C.green}"/>
  <line x1="330" y1="175" x2="330" y2="235" stroke="${C.coral}" stroke-width="4"/><polygon points="330,240 322,224 338,224" fill="${C.coral}"/>
  ${enT(420,40,"Buoyant force ↑",{size:13,fill:C.green,weight:700,anchor:"start"})}${arT(540,40,"قوة الطفو",{size:12,fill:C.green,anchor:"end"})}
  ${enT(420,232,"Weight ↓",{size:13,fill:C.coral,weight:700,anchor:"start"})}${arT(540,232,"الوزن",{size:12,fill:C.coral,anchor:"end"})}
  ${enT(330,285,"Buoyant force = weight of fluid displaced / قوة الطفو = وزن المائع المزاح",{size:11,fill:C.sub,weight:500})}
</svg>`;

/* ---------- L3: Float vs sink (steel block vs ship) ---------- */
DIAGRAMS.floatsink = `
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg" role="img">
  <rect x="50" y="90" width="250" height="160" rx="8" fill="${C.blueL}" stroke="${C.blue}"/>
  <line x1="50" y1="120" x2="300" y2="120" stroke="${C.blue}" stroke-dasharray="5 4"/>
  <rect x="150" y="170" width="50" height="50" fill="${C.ink}"/>
  ${enT(175,210,"⬇",{size:18,fill:"#fff"})}
  ${enT(175,80,"Steel block sinks",{size:14,fill:C.coral,weight:700})}${arT(175,275,"قطعة فولاذ تغوص: كثافة عالية",{size:12})}
  <rect x="360" y="90" width="250" height="160" rx="8" fill="${C.blueL}" stroke="${C.blue}"/>
  <line x1="360" y1="120" x2="610" y2="120" stroke="${C.blue}" stroke-dasharray="5 4"/>
  <path d="M430 110 L540 110 L520 150 L450 150 Z" fill="${C.ink}"/>
  ${enT(485,134,"air",{size:11,fill:"#fff"})}
  ${enT(485,80,"Steel ship floats",{size:14,fill:C.green,weight:700})}${arT(485,275,"سفينة فولاذية تطفو: الهواء يقلل الكثافة",{size:12})}
</svg>`;

/* ---------- L3: Pressure = F/A ---------- */
DIAGRAMS.pressure = `
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="150" y1="40" x2="150" y2="95" stroke="${C.coral}" stroke-width="4"/><polygon points="150,100 142,84 158,84" fill="${C.coral}"/>
  <rect x="110" y="100" width="80" height="40" fill="${C.amber}"/>
  <rect x="60" y="140" width="180" height="20" fill="${C.tealD}"/>
  ${enT(150,182,"small area → HIGH pressure",{size:12,fill:C.coral,weight:700})}${arT(150,202,"مساحة صغيرة ← ضغط عالٍ",{size:12})}
  <line x1="470" y1="40" x2="470" y2="95" stroke="${C.coral}" stroke-width="4"/><polygon points="470,100 462,84 478,84" fill="${C.coral}"/>
  <rect x="380" y="100" width="180" height="40" fill="${C.amber}"/>
  <rect x="370" y="140" width="200" height="20" fill="${C.tealD}"/>
  ${enT(470,182,"large area → LOW pressure",{size:12,fill:C.green,weight:700})}${arT(470,202,"مساحة كبيرة ← ضغط منخفض",{size:12})}
  <rect x="180" y="232" width="300" height="44" rx="8" fill="${C.paper}" stroke="${C.line}"/>
  ${enT(330,260,"P = F / A   (Pa = N / m²)",{size:18,fill:C.ink,weight:700})}
</svg>`;

/* ---------- L3: Pascal hydraulic lift ---------- */
DIAGRAMS.pascal = `
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg" role="img">
  <path d="M120 200 L120 150 L160 150 L160 120 L200 120 L200 200 L460 200 L460 90 L540 90 L540 200 Z" fill="${C.blueL}" stroke="${C.blue}" stroke-width="2"/>
  <rect x="160" y="108" width="40" height="14" fill="${C.tealD}"/>
  <rect x="460" y="78" width="80" height="14" fill="${C.tealD}"/>
  <line x1="180" y1="80" x2="180" y2="105" stroke="${C.coral}" stroke-width="4"/><polygon points="180,108 172,92 188,92" fill="${C.coral}"/>
  ${enT(180,70,"small F1, A1",{size:12,fill:C.coral,weight:700})}
  <rect x="470" y="40" width="60" height="38" rx="4" fill="${C.amber}"/>${enT(500,64,"load",{size:11,fill:"#fff"})}
  ${enT(500,30,"large F2, A2",{size:12,fill:C.green,weight:700})}
  ${enT(330,235,"F1 / A1 = F2 / A2",{size:18,fill:C.ink,weight:700})}
  ${arT(330,262,"ينتقل الضغط بالتساوي خلال المائع",{size:12})}
  ${enT(330,282,"Pressure is transmitted equally through the fluid",{size:11,fill:C.sub,weight:500})}
</svg>`;

/* ---------- L3: Bernoulli ---------- */
DIAGRAMS.bernoulli = `
<svg viewBox="0 0 660 280" xmlns="http://www.w3.org/2000/svg" role="img">
  <path d="M60 90 L600 90 L600 150 L60 150 Z" fill="${C.blueL}" stroke="${C.blue}"/>
  <path d="M260 90 L260 150 L400 150 L400 90" fill="#fff" stroke="${C.blue}"/>
  <path d="M260 90 L400 90 L380 110 L280 110 Z" fill="${C.blue}" opacity="0.4"/>
  <line x1="100" y1="120" x2="240" y2="120" stroke="${C.teal}" stroke-width="3"/><polygon points="240,120 230,114 230,126" fill="${C.teal}"/>
  <line x1="290" y1="100" x2="410" y2="100" stroke="${C.coral}" stroke-width="3"/><polygon points="412,100 400,94 400,106" fill="${C.coral}"/>
  ${enT(165,140,"slower",{size:11,fill:C.teal,weight:600})}${enT(345,95,"faster",{size:11,fill:C.coral,weight:600})}
  <rect x="300" y="180" width="60" height="50" rx="4" fill="${C.amberL}" stroke="${C.amber}"/>
  <line x1="330" y1="180" x2="330" y2="150" stroke="${C.amber}" stroke-width="3"/><polygon points="330,148 324,160 336,160" fill="${C.amber}"/>
  ${enT(330,250,"liquid pulled up",{size:11,fill:C.amber,weight:600})}
  ${enT(330,272,"Faster fluid → lower pressure / مائع أسرع ← ضغط أقل",{size:12,fill:C.sub,weight:600})}
</svg>`;

/* ---------- L4: Extensive vs intensive ---------- */
DIAGRAMS.extint = `
<svg viewBox="0 0 660 280" xmlns="http://www.w3.org/2000/svg" role="img">
  <rect x="40" y="50" width="270" height="180" rx="12" fill="${C.amberL}" stroke="${C.amber}"/>
  <rect x="350" y="50" width="270" height="180" rx="12" fill="${C.tealL}" stroke="${C.teal}"/>
  ${enT(175,40,"Extensive — depends on amount",{size:13,fill:C.amber,weight:700})}
  ${enT(485,40,"Intensive — independent of amount",{size:13,fill:C.tealD,weight:700})}
  ${[["Mass / الكتلة",90],["Volume / الحجم",125],["Length / الطول",160]].map(([t,y])=>`${enT(60,y,"•",{size:16,fill:C.amber,anchor:"start"})}<text x="78" y="${y+1}" font-family="'Space Grotesk',sans-serif" font-size="13" fill="${C.ink}">${t}</text>`).join("")}
  ${[["Density / الكثافة",90],["Melting point / الانصهار",120],["Boiling point / الغليان",150],["Colour / اللون",180]].map(([t,y])=>`${enT(370,y,"•",{size:16,fill:C.teal,anchor:"start"})}<text x="388" y="${y+1}" font-family="'Space Grotesk',sans-serif" font-size="13" fill="${C.ink}">${t}</text>`).join("")}
  ${enT(330,262,"Same pure substance: small or large sample has the same intensive properties",{size:11,fill:C.sub,weight:500})}
</svg>`;

/* ---------- L4: Physical vs chemical change ---------- */
DIAGRAMS.physchem = `
<svg viewBox="0 0 660 250" xmlns="http://www.w3.org/2000/svg" role="img">
  <rect x="40" y="60" width="270" height="120" rx="12" fill="${C.paper}" stroke="${C.teal}"/>
  <circle cx="110" cy="120" r="14" fill="${C.teal}"/><line x1="135" y1="120" x2="195" y2="120" stroke="${C.sub}" stroke-width="2"/><polygon points="197,120 187,114 187,126" fill="${C.sub}"/><circle cx="230" cy="120" r="14" fill="${C.teal}"/>
  ${enT(175,50,"Physical change",{size:14,fill:C.tealD,weight:700})}${enT(175,200,"same substance / المادة نفسها",{size:11,fill:C.sub,weight:500})}
  <rect x="350" y="60" width="270" height="120" rx="12" fill="${C.paper}" stroke="${C.coral}"/>
  <circle cx="420" cy="120" r="14" fill="${C.teal}"/><line x1="445" y1="120" x2="505" y2="120" stroke="${C.sub}" stroke-width="2"/><polygon points="507,120 497,114 497,126" fill="${C.sub}"/><rect x="525" y="106" width="28" height="28" rx="4" fill="${C.coral}"/>
  ${enT(485,50,"Chemical change",{size:14,fill:C.coral,weight:700})}${enT(485,200,"new substance forms / تتكوّن مادة جديدة",{size:11,fill:C.sub,weight:500})}
  ${arT(330,232,"التغير الفيزيائي يحافظ على التركيب؛ التغير الكيميائي ينتج مادة جديدة",{size:12})}
</svg>`;

/* ---------- L4: Evidence of chemical change ---------- */
DIAGRAMS.evidence = `
<svg viewBox="0 0 660 280" xmlns="http://www.w3.org/2000/svg" role="img">
  ${[["Colour change","تغيّر اللون",70,60,C.indigo],["Gas / bubbles","إنتاج غاز",250,60,C.teal],["Precipitate","تكوّن راسب",430,60,C.amber],["Heat / energy","تغيّر طاقة",70,160,C.coral],["Light","إنتاج ضوء",250,160,C.amber],["New odour","رائحة جديدة",430,160,C.green]].map(([en,ar,x,y,col])=>`
    <rect x="${x}" y="${y}" width="160" height="70" rx="10" fill="${C.paper}" stroke="${col}"/>
    <circle cx="${x+24}" cy="${y+35}" r="9" fill="${col}"/>
    ${enT(x+95,y+30,en,{size:12,fill:C.ink,weight:600})}${arT(x+95,y+52,ar,{size:12,fill:C.sub})}`).join("")}
  ${enT(330,262,"A new substance may form / قد تتكوّن مادة جديدة",{size:12,fill:C.sub,weight:600})}
</svg>`;

/* ---------- L5: Conservation of mass balance ---------- */
DIAGRAMS.consmass = `
<svg viewBox="0 0 660 280" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="330" y1="60" x2="330" y2="200" stroke="${C.ink}" stroke-width="3"/>
  <rect x="290" y="200" width="80" height="14" fill="${C.ink}"/>
  <line x1="150" y1="80" x2="510" y2="80" stroke="${C.ink}" stroke-width="3"/>
  <path d="M120 80 A60 60 0 0 0 180 80 Z" fill="${C.tealL}" stroke="${C.teal}"/>
  <path d="M480 80 A60 60 0 0 0 540 80 Z" fill="${C.amberL}" stroke="${C.amber}"/>
  ${enT(150,150,"Reactants",{size:13,fill:C.tealD,weight:700})}${arT(150,170,"المتفاعلات",{size:12,fill:C.tealD})}
  ${enT(510,150,"Products",{size:13,fill:C.amber,weight:700})}${arT(510,170,"النواتج",{size:12,fill:C.amber})}
  ${enT(330,245,"mass of reactants = mass of products",{size:15,fill:C.ink,weight:700})}
  ${arT(330,270,"كتلة المتفاعلات = كتلة النواتج",{size:13})}
</svg>`;

/* ---------- L5: Element / compound / mixture ---------- */
DIAGRAMS.ecm = `
<svg viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg" role="img">
  ${[["Element","عنصر",40,C.teal],["Compound","مركّب",250,C.amber],["Mixture","مخلوط",460,C.indigo]].map(([en,ar,x,col],i)=>{
    let g="";
    if(i===0){[[40,70],[100,60],[70,120],[130,110],[40,150]].forEach(p=>g+=`<circle cx="${x+p[0]}" cy="${p[1]}" r="11" fill="${C.teal}"/>`);}
    if(i===1){[[40,70],[110,65],[70,130],[130,120]].forEach(p=>{g+=`<circle cx="${x+p[0]}" cy="${p[1]}" r="11" fill="${C.teal}"/><circle cx="${x+p[0]+16}" cy="${p[1]+8}" r="8" fill="${C.coral}"/>`;});}
    if(i===2){[[40,70,C.teal],[110,60,C.coral],[70,125,C.coral],[130,115,C.teal],[45,150,C.coral]].forEach(p=>g+=`<circle cx="${x+p[0]}" cy="${p[1]}" r="11" fill="${p[2]}"/>`);}
    return `<rect x="${x}" y="40" width="160" height="140" rx="10" fill="${C.paper}" stroke="${col}"/>${g}
      ${enT(x+80,28,en,{size:14,fill:col,weight:700})}${arT(x+80,202,ar,{size:13,fill:col,weight:700})}`;
  }).join("")}
  ${enT(120,235,"one type of atom",{size:10,fill:C.sub,weight:500})}
  ${enT(330,235,"2+ atoms joined, fixed ratio",{size:10,fill:C.sub,weight:500})}
  ${enT(540,235,"different particles, not joined",{size:10,fill:C.sub,weight:500})}
</svg>`;

/* ---------- L5: Homogeneous vs heterogeneous ---------- */
DIAGRAMS.homohetero = `
<svg viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg" role="img">
  <rect x="60" y="40" width="230" height="150" rx="10" fill="${C.paper}" stroke="${C.teal}"/>
  <rect x="370" y="40" width="230" height="150" rx="10" fill="${C.paper}" stroke="${C.coral}"/>
  ${(()=>{let g="";for(let r=0;r<4;r++)for(let c=0;c<5;c++){g+=`<circle cx="${90+c*42}" cy="${70+r*32}" r="7" fill="${(r+c)%2?C.teal:C.blue}"/>`;}return g;})()}
  ${(()=>{let g="";for(let r=0;r<4;r++)for(let c=0;c<5;c++){g+=`<circle cx="${400+c*42}" cy="${70+r*32}" r="7" fill="${c<2?C.coral:C.amber}"/>`;}return g;})()}
  ${enT(175,30,"Homogeneous",{size:14,fill:C.tealD,weight:700})}${arT(175,212,"متجانس: موزع بانتظام",{size:12,fill:C.tealD})}
  ${enT(485,30,"Heterogeneous",{size:14,fill:C.coral,weight:700})}${arT(485,212,"غير متجانس: غير منتظم",{size:12,fill:C.coral})}
  ${enT(175,238,"e.g. salt water / ماء مالح",{size:11,fill:C.sub,weight:500})}
  ${enT(485,238,"e.g. salad dressing / صلصة سلطة",{size:11,fill:C.sub,weight:500})}
</svg>`;

/* ---------- L6: Energy transformation flow ---------- */
DIAGRAMS.energyflow = `
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg" role="img">
  ${[
    ["Car / سيارة","chemical → mechanical",60,C.coral],
    ["Power station / محطة","chemical → thermal → electrical",60,C.amber],
    ["Solar cell / خلية شمسية","radiant → electrical",350,C.teal],
    ["Wind turbine / توربين رياح","kinetic → mechanical → electrical",350,C.indigo]
  ].map((d,i)=>{
    const x=d[2], y=40+(i%2)*120;
    return `<rect x="${x}" y="${y}" width="250" height="90" rx="10" fill="${C.paper}" stroke="${d[3]}"/>
      ${enT(x+125,y+34,d[0],{size:13,fill:d[3],weight:700})}
      ${enT(x+125,y+62,d[1],{size:12,fill:C.ink,weight:600})}`;
  }).join("")}
  ${enT(330,288,"Energy is transformed, never created or destroyed / الطاقة تتحول ولا تفنى",{size:12,fill:C.sub,weight:600})}
</svg>`;

/* ---------- L6: Renewable vs nonrenewable ---------- */
DIAGRAMS.renewvs = `
<svg viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg" role="img">
  <rect x="40" y="50" width="270" height="170" rx="12" fill="${C.tealL}" stroke="${C.teal}"/>
  <rect x="350" y="50" width="270" height="170" rx="12" fill="${C.amberL}" stroke="${C.amber}"/>
  ${enT(175,40,"Renewable / متجددة",{size:14,fill:C.tealD,weight:700})}
  ${enT(485,40,"Nonrenewable / غير متجددة",{size:14,fill:C.amber,weight:700})}
  ${["Sunlight / الشمس","Wind / الرياح","Moving water / الماء","Geothermal / جوفية","Biomass / كتلة حيوية"].map((t,i)=>`${enT(62,90+i*26,"•",{size:16,fill:C.teal,anchor:"start"})}<text x="80" y="${91+i*26}" font-family="'Space Grotesk',sans-serif" font-size="12.5" fill="${C.ink}">${t}</text>`).join("")}
  ${["Coal / الفحم","Oil / النفط","Natural gas / الغاز الطبيعي"].map((t,i)=>`${enT(372,100+i*30,"•",{size:16,fill:C.amber,anchor:"start"})}<text x="390" y="${101+i*30}" font-family="'Space Grotesk',sans-serif" font-size="12.5" fill="${C.ink}">${t}</text>`).join("")}
  ${enT(485,200,"replaced slower than we use them",{size:10,fill:C.sub,weight:500})}
  ${enT(175,212,"replaced faster than we use them",{size:10,fill:C.sub,weight:500})}
</svg>`;

/* ---------- L6: Four renewables ---------- */
DIAGRAMS.renewables4 = `
<svg viewBox="0 0 660 280" xmlns="http://www.w3.org/2000/svg" role="img">
  ${[
    ["Solar / شمسية","radiant → electrical",40,40,C.amber],
    ["Hydroelectric / كهرومائية","potential → kinetic → mechanical → electrical",350,40,C.blue],
    ["Wind / رياح","kinetic → mechanical → electrical",40,150,C.teal],
    ["Geothermal / جوفية","thermal → steam → mechanical → electrical",350,150,C.coral]
  ].map(d=>`<rect x="${d[2]}" y="${d[3]}" width="270" height="90" rx="10" fill="${C.paper}" stroke="${d[4]}"/>
      ${enT(d[2]+135,d[3]+34,d[0],{size:13,fill:d[4],weight:700})}
      ${enT(d[2]+135,d[3]+60,d[1],{size:10.5,fill:C.ink,weight:600})}`).join("")}
</svg>`;

/* ---------- L6: Carrying capacity ---------- */
DIAGRAMS.carrying = `
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="70" y1="40" x2="70" y2="240" stroke="${C.ink}" stroke-width="2"/>
  <line x1="70" y1="240" x2="600" y2="240" stroke="${C.ink}" stroke-width="2"/>
  <line x1="70" y1="90" x2="600" y2="90" stroke="${C.coral}" stroke-width="2" stroke-dasharray="6 4"/>
  <path d="M70 235 C 200 230, 280 150, 360 110 C 430 96, 520 92, 600 91" fill="none" stroke="${C.teal}" stroke-width="3.5"/>
  ${enT(480,82,"Carrying capacity / القدرة الاستيعابية",{size:12,fill:C.coral,weight:700})}
  ${enT(335,270,"Time / الزمن",{size:13,fill:C.ink,weight:700})}
  <text x="30" y="140" font-family="'Space Grotesk',sans-serif" font-size="13" font-weight="700" fill="${C.ink}" transform="rotate(-90 30 140)" text-anchor="middle">Population / السكان</text>
  ${enT(335,294,"maximum population the environment can support / أكبر عدد تدعمه البيئة",{size:11,fill:C.sub,weight:500})}
</svg>`;
