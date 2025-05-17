const stringUtils = require("./stringUtils");

//Testing capitalize(str) function:

console.log("\nTesting capitalize(str) function:\n");
console.log(stringUtils.capitalize("hello"));
console.log(stringUtils.capitalize());
console.log(stringUtils.capitalize("coding is fun!"));

//Testing reverse(str) function:

console.log("\nTesting reverse(str) function:\n");
console.log(stringUtils.reverse("hello"));
console.log(stringUtils.reverse());
console.log(stringUtils.reverse("Coding is fun!"));

//Testing contains(str, substr) function:

console.log("\nTesting contains(str, substr) function:\n");
console.log(stringUtils.contains("hello", "ell"));
console.log(stringUtils.contains("hello", "d"));
console.log(stringUtils.contains());
console.log(stringUtils.contains("hello",));
console.log(stringUtils.contains("", "ell"));
console.log(stringUtils.contains("Coding is fun!", "fun"));