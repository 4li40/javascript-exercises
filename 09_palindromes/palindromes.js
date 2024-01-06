const palindromes = function (string) {
    let lowercase = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reverse = lowercase.split("").reverse().join("");
    return reverse === lowercase;
};

// Do not edit below this line
module.exports = palindromes;
