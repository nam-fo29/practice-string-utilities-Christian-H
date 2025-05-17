function capitalize(str) {
    if (!str) {
        return ("Nothing to capitalize");
    } else {
        const firstCharOfStr = str.slice(0, 1);
        const upperStr = str.replace(firstCharOfStr, firstCharOfStr.toUpperCase());
        return upperStr
    }
};

function reverse(str) {
    if (!str) {
        return ("Nothing to reverse");
    } else {
        const reverseStr = str.split("").reverse().join("");
        return reverseStr
    }
};

function contains(str, substr) {
    if (!str || !substr) {
        return "Not a valid string"
    }
   return str.includes(substr);
};

module.exports = {capitalize, reverse, contains};