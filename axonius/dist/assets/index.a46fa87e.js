import{o as d,c as u,a as i,w as a,r as p,b as o,t as _,d as f}from"./__federation_expose_Card.6a87087b.js";import m from"./__federation_expose_Dashboard.23697113.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const h={class:"axonius-app"},v={class:"center error space-up"},y=o("div",{class:"axonius-top-bar"}," Axonius App (Vue on Vite) ",-1),g={class:"axonius-main"},x={class:"axonius-side-bar-panel"},b={class:"axonius-side-bar"},A={class:"axonius-content"},L=o("div",{class:"space-up"}," Loading please wait ... ",-1),I={__name:"App",setup(l){const s={props:["title","info"],template:`
    <div class="item">
        <div class="title">
            {{title}}
        </div>
        <div class="code info">
            {{info}}
        </div>
    </div>
    `};return(c,n)=>{const e=p("SuspenseWithErrors");return d(),u("div",h,[i(e,null,{error:a(t=>[o("p",v,_(t.error),1)]),default:a(()=>[y,o("div",g,[o("div",x,[o("div",b,[i(s,{title:"Menu Item 1"}),i(s,{title:"Menu Item 2"}),i(s,{title:"Menu Item 3"})])]),o("div",A,[i(m)])])]),fallback:a(()=>[L]),_:1})])}}};f(I).mount("#app");
