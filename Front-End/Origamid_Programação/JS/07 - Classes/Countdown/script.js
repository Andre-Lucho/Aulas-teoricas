import Countdown from "./countdown.js";

const diasParaoNatal = new Countdown();

console.log(diasParaoNatal);
diasParaoNatal.futureDate = "10 September 2024 00:01";
console.log(diasParaoNatal.futureDate);
console.log(diasParaoNatal._futureDate);

console.log(diasParaoNatal._daysTo);
console.log(diasParaoNatal._total);

// '24 December 2024 23:59:59 GMT-0300'
