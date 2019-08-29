/**
 * This file is not working as intended please vistit
 * service worker documentation for more info and how you can make it work for you
 */
self.addEventListener('fetch', (event) => {
    //use the default fetch handler
    console.log(`fetching ${event.request.url}`)
    return fetch(event.request.url)
})

self.addEventListener('install', (event) => {
    console.log('New service worker activated')
    self.skipWaiting()
})