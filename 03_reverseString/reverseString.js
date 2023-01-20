


const reverseString = function(word) {
    if (word === "") return "";
    let string = "";
    let split = word.split("");
    let splitReverse = split.reverse();
    for (let i = 0; i < splitReverse.length; i++) {
        string += splitReverse[i]
    }
    return string;
}



// Do not edit below this line
module.exports = reverseString;
