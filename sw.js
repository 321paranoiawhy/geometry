if(!self.define){let n,l={};const e=(e,s)=>(e=new URL(e+".js",s).href,l[e]||new Promise((l=>{if("document"in self){const n=document.createElement("script");n.src=e,n.onload=l,document.head.appendChild(n)}else n=e,importScripts(e),l()})).then((()=>{let n=l[e];if(!n)throw new Error(`Module ${e} didn’t register its module`);return n})));self.define=(s,u)=>{const i=n||("document"in self?document.currentScript.src:"")||location.href;if(l[i])return;let r={};const o=n=>e(n,i),c={module:{uri:i},exports:r,require:o};l[i]=Promise.all(s.map((n=>c[n]||o(n)))).then((n=>(u(...n),r)))}}define(["./workbox-f2ed63d0"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_nuxt/3h1Dzi-l.js",revision:null},{url:"_nuxt/3J_R8SFb.js",revision:null},{url:"_nuxt/BaL94qog.js",revision:null},{url:"_nuxt/BbGlz6no.js",revision:null},{url:"_nuxt/BKc2-MeY.js",revision:null},{url:"_nuxt/Bw8VaksQ.js",revision:null},{url:"_nuxt/BzH-3BFJ.js",revision:null},{url:"_nuxt/C13j5G45.js",revision:null},{url:"_nuxt/canvas2svg.CKDl05ik.css",revision:null},{url:"_nuxt/CH5RqSh3.js",revision:null},{url:"_nuxt/Ck50z2ts.js",revision:null},{url:"_nuxt/CPGSqlyM.js",revision:null},{url:"_nuxt/custom-circle.DKhh95Dg.css",revision:null},{url:"_nuxt/CXio1x9a.js",revision:null},{url:"_nuxt/CzcdER0_.js",revision:null},{url:"_nuxt/D32xffEl.js",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/D6tB5gx5.js",revision:null},{url:"_nuxt/DcuUOxds.js",revision:null},{url:"_nuxt/DETYKV5o.js",revision:null},{url:"_nuxt/DlAUqK2U.js",revision:null},{url:"_nuxt/Ds_-Ua9Z.js",revision:null},{url:"_nuxt/el-switch.LwFcPNDh.css",revision:null},{url:"_nuxt/entry.CyK3g5Oo.css",revision:null},{url:"_nuxt/error-404.I9UGCG4-.css",revision:null},{url:"_nuxt/error-500.CyY_XNPK.css",revision:null},{url:"_nuxt/index.DyYjJDFm.css",revision:null},{url:"_nuxt/playground.Dfh4yJXW.css",revision:null},{url:"_nuxt/playground.OJKsDfde.css",revision:null},{url:"_nuxt/PWb3zr-J.js",revision:null},{url:"_nuxt/regular-polygon.CE-JME4M.css",revision:null},{url:"_nuxt/sFjlF8TP.js",revision:null},{url:"_nuxt/TTcn2SHX.js",revision:null},{url:"_nuxt/W7fWJJKc.js",revision:null},{url:"_nuxt/ZVz-vYea.js",revision:null},{url:"200",revision:"34bd85f30ce9040b42fe786b2cf053d0"},{url:"404",revision:"34bd85f30ce9040b42fe786b2cf053d0"},{url:"apple-touch-icon.png",revision:"7af7254d448992daf0f665380021b19f"},{url:"circle/playground",revision:"7c56c3a08f5706c1ceb8ac0251dc6f59"},{url:"circle/showcase",revision:"1a638b2c87323af7e6009771dae94878"},{url:"clock",revision:"85f73648d010ae3b5a341f6666ffae8c"},{url:"favicon.ico",revision:"77247dda2205ca744ed87e14fc7f7dfa"},{url:"/geometry/",revision:"a04aa6641c9b4c6666a376a7b636ad85"},{url:"maskable-icon.png",revision:"f1575b3df98db81ab80f5109abeded64"},{url:"nuxt.svg",revision:"b0d2bf20c6507a57102f081dd6291526"},{url:"pwa-192x192.png",revision:"bf7cfd2ea70c9599888561437703115a"},{url:"pwa-512x512.png",revision:"0aba0a96ed3d17bafed2f607f7e57037"},{url:"regular-polygon/playground",revision:"dd91f499593664efc20500e0eba83a0f"},{url:"regular-polygon/showcase",revision:"affc8104818fd5da6fd2f7f4963c33e1"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"vite.png",revision:"a148cc221d43294c514678fed69c6626"},{url:"_nuxt/builds/latest.json",revision:"fc2eac101328d89fd9b73b852c017c72"},{url:"_nuxt/builds/meta/610fb453-965b-44c4-ba78-92f75c9c8daa.json",revision:null},{url:"manifest.webmanifest",revision:"e22e320e4944eebcc150f074c493c45d"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/"),{denylist:[/^\/api\//]})),n.registerRoute(/^https:\/\/fonts.googleapis.com\/.*/i,new n.CacheFirst({cacheName:"google-fonts-cache",plugins:[new n.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new n.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),n.registerRoute(/^https:\/\/fonts.gstatic.com\/.*/i,new n.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new n.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new n.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
