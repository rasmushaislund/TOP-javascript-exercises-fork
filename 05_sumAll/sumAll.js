





const sumAll = function(a, b) {
    if (typeof a !== "number" || 
    typeof b !== "number" ||
    a < 0 ||
    b < 0) return "ERROR";
    let sum = 0;
    if (a <= b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    } else if (a > b) {
        for (let j = b; j <= a; j++) {
            sum += j;
        }
    }
    console.log(sum);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
