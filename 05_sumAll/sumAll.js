const sumAll = function (min, max) {
    //returns ERROR with negative numbers
    if (min < 0 || max < 0) return 'ERROR';


    // returns ERROR with non-number parameters
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';


    // works with larger number first
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
