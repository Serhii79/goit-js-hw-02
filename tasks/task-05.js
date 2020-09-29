function checkForSpam(str) {
  "use strict";
  // Write code under this line
  const string = str.toLowerCase();
  const blackWord1 = "spam";
  const blackWord2 = "sale";

  return string.includes(blackWord1) || string.includes(blackWord2)
    ? true
    : false;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
