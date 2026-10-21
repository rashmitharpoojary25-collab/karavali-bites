var C="kb-v2",F=["./","index.html","manifest.json","logo.png","icon-192.png","icon-512.png","https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return Promise.all(F.map(function(u){return c.add(u).catch(function(){})}))}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(function(r){var k=r.clone();caches.open(C).then(function(c){c.put(e.request,k)}).catch(function(){});return r}).catch(function(){return caches.match(e.request).then(function(m){return m||caches.match("index.html")})}))});
