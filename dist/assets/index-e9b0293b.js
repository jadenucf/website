(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=[{name:"Artboard",blob:"Instantly support hundreds of integrations compatible  turn them on with one click.",src:"/artboard1.png",list:["Easy, intuitive prototyping","Shared Libraries, styles and components","Control over color profiles"]},{name:"Artboard",blob:"Design and develop with other creative students",src:"/artboard2.png",list:["Solo design or real-time collaboration","Offline and local file support","Store and sync your work","Share feedback in the app","Distribute Design Systems"]},{name:"Artboard",blob:"Instantly support hundreds of integrations compatible  turn them on with one click.",src:"/artboard3.png",list:["Super-fast performance","Optimized for Apple Silicon","Drag and drop between apps"]}],n=a.map((o,s)=>`          
  <div class="w-full pb-16 border-gray-100 border-b-2 ${s!==0&&"mt-16"}">
    <p class="text-gary-100 text-sm mb-4">${o.name} ${s+1}</p>
    <div class="w-full justify-between flex flex-col gap-8 md:flex-row md:gap-0">
      <div>
        <div class="h-20 max-w-md rounded-xl border-gary-100 bg-white shadow-md md:col-span-1">
          <div class="w-full p-4">
            <p class="text-gary-100 text-lg">${o.blob}</p>
          </div>
        </div>
        <div class="mt-8">
          ${o.list.map(r=>`
            <div class="flex">

            <svg class="stroke-icon-100 w-6 h-6 "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-icon-100 text-lg font-medium ml-2 mb-4">${r}</p>
            </div>
          `).join("")}
        </div>
      </div>
      <div>
        <img class="rounded" src=${o.src}/> 
      </div>
    </div>



  </div>
  `).join(""),d=`  <div class="h-screen w-full">
<div class="fixed top-0 w-full bg-white/0 z-30 transition-all">
<div class="fixed top-0 w-full border-b border-gray-200 bg-white/50 backdrop-blur-xl z-30 transition-all">
  <div class="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
    <a class="flex items-center font-display text-2xl" href="/">
      <img src="./icon1.png"/>
      <p class="text-icon-100 font-medium">website.</p>
    </a>
    <div>
      <button class="rounded-full border border-black bg-icon-100 p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black">Sign In</button>
    </div>
  </div>
</div>
</div>

<main class="w-full py-32">
  <div class="mx-5 max-w-screen-xl xl:mx-auto">
    <h1 class="text-icon-100 text-7xl font-bold mb-4">Find. Connect. Create.</h1>
    <p class="max-w-3xl text-xl text-gary-100 ">
      website is the platform that helps students connect with other students to build projects and create organizations.
    </p>
    <div class="mt-16 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 md:grid-cols-3 xl:px-0">
      <div class="relative col-span-1 h-80 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md md:col-span-2">
      <div class="w-full p-4">
        <img class="mb-2"src="./icon7.png"/>
        <h2 class="text-icon-100 text-2xl font-medium	mb-2">Set a goal</h2>
        <p class="text-gary-100 text-lg">  Creating a goal whether that be a small project or a massive enterprise is the first step.</p>
      </div>
      </div>
      <div class="relative col-span-1 h-80 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md md:col-span-1">
        <div class="w-full p-4">
          <img class="mb-2"src="./icon2.png"/>
          <h2 class="text-icon-100 text-2xl font-medium	mb-2">Converse</h2>
          <p class="text-gary-100 text-lg"> Start a dialogue with other students.</p>
        </div>
      </div>
      <div class="relative col-span-1 h-80 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md md:col-span-1">
        <div class="w-full p-4">
          <img class="mb-2"src="./icon4.png"/>
          <h2 class="text-icon-100 text-2xl font-medium	mb-2">Common Ground</h2>
          <p class="text-gary-100 text-lg"> Find some common ground between a set of ideas.</p>
        </div>
      </div>
      <div class="relative col-span-1 h-80 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md md:col-span-1">
        <div class="w-full p-4">
          <img class="mb-2"src="./icon8.png"/>
          <h2 class="text-icon-100 text-2xl font-medium	mb-2">Events</h2>
          <p class="text-gary-100 text-lg">  Plan events that brings the community together.</p>
        </div>
      </div>
      <div class="relative col-span-1 h-80 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md md:col-span-1">
        <div class="w-full p-4">
          <img class="w-12 h-12 mb-2" src="./icon5.png"/>
          <h2 class="text-icon-100 text-2xl font-medium	mb-2">Connect</h2>
          <p class="text-gary-100 text-lg"> Form a community with students across the world.</p>
        </div>
      </div>
    </div>
    <div class="mt-24">
      <h1 class="text-icon-100 text-3xl	 font-bold mb-4">Mobile platforming made easier</h1>

      <div class="mt-8">
        ${n}
      </div>

    </div>
  </div>
</main>
</div>`;document.querySelector("#app").innerHTML=`
  ${d}
`;
