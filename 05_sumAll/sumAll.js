const sumAll = function(start, end) {
    let sum = 0;
    if(start>end) {[start,end]=[end,start];}
    if(!Number.isInteger(start) || !Number.isInteger(end) || start<0 || end<0) {return "ERROR";}
    for(i=start; i<end+1; i++) {sum += i;}
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
