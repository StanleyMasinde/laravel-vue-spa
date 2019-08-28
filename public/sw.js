self.addEventListener('fetch', (event) => {
    //use the default fetch handler
    console.log('Fetch is not being done by the service worker')
    return;
})

self.addEventListener('install', (event) => {
    console.log('New service worker activated')
    self.skipWaiting()
})