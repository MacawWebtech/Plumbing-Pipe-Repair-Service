/* Services data, problem finder, menu, booking form. Edit S[] and P{} to change content. */
const ICON={pipe:'<path d="M2 7h10a5 5 0 0 1 5 5v10"/><path d="M2 12h7a3 3 0 0 1 3 3v7"/><path d="M15 17h4"/>',drain:'<circle cx="12" cy="12" r="9"/><path d="M12 7a5 5 0 1 0 5 5"/><path d="M12 10a2 2 0 1 0 2 2"/>',faucet:'<path d="M3 10h9a4 4 0 0 1 4 4v1"/><path d="M7 6h6M10 6v4"/><path d="M3 14h6"/><path d="M16 21c-1.1-1.3-1.7-2.2-1.7-3a1.7 1.7 0 0 1 3.4 0c0 .8-.6 1.7-1.7 3z"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',toilet:'<path d="M7 3h6v7H7z"/><path d="M4 10h14v1a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6z"/><path d="m8 17-1 4h8l-1-4"/>',bath:'<path d="M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z"/><path d="M6 12V5a2 2 0 0 1 4 0"/><path d="m7 20-1 2M17 20l1 2"/>',flame:'<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',alert:'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4M12 17h.01"/>',arrow:'<path d="M5 12h14M12 5l7 7-7 7"/>',check:'<path d="M20 6 9 17l-5-5"/>'};
const ic=n=>`<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${ICON[n]||""}</svg>`;
const base=location.pathname.includes("/pages/")?"":"pages/";
const S=[["pipe","Pipe Repair & Replacement","repair","Fix leaking, corroded or burst pipes with quality fittings.","From $120","1–3 hrs"],["drain","Drain Unblocking","urgent","Clear sinks, showers, toilets and main drains fast.","From $90","1–2 hrs"],["faucet","Tap & Faucet Replacement","install","Replace worn, dripping or outdated taps and mixers.","From $80","1 hr"],["search","Leak Detection","repair","Find hidden leaks early – without tearing up walls.","From $110","1–2 hrs"],["toilet","Toilet Repair","repair","Flushing, filling, running and leak faults sorted.","From $85","1–2 hrs"],["bath","Bathroom Plumbing","install","Install and repair showers, baths and basins.","From $150","Half day"],["flame","Water Heater Repair","repair","Restore hot water fast – repair or same-day swap.","From $130","1–3 hrs"],["alert","Emergency Plumbing","urgent","Rapid response for bursts and floods, day or night.","Callout $180","ASAP"]];
const P={"Water leaking":["Leaks waste water and quietly damage walls and floors.","Leak Detection","search"],"Pipe burst":["Shut off the main water supply now, then call our emergency line.","Emergency Plumbing","alert"],"Drain blocked":["Slow or blocked drains are usually grease, hair or debris build-up.","Drain Unblocking","drain"],"Tap dripping":["Usually a worn washer or cartridge – a quick fix.","Tap & Faucet Replacement","faucet"],"Toilet not working":["Flush, fill or leak faults from worn internal parts.","Toilet Repair","toilet"],"Water heater issue":["No hot water or not enough? Often a thermostat or element.","Water Heater Repair","flame"],"Low water pressure":["Often a hidden leak, a part-closed valve or corroded pipes.","Pipe Repair & Replacement","pipe"],"Other problem":["Tell us what's happening and we'll diagnose it for free.","Free diagnosis","search"]};
const servicePhotos=[
"../assets/images/Pipe Repair & Replacement.jpg",
"../assets/images/Drain Unblocking.jpg",
"../assets/images/Tap & Faucet Replacement.jpg",
"../assets/images/Leak Detection.jpg",
"../assets/images/Toilet Repair.jpg",
"../assets/images/Bathroom Plumbing.jpg",
"../assets/images/Water Heater Repair.jpg",
"../assets/images/Emergency Plumbing.jpg"];
const card=s=>`<article class="card svc-card"><div class="svc-photo"><img src="${servicePhotos[S.indexOf(s)]||servicePhotos[0]}" alt="${s[1]}" loading="lazy" onerror="this.remove()"></div><div class="svc-body"><span class="e">${ic(s[0])}</span><h3>${s[1]}</h3><p>${s[3]}</p><div class="svc-meta"><span><b>${s[4]}</b> · ${s[5]}</span><a class="link-arrow" href="${base}service-details.html" aria-label="${s[1]} details">Details ${ic("arrow")}</a></div></div></article>`;
$("#svcGrid").innerHTML=S.map(card).join("");
function list(f){$("#svcList").innerHTML=S.filter(s=>f=="all"||s[2]==f).map(card).join("")}list("all");
$("#flt").onclick=e=>{const b=e.target.closest("button");if(!b)return;$$("#flt button").forEach(x=>x.setAttribute("aria-pressed",x==b));list(b.dataset.f)};
$("#priceRows").innerHTML=S.map(s=>`<tr><td>${s[1]}</td><td><b>${s[4]}</b></td><td class="hm">${s[5]}</td><td><a href="${base}contact.html">Book →</a></td></tr>`).join("");
$("#sv").innerHTML=S.map(s=>`<option>${s[1]}</option>`).join("");
$("#pf").innerHTML=Object.keys(P).map(k=>`<button type="button" aria-pressed="false">${k}</button>`).join("");
$("#pf").onclick=e=>{const b=e.target.closest("button");if(!b)return;$$("#pf button").forEach(x=>x.setAttribute("aria-pressed",x==b));const[p,r,i]=P[b.textContent];$("#res").innerHTML=`<h3>${ic(i)}${b.textContent}</h3><p>${p}</p><p><b>Recommended:</b> ${r}</p><a class="btn b1" href="${base}contact.html">Book this service ${ic("arrow")}</a><div class="res-help"><span>Prefer to talk it through?</span><a class="btn bghost" href="tel:+15550100">Call +1 555 0100</a></div>`};
// Navigation: click-toggle Home submenu, mobile menu, outside-click and keyboard support.
const homeMenus=$$(".home-menu");
function closeHomeMenus(except=null){homeMenus.forEach(menu=>{if(menu!==except){menu.classList.remove("open");menu.querySelector(".home-trigger")?.setAttribute("aria-expanded","false");}})}
homeMenus.forEach(menu=>{
  const trigger=menu.querySelector(".home-trigger");
  const panel=menu.querySelector(".home-dropdown");
  if(!trigger||!panel)return;
  trigger.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();const opened=!menu.classList.contains("open");closeHomeMenus(menu);menu.classList.toggle("open",opened);trigger.setAttribute("aria-expanded",String(opened));});
  panel.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{menu.classList.remove("open");trigger.setAttribute("aria-expanded","false");document.querySelector("#nav")?.classList.remove("open");document.querySelector("#burger")?.setAttribute("aria-expanded","false");}));
});
document.addEventListener("click",e=>{if(!e.target.closest(".home-menu"))closeHomeMenus();});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeHomeMenus();document.querySelector("#nav")?.classList.remove("open");document.querySelector("#burger")?.setAttribute("aria-expanded","false");}});
const burger=$("#burger"),nav=$("#nav");
if(burger&&nav){burger.addEventListener("click",()=>{const opened=!nav.classList.contains("open");nav.classList.toggle("open",opened);burger.setAttribute("aria-expanded",String(opened));burger.setAttribute("aria-label",opened?"Close menu":"Open menu");if(!opened)closeHomeMenus();});}
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");burger?.setAttribute("aria-expanded","false");burger?.setAttribute("aria-label","Open menu");closeHomeMenus();}));
const cur=location.pathname.split("/").pop()||"index.html";
nav?.querySelectorAll("a").forEach(a=>{const href=a.getAttribute("href")||"";const target=href.split("/").pop();const active=target===cur||(cur==="home-1.html"&&target==="index.html")||(cur==="index.html"&&target==="index.html");a.classList.toggle("act",active);if(active)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");});
// form
const rules={n:["Please enter your name.",v=>v.trim().length>1],ph:["Enter a valid phone number.",v=>/^[+\d][\d\s()-]{6,}$/.test(v.trim())],em:["Enter a valid email or leave blank.",v=>!v||/^\S+@\S+\.\S+$/.test(v)],ds:["Please describe the problem briefly.",v=>v.trim().length>5]};
$("#bk").onsubmit=e=>{e.preventDefault();let ok=true;for(const k in rules){const el=$("#"+k),good=rules[k][1](el.value);el.setAttribute("aria-invalid",!good);el.setAttribute("aria-describedby","e-"+k);$("#e-"+k).textContent=good?"":rules[k][0];if(!good&&ok){el.focus();ok=false}}
if(!ok)return;const b=$("#sub");b.disabled=true;b.textContent="Sending…";
setTimeout(()=>{b.disabled=false;b.textContent="Submit Booking Request";$("#done").innerHTML='<p class="ok">Thanks! We’ll contact you shortly. (Demo: connect Formspree/Netlify Forms here.)</p>';e.target.reset()},900)};

const B=[["Emergency Advice","5 Steps to Take When a Pipe Bursts","Shut off, protect, call.","Jan 1, 2026","4 min","💦"],["Drain Care","Keep Your Drains Flowing","Habits that prevent clogs.","Dec 12, 2025","3 min","🌀"],["Plumbing Tips","Stop a Dripping Tap","A quick diagnosis guide.","Nov 20, 2025","3 min","🚿"],["Pipe Repair","Spotting Corroded Pipes","Early signs to watch for.","Nov 2, 2025","5 min","🚰"],["Bathroom Maintenance","Fix a Running Toilet","Common causes and fixes.","Oct 15, 2025","4 min","🚽"],["Home Maintenance","Winter Plumbing Checklist","Prevent frozen pipes.","Oct 1, 2025","6 min","❄️"]];
const cats=["All",...new Set(B.map(b=>b[0]))];let bc="All";
function blog(){const q=$("#q").value.toLowerCase();let n=0;$$("#blogGrid .blog-card").forEach(a=>{const ok=(bc=="All"||a.dataset.cat==bc)&&a.textContent.toLowerCase().includes(q);a.hidden=!ok;if(ok)n++});$("#noPosts").hidden=n>0}
if($("#bcat"))$("#bcat").onclick=e=>{const b=e.target.closest("button");if(!b)return;bc=b.textContent;$$("#bcat button").forEach(x=>x.setAttribute("aria-pressed",x==b));blog()};
if($("#q"))$("#q").oninput=blog;
