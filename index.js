import{a as f,S as d,i as m}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const p="53408779-ee8ac1d107b84f4a01a68d938",y="https://pixabay.com/api/";async function h(e){const r=new URLSearchParams({key:p,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"});try{return(await f.get(y,{params:r})).data}catch{throw new Error("Failed to fetch images from Pixabay API.")}}const u=document.querySelector(".gallery"),n=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(e){return`
        <li class="gallery-item">
            <a href="${e.largeImageURL}" class="gallery-link" alt="${e.tags}">
                <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-image">
            </a>
            <div class="info-box">
                <p class="info-item"><b>Likes</b> ${e.likes}</p>
                <p class="info-item"><b>Views</b> ${e.views}</p>
                <p class="info-item"><b>Comments</b> ${e.comments}</p>
                <p class="info-item"><b>Downloads</b> ${e.downloads}</p>
            </div>
        </li>
    `}function L(e){const r=e.map(b).join("");u.insertAdjacentHTML("beforeend",r),g.refresh()}function w(){u.innerHTML=""}function E(){n&&n.classList.remove("is-hidden")}function P(){n&&n.classList.add("is-hidden")}const l=document.querySelector(".form"),S=l.elements["search-text"];function c(e,r="red"){m.error({title:"Error",message:e,position:"topRight",backgroundColor:r})}async function v(e){e.preventDefault();const r=S.value.trim();if(r===""){c("Please enter a search query!","#FFA000");return}w(),E();try{const a=(await h(r)).hits;a.length===0?c("Sorry, there are no images matching your search query. Please try again!","#EF4040"):L(a)}catch(s){c("Something went wrong. Please try again later.","#EF4040"),console.error(s)}finally{P(),l.reset()}}l.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
