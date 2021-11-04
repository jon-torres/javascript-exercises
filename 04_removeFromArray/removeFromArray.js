const removeFromArray = function (...num) {
    const arr = num[0];
    return arr.filter((element) => !num.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
