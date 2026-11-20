/* RTL toggle. localStorage key: pc-dir */
if(gt("pc-dir")=="rtl")R.dir="rtl";
$("#rtl").onclick=()=>{R.dir=R.dir=="rtl"?"ltr":"rtl";st("pc-dir",R.dir)};
