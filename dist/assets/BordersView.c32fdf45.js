import{u as I,a as L}from"./getData.287ed575.js";import{_ as F,r as O,j as T,k as E,u as e,a as i,c,b as s,t as l,g as n,F as h,f as D,e as G,h as P,i as q,R as z,p as A,l as H}from"./index.dd471ee4.js";const t=_=>(A("data-v-406f1db6"),_=_(),H(),_),J={key:0,class:"lds-spinner"},K=t(()=>s("div",null,null,-1)),M=t(()=>s("div",null,null,-1)),Q=t(()=>s("div",null,null,-1)),U=t(()=>s("div",null,null,-1)),W=t(()=>s("div",null,null,-1)),X=t(()=>s("div",null,null,-1)),Y=t(()=>s("div",null,null,-1)),Z=t(()=>s("div",null,null,-1)),ss=t(()=>s("div",null,null,-1)),ts=t(()=>s("div",null,null,-1)),es=t(()=>s("div",null,null,-1)),os=t(()=>s("div",null,null,-1)),ls=[K,M,Q,U,W,X,Y,Z,ss,ts,es,os],ns={key:1,class:"details"},as=t(()=>s("i",{class:"fa-solid fa-arrow-left-long"},null,-1)),is=n(" Back "),cs=[as,is],ds={class:"details__main"},_s=["src","alt"],rs={class:"details__texts"},us={class:"details__data margin"},hs=t(()=>s("span",{class:"bold"},"Native Name:",-1)),ps=t(()=>s("span",{class:"bold"},"Population:",-1)),ms=t(()=>s("span",{class:"bold"},"Region:",-1)),gs=t(()=>s("span",{class:"bold"},"Sub Region:",-1)),vs=t(()=>s("span",{class:"bold"},"Capital:",-1)),bs={class:"margin"},fs=t(()=>s("span",{class:"bold"},"Top Level Domain:",-1)),Bs=t(()=>s("span",{class:"bold"},"Currencies:",-1)),ks=t(()=>s("span",{class:"bold"},"Languages:",-1)),ys={key:0,class:"details__borders-container margin"},xs=t(()=>s("p",{class:"bold"},"Border Countries:",-1)),ws={__name:"BordersView",setup(_){const p=O([]),R=T(),S=E(),{data:o,getData:V}=I();function $(){S.push("/")}V(`https://restcountries.com/v3.1/alpha/${R.params.borders}?fields=name,capital,population,region,subregion,tld,currencies,languages,nativename,flags,borders`),(async r=>{try{const a=await L.get(r);p.value=a.data}catch(a){console.log(a)}})("https://restcountries.com/v3.1/all?fields=name,cca3");const j=r=>{const a=p.value.find(u=>u.cca3===r);return a?a.name.common:""};return(r,a)=>{var u,m,g,v,b,f,B,k,y,x,w,C,N;return e(o)?(i(),c("section",ns,[s("button",{class:"details__back",onClick:a[0]||(a[0]=d=>$())},cs),s("div",ds,[s("img",{src:`${(u=e(o))==null?void 0:u.flags.svg}`,alt:`Flag of ${(m=e(o))==null?void 0:m.name.common}`,class:"details__flag"},null,8,_s),s("div",rs,[s("h2",null,l((g=e(o))==null?void 0:g.name.common),1),s("ul",us,[s("li",null,[hs,n(" "+l(Object.values((v=e(o))==null?void 0:v.name.nativeName)[0].common),1)]),s("li",null,[ps,n(" "+l((b=e(o))==null?void 0:b.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)]),s("li",null,[ms,n(" "+l((f=e(o))==null?void 0:f.region),1)]),s("li",null,[gs,n(" "+l((B=e(o))==null?void 0:B.subregion),1)]),s("li",null,[vs,n(" "+l((k=e(o))==null?void 0:k.capital[0]),1)]),s("li",bs,[fs,n(" "+l((y=e(o))==null?void 0:y.tld[0]),1)]),s("li",null,[Bs,(i(!0),c(h,null,D(Object.values((x=e(o))==null?void 0:x.currencies),(d,Ns)=>(i(),c(h,null,[n(l(` ${d.name} `),1)],64))),256))]),s("li",null,[ks,n(" "+l(Object.values((w=e(o))==null?void 0:w.languages).join(", ")),1)])]),(C=e(o))!=null&&C.borders.length?(i(),c("div",ys,[xs,(i(!0),c(h,null,D((N=e(o))==null?void 0:N.borders,d=>(i(),P(e(z),{to:`/${d}`,class:"details__borders"},{default:q(()=>[n(l(j(d)),1)]),_:2},1032,["to"]))),256))])):G("",!0)])])])):(i(),c("div",J,ls))}}},Ss=F(ws,[["__scopeId","data-v-406f1db6"]]);export{Ss as default};