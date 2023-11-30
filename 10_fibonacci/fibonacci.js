const fibonacci = function(arg) {
    if(arg < 3) {
        if(arg > 0) {
            return 1;
        } else {
            return "OOPS";
        }
    } else {
        return fibonacci(arg - 1) + fibonacci(arg - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
