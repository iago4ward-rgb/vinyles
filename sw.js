/* Service worker minimal : nécessaire à l'installation de l'appli, aucune mise en cache
   (les données vivent dans Google Drive ; la page est toujours la dernière version publiée). */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
