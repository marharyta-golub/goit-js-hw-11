import{a as u,S as p,i as n}from"./assets/vendor-D1AWmRWP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function m(a){const t="55633968-bd2915ca3a52bf3ac108856c5",s="https://pixabay.com/api/",o={key:t,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(s,{params:o})}const i={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},d=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(a){const t=a.map(({webformatURL:s,largeImageURL:o,tags:e,likes:r,views:l,comments:c,downloads:f})=>`
   <li class="gallery-item">
    <a class="gallery-link" href="${o}">
      <img class="gallery-image" src="${s}" alt="${e}" />
    </a>
    <ul class="info">
      <li class="info-item">
        <p class="info-label">Likes</p>
        <p class="info-value">${r}</p>
      </li>
      <li class="info-item">
        <p class="info-label">Views</p>
        <p class="info-value">${l}</p>
      </li>
      <li class="info-item">
        <p class="info-label">Comments</p>
        <p class="info-value">${c}</p>
      </li>
      <li class="info-item">
        <p class="info-label">Downloads</p>
        <p class="info-value">${f}</p>
      </li>
    </ul>
  </li>
  `).join("");i.gallery.innerHTML=t,d.refresh()}function y(){i.gallery.innerHTML=""}function h(){i.loader.classList.remove("is-hidden")}function L(){i.loader.classList.add("is-hidden")}i.form=document.querySelector(".form");i.form.addEventListener("submit",a=>{a.preventDefault();const t=a.currentTarget.elements["search-text"].value.trim();if(!t){n.error({message:"Please enter a search query!",position:"topRight"});return}y(),h(),m(t).then(s=>{const o=s.data;if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(o.hits)}).catch(s=>{console.error(s),n.error({message:"Error fetching images!"})}).finally(()=>{L(),i.form.reset()})});
//# sourceMappingURL=index.js.map
