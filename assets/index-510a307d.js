import{g as x}from"./index-63b0c82a.js";import{d as g,o,c as n,e as p,F as P,f as S,w,a as e,t as _,h as u,i as z,j as k,u as N,R as L,k as R,_ as h,l as b,m as V,n as A,q as M,s as y,p as B,b as O}from"./index-60851674.js";const D={class:"product-list"},E={key:0,class:"empty-results display-center"},F=["onClick"],j=["src","alt"],H={class:"product-name"},T={class:"title"},U={class:"clew-price"},Y=R('<div class="actions" data-v-d4b60510><ul class="add-to-links" data-v-d4b60510></ul></div><div class="" data-v-d4b60510></div><div class="product-sale-icon" data-v-d4b60510><span class="default" data-v-d4b60510> Free AU Shipping </span></div>',3),q=g({__name:"products",props:{products:{}},setup(i){const r=t=>{alert("click on "+t.title)};return(t,d)=>(o(),n("div",D,[t.products.length?p("",!0):(o(),n("div",E," please try again! ")),(o(!0),n(P,null,S(t.products,a=>(o(),n("div",{key:a.entity_id,class:"product-unit",onClick:w(c=>r(a),["stop"])},[e("img",{src:a.gallery[0]||"",width:"190",height:"190",alt:a.title},null,8,j),e("h4",H,[e("div",T,_(a.title),1),e("div",U,[u(N(L),{to:"/Login"},{default:z(()=>[k("Login for More Details")]),_:1})])]),Y],8,F))),128))]))}});const W=h(q,[["__scopeId","data-v-d4b60510"]]),G={class:"pagination display-center"},J={class:"info"},K={key:0,class:"control"},Q={class:"btn disabled"},X=g({__name:"pagination",props:{current:{},size:{},total:{},pages:{}},emits:["change"],setup(i,{emit:r}){const t=i,d=b(()=>t.current*t.size+1),a=b(()=>d.value+Math.min(t.total,d.value+t.size)),c=s=>{r("change",s)};return(s,l)=>(o(),n("div",G,[e("div",J," Items "+_(d.value)+" to "+_(a.value)+" of "+_(s.total)+" total ",1),s.total?(o(),n("div",K,[s.current>1?(o(),n("button",{key:0,class:"left btn",onClick:l[0]||(l[0]=v=>c(s.current-1))},"prev")):p("",!0),e("button",Q,_(s.current),1),s.current<s.pages?(o(),n("button",{key:1,class:"next btn",onClick:l[1]||(l[1]=v=>c(s.current+1))},"next")):p("",!0)])):p("",!0)]))}});const f=h(X,[["__scopeId","data-v-96e9b2c3"]]),m=i=>(B("data-v-ef0d0b59"),i=i(),O(),i),Z={class:"content-box"},tt=m(()=>e("div",{class:"breadcrumbs"},[k(" Home "),e("span",{class:"current-path"},"/ New Arrivals")],-1)),et={class:"display-center container-box"},st=m(()=>e("div",{class:"left-part"},[e("div",{class:"nav display-center"},"SHOP BY"),e("div",{class:"nav display-center"},"COMPARE PRODUCTS"),e("div",{class:"block-compare"},"You have no items to compare.")],-1)),at={class:"right-part"},ot=m(()=>e("h1",{class:"category-title"},"NEW ARRIVALS",-1)),nt=g({__name:"index",setup(i){const r=V([]),t=A({current:1,size:16,total:0,pages:0}),d=async(c,s)=>{const{result:l,total:v,total_pages:$,current_page:C,page_size:I}=await x({page_no:c,limit:s});r.value=l,Object.assign(t,{current:C,size:I,total:v,pages:$})},a=c=>d(c,t.size);return M(()=>d(t.current,t.size)),(c,s)=>(o(),n("div",Z,[tt,e("div",et,[st,e("div",at,[u(f,y(t,{onChange:a}),null,16),ot,u(W,{products:r.value},null,8,["products"]),u(f,y(t,{onChange:a}),null,16)])])]))}});const dt=h(nt,[["__scopeId","data-v-ef0d0b59"]]);export{dt as default};
