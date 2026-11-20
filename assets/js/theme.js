/* Theme + shared helpers. localStorage key: pc-theme */
const nil=new Proxy(function(){},{get:()=>nil,set:()=>true,apply:()=>nil});
const $=s=>document.querySelector(s)||nil,$$=s=>[...document.querySelectorAll(s)];
const R=document.documentElement;
function st(k,v){try{localStorage.setItem(k,v)}catch(e){}}function gt(k){try{return localStorage.getItem(k)}catch(e){return null}}
const t0=gt("pc-theme");if(t0)R.dataset.theme=t0;
$("#theme").onclick=()=>{const d=R.dataset.theme?R.dataset.theme=="dark":matchMedia("(prefers-color-scheme:dark)").matches;R.dataset.theme=d?"light":"dark";st("pc-theme",R.dataset.theme)};
