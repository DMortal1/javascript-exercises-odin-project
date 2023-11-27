const repeatString = function(stringRepeat, numTimes) {
    let output = "";
    for(let i=0; i<numTimes; i++) {
        output += stringRepeat;
    }
    if(numTimes<0) {output="ERROR";}
    return output;
};

// Do not edit below this line
module.exports = repeatString;
