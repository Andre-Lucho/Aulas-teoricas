"use strict";
const link = document.getElementById('origamid');
if (link instanceof HTMLAnchorElement)
    link.href = link.href.replace('http://', 'https://');
console.log(link);
// ou
// if (link instanceof HTMLAnchorElement) {
//   link.href = 'https://www.origamid.com';
// }
