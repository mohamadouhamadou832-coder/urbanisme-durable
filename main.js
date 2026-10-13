/* VilleDurable – script principal (JS vanilla) */
(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!==undefined)e.innerHTML=h;return e};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const PAGES=[["index.html","Accueil"],["enjeux.html","Enjeux"],["projets.html","Projets"],["outils.html","Outils"],["ressources.html","Ressources"],["contact.html","Contact"]];

/* Navbar + footer partagés */
function shell(){
 const cur=location.pathname.split("/").pop()||"index.html";
 const links=PAGES.map(([h,t])=>`<a href="${h}"${h===cur?' aria-current="page"':""}>${t}</a>`).join("");
 $("#hdr").innerHTML=`<div class="wrap bar"><a class="logo" href="index.html">Ville<b>Durable</b></a><button id="burger" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="nav"><span></span></button><nav id="nav" aria-label="Navigation principale">${links}<button id="theme" aria-label="Basculer le mode sombre">◐</button></nav></div><div id="prog"></div>`;
 $("#ftr").innerHTML=`<div class="wrap"><p><b>VilleDurable</b> – Penser la ville de demain</p><nav aria-label="Pied de page">${links}</nav><p class="small">Projet universitaire – Master 1 Urbanisme</p></div><button id="top" aria-label="Retour en haut" hidden>↑</button>`;
 const b=$("#burger");b.onclick=()=>{const o=b.getAttribute("aria-expanded")!=="true";b.setAttribute("aria-expanded",o);$("#nav").classList.toggle("open",o)};
}
/* Mode sombre mémorisé */
function theme(){
 let t="";try{t=localStorage.getItem("theme")||""}catch(e){}
 if(t)document.documentElement.dataset.theme=t;
 $("#theme").onclick=()=>{t=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=t;try{localStorage.setItem("theme",t)}catch(e){}};
}
/* Image avec fallback vert si absente ou cassée */
function img(o){
 const f=el("div","img");
 const fb=()=>{f.classList.add("fb");f.innerHTML='<span aria-hidden="true">🌿</span>';f.setAttribute("role","img");f.setAttribute("aria-label",o.alt)};
 if(!o.image)fb();else{const i=new Image();i.loading="lazy";i.alt=o.alt;i.onerror=fb;i.src=o.image;f.append(i)}
 return f;
}
function card(o,modal){
 const c=el("article","card reveal");c.append(img(o));
 const b=el("div","cb",`<span class="tag">${esc(o.categorie)}</span><h3>${esc(o.titre)}</h3><p>${esc(o.description)}</p>`);
 if(modal){const bt=el("button","btn sm","En savoir plus");bt.onclick=()=>openModal(o,bt);b.append(bt)}
 c.append(b);if(o.credit)c.append(el("small","credit",esc(o.credit)));return c;
}
/* Modal accessible : Échap, focus piégé */
function openModal(o,from){
 const m=el("div","modal",`<div class="mbox" role="dialog" aria-modal="true" aria-labelledby="mt"><button class="x" aria-label="Fermer">×</button><h2 id="mt">${esc(o.titre)}</h2><p>${esc(o.detail||o.description)}</p></div>`);
 document.body.append(m);const x=$(".x",m);x.focus();
 const close=()=>{m.remove();document.removeEventListener("keydown",kd);from&&from.focus()};
 const kd=e=>{if(e.key==="Escape")close();if(e.key==="Tab"){e.preventDefault();x.focus()}};
 x.onclick=close;m.onclick=e=>{if(e.target===m)close()};document.addEventListener("keydown",kd);
}
function acc(list,t){
 list.forEach(o=>{const d=el("div","acc");const b=el("button","",esc(o.titre));b.setAttribute("aria-expanded","false");
  const p=el("div","pan",`<p>${esc(o.description)}</p>`);p.hidden=true;
  b.onclick=()=>{const open=p.hidden;p.hidden=!open;b.setAttribute("aria-expanded",open)};d.append(b,p);t.append(d)});
}
/* Générateurs de listes */
const R={
 stats(t){DATA.stats.forEach(s=>t.append(el("div","stat",`<strong data-n="${s.valeur}" data-s="${esc(s.suffixe)}">0</strong><span>${esc(s.titre)}</span>`)))},
 latest(t){DATA.projets.slice(-3).forEach(p=>t.append(card(p)))},
 enjeux(t){DATA.enjeux.forEach(o=>t.append(card(o,true)))},
 projets(t){
  const cats=["Tous",...new Set(DATA.projets.map(p=>p.categorie))],bar=el("div","filters"),grid=el("div","grid");
  const q=el("input");q.type="search";q.placeholder="Rechercher un projet…";q.setAttribute("aria-label","Rechercher un projet");let cat="Tous";
  const draw=()=>{grid.innerHTML="";const v=q.value.toLowerCase();
   const r=DATA.projets.filter(p=>(cat==="Tous"||p.categorie===cat)&&(p.titre+" "+p.description).toLowerCase().includes(v));
   r.forEach(p=>grid.append(card(p,true)));if(!r.length)grid.append(el("p","","Aucun projet ne correspond. Modifiez la recherche ou le filtre."));reveal()};
  cats.forEach(c=>{const b=el("button","chip"+(c==="Tous"?" on":""),c);b.onclick=()=>{cat=c;$$(".chip",bar).forEach(x=>x.classList.toggle("on",x===b));draw()};bar.append(b)});
  q.oninput=draw;t.append(q,bar,grid);draw()},
 outils(t){acc(DATA.outils,t)},
 faq(t){acc(DATA.faq,t)},
 timeline(t){DATA.timeline.forEach(o=>t.append(el("div","tl reveal",`<b>${esc(o.annee)}</b><h3>${esc(o.titre)}</h3><p>${esc(o.description)}</p>`)))},
 glossaire(t){
  const q=el("input");q.type="search";q.placeholder="Rechercher un terme…";q.setAttribute("aria-label","Rechercher dans le glossaire");const ul=el("dl");
  const draw=()=>{ul.innerHTML="";DATA.glossaire.filter(g=>(g.titre+g.description).toLowerCase().includes(q.value.toLowerCase())).sort((a,b)=>a.titre.localeCompare(b.titre,"fr")).forEach(g=>ul.append(el("dt","",esc(g.titre)),el("dd","",esc(g.description))))};
  q.oninput=draw;t.append(q,ul);draw()},
 ressources(t){
  const tb=el("table","",`<thead><tr><th>Ressource</th><th>Type</th><th>Description</th></tr></thead>`);const body=el("tbody");
  DATA.ressources.forEach(r=>body.append(el("tr","",`<td>${r.url?`<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.titre)}</a>`:esc(r.titre)}</td><td>${esc(r.categorie)}</td><td>${esc(r.description)}</td>`)));
  tb.append(body);const w=el("div","scroll");w.append(tb);t.append(w)}
};
/* Apparition au scroll */
let io;function reveal(){io=io||new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});$$(".reveal:not(.in)").forEach(e=>io.observe(e))}
/* Compteurs animés */
function counters(){
 const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);const n=+e.target.dataset.n,s=e.target.dataset.s,t0=performance.now();
  const step=t=>{const p=Math.min((t-t0)/1200,1);e.target.textContent=Math.round(n*p)+s;if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)}));
 $$("[data-n]").forEach(e=>co.observe(e));
}
/* Validation du formulaire de contact */
function form(){
 const f=$("#cf");if(!f)return;
 const rules=[["nom",v=>v.trim().length>=2,"Saisissez votre nom (2 caractères minimum)."],["email",v=>/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v),"Saisissez une adresse e-mail valide, par exemple nom@domaine.fr."],["sujet",v=>v.trim().length>=3,"Indiquez un sujet (3 caractères minimum)."],["message",v=>v.trim().length>=10,"Votre message doit contenir au moins 10 caractères."]];
 f.onsubmit=e=>{e.preventDefault();let ok=true;
  rules.forEach(([n,test,msg])=>{const bad=!test(f[n].value);$("#e-"+n).textContent=bad?msg:"";f[n].setAttribute("aria-invalid",bad);if(bad)ok=false});
  $("#ok").hidden=!ok;if(ok)f.reset()};
}
/* Barre de progression + retour en haut */
function scrollUI(){
 const p=$("#prog"),t=$("#top");
 addEventListener("scroll",()=>{const h=document.documentElement;p.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100)+"%";t.hidden=h.scrollTop<400},{passive:true});
 t.onclick=()=>scrollTo({top:0,behavior:"smooth"});
}
document.addEventListener("DOMContentLoaded",()=>{
 shell();theme();scrollUI();
 $$("[data-render]").forEach(t=>R[t.dataset.render]&&R[t.dataset.render](t));
 counters();form();reveal();
});
})();
