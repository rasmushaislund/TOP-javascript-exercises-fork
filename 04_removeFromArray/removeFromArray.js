





const removeFromArray = function(newArray, ...args) {
    let myArray = [];
    loopArgsArray:
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < newArray.length; j++) {
            if (args[i] === newArray[j]) {
                myArray = newArray.splice(j, 1);
                myArray = newArray;
                //console.log(myArray);  
            } else if (args[i] !== newArray[j]) {
                myArray = newArray;
                //console.log(myArray);
            }  
        }
    }
    return myArray;
};



// Do not edit below this line
module.exports = removeFromArray;
