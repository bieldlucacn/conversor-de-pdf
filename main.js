window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('sw.js');
    }
  

window.addEventListener('DOMContentLoaded', () => {
    const parsedUrl = new URL(window.location);
    // searchParams.get() will properly handle decoding the values.
    console.log('OK')
    console.log('Title shared: ' + parsedUrl.searchParams.get('title'));
    console.log('Text shared: ' + parsedUrl.searchParams.get('text'));
    console.log('URL shared: ' + parsedUrl.searchParams.get('url'));
  });
}