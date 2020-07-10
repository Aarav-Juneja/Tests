// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

// Cookies
// create
document.cookie = "username=Aarav Juneja; expires=Sat, 6 Jan 2029 12:00:00 UTC; path=/"
// read all
var allCookies = document.cookie
